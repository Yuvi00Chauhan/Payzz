import React from "react";
import { handleRecharge } from "./GlobalFunctions";
function ElectricityBill() {
    return (
        <div className="container mt-5 FastTag" >
            <div className="row" >
                <div className="col-md-12" >
                    <div className="col-md-6 offset-md-3">
                        <h2 className="text-center">Electricity Bill Payment</h2>
                        <form onSubmit={handleRecharge}>
                            <div className="form-group">    
                                <label htmlFor="consumerNumber">Consumer Number:</label>
                                <input type="text" className="form-control" id="consumerNumber" placeholder="Enter consumer number" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="operator" className="form-label">
                                    Select Provider
                                </label>
                                <select className="form-select form-group" id="operator" required>
                                    <option value="">Select Provider</option>
                                    <option value="Tata Power">Tata Power</option>
                                    <option value="Adani Electricity">Adani Electricity</option>
                                    <option value="BSES Rajdhani">Noida Power Company Limited (NPCL)</option>
                                    <option value="BSES Yamuna">Uttar Pradesh Power Corporation Ltd (UPPCL)</option>
                                    <option value="Reliance Energy">Reliance Energy</option>
                                    <option value="MSEDCL">Maharashtra State Electricity Distribution Co. Ltd.</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="billAmount">Bill Amount:</label>
                                <input type="number" className="form-control" id="billAmount" placeholder="Enter amount" required />
                            </div>
                           <button type="submit" className="btn btn-primary">Pay Bill</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ElectricityBill;