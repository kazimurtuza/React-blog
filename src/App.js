import { Route, Routes } from "react-router-dom";
import Home from "./frontendPages/Home";
import BlogDetails from "./frontendPages/BlogDetails";
import LargeCardList from "./frontendPages/LargeCardLinst";
import EpisodeCardList from "./frontendPages/EpisodeCardList";
import SmallCardList from "./frontendPages/smallCardList";
import BlogerBlogList from "./frontendPages/BlogerBlogsList";
import EpisodeBlogDetails from "./frontendPages/EpisodeBlogDetails";
import HomePage from "./admin/pages/HomePage";
import CreateBlog from "./admin/pages/blogPost/CreateBlog";
import PostCategory from "./admin/pages/PostCategory";
import PostSubCategory from "./admin/pages/postSubcategory";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogdetails" element={<BlogDetails />} />
        <Route path="/blog-list" element={<LargeCardList />} />
        <Route path="/episode-list" element={<EpisodeCardList />} />
        <Route path="/small-card-list" element={<SmallCardList />} />
        <Route
          path="/episode-blog-details"
          element={<EpisodeBlogDetails />}
        ></Route>
        <Route path="/bloger-blog-list" element={<BlogerBlogList />} />
        <Route path="/admin" element={<HomePage />} />;
        <Route path="/admin/blog/create" element={<CreateBlog />} />;
        <Route path="/admin/blog/category" element={<PostCategory />} />;
        <Route path="/admin/blog/subcategory" element={<PostSubCategory />} />;
      </Routes>
    </>
  );
}

export default App;
