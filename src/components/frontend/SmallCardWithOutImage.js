import {
  BlogCard,
  Cardbody,
  Cardfooter,
  Name,
  Date,
  CardTitle,
} from "../../style/BlogCardSmallWithoutImage.style";
import { useNavigate } from "react-router-dom";
const BlogCardSmallWithoutImage = (props) => {
  const navigate = useNavigate();

  const selecBlog = (id) => {
    props.selectBlog(id);
  };
  const data = {
    id: props.data.id,
    title: props.data.title,
    blogger: props.data.bloggerInfo.name,
    publish_time: props.data.publish_time,
  };
  const active =
    props.activeId === data.id ? { borderLeftColor: "#084dfc" } : {};
  const activeText = props.activeId === data.id ? { color: "#084dfc" } : {};
  return (
    <>
      <BlogCard style={active}>
        <Cardbody>
          <span style={activeText} onClick={() => selecBlog(data.id)}>
            {data.title}
          </span>

          <Cardfooter>
            <Name>{data.blogger}</Name>
            <Date>{data.publish_time} 1 min</Date>
          </Cardfooter>
        </Cardbody>
      </BlogCard>
    </>
  );
};
export default BlogCardSmallWithoutImage;
