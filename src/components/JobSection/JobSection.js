import React from 'react'
import Job from '../Job/Job'
import './JobSection.css'

export default function JobSection() {
  return (
    <div className="col-12 col-md-8" style={{backgroundColor: '#FFFFFF'}}>

                    <div className='d-flex'>
                        <div className="dropdown show d-none d-md-block" >
                            <a 
                                className="btn btn-secondary dropdown-toggle dropbtn" href="/#" role="button" id="dropdownMenuLink"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Newest First
                            </a>

                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item" href="/#">Newest First</a>
                                <a className="dropdown-item" href="/#">Highest Budget First</a>
                                <a className="dropdown-item" href="/#">Lowest Budget First</a>
                                <a className="dropdown-item" href="/#">Lowest Bid/Enteries</a>
                                <a className="dropdown-item" href="/#">Highest Bid/Enteries</a>
                            </div>
                        </div>

                        <div style = {{margin: '25px 10px 0px 10px'}}>
                            <p>15,616 jobs found, pricing in USD</p>
                        </div>

                        <nav className='ms-md-auto d-none d-md-block' aria-label="Page navigation example" style = {{margin: '20px 10px 0px 10px'}}>
                            <ul className="pagination">
                              <li className="page-item">
                                <a className="page-link" href="/#" aria-label="Previous">
                                  <span aria-hidden="true">&laquo;</span>
                                  <span className="sr-only">Previous</span>
                                </a>
                              </li>
                              <li className="page-item"><a className="page-link" href="/#">1</a></li>
                              <li className="page-item"><a className="page-link" href="/#">2</a></li>
                              <li className="page-item"><a className="page-link" href="/#">3</a></li>
                              <li className="page-item">
                                <a className="page-link" href="/#" aria-label="Next">
                                  <span aria-hidden="true">&raquo;</span>
                                  <span className="sr-only">Next</span>
                                </a>
                              </li>
                            </ul>
                          </nav>

                    </div>
                    <hr/>
                    
                    <Job job={'Build e-commerce website'} days={6} price={'$33270'} job_desc={'Need educated python base developer'} bids={0} tags={['Graphic Design','Python','Web Design']} />
                    <Job job={'Do scraping of different websites'} days={2} price={'$33270'} job_desc={'Need Python selenium developer'} bids={8} tags={['Selenium','Python']} />
                    <Job job={'Build full fledge car renting website'} days={18} price={'$308'} job_desc={'Need Word-Press Developer'} bids={17} tags={['Word Press','Web Developement']} />
                    <Job job={'Build e-commerce website'} days={6} price={'$33270'} job_desc={'Need educated python base developer'} bids={0} tags={['Graphic Design','Python','Web Design']} />
                    <Job job={'Do scraping of different websites'} days={2} price={'$33270'} job_desc={'Need Python selenium developer'} bids={8} tags={['Selenium','Python']} />
                    <Job job={'Build full fledge car renting website'} days={18} price={'$308'} job_desc={'Need Word-Press Developer'} bids={17} tags={['Word Press','Web Developement']} />

                </div>
  )
}
