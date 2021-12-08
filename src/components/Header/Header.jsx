import "./Header.scss";

import NavBar from "./NavBar/NavBar"

const Header = () => {
  return (
    <header>
      <div className="top-fill"></div>

      <NavBar/>
    </header>
  )
}


export default Header;