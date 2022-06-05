import styled from "styled-components";
import { Link } from "react-router-dom";
const Nav = styled.nav`
  height: 60px;
  width: 100%;
  background: blue;
  color: white;
  display: flex;
`;

export default function Navbar() {
  return (
    <Nav>
      <Link style={{ color: "white", marginRight: "10px" }} to={"/"}>
        <h1>Home</h1>
      </Link>
      <Link style={{ color: "white", marginRight: "10px" }} to={"/contact"}>
        <h1>Contact</h1>
      </Link>
      <Link style={{ color: "white", marginRight: "10px" }} to={"/faq"}>
        <h1>FAQ</h1>
      </Link>
    </Nav>
  );
  }