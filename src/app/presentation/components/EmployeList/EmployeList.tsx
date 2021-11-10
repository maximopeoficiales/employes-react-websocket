interface MyProps {}
const EmployeList = (props: MyProps) => {
  // const {} = props;
  const createRows = () => {
    return (
      <tr className="">
        <td>
          <button className="btn btn-primary btn-sm">+1</button>
        </td>
        <td>
          <input type="text" className="form-control form-control-sm" />
        </td>
        <td>
          <h5>Programmer</h5>
        </td>
        <td>
          <h3>15</h3>
        </td>
        <td>
          <button className="btn btn-danger btn-sm">❌ Borrar</button>
        </td>
      </tr>
    );
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
