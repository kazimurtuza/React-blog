import EpisodeCard from "./EpisodCard";
import { EposodeGrid } from "../../style/Episode.style";
import { useNavigate } from "react-router-dom";
import Sectionhead from "../element/SectionHead";
const EposodeBlogCardSection = () => {
  const navigate = useNavigate();
  const episodeList = () => {
    navigate("/episode-list");
  };
  return (
    <div>
      <Sectionhead>
        <ul>
          <li>Techno</li>
          <li onClick={episodeList}>View More</li>
        </ul>
      </Sectionhead>
      <EposodeGrid>
        <EpisodeCard />
        <EpisodeCard />
        <EpisodeCard />
        <EpisodeCard />
      </EposodeGrid>
    </div>
  );
};

export default EposodeBlogCardSection;
