import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="topnav">
      <nav role="full-horizontal">
        <ul>
          <li><a href="#">Create Draft Order</a></li>
          <li><a href="#">Edit Existing Order</a></li>
          <li><a href="#">List All Orders</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar;