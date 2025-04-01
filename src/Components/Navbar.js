import React from 'react'
import propTypes from 'prop-types'
import {Link} from 'react-router-dom';
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode} `}>
  <div className="container-fluid">
    <Link className="navbar-brand text" to="/">{props.title}</Link>
    {/* <a className="navbar-brand text" href="#">{props.title}</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.AboutText}</Link>
          {/* <a className="nav-link" href="/about">{props.AboutText}</a> */}
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-primary" type="submit">Search</button>
      </form>

      <div className="form-check form-switch  mx-3 ">
      <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" ></input>
      <label className={`form-check-label-${props.text} text-${props.text}`} htmlFor="flexSwitchCheckDefault">Enable ModeChanger</label>
</div>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {
    title: propTypes.string.isRequired,
    AboutText: propTypes.string.isRequired,
  };

  Navbar.defaultProps = {
    title: 'set title here',
    AboutText: 'About',
  };
