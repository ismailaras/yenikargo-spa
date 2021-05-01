import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import * as authActions from "../../../../redux/actions/authActions";
import { connect } from "react-redux";
import {
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap/es";
import { getEmployeeCredentialsFromToken } from "../../../../utilities/helpers";
import { Routes } from "../../../../routes";
import logo_light from "../../../../assets/images/logo_light_x.svg";

const Navi = ({ signIn, signOut, auth }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const history = useHistory();
  const signOutHandler = () => {
    const resultConfirm = window.confirm("Əminsiniz?");
    if (resultConfirm) {
      signOut(history);
    } else {
      return null;
    }
  };
  useEffect(() => {
    if (!auth.isAuthenticated) {
      signIn(getEmployeeCredentialsFromToken(), history);
    }
  });
  return (
    <div style={{ marginBottom: 15 }}>
      <Navbar color="primary" dark expand="md">
        <Container>
          <NavbarBrand to="/" style={{ padding: 0 }}>
            <img src={logo_light} alt="logo" width={150} />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <div className="nav_userinfo">{auth.currentEmployee.first_name} {auth.currentEmployee.last_name} - {auth.currentEmployee.employee_role} - {auth.currentEmployee?.station?.name}</div>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <button type="button" className="btn btn-info btn-sm">
                    <i className="fa fa-arrow-circle-down" /> Menyu
                  </button>
                </DropdownToggle>
                <DropdownMenu right>
                {
                  <Link to={Routes.customers}>
                    <DropdownItem>
                      <span className="text-info">Müştərilər</span>
                    </DropdownItem>
                  </Link>}
                  <Link to={Routes.packages}>
                    <DropdownItem>
                      <span className="text-info">Paketlər</span>
                    </DropdownItem>
                  </Link>
                  {!auth.currentEmployee.is_sorting_admin && 
                  <Link to={Routes.checkout}>
                    <DropdownItem>
                      <span className="text-info">Ödəniş al</span>
                    </DropdownItem>
                  </Link>}
                  {!auth.currentEmployee.is_sorting_admin ? (
                    <Link to={Routes.stations}>
                      <DropdownItem>
                        <span className="text-info">Filiallar *</span>
                      </DropdownItem>
                    </Link>
                  ) : null}
                  {!auth.currentEmployee.is_sorting_admin ? (
                    <Link to={Routes.tariffs}>
                      <DropdownItem>
                        <span className="text-info">Tariflər *</span>
                      </DropdownItem>
                    </Link>
                  ) : null}
                  {auth.currentEmployee.is_superuser && <Link to={Routes.employees}>
                    <DropdownItem>
                      <span className="text-info">İşçilər</span>
                    </DropdownItem>
                  </Link>}
                  {!auth.currentEmployee.is_sorting_admin &&
                  <Link to={Routes.payments}>
                    <DropdownItem>
                      <span className="text-info">Ödənişlər</span>
                    </DropdownItem>
                  </Link>}
                  {auth.currentEmployee.is_superuser ? (
                    <Link to={Routes.allExtraSelling}>
                      <DropdownItem>
                        <span className="text-info">Ekstra servislər *</span>
                      </DropdownItem>
                    </Link>
                  ) : null}
                  {!auth.currentEmployee.is_sorting_admin && 
                  <Link to={Routes.courier}>
                    <DropdownItem>
                      <span className="text-info">Kuryer</span>
                    </DropdownItem>
                  </Link>}
                  {!auth.currentEmployee.is_sorting_admin && 
                  <Link to={Routes.report}>
                    <DropdownItem>
                      <span className="text-info">Hesabat *</span>
                    </DropdownItem>
                  </Link>}
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink></NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <button
                    type="button"
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => signOutHandler()}
                  >
                    #{auth.currentEmployee.id} - Çıxış et
                  </button>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

const mapDispatchToProps = {
  signOut: authActions.signOut,
  signIn: authActions.signIn,
};

const mapStateToProps = (state) => ({ auth: state.authReducer });

export default connect(mapStateToProps, mapDispatchToProps)(Navi);
