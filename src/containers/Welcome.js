import React from 'react'
import "./Welcome_scss.scss"
import logo from '../image/logo2.png';
import Avatar from '@material-ui/core/Avatar';
import { Navbar ,Button} from 'react-bootstrap';
import { NavLink} from 'react-router-dom';
import Typed from 'react-typed';
import TuneIcon from '@material-ui/icons/Tune';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import WorkOutlineTwoToneIcon from '@material-ui/icons/WorkOutlineTwoTone';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import WebOutlinedIcon from '@material-ui/icons/WebOutlined';
import Divider from '@material-ui/core/Divider';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import { Accordion , Card} from 'react-bootstrap';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import { useDispatch } from 'react-redux';
import { signout } from '../actions/auth';
/**
* @author
* @function Welcome
**/

const Welcome = (props) => {

    const dispatch = useDispatch();
    const logout = () => {
        dispatch(signout())
    } 
  return(
    <div className='Welcome'>
            <div className="NavBar">
                <div className="Logo">
                    <img src={logo} width="50%"/>
                </div>
                <div className="Profil">
                <Avatar className="Avatar">M</Avatar>
                    <div className="Avatar_content">
                        <h5>Malick Gueye</h5>
                        <p>Developpeur , Admin</p>
                    </div>
                </div>

               
                <div className="Menu">
                    <p className="title_menu">PAGES</p>
                    <Divider  className="divider"/>
                    <ul>
                        <li>
                        <Accordion defaultActiveKey="0">
                                <Accordion.Toggle  as={Card.Header} className="button_accordion" variant="link" eventKey="0">
                                <p><TuneIcon className="icon"className="icon" />Dashboard <ArrowDropDownIcon className="dropDown"/></p>
                                </Accordion.Toggle>

                                <Accordion.Collapse eventKey="0">
                                <Card.Body className="card_button_accordion">
                                    <ul>
                                        <li>Analytic</li>
                                        <li>Default</li>
                                    </ul>
                                </Card.Body>
                                </Accordion.Collapse>
                        </Accordion>    
                        </li>
                        <li>
                        <Accordion defaultActiveKey="1">
                                <Accordion.Toggle  as={Card.Header} className="button_accordion" variant="link" eventKey="0">
                                <p><WebOutlinedIcon className="icon"/>Integrations <ArrowDropDownIcon className="dropDown"/></p>
                                </Accordion.Toggle>

                                <Accordion.Collapse eventKey="0">
                                <Card.Body className="card_button_accordion">
                                    <ul>
                                        <li>Product</li>
                                        <li>Category</li>
                                    </ul>
                                </Card.Body>
                                </Accordion.Collapse>
                        </Accordion>    
                        </li>
                        <li><ShoppingCartOutlinedIcon className="icon"/> Orders</li>
                        <li><WorkOutlineTwoToneIcon className="icon"/> Project</li>
                        <li><AssignmentTurnedInOutlinedIcon className="icon"/> Tasks</li>
                    </ul>
                    <p className="title_menu">OTHER</p>
                    <ul>
                        <li>< LockOutlinedIcon className="icon"/> Authentication</li>
                        <li><DescriptionOutlinedIcon className="icon"/> Invoices</li>
                        <li><HelpOutlineOutlinedIcon className="icon"/> Support</li>
                    </ul>
                    <ul>
                        <li onClick={logout}><MeetingRoomIcon/> Signout</li>
                    </ul>
                </div>
                <div className="Footer_Sidevar"></div>
            </div>
            <div className="Contain"></div>
    </div>
   )

 }

export default Welcome