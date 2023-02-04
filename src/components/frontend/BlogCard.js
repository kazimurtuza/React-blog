import "../../style/BlogCard.css";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../../contexts/contextProvider";
const BlogCard = (props) => {
  const { apiBaseUrl } = useStateContext();
  console.log(props.data);
  const image = props.data ? props.data.image : "";
  const title = props.data ? props.data.title : "";
  const publish_time = props.data ? props.data.publish_time : "";
  const category = props.data ? props.data.category_info.name : "";
  const bloggerName = props.data ? props.data.bloggerInfo.name : "";
  const blogId = props.data ? props.data.id : "";
  const details = props.data
    ? props.data.post_details.replace(/<[^>]*>/g, "").slice(0, 60)
    : "";

  const navigate = useNavigate();
  const blogerBlogList = () => {
    navigate("/bloger-blog-list");
  };
  return (
    <>
      <div className="logcard">
        <div>
          {" "}
          <img src={`${apiBaseUrl}${image}`} />
        </div>
        <div className="blogBody">
          <span className="cardtag">{category}</span>
          <Link to={`/blogdetails/${blogId}`}>
            <h3 className="blogtitle">{title}</h3>
          </Link>
          <p>{details} ...</p>
        </div>
        <div className="cardfooter">
          <div>
            <div className="imgcontainer" onClick={blogerBlogList}>
              <img src="https://lh3.googleusercontent.com/-PcDDGh9C6Uk/UUoRYu8TmGI/AAAAAAAAADk/bVCVnUEott4/s1231/2.jpeg.jpg" />
            </div>
          </div>
          <div className="personinfo">
            <h3>{bloggerName}</h3>
            <h5>{publish_time}</h5>
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogCard;
