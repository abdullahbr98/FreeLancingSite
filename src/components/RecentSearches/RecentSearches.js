import React from 'react'
import './RecentSearches.css'
export default function RecentSearches() {
    return (
        
            <div className="d-md-block d-none col-md-3 me-3 d-flex flex-column align-items-start" style={{ backgroundColor: '#FFFFFF' }}>

                <h5 style={{ margin: '15px 15px 51px 15px' }}>
                    My recent searches
                </h5>
                <p>Hello</p>
                <h5 style={{ margin: '30px 15px 15px 15px' }}>
                    Filter by:
                </h5>
                <h6 style={{ margin: '15px 15px 15px 15px' }}>
                    <b>Budget</b>
                </h6>
                <div className="form-check" style={{ margin: '15px 15px 15px 15px' }}>
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">
                        Fixed Price Projects
                    </label>
                </div>
                <div className="rangee">
                    <input placeholder="min" style={{ textAlign: 'center', width: '40%' }} className="default-input;"></input>
                    to
                    <input placeholder="max" style={{ textAlign: 'center', width: '40%' }} className="default-input;"></input>
                </div>
                <div className="form-check" style={{ margin: '15px 15px 15px 15px' }}>
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">
                        Hourly Projects
                    </label>
                </div>
                <div className="rangee">
                    <input placeholder="min" style={{ textAlign: 'center', width: '40%' }} className="default-input;"></input>
                    to
                    <input placeholder="max" style={{ textAlign: 'center', width: '40%' }} className="default-input;"></input>
                </div>
                <div className="dropdown">
                    <a className="btn btn-secondary dropdown-toggle dropbtn1" href="/#" role="button" id="dropdownMenuLink"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        All duration
                    </a>

                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><a className="dropdown-item" href="/#">Action</a></li>
                        <li><a className="dropdown-item" href="/#">Another action</a></li>
                        <li><a className="dropdown-item" href="/#">Something else here</a></li>
                    </ul>
                </div>
                <div className="form-check" style={{ margin: '10px 15px 10px 15px' }}>
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">
                        Contests
                    </label>
                </div>
                <div style={{ display: 'inline-block', margin: '5px 10px 15px 10px' }}>
                    <input placeholder="min" style={{ textAlign: 'center', width: '40%' }} className="default-input;"></input>
                    to
                    <input placeholder="max" style={{ textAlign: 'center', width: '40%' }} className="default-input;"></input>
                </div>
                <hr />
                <h5 style={{ margin: '30px 15px 15px 15px' }}>
                    Type
                </h5>
                <div className="form-check" style={{ margin: '5px 15px 5px 15px' }}>
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">
                        Local Jobs
                    </label>
                </div>
                <div className="form-check" style={{ margin: '5px 15px 5px 15px' }}>
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">
                        Featured Jobs
                    </label>
                </div>
                <div className="form-check" style={{ margin: '5px 15px 5px 15px' }}>
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">
                        Recruiter Jobs
                    </label>
                </div>
                <div className="form-check" style={{ margin: '5px 15px 5px 15px' }}>
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">
                        full time Jobs
                    </label>
                </div>
                <h5 style={{ margin: '30px 15px 15px 15px' }}>
                    Skills
                </h5>
                <div className="form-check" style={{ margin: '5px 15px 5px 15px' }}>
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">
                        .NET 5.0/6
                    </label>
                </div>
                <div className="form-check" style={{ margin: '5px 15px 5px 15px' }}>
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">
                        .NET
                    </label>
                </div>



            </div>
    )
}
