import React from 'react'
import BreadCrumb from '../BreadCrumb/BreadCrumb'
import SearchBar from '../SearchBar/SearchBar'
import RecentSearches from '../RecentSearches/RecentSearches'
import JobSection from '../JobSection/JobSection'

export default function Main() {
    return (
        <div className='container w-75' style={{ backgroundColor: '#F0F0F0' }}>
                <div className='d-flex flex-column me-md-3'>
                    <BreadCrumb />
                    <SearchBar />
                </div>
                <div className='row'>
                    <RecentSearches />
                    <JobSection />
                </div>
        </div>
    )
}
