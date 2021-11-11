import { FormEvent, useContext } from "react";
import { config } from "../../../../config";
import { SocketContext } from "../../context/SocketContext";
import { useForm } from "../../hooks/useForm";

interface FormEmploye {
  name: string;
  occupation: string;
}
interface MyProps {}
const EmployeAdd = (props: MyProps) => {
  const { socket } = useContext(SocketContext);

  const { formValues, handlerChange, resetForm } = useForm<FormEmploye>({
    name: "",
    occupation: " ",
  });
  const { name, occupation } = formValues;

  const handlerSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name !== "" && occupation !== "") {
      socket?.emit(config.socket.events.add_employe, { name, occupation });

      resetForm();
    }
  };
  
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title my-2 text-center">Add Employee</h4>
          <form onSubmit={handlerSubmit}>
            <div className="form-group my-1">
              <label htmlFor="name">Name:</label>
              <input
                onChange={handlerChange}
                value={name}
                type="text"
                className="form-control"
                name="name"
                aria-describedby="helpId"
                placeholder="Insert Name:"
              />
            </div>
            <div className="form-group my-1">
              <label htmlFor="occupation">Occupation:</label>
              <input
                onChange={handlerChange}
                value={occupation}
                type="text"
                className="form-control"
                name="occupation"
                aria-describedby="helpId"
                placeholder="Insert Occupation:"
              />
            </div>

            <button
              type="submit"
              className="btn btn-success btn-lg btn-block w-100 my-2"
            >
              💾 Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EmployeAdd;
