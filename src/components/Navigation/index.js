import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

export default function Navigation() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <Navbar fill variant="tabs" defaultActiveKey="/">
      <Navbar.Brand as={NavLink} to="/">
        NFT PLATFORM
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "100%" }} fill>
          <NavbarItem eventKey="link-1" path="/" linkText="DASHBOARD" />
          {token ? (
            <NavbarItem eventKey="link-2" path="/nfts/:id/buy" linkText="BUY" />
          ) : null}
          {token ? (
            <NavbarItem
              eventKey="link-3"
              path="/nfts/:id/sell"
              linkText="SELL"
            />
          ) : null}
          {loginLogoutControls}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

{
  /* <Nav fill variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>; */
}

{
  /* <Navbar fill justify variant="tab">
      <Navbar.Brand as={NavLink} to="/">
        NFT Marketplace
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav fill variant="tabs" defaultActiveKey="/">
          <Nav.Item>
            <Nav.Link
              eventKey="link-1"
              path="/"
              linkText="DASHBOARD"
            ></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link-2"
              path="/nfts/:id/buy"
              linkText="BUY"
            ></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link-3"
              path="/nfts/:id/sell"
              linkText="SELL"
            ></Nav.Link>
          </Nav.Item>
          {loginLogoutControls}
        </Nav>
      </Navbar.Collapse>
    </Navbar> */
}
