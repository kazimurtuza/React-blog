import "../../style/BlogCardSmall.css";
import { useNavigate, Link } from "react-router-dom";
import { useStateContext } from "../../contexts/contextProvider";
import { useState } from "react";
const BlogCardSmall = (props) => {
  const postId = props.post ? props.post.id : "";
  const postTitle = props.post ? props.post.title : "";
  const postImg = props.post ? props.post.image : "";
  const category = props.post ? props.post.category_info.name : "";
  const bloggerName = props.post ? props.post.bloggerInfo.name : "";
  const publishTime = props.post ? props.post.publish_time : "";

  const { apiBaseUrl } = useStateContext();
  const navigate = useNavigate();
  const BlogDetails = () => {
    navigate("/blogdetails", { state: { value: "some value" } });
  };
  var styleset = {};
  if (props.left) {
    styleset = { marginLeft: "0px" };
  }
  return (
    <>
      <div className="logcard2" style={styleset}>
        <div className="imageDiv">
          <img src={`${apiBaseUrl}${postImg}`} />
        </div>
        <div className="blogBodysm">
          <span className="cardtag">{category}</span>
          {/* <Link to="/blogdetails/sdf">dgfdgdf</Link> */}
          <Link to={`/blogdetails/${postId}`}>
            <h3 className="blogtitle" onClick={BlogDetails}>
              {postTitle.slice(0, 45)} ...
            </h3>
          </Link>
          <br />

          <h5>
            <span className="writername">{bloggerName}</span>
            <span className="date">{publishTime}</span>
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
