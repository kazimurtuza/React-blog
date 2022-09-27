import TopNavBar from "./TopNavBar";
const PageHeaderFooter = (props) => {
  return (
    <>
      <TopNavBar />
      <>{props.children}</>
    </>
  );
};
export default PageHeaderFooter;
