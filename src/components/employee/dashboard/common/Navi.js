import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

const Navi = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="primary" dark expand="md">
        <NavbarBrand to="/">Yenikargo</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              {/*<NavLink href="/components/">Components</NavLink>*/}
            </NavItem>
            <NavItem>
              {/*<NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>*/}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;