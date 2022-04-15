import React from 'react'
import './SearchBar.css'
import { Search } from 'react-bootstrap-icons';
import { GeoAltFill } from 'react-bootstrap-icons';


export default function SearchBar() {
    return (
        <div>
            <form>
                <div className="row srbar">

                    <div className="col d-flex align-items-center">
                        <Search size={25} color={'lightgray'} />
                        <input style={{ border: 'none' }} type="text" className="form-control search-input" placeholder="Search Keyword" />
                    </div>

                    <div className="col d-flex align-items-center" style={{ borderLeft: '2px solid #F0F0F0' }}>
                        <GeoAltFill size={25} color={'lightgray'} />
                        <input style={{ border: 'none' }} type="text" className="form-control search-input" placeholder="Online Jobs" />
                        <button style={{ borderRadius: 0 }} type="submit" className="btn btn-primary btn-lg my-1">Search</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
