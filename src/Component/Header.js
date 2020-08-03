import React, { Component } from 'react';
import logo from "../images/logo.png"
class Header extends Component {
    render() {
        return (
            <section>
                {/*header start*/}
                <header id="navbar">
                    <div id="ctn" className="container">
                        <div className="container-logo">
                        <img src={logo} alt="" />
                        </div>
                        <div className="container-menu">
                            <div className="container-menu-wrap">
                                <a href="index.html">Home</a>
                                <a href="#about">About</a>
                                <a href="#portfolio">Portfolio</a>
                                <a href="#service">Severice</a>
                                <a href="#blog">Blog</a>
                                <a href="#contact">Contact</a>
                                <a className="last" href="#"><i className="fas fa-search" title="You can search anything you want here" /><input type="text" placeholder="Search" /></a>
                            </div>
                        </div>
                        <div  className="container-iconbar ">
                            <i className="fas fa-bars" />
                        </div>
                    </div>
                </header>
                {/*header end*/}

            </section>
        );
    }
}

export default Header;
