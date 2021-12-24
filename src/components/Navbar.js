import "./navbar.css";

function Navbar() {
  return (
    <ul>
      <li>
        <a className="active" href="Home">
          Home
        </a>
      </li>
      <li>
        <a href="#AboutPage">About</a>
      </li>
    </ul>
  );
}
export default Navbar;
