import React, {Component} from 'react';
import {FaBars, FaCogs, FaFontAwesomeFlag, FaRegBell} from 'react-icons/fa'
import {IoIosMail} from 'react-icons/io'

import '../css/header.css'

class Header extends Component {
    render() {
        return (
            <header className={'main-header'}>
                <a href={"#"} className={'logo'}>
                    <span className={'logo-mini'}>
                        <b>A</b>LT
                    </span>
                    <span className={'logo-lg'}>
                        <b>Admin</b>LTE
                    </span>
                </a>
                <nav className={'nav-bar-1'}>
                    <a className={'sidebar-toggle'}>
                        <FaBars/>
                        <span className="sr-only">Toggle navigation</span>
                    </a>
                    <div className={'navbar-custom-menu'}>
                        <ul className={'navbar-nav'}>
                            <li className={'dropdown-messages-menu'}>
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa_fa-envelope-o"><IoIosMail/></i>
                                    <span className="label-label-success">4</span>
                                </a>
                            </li>
                            <li className={'dropdown_notifications-menu'}>
                                <a href="#" className="dropdown-toggle">
                                    <i className="fa_fa-bell-o"><FaRegBell/></i>
                                    <span className="label_label-warning">10</span>
                                </a>
                            </li>
                            <li className={'dropdown_tasks-menu'}>
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa_fa-flag-o"><FaFontAwesomeFlag/></i>
                                    <span className="label_label-danger">9</span>
                                </a>
                            </li>
                            <li className={'dropdown_user_user-menu'}>
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <img src="dist/img/user2-160x160.jpg" className="user-image" alt="User Image"/>
                                    <span className="hidden-xs">Alexander Pierce</span>
                                </a>
                            </li>
                            <li className={'setting-menu'}>
                                <a href="#" className={'dropdown-toggle'}>
                                    <i className="fa_fa-gears"><FaCogs/></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;