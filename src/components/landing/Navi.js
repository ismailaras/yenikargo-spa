import React, { useState } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import logo_dark from "../../assets/images/logo_dark_x.svg";
import "./style.scss";

const Navi = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpenA, setDropdownOpenA] = useState(false);
  const [dropdownOpenB, setDropdownOpenB] = useState(false);
  const [dropdownOpenC, setDropdownOpenC] = useState(false);
  const [dropdownOpenD, setDropdownOpenD] = useState(false);
  const [dropdownOpenE, setDropdownOpenE] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <div className="nav_banner text-white py-2 text-center">
        <h4>Partnyorlarımızdan pulsuz çatdırılma ilə <a href="/">ALIN</a></h4>
      </div>
      <div className="navi">
        <Navbar color="white" expand="md">
          <NavbarBrand href="/" style={{ padding: 0 }}>
            <img src={logo_dark} alt="logo" width={150} />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <Dropdown
                isOpen={dropdownOpenA}
                toggle={() => setDropdownOpenA(!dropdownOpenA)}
              >
                <DropdownToggle caret color="none">
                  Xidmətlər
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Necə işləyir?</DropdownItem>
                  <DropdownItem>Yeniliklər</DropdownItem>
                  <DropdownItem>Missiyamız</DropdownItem>
                  <DropdownItem>Françayzing</DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <Dropdown
                isOpen={dropdownOpenB}
                toggle={() => setDropdownOpenB(!dropdownOpenB)}
              >
                <DropdownToggle caret color="none">
                  Fərdi müştərilər
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Göndəriş</DropdownItem>
                  <DropdownItem>Təhvil</DropdownItem>
                  <DropdownItem>Göndərişdən sonra dəişikliklər</DropdownItem>
                  <DropdownItem>Geri ödəməli bağlamalar</DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <Dropdown
                isOpen={dropdownOpenC}
                toggle={() => setDropdownOpenC(!dropdownOpenC)}
              >
                <DropdownToggle caret color="none">
                  Biznes müştərilər
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Online maqazinlər</DropdownItem>
                  <DropdownItem>Korporativ müştərilər</DropdownItem>
                  <DropdownItem>Müqavilə ilə göndərişlər</DropdownItem>
                  <DropdownItem>Biznes müştəri kartı</DropdownItem>
                  <DropdownItem>Topdan qutu və s satış</DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <Dropdown
                isOpen={dropdownOpenD}
                toggle={() => setDropdownOpenD(!dropdownOpenD)}
              >
                <DropdownToggle caret color="none">
                  Xaricdən çatdırılma
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Fərdi müştərilər</DropdownItem>
                  <DropdownItem>Biznes müştərilər</DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <Dropdown
                isOpen={dropdownOpenE}
                toggle={() => setDropdownOpenE(!dropdownOpenE)}
              >
                <DropdownToggle caret color="none">
                  Etibarlı mağazalar
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Azərbaycan</DropdownItem>
                  <DropdownItem>Xarici</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/#stations">Filiallar</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#about">Kampaniyalar</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#prices">Vakansiyalar</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#prices">FAQ</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Navi;
