import { useContext } from "react";
import EmployeAdd from "./app/presentation/components/EmployeAdd/EmployeAdd";
import EmployeChart from "./app/presentation/components/EmployeChart/EmployeChart";
import EmployeList from "./app/presentation/components/EmployeList/EmployeList";
import { SocketContext } from "./app/presentation/context/SocketContext";

function HomePage() {
  const { online } = useContext(SocketContext);

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
        <div className="row justify-content-center my-3">
          <div className="col-md-8">
            <EmployeChart />
          </div>
        </div>
        <div className="row">
          <div className=" col-md-8">
            <EmployeList />
          </div>
          <div className=" col-md-4">
            <EmployeAdd />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
