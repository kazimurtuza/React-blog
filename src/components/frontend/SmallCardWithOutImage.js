import {
  BlogCard,
  Cardbody,
  Cardfooter,
  Name,
  Date,
  CardTitle,
} from "../../style/BlogCardSmallWithoutImage.style";
import { useNavigate } from "react-router-dom";
const BlogCardSmallWithoutImage = () => {
  const navigate = useNavigate();
  const BlogDetails = () => {
    navigate("/blogdetails");
  };
  return (
    <>
      <BlogCard>
        <Cardbody>
          <span onClick={BlogDetails}>
            Markdown is a lightweight markup language with
          </span>

          <Cardfooter>
            <Name>Kazi</Name>
            <Date>April 16, 2020 1 min</Date>
          </Cardfooter>
        </Cardbody>
      </BlogCard>
    </>
  );
};
export default BlogCardSmallWithoutImage;
