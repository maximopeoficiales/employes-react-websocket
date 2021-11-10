interface MyProps {}
const defaultProps = {};
const EmployeList = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const {} = props;
  return (
    <div data-testid="EmployeList" className="">
      <h1>EmployeList component</h1>
    </div>
  );
};

export default EmployeList;
