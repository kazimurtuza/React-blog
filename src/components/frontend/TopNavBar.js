import { MdPerson, MdSearch } from "react-icons/md";
import Logo from "../../images/logo2.png";
import SearcImput from "../element/Searchinput";

const TopNavBar = () => {
  return (
    <>
      <header>
        {/* <img src={Imageget} /> */}
        <a href="">
          <img className="logo" width={60} height={60} src={Logo} alt="" />
        </a>
        <SearcImput>
          <input
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
