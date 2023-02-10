import TopNavBar from "./TopNavBar";
import ScrollableTabsButtonForce from "./../../frontendPages/categorybar";
const PageHeaderFooter = (props) => {
  return (
    <>
      <TopNavBar />

      <>{props.children}</>
    </>
  );
};
export default PageHeaderFooter;
