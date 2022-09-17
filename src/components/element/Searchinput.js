import { MdPerson, MdSearch } from "react-icons/md";
const SearcImput = (props) => {
  return (
    <>
      <div className={`srcinputdiv ${props.classstyle}`}>
        {props.children}
        <span className="srcicon">
          <MdSearch />
        </span>
      </div>
    </>
  );
};
export default SearcImput;
