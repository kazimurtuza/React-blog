import "../../style/BlogCardSmall.css";
import { useNavigate } from "react-router-dom";
const BlogCardSmall = () => {
  const navigate = useNavigate();
  const BlogDetails = () => {
    navigate("/blogdetails");
  };
  return (
    <>
      <div className="logcard2">
        <div>
          <img src="https://lh3.googleusercontent.com/-PcDDGh9C6Uk/UUoRYu8TmGI/AAAAAAAAADk/bVCVnUEott4/s1231/2.jpeg.jpg" />
        </div>
        <div className="blogBody">
          <span className="cardtag">Advertising</span>
          <h3 className="blogtitle" onClick={BlogDetails}>
            Click Markdown Language Sample Blog Post Styling
          </h3>
          <br />

          <h5>
            <span className="writername">kaz murtuza </span>
            <span className="date"> May 15, 2021</span>
          </h5>
        </div>
        {/* <div className="cardfooter">
          <div>
            <div className="imgcontainer">
              <img src="https://lh3.googleusercontent.com/-PcDDGh9C6Uk/UUoRYu8TmGI/AAAAAAAAADk/bVCVnUEott4/s1231/2.jpeg.jpg" />
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};
export default BlogCardSmall;
