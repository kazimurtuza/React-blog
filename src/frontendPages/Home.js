import { useSelector, useDispatch } from "react-redux";
import SearchList from "./../components/frontend/SearchList";
import Topslider from "./../components/frontend/Topslider";
import HomeFirstSection from "./../components/frontend/HomeFirsSection";
import Container from "./../components/frontend/Container";
import PageHeaderFooter from "../components/frontend/PageHeaderFooter";

function Home() {
  const srclisShow = useSelector((state) => state.searchShow);
  return (
    <>
      {srclisShow ? <SearchList /> : ""}
      <PageHeaderFooter>
        <Container>
          <HomeFirstSection />
        </Container>
      </PageHeaderFooter>
    </>
  );
}

export default Home;
