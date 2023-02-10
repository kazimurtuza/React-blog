import {
  BlogCard,
  Cardbody,
  Cardfooter,
  Name,
  Date,
  CardTitle,
  ImageTitleDiv,
  ImageDiv,
  TitleDiv,
} from "../../style/BlogCardSmallWithoutImage.style";
import { useStateContext } from "../../contexts/contextProvider";
import { useNavigate } from "react-router-dom";
const BlogCardSmallWithoutImage = (props) => {
  const navigate = useNavigate();
  const { apiBaseUrl } = useStateContext();

  const selecBlog = (id) => {
    props.selectBlog(id);
  };
  const data = {
    id: props.data.id,
    image: props.data.image,
    title: props.data.title,
    blogger: props.data.bloggerInfo.name,
    publish_time: props.data.publish_time,
  };
  const active =
    props.activeId === data.id ? { borderLeftColor: "#084dfc" } : {};
  const activeText = props.activeId === data.id ? { color: "#084dfc" } : {};
  return (
    <>
      <BlogCard style={active} onClick={() => selecBlog(data.id)}>
        <Cardbody>
          <ImageTitleDiv>
            <ImageDiv>
              <img width={"100px"} src={`${apiBaseUrl}${data.image}`} alt="" />
            </ImageDiv>
            <TitleDiv>
              <span style={activeText}>
                {data.title.length > 39
                  ? data.title.slice(0, 39) + "..."
                  : data.title}
              </span>
              <br />
              <Date>{data.publish_time} 1 min</Date>
            </TitleDiv>
          </ImageTitleDiv>
        </Cardbody>
      </BlogCard>
    </>
  );
};
export default BlogCardSmallWithoutImage;
