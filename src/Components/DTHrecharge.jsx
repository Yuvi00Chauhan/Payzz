import React from "react";
import "./DTHrecharge.css";
import { handleRecharge } from "./GlobalFunctions";
function DTHrecharge()   {
    return(
      <div className="container mt-5 FastTag" >
        <div className="row" >
            <div className="col-md-12" >
            <div className="col-md-6 offset-md-3">
        <h2 className="text-center PageHeading">DTH Recharge</h2>
        <form onSubmit={handleRecharge}>
            <div className="mb-3">
              <label htmlFor="mobileNumber" className="form-label">
                Suscriber ID:
              </label>
              <input
                type="text"
                className="form-control"
                id="DthNo"
                placeholder="Enter Suscriber ID" required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="operator" className="form-label">
                Select Operator
              </label>
              <select className="form-select" id="operator" required>
                <option value="">Select Operator</option>
                <option value="Tata Play">Tata Play</option>
                <option value="Jio TV">Jio TV</option>
                <option value="Airtel TV">Airtel TV</option>
                <option value="Videocon">Videocon</option>
                <option value="Sun Direct">Sun Direct</option>
                <option value="Dish TV">Dish TV</option>
                <option value="Reliance Digital TV">Reliance Digital TV</option>

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
        </div>

    );
}
export default DTHrecharge;