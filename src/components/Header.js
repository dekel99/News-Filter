import "../styles/Header.css"
import DropDown from "./DropDown"
import DropDownCategory from "./DropDownCategory"
import Search from "./Search"
import logo from "../News-filter-logo.jpg"

function Header() {
    return (
        <div className="header">
            <a href={process.env.REACT_APP_URL}><img className="logo" src={logo}></img></a>
            <div className="filters">
                <h3 className="filters-title">מסננים</h3>
                <div className="dropdowns">
                    <DropDown />
                    <DropDownCategory />
                </div>
                <p className="or-text">או</p>
                <Search />
            </div>
        </div>
    )
}

export default Header
