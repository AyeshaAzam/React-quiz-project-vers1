import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Link } from 'react-router-dom';
import { 
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown, 
    DropdownMenu, 
    DropdownItem, 
    DropdownToggle, 
} from 'reactstrap';




// dropdown link: http://reactstrap.github.io/components/button-dropdown/
class Navbar extends Component {

 handleClick = e => {
    console.log(" You click me !")
 };

    render() {
        //const classes = props.classes;
        return (
          <div>
            <Nav className="navbar navbar-dark bg-dark mb-5">
             <span className="navbar-brand mb-0 h1 mx-auto">React Quiz Project</span>
             
            <div>
              <NavItem>
                <NavLink tag={Link} to="/create">
                    <Fab color="secondary" aria-label="Add" >
                    <AddIcon />
                    </Fab>
                </NavLink>
              </NavItem>
            </div>
            <div>
            <NavItem>
               <NavLink tag={Link} to="/">
               {/* <HomeIcon className={classes.icon} color="secondary" /> */}
               <SvgIcon 
               color="secondary" 
               style={{ fontSize: 50 }} 
               >
                 <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </SvgIcon>
                </NavLink>
            </NavItem>
            </div>
             <UncontrolledDropdown nav inNavbar >
                <NavLink tag={Link} to="/Login">
                 <DropdownToggle caret color="secondary" onClick={this.handleClick}>
                   Login
                 </DropdownToggle>
                </NavLink>
                  <DropdownMenu>
                    <DropdownItem >Register</DropdownItem>
                     <DropdownItem >Profile</DropdownItem>
                     <DropdownItem>Settings</DropdownItem>
                     <DropdownItem divider />
                     <DropdownItem>Logout</DropdownItem>
                  </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </div>
          
        );
    }
}

export default Navbar;