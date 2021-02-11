import React, {useState} from 'react';
import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarText,
    NavbarToggler,
    NavItem,
    NavLink,
} from 'reactstrap';
import logo_light from '../../assets/images/logo_light_x.svg';

const Navi = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="primary" dark expand="md">
                <div className="container">
                    <NavbarBrand href="/" style={{padding: 0}}>
                        <img src={logo_light} alt="logo" width={150}/>
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle}/>
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
                        <NavbarText>Simple Text</NavbarText>
                    </Collapse>
                </div>
            </Navbar>
        </div>
    );
}

export default Navi;