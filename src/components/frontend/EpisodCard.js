import {
  EposodeStyle,
  EpisodeLeft,
  EpisodeRight,
} from "../../style/Episode.style";
import { useStateContext } from "../../contexts/contextProvider";
import { useNavigate } from "react-router-dom";
import {
  EpisodeBlogNameStyle,
  EpisodeBlogtitleStyle,
  EpisodeImage,
  EpisodeTitle,
} from "../../style/EpisodeBlog.style";
import { Link } from "react-router-dom";
const EpisodeCard = (props) => {
  const { apiBaseUrl } = useStateContext();
  const navigate = useNavigate();

  const image = props.data.image;
  const title = props.data.title;
  const episode_list = props.data.episode_list;
  const id = props.data.id;
  return (
    <EposodeStyle>
      <EpisodeLeft>
        <div>
          {" "}
          <img src={`${apiBaseUrl}${image}`} />
        </div>

        <Link to={`/episode-blog-details/${id}/0`}>
          <EpisodeBlogNameStyle>
            {title.length > 50 ? title.slice(0, 50) + " ..." : title}
          </EpisodeBlogNameStyle>
        </Link>
      </EpisodeLeft>
      <EpisodeRight>
        <ul>
          {episode_list.map((data) => (
            <Link
              key={data.id}
              to={`/episode-blog-details/${data.blog_id_no}/${data.id}`}
            >
              <li>
                <span>{data.episode_no}</span>

                <EpisodeBlogtitleStyle>
                  <EpisodeImage>
                    <img height={"50px"} src={`${apiBaseUrl}${image}`} alt="" />
                  </EpisodeImage>
                  <EpisodeTitle>
                    {data.title.length > 50
                      ? data.title.slice(0, 45) + " ..."
                      : data.title}
                  </EpisodeTitle>
                </EpisodeBlogtitleStyle>
              </li>
            </Link>
          ))}
        </ul>
      </EpisodeRight>
    </EposodeStyle>
  );
};
export default EpisodeCard;
