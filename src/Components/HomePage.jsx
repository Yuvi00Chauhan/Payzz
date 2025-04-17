import React from "react";
import "../Components/HomePage.css";
import {
  goMobileRecharge,
  goDTHRecharge,
  goFastTag,
  goBroadbandRecharge,
  goElectricityRecharge,
  goGasRecharge,
} from "./GlobalFunctions";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="container-fluid pt-5">
      <div className="text-center-section text-center my-4">
        <h3>Welcome to Payzz</h3>
        <p>
          Your one-stop solution for all your recharge and bill payments needs.
        </p>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
              <img src="/images/mobrech.png" className="card-img-top" alt="Mobile Recharge" />
              <div className="card-body">
                <h5 className="card-title">Mobile Recharge</h5>
                <p className="card-text">
                  📱 Instant mobile recharges at your fingertips.<br />
                  ⚡ Fast, secure, and hassle-free top-ups for all networks.
                </p>
                <a href="javascript:void(0)" className="btn btn-primary" onClick={(e) => goMobileRecharge(navigate, e)}>
                  Continue
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
              <img src="/images/dth.png" className="card-img-top" alt="DTH Recharge" />
              <div className="card-body">
                <h5 className="card-title">DTH Recharge</h5>
                <p className="card-text">
                  📺 Recharge your DTH instantly anytime, anywhere.<br />
                  🎯 All popular DTH providers supported with secure payments.
                </p>
                <a href="javascript:void(0)" className="btn btn-primary" onClick={(e) => goDTHRecharge(navigate, e)}>
                  Continue
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
              <img src="/images/broad.jpg" className="card-img-top" alt="Broadband" />
              <div className="card-body">
                <h5 className="card-title">Broadband Bill Payment</h5>
                <p className="card-text">
                  🌐 Pay your broadband bills quickly and securely online.<br />
                  ⚡ Never miss a due date—instant payments for all major ISPs.
                </p>
                <a href="javascript:void(0)" className="btn btn-primary" onClick={(e) => goBroadbandRecharge(navigate, e)}>
                  Continue
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
              <img src="/images/ftag.jpg" className="card-img-top" alt="FASTag" />
              <div className="card-body">
                <h5 className="card-title">FASTag Recharge</h5>
                <p className="card-text">
                  🚗 Recharge your FASTag in seconds—no queues, no delays.<br />
                  🛣️ Smooth travel starts with quick, hassle-free top-ups.
                </p>
                <a href="javascript:void(0)" className="btn btn-primary" onClick={(e) => goFastTag(navigate, e)}>
                  Continue
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
              <img src="/images/elec.jpg" className="card-img-top" alt="Electricity" />
              <div className="card-body">
                <h5 className="card-title">Electricity Bill Payment</h5>
                <p className="card-text">
                  💡 Pay your electricity bills anytime, anywhere.<br />
                  ⚡ Instant confirmations and support for all electricity boards.
                </p>
                <a href="javascript:void(0)" className="btn btn-primary" onClick={(e) => goElectricityRecharge(navigate, e)}>
                  Continue
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
              <img src="/images/gas.jpg" className="card-img-top" alt="Gas" />
              <div className="card-body">
                <h5 className="card-title">Gas Bill Payment</h5>
                <p className="card-text">
                  🔥 Pay your gas bills instantly with secure online payments.<br />
                  📲 Quick, easy, and reliable service for all major gas providers.
                </p>
                <a href="javascript:void(0)" className="btn btn-primary" onClick={(e) => goGasRecharge(navigate, e)}>
                  Continue
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
