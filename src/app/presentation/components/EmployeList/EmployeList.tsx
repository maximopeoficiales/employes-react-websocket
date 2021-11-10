import { ChangeEvent, useEffect, useState } from "react";
import { Employe } from "../../../domain/employe";

interface MyProps {
  data: Employe[];
  voteEmployeById: (id: string) => void;
}
const EmployeList = (props: MyProps) => {
  const { data, voteEmployeById } = props;

  const [employes, setEmployes] = useState<Employe[]>([]);

  useEffect(() => {
    setEmployes(data);
  }, [data]);

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

  const onLostChange = (id: string, name: string) => {
    console.log(id, name);
    // TODO: emit event to server
  };

  const handlerClickVote = (id: string) => {
    voteEmployeById(id);
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
            onBlur={() => onLostChange(employe.id, employe.name)}
          />
        </td>
        <td>
          <h5>{employe.occupation}</h5>
        </td>
        <td>
          <h3>{employe.votes}</h3>
        </td>
        <td>
          <button className="btn btn-danger btn-sm">❌ Borrar</button>
        </td>
      </tr>
    ));
  };

  return (
    <div data-testid="EmployeList" className="">
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
    </div>
  );
};

export default EmployeList;
