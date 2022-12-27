import {
  EposodeStyle,
  EpisodeLeft,
  EpisodeRight,
} from "../../style/Episode.style";
import { useNavigate } from "react-router-dom";
import { EpisodeBlogNameStyle } from "../../style/EpisodeBlog.style";
const EpisodeCard = () => {
  const navigate = useNavigate();
  const episodeBlogDetail = () => {
    navigate("/episode-blog-details");
  };
  return (
    <EposodeStyle>
      <EpisodeLeft>
        <div>
          {" "}
          <img src="https://lh3.googleusercontent.com/-PcDDGh9C6Uk/UUoRYu8TmGI/AAAAAAAAADk/bVCVnUEott4/s1231/2.jpeg.jpg" />
        </div>

        <EpisodeBlogNameStyle onClick={episodeBlogDetail}>
          Markdown Language Sample Blog Post Styling
        </EpisodeBlogNameStyle>
      </EpisodeLeft>
      <EpisodeRight>
        <ul>
          <li>
            <span>1</span>
            <p> Markdown Language Sample Blog Post Styling</p>
          </li>
          <li>
            <span>100</span> Markdown Language Sample Blog Post Styling
          </li>
          <li>
            <span>30</span> Markdown Language Sample Blog Post Styling
          </li>
          <li>
            <span>4</span> Markdown Language Sample Blog Post Styling
          </li>
          <li>
            <span>5</span> Markdown Language Sample Blog Post Styling
          </li>
          <li>
            <span>6</span> Markdown Language Sample Blog Post Styling
          </li>
          <li>
            <span>1</span> Markdown Language Sample Blog Post Styling
          </li>
          <li>
            <span>1</span> Markdown Language Sample Blog Post Styling
          </li>
          <li>
            <span>1</span> Markdown Language Sample Blog Post Styling
          </li>
          <li>
            <span>1</span> Markdown Language Sample Blog Post Styling
          </li>
        </ul>
      </EpisodeRight>
    </EposodeStyle>
  );
};
export default EpisodeCard;
