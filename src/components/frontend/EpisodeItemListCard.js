import {
  EpisodeListCard,
  EpisodeListCardWroper,
  EpisodeListCardUl,
  ItemNumber,
  EpisodeListTitle,
  EpisodeListTitlebottom,
} from "./../../style/EpisodeItemListCard.style";
const EpisodeItemListCard = () => {
  return (
    <EpisodeListCard>
      <EpisodeListTitle>
        Episode List
        <br />
        <span>70</span>
      </EpisodeListTitle>
      <EpisodeListCardWroper>
        <EpisodeListCardUl>
          <li>
            <ItemNumber>1</ItemNumber>
            <span>
              Markdown is a lightweight markup language with
              plain-text-formatting
            </span>
          </li>
          <li>
            <ItemNumber>2</ItemNumber>
            <span>
              Markdown is a lightweight markup language with
              plain-text-formatting
            </span>
          </li>
          <li>
            <ItemNumber>3</ItemNumber>
            <span>
              Markdown is a lightweight markup language with
              plain-text-formatting
            </span>
          </li>
          <li>
            <ItemNumber>4</ItemNumber>
            <span>
              Markdown is a lightweight markup language with
              plain-text-formatting
            </span>
          </li>
          <li>
            <ItemNumber>5</ItemNumber>
            <span>
              Markdown is a lightweight markup language with
              plain-text-formatting
            </span>
          </li>
          <li>
            <ItemNumber>6</ItemNumber>
            <span>
              Markdown is a lightweight markup language with
              plain-text-formatting
            </span>
          </li>
          <li>
            <ItemNumber>7</ItemNumber>
            <span>
              Markdown is a lightweight markup language with
              plain-text-formatting
            </span>
          </li>
        </EpisodeListCardUl>
      </EpisodeListCardWroper>
      <EpisodeListTitlebottom></EpisodeListTitlebottom>
    </EpisodeListCard>
  );
};
export default EpisodeItemListCard;
