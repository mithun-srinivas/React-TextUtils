import React, { useState } from "react";
import propTypes from "prop-types"
import '../App.css'
import Layout from "./Layout";
import {Link} from "react-router-dom";

function NavBar(props) {

    const mode = props.displayMode;
    var myStyle;
    if(mode === 'lightMode'){
        myStyle = "navbar navbar-expand-lg bg-light navbar-light";
    }
    else{
        myStyle = "navbar navbar-expand-lg bg-dark navbar-dark";
    }

    return (
        <nav className={myStyle}>
            <div className="container-fluid ">
                <Link className="navbar-brand" to="/" style={{color: '#5DA3FA'}}>{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/wordCounter">Word Counter</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/play">Play With Words</Link>
                    </li>
                </ul>
                <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggle}/>
                <label class="form-check-label" for="flexSwitchCheckDefault" style={{color: '#5DA3FA'}}>Enable Dark Mode</label>
                </div>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success btnSearch" type="submit" >Search</button>
                </form>
            </div>
        </div>
        </nav>
    )
}
NavBar.propTypes = {
    title: propTypes.string.isRequired
}

NavBar.defaultProps = {
    title: 'Text Utils'
}
export default NavBar;