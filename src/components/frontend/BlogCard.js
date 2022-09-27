import "../../style/BlogCard.css";
import { useNavigate } from "react-router-dom";
const BlogCard = () => {
  const navigate = useNavigate();
  const blogerBlogList = () => {
    navigate("/bloger-blog-list");
  };
  return (
    <>
      <div className="logcard">
        <div>
          <img src="https://lh3.googleusercontent.com/-PcDDGh9C6Uk/UUoRYu8TmGI/AAAAAAAAADk/bVCVnUEott4/s1231/2.jpeg.jpg" />
        </div>
        <div className="blogBody">
          <span className="cardtag">Advertising</span>
          <h3 className="blogtitle">
            Markdown Language Sample Blog Post Styling
          </h3>
          <br />
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
          </p>
        </div>
        <div className="cardfooter">
          <div>
            <div className="imgcontainer" onClick={blogerBlogList}>
              <img src="https://lh3.googleusercontent.com/-PcDDGh9C6Uk/UUoRYu8TmGI/AAAAAAAAADk/bVCVnUEott4/s1231/2.jpeg.jpg" />
            </div>
          </div>
          <div className="personinfo">
            <h3>kaz murtuza</h3>
            <h5>May 15, 2021</h5>
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogCard;
