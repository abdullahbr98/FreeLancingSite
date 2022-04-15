import React from 'react'
import './Navbar.css'

export const Navbar = () => {
    return (
        <div><nav className="navbar navbar-expand-sm navbar-light">
            <div className="container-fluid" style={{ marginLeft: 200, marginRight: 200 }}>
                <img src="https://www.f-cdn.com/assets/img/fl-logo-c555380d.svg" height={'80px'}
                    width={'160px'} className='img-fluid' alt='Logo' />
                <div className="collapse navbar-collapse"
                    id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/#">How It Works</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Browse Jobs</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" data-bs-toggle="modal" data-bs-target="#elegantModalForm" href="/#">Log In</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" data-bs-toggle="modal" data-bs-target="#elegantModalForm2" href="/#">Sign Up</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav></div>
    )
}
