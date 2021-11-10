import EmployeAdd from "app/presentation/components/EmployeAdd/EmployeAdd";
import EmployeList from "app/presentation/components/EmployeList/EmployeList";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="d-flex justify-content-end my-3 ">
          <p className="text-white">
            <b>Service Status:</b>
            <span className="badge bg-success mx-2">Online</span>
            {/* <span className="badge bg-danger mx-2">Oflline</span> */}
          </p>
        </div>
        <h1 className="my-4 text-center">Employes in Real Time</h1>

        <div className="row">
          <div className="col-md-8">
            <EmployeList />
          </div>
          <div className="col-md-4">
            <EmployeAdd />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
