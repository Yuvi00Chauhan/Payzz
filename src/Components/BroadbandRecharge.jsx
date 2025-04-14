import React from "react";
import { handleRecharge } from "./GlobalFunctions";

function BroadbandRecharge() {  
    return ( 
        <div className="container mt-5 FastTag" >
        <div className="row" >
            <div className="col-md-12" >
            <div className="col-md-6 offset-md-3">
                    <h2 className="text-center">Recharge Broadband</h2>
                    <form onSubmit={handleRecharge}>
                        <div className="form-group">    
                            <label for="broadbandNumber">Broadband Number:</label>
                            <input type="text" className="form-control" id="broadbandNumber" placeholder="Enter broadband number" required />
                        </div>
                        <div className="mb-3">
                            <label for="operator" className="form-label">
                                Select Provider
                            </label>
                            <select className="form-select form-group" id="operator" required>
                                <option value="">Select Provider</option>
                                <option value="Airtel">Airtel</option>
                                <option value="Jio">Jio</option>
                                <option value="BSNL">BSNL</option>
                                <option value="ACT">ACT</option>
                                <option value="Hathway">Hathway</option>
                                <option value="Excitel">Excitel</option>

                            </select>
                        </div>
                        <div className="form-group">
                            <label for="rechargeAmount">Recharge Amount:</label>
                            <input type="number" className="form-control" id="rechargeAmount" placeholder="Enter amount" required />
                        </div>
                        <button type="submit" className="btn btn-primary" >Recharge</button>
                    </form>
                </div>
                </div>
            </div>
        </div>

    );
}
export default BroadbandRecharge;