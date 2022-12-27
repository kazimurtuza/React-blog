import "../../style/Container.css";

const Container = (props) => {
  return (
    <div className="containerWroper">
      <div className="container">{props.children}</div>;
    </div>
  ); 
};
export default Container;
