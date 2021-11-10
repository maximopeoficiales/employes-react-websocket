interface MyProps {}
const EmployeAdd = (props: MyProps) => {
  // const {} = props;
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title my-2 text-center">Add Employee</h4>
          <form>
            <div className="form-group my-1">
              <label htmlFor="nametext">Name:</label>
              <input
                type="text"
                className="form-control"
                name="nametext"
                aria-describedby="helpId"
                placeholder="Insert Name:"
              />
            </div>
            <div className="form-group my-1">
              <label htmlFor="occupation">Occupation:</label>
              <input
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
