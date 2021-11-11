import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Employe } from "./app/domain/employe";
import EmployeAdd from "./app/presentation/components/EmployeAdd/EmployeAdd";
import EmployeList from "./app/presentation/components/EmployeList/EmployeList";
import { config } from "./config";

const connectSocketServer = () => {
  return io(config.socket.host_socket, { transports: ["websocket"] });
};
function App() {
  const [socket, setSocket] = useState(connectSocketServer());
  const [online, setOnline] = useState(false);
  const [employes, setEmployes] = useState<Employe[]>([]);

  useEffect(() => {
    setOnline(socket.connected);
  }, [socket]);

  useEffect(() => {
    socket.on("connect", () => {
      setOnline(true);
    });

    // return socket.disconnect();
  }, [socket]);

  useEffect(() => {
    socket.on("disconnect", () => {
      setOnline(false);
    });
  }, [socket]);

  useEffect(() => {
    socket.on(config.socket.events.current_employes, (data: Employe[]) => {
      setEmployes(data);
    });
  }, [socket]);

  const voteEmployeById = (id: string) => {
    socket.emit(config.socket.events.vote_employe, id);
  };

  const deleteEmployeById = (id: string) => {
    socket.emit(config.socket.events.delete_employe, id);
  };
  const updateEmployeById = (id: string, name: string) => {
    socket.emit(config.socket.events.update_name_employe, { id, name });
  };

  const addEmploye = (name: string, occupation: string) => {
    socket.emit(config.socket.events.add_employe, { name, occupation });
  };
  return (
    <div className="App">
      <div className="container">
        <div className="d-flex justify-content-end my-3 ">
          <p className="text-white">
            <b>Service Status:</b>
            {online ? (
              <span className="badge bg-success mx-2">Online</span>
            ) : (
              <span className="badge bg-danger mx-2">Oflline</span>
            )}
          </p>
        </div>
        <h1 className="my-4 text-center">Employes in Real Time</h1>

        <div className="row">
          <div className=" col-md-8">
            <EmployeList
              data={employes}
              voteEmployeById={voteEmployeById}
              deleteEmployeById={deleteEmployeById}
              updateEmployeById={updateEmployeById}
            />
          </div>
          <div className=" col-md-4">
            <EmployeAdd addEmploye={addEmploye}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
