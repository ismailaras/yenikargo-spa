import React, { useState } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import logo_light from "../../assets/images/logo_light_x.svg";
import TrackPackage from "../employee/dashboard/packages/TrackPackage";
import ModalButton from "../toolbox/ModalButton";

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="primary" fixed="top" dark expand="md">
        <div className="container">
          <NavbarBrand href="/" style={{ padding: 0 }}>
            <img src={logo_light} alt="logo" width={150} />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/#about">Haqqımızda</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#prices">Qiymətlər</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#stations">Filiallar</NavLink>
              </NavItem>
            </Nav>
            <ModalButton
              buttonLabel="Bağlamanı izlə"
              header="Status dəyiş"
              key={3}
              size={"md"}
              outline
              buttonColor="light"
              body={<TrackPackage />}
            />
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Navi;
