import React from "react";
import "../Components/HomePage.css";
function HomePage() {
  return (
    <div className="container-fluid">
      <div className="text-center-section">
        <h3>Welcome to Payzz</h3>
        <p>
          Your one-stop solution for all your recharge and bill payments need.
        </p>
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="/images/mobrech.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Mobile Recharge</h5>
                <p className="card-text">
                  📱 Instant mobile recharges at your fingertips.
                  <br />⚡ Fast, secure, and hassle-free top-ups for all
                  networks.
                </p>
                <a href="#" className="btn btn-primary">
                  Continue
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src="/images/dth.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">DTH Recharge</h5>
                <p className="card-text">
                  📺 Recharge your DTH instantly anytime, anywhere.
                  <br />
                  🎯 All popular DTH providers supported with secure payments.
                </p>
                <a href="#" className="btn btn-primary">
                Continue
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src="/images/broad.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Broadband Bill Payment</h5>
                <p className="card-text">
                  🌐 Pay your broadband bills quickly and securely online.
                  <br />⚡ Never miss a due date—instant payments for all major
                  ISPs.
                </p>
                <a href="#" className="btn btn-primary">
                Continue
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src="/images/ftag.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">FASTag Recharge</h5>
                <p className="card-text">
                  🚗 Recharge your FASTag in seconds—no queues, no delays.
                  <br />
                  🛣️ Smooth travel starts with quick, hassle-free top-ups.
                </p>
                <a href="#" className="btn btn-primary">
                Continue
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src="/images/elec.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Electricity Bill Payment</h5>
                <p className="card-text">
                  💡 Pay your electricity bills anytime, anywhere.
                  <br />⚡ Instant confirmations and support for all electricity
                  boards.
                </p>
                <a href="#" className="btn btn-primary">
                Continue
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src="/images/gas.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Gas Bill Payment</h5>
                <p className="card-text">
                  🔥 Pay your gas bills instantly with secure online payments.
                  <br />
                  📲 Quick, easy, and reliable service for all major gas
                  providers.
                </p>
                <a href="#" className="btn btn-primary">
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
