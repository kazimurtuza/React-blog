import TopNavBar from "./components/frontend/TopNavBar";
import { useSelector, useDispatch } from "react-redux";
import SearchList from "./components/frontend/SearchList";

function App() {
  const srclisShow = useSelector((state) => state.searchShow);
  return (
    <>
      {srclisShow ? <SearchList /> : ""}
      <TopNavBar />
    </>
  );
}

export default App;
