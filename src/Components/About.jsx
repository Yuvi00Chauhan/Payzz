import React from "react";

function About() {
  return (
    <div className="container mt-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h2 className="mb-4">About Payzz</h2>
          <p className="lead text-muted">
            Payzz is your all-in-one solution for fast, secure, and hassle-free recharges and bill payments.
          </p>
          <hr className="my-4" />
          <p>
            Whether it’s mobile recharges, DTH services, broadband bills, or FASTag top-ups, we make it simple and
            instant. At Payzz, we prioritize user experience, data security, and seamless transactions.
          </p>
          <p>
            Our platform is built with speed and simplicity in mind, ensuring that you spend less time waiting and more time doing what you love.
          </p>
          <p>
            💡 Powered by modern tech.<br />
            🔒 Secured with best-in-class encryption.<br />
            💬 Backed by responsive support.
          </p>
          <p className="fw-semibold mt-4">
            Thanks for choosing Payzz. Your convenience is our priority.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
