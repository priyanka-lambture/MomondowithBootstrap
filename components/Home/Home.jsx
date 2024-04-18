import React from 'react';
import Layout from '../Layout/Layout';
import banner from '../../assets/banner.jpg';
import './Home.css';
import Fun from './Fun';
import Popular from './Popular/Popular';

function Home() {
  return (
    <Layout>
      <div classname="banner"
        style={{ background: `URL(${banner})`, backgroundSize: "cover" }}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 py-5'>
              <h1 className='fw-normal text-white pt-4 pb-2 ' >"The Best Place to Find<br /> the Cheapest airfares"</h1>
              <h3 className="fw-bold">- every single time</h3>
            </div>
          </div>
          <div className='row'>
            <div className="bg-purple px-3 pb-2 pt-1">
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><i className="fa fa-plane"></i>Flights</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Hotels</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Cars</button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0"></div>
                <div className="row g-3">
                  <div className="col">
                    <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                  </div>
                  <div className="col">
                    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
                  </div>
                  <button className='btn btn-danger' >Search</button>
                </div>

                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">Program</div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">Contact</div>
              </div>
            </div>
          </div>
           </div>
      </div>
      <Fun/>
<Popular/>
    </Layout>
  )
}

export default Home;
