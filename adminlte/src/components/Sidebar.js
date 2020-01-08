import React, {Component} from 'react'
import {FaCircle, FaSearch} from 'react-icons/fa'
import '../css/sidebar.css'

class Sidebar extends Component {
    render() {
        return (
            <aside className={'main-sidebar'}>
                <section className={'sidebar'}>
                    <div className={'user-panel'}>
                        <div className="pull-left_image">
                            <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>
                        </div>
                        <div className="pull-left_info">
                            <p className={'p_sidebar'}>Alexander Pierce</p>
                            <a className={'a_sidebar'} href="#">
                                <i className="fa_fa-circle_text-success"><FaCircle/></i> Online
                            </a>
                        </div>
                    </div>
                    <form action="#" method="get" className="sidebar-form">
                        <div className="input-group">
                            <input type="text" name="q" className="form-control" placeholder="Search..."/>
                            <span className="input-group-btn">
                                <button type="submit" name="search" id="search-btn" className="btn_btn-flat">
                                    <i className="fa_fa-search"><FaSearch/></i>
                                </button>
                            </span>
                        </div>
                    </form>
                </section>
            </aside>
        )
    }
}

export default Sidebar;