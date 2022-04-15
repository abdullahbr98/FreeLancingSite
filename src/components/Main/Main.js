import React from 'react'
import BreadCrumb from '../BreadCrumb/BreadCrumb'
import SearchBar from '../SearchBar/SearchBar'
import RecentSearches from '../RecentSearches/RecentSearches'

export default function Main() {
    return (
        <div className='container-fluid' style={{ backgroundColor: '#F0F0F0' }}>
            <div className='container'>
                <BreadCrumb />
                <SearchBar />
                <RecentSearches />
            </div>
        </div>
    )
}
