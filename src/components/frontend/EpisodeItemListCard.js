import {
  EpisodeListCard,
  EpisodeListCardWroper,
  EpisodeListCardUl,
  ItemNumber,
  EpisodeListTitle,
  EpisodeListTitlebottom,
  EpisodeListdiv,
  EpisodeLeft,
  EpisodeRight,
} from "./../../style/EpisodeItemListCard.style";
import { useStateContext } from "../../contexts/contextProvider";
const EpisodeItemListCard = (props) => {
  let { apiBaseUrl } = useStateContext();
  const selecBlog = (id) => {
    props.selectBlog(id);
  };
  return (
    <EpisodeListCard>
      <EpisodeListTitle>
        Episode List
        <br />
        <span>{props.data.length}</span>
      </EpisodeListTitle>
      <EpisodeListCardWroper>
        <EpisodeListCardUl>
          {props.data.map((data) => (
            <li key={data.id} onClick={() => selecBlog(data.id)}>
              <ItemNumber>{data.episode_no}</ItemNumber>
              <EpisodeListdiv>
                <EpisodeLeft>
                  <img src={`${apiBaseUrl}${data.image}`} alt="" />
                </EpisodeLeft>
                <EpisodeRight>
                  <span>{data.title}</span>
                </EpisodeRight>
              </EpisodeListdiv>
            </li>
          ))}
        </EpisodeListCardUl>
      </EpisodeListCardWroper>
      <EpisodeListTitlebottom></EpisodeListTitlebottom>
    </EpisodeListCard>
  );
};
export default EpisodeItemListCard;
