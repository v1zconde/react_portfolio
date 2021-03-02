import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

class Navbar1 extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <>
        <Navbar color="inverse" light expand="md" className="bg-info">
          <NavbarBrand href="/">Home</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link
                  to="/"
                  className={
                    window.location.pathname === "/" ||
                    window.location.pathname === "/about"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  About
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to="/Portfolio"
                  className={
                    window.location.pathname === "/Portfolio"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Portfolio
                </Link>
              </NavItem>
              <NavItem>
                <a class="nav-link" href="./assets/img/resume.pdf" download>
                  Resume
                </a>
              </NavItem>
              <NavItem>
                <Link
                  to="/Contact"
                  className={
                    window.location.pathname === "/Contact"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Contact
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </>
    );
  }
}

export default Navbar1;
