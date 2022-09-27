import { Route, Routes } from "react-router-dom";
import Home from "./frontendPages/Home";
import BlogDetails from "./frontendPages/BlogDetails";
import LargeCardList from "./frontendPages/LargeCardLinst";
import EpisodeCardList from "./frontendPages/EpisodeCardList";
import SmallCardList from "./frontendPages/smallCardList";
import BlogerBlogList from "./frontendPages/BlogerBlogsList";
import { createGlobalStyle } from "styled-components";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogdetails" element={<BlogDetails />} />
        <Route path="/blog-list" element={<LargeCardList />} />
        <Route path="/episode-list" element={<EpisodeCardList />} />
        <Route path="/small-card-list" element={<SmallCardList />} />
        <Route path="/bloger-blog-list" element={<BlogerBlogList />} />
      </Routes>
    </>
  );
}

export default App;
