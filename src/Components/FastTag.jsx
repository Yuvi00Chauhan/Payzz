
import React from "react";
import { handleRecharge } from "./GlobalFunctions";
import "./FastTag.css";
export default function FastTag() {
    return (
       <div className="container mt-5 FastTag" >
        <div className="row" >
            <div className="col-md-12" >
            <div className="col-md-6 offset-md-3">
                        <h2 className="text-center" >FastTag Recharge</h2>
                        <form onSubmit={handleRecharge}>
                            <div className="form-group">    
                                <label htmlFor="vehicleNumber" >Vehicle Number:</label>
                                <input type="text" className="form-control" id="vehicleNumber" placeholder="Enter vehicle number" required />
                                <div className="mb-3">
              <label htmlFor="operator" className="form-label">
                Select Provider Bank
              </label>
              <select className="form-select form-group" id="operator" required>
                <option value="">Select Bank</option>
                <option value="KMBK">Kotak Manindra Bank</option>
                <option value="PNB">Punjab National Bank</option>
                <option value="Indus">IndusInd Bank</option>
                <option value="Airtel">Airtel Payments Bank</option>
                <option value="SBI">State Bank of India</option>
                <option value="AU">AU Small Finance Bank</option>
                <option value="Axis">Axis Bank</option>
                <option value="Canara">Canara Bank</option>
              </select>
            </div>
                                <div className="form-group">
                                    <label htmlFor="amount" >Amount:</label>
                                    <input type="number" className="form-control" id="amount" placeholder="Enter amount" required />
                                    </div>
                                    <button type="submit" className="btn btn-primary" >Recharge</button>
                                    </div>
                                    </form>
                </div>
            </div>
        </div>
       </div>
    );
}