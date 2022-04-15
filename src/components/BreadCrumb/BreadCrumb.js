import React from 'react'
import './BreadCrumb.css'

export default function BreadCrumb() {
    return (
        <div >
            <div className="bcrumb" style={{ fontSize: '.875rem', boxSizing: 'border-box' }}>
                <nav className='arrow' aria-label="breadcrumb">
                    <ol className="breadcrumb" style={{ backgroundColor: '#F0F0F0' }}>
                        <li className="breadcrumb-item"><a style={{ textDecoration: 'none', color: 'inherit' }}
                            href="/#">Freelancer</a></li>
                        <li className="breadcrumb-item"><a style={{ textDecoration: 'none', color: 'inherit' }} href="/#">Jobs</a>
                        </li>
                        <li className="breadcrumb-item"><a style={{ textDecoration: 'none', color: 'inherit' }} href="/#">Browse
                            All Jobs</a></li>
                        <li className="breadcrumb-item"><a style={{ textDecoration: 'none', color: 'inherit' }} href="/#">1</a>
                        </li>
                    </ol>
                </nav>
            </div></div>
    )
}
