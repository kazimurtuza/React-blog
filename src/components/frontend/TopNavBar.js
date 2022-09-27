import { MdPerson, MdSearch } from "react-icons/md";
import Logo from "../../images/logo2.png";
import SearcImput from "../element/Searchinput";
import { useDispatch } from "react-redux";
import { searchAction } from "../../store";
import { useNavigate } from "react-router-dom";

import { NavbarIcon } from "../../style/TopnavBar.style";

const TopNavBar = () => {
  const dispatch = useDispatch();
  const showsrcbar = () => {
    dispatch(searchAction.showSearch());
  };
  const navigate = useNavigate();

  const homePage = () => {
    navigate("/");
  };

  return (
    <>
      <header>
        {/* <img src={Imageget} /> */}
        <NavbarIcon onClick={homePage}>
          <img className="logo" width={60} height={60} src={Logo} alt="" />
        </NavbarIcon>
        <SearcImput>
          <input
            onClick={showsrcbar}
            className="srcinput"
            type="text"
            placeholder=" Discover news, articles and more..."
          />
        </SearcImput>

        <ul className="nave_linki">
          <li>
            <a href="">Service</a>
          </li>
          <li>
            <a href="">Project</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <a href="">
            login <MdPerson />
          </a>
        </ul>
      </header>
    </>
  );
};
export default TopNavBar;
