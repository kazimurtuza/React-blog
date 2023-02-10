import EpisodeCard from "./EpisodCard";
import { EposodeGrid } from "../../style/Episode.style";
import { useNavigate } from "react-router-dom";
import Sectionhead from "../element/SectionHead";
import { useEffect } from "react";
import axiosClient from "../../axios-client";
import { useState } from "react";
const EposodeBlogCardSection = (props) => {
  const navigate = useNavigate();
  const dataList = props.data ? props.data : [];
  const [episode, setEpisode] = useState(dataList);
  const episodeList = () => {
    navigate("/episode-list");
  };

  return (
    <div>
      <Sectionhead>
        <ul>
          <li>Episode</li>
          <li onClick={episodeList}>View More</li>
        </ul>
      </Sectionhead>
      <EposodeGrid>
        {dataList.map((data) => (
          <EpisodeCard key={data.id} data={data} />
        ))}
      </EposodeGrid>
    </div>
  );
};

export default EposodeBlogCardSection;
