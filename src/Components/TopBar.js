import React, { Component } from 'react';

class TopBar extends React.Component {
    render() {
      return (
        <header id="header" class="d-flex align-items-center">
            <div class="container d-flex align-items-center justify-content-between">

                <div class="logo">
                    <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"/></a>
                </div>

                    <nav id="navbar" class="navbar">
                        <ul>
                        <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
                        <li><a class="nav-link scrollto" href="#about">About</a></li>
                        <li><a class="nav-link scrollto" href="#services">Services</a></li>
                        <li><a class="nav-link scrollto " href="#portfolio">Portfolio</a></li>
                        <li><a class="nav-link scrollto" href="#team">Team</a></li>
                        <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
                        </ul>
                        <i class="bi bi-list mobile-nav-toggle"></i>
                    </nav>

            </div>
        </header>
        );
    }
}

export default TopBar;