import { ChangeEvent, useContext, useEffect, useState } from "react";
import { config } from "../../../../config";
import { Employe } from "../../../domain/employe";
import { SocketContext } from "../../context/SocketContext";

interface MyProps {}
const EmployeList = (props: MyProps) => {
  const { socket } = useContext(SocketContext);
  const [employes, setEmployes] = useState<Employe[]>([]);

  useEffect(() => {
    socket?.on(config.socket.events.current_employes, (data: Employe[]) => {
      setEmployes(data);
    });
  }, [socket]);

  const handlerChangeName = (
    event: ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const newName = event.target.value;
    setEmployes((data) =>
      data.map((employe) => {
        if (employe.id === id) {
          employe.name = newName;
        }
        return employe;
      })
    );
  };

  const onLostChangeUpdateName = (id: string, name: string) => {
    socket?.emit(config.socket.events.update_name_employe, { id, name });
  };

  const handlerClickVote = (id: string) => {
    socket?.emit(config.socket.events.vote_employe, id);
  };

  const handlerDeleteEmploye = (id: string) => {
    socket?.emit(config.socket.events.delete_employe, id);
  };

  const createRows = () => {
    return employes.map((employe) => (
      <tr className="" key={employe.id}>
        <td>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => handlerClickVote(employe.id)}
          >
            +1
          </button>
        </td>
        <td>
          <input
            type="text"
            className="form-control form-control-sm"
            value={employe.name}
            onChange={(event) => handlerChangeName(event, employe.id)}
            onBlur={() => onLostChangeUpdateName(employe.id, employe.name)}
          />
        </td>
        <td>
          <h5>{employe.occupation}</h5>
        </td>
        <td>
          <h3>{employe.votes}</h3>
        </td>
        <td>
          <button
            onClick={() => handlerDeleteEmploye(employe.id)}
            className="btn btn-danger btn-sm"
          >
            ❌ Borrar
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <div data-testid="EmployeList" className="">
      {employes.length > 0 && (
        <table className="table text-center">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Occupation</th>
              <th>Votes</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{createRows()}</tbody>
        </table>
      )}
    </div>
  );
};

export default EmployeList;
