import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav>
      <ul className="topnav">
        <li><a className="active" href="#">Create Draft Order</a></li>
        <li><a href="#">Edit Existing Order</a></li>
        <li><a href="#">List All Orders</a></li>
      </ul>
    </nav>
  )
}

export default NavBar;