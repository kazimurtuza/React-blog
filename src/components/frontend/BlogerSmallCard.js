import {
  Cardstyle,
  Imagediv,
  Bodydiv,
  Roundimgdiv,
  Name,
  Work,
  Social,
} from "../../style/BloogerSmallCard.style";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import MenImg from "../../images/men.jpg";
const BlogerSmallCard = (props) => {
  const data = {
    name: props.data.name,
  };
  return (
    <>
      <Cardstyle>
        <Imagediv></Imagediv>
        <Roundimgdiv>
          <img width="100%" src={MenImg} alt="" />
        </Roundimgdiv>
        <Bodydiv>
          <Name>{data.name}</Name>
          <Work>Blogger</Work>
          <Social>
            <ul>
              <li>
                <BsFacebook />
              </li>
              <li>
                <BsTwitter />
              </li>
              <li>
                <BsLinkedin />
              </li>
            </ul>
          </Social>
        </Bodydiv>
      </Cardstyle>
    </>
  );
};

export default BlogerSmallCard;
