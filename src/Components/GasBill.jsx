import React from "react";
import { handleRecharge } from "./GlobalFunctions";
function GasBill() {
    return (
        <div className="container mt-5 FastTag" >
  <div className="row">
    <div className="col-md-12">
      <div className="col-md-6 offset-md-3">
        <h2 className="text-center">Gas Bill Payment</h2>
        <form onSubmit={handleRecharge}>
          <div className="form-group">
            <label htmlFor="connectionNumber">Connection Number:</label>
            <input
              type="text"
              className="form-control"
              id="connectionNumber"
              placeholder="Enter connection number"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="gasProvider" className="form-label">
              Select Gas Provider
            </label>
            <select className="form-select form-group" id="gasProvider" required>
              <option value="">Select Provider</option>
              <option value="Indane">Indane Gas</option>
              <option value="BharatGas">Bharat Gas</option>
              <option value="HPGas">HP Gas</option>
              <option value="GAIL">GAIL (India) Limited</option>
              <option value="IGL">Indraprastha Gas Limited (IGL)</option>
              <option value="MGL">Mahanagar Gas Limited (MGL)</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="billAmount">Bill Amount:</label>
            <input
              type="number"
              className="form-control"
              id="billAmount"
              placeholder="Enter amount"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary" >
            Pay Bill
          </button>
        </form>
      </div>
    </div>
  </div>
</div>

    );
}
export default GasBill;