import SearcImput from "../element/Searchinput";
import { AiFillCloseCircle } from "react-icons/ai";
import { searchAction } from "../../store";
import { useDispatch } from "react-redux";
const SearchList = () => {
  const dispatch = useDispatch();
  const closeSrclist = () => {
    dispatch(searchAction.coleSearch());
  };
  return (
    <>
      <div className="srclistblur">
        <span className="crossbtnstyle" onClick={closeSrclist}>
          <AiFillCloseCircle />
        </span>
        <div className="srclistinput">
          <SearcImput classstyle={"srcwidth"}>
            <input
              type="text"
              placeholder=" Discover news, articles and more..."
            />
          </SearcImput>

          <div className="srcresultdiv">
            <ul>
              <li>
                <a href=" ">sdfljsdlf</a>
                <h4>sdsdlfjlsdfldsfj</h4>
              </li>
              <li>
                <a>sdfljsdlf</a>
                <h4>sdsdlfjlsdfldsfj</h4>
              </li>
              <li>
                <a>sdfljsdlf</a>
                <h4>sdsdlfjlsdfldsfj</h4>
              </li>
              <li>
                <a>sdfljsdlf</a>
                <h4>sdsdlfjlsdfldsfj</h4>
              </li>
              <li>
                <a>sdfljsdlf</a>
                <h4>sdsdlfjlsdfldsfj</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchList;
