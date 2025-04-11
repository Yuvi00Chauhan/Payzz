import React from "react";
import "./MobileRecharge.css";
import { handleRecharge } from "./GlobalFunctions";
function MobileRecharge() {
  return (
    <div className="container mt-5 mobile">
      <h2 className="text-center PageHeading">Mobile Recharge</h2>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={handleRecharge}>
            <div className="mb-3">
              <label htmlFor="mobileNumber" className="form-label">
                Mobile Number
              </label>
              <input
                type="text"
                className="form-control"
                id="mobileNumber"
                placeholder="Enter mobile number"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="operator" className="form-label">
                Select Operator
              </label>
              <select className="form-select" id="operator" required>
                <option value="">Select Operator</option>
                <option value="Airtel">Airtel</option>
                <option value="Jio">Jio</option>
                <option value="Vi">VI</option>
                <option value="BSNL">BSNL</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="State" className="form-label">
                Select State
              </label>
              <select className="form-select" id="state" required>
                <option value="">Select state</option>
                <option value="AP">Andhra Pradesh</option>
                <option value="AR">Arunachal Pradesh</option>
                <option value="AS">Assam</option>
                <option value="BR">Bihar</option>
                <option value="CT">Chhattisgarh</option>
                <option value="GA">Gujarat</option>
                <option value="HR">Haryana</option>
                <option value="HP">Himachal Pradesh</option>
                <option value="JK">Jammu and Kashmir</option>
                <option value="GA">Goa</option>
                <option value="JH">Jharkhand</option>
                <option value="KA">Karnataka</option>
                <option value="KL">Kerala</option>
                <option value="MP">Madhya Pradesh</option>
                <option value="MH">Maharashtra</option>
                <option value="MN">Manipur</option>
                <option value="ML">Meghalaya</option>
                <option value="MZ">Mizoram</option>
                <option value="NL">Nagaland</option>
                <option value="OR">Odisha</option>
                <option value="PB">Punjab</option>
                <option value="RJ">Rajasthan</option>
                <option value="SK">Sikkim</option>
                <option value="TN">Tamil Nadu</option>
                <option value="TG">Telangana</option>
                <option value="TR">Tripura</option>
                <option value="UT">Uttarakhand</option>
                <option value="UP">Uttar Pradesh</option>
                <option value="WB">West Bengal</option>
                <option value="AN">Andaman and Nicobar Islands</option>
                <option value="CH">Chandigarh</option>
                <option value="DN">Dadra and Nagar Haveli</option>
                <option value="DD">Daman and Diu</option>
                <option value="DL">Delhi</option>
                <option value="LD">Lakshadweep</option>
                <option value="PY">Puducherry</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="amount" className="form-label">
                Amount
              </label>
              <input
                type="number"
                className="form-control"
                id="amount"
                placeholder="Enter amount"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Recharge Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default MobileRecharge;
