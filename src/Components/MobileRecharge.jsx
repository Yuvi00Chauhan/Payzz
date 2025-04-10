import React from "react";

function MobileRecharge() {
  return (
    <div className="container mt-5">
      <h2 className="text-center heading">Mobile Recharge</h2>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form>
            <div className="mb-3">
              <label htmlFor="mobileNumber" className="form-label">
                Mobile Number
              </label>
              <input
                type="text"
                className="form-control"
                id="mobileNumber"
                placeholder="Enter mobile number" required
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
                <option value="Delhi">Delhi</option>
                <option value="UP">Uttar Pradesh</option>
                <option value="Uk">Uttrakhand</option>
                <option value="HP">Himachal Pradesh</option>
                <option value="Punjab">Punjab</option>
                <option value="Haryana">Haryana</option>
                <option value="Goa">Goa</option>
                <option value="AP">Andra Pradesh</option>
                <option value="Bihar">Bihar</option>
                <option value="J&K">Jammu & Kashmir</option>
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
                placeholder="Enter amount" required
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