import React from "react";

function Account() {

  const user = {
    name: "Yuvraj Nirwan",
    email: "yuvi@example.com",
    phone: "+91-9876543210",
    joined: "March 2024",
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 pt-5">
      <div className="card shadow-sm p-4">
        <h3 className="mb-4 text-center">My Account</h3>
        <ul className="list-group list-group-flush mb-3">
          <li className="list-group-item">
            <strong>Name:</strong> {user.name}
          </li>
          <li className="list-group-item">
            <strong>Email:</strong> {user.email}
          </li>
          <li className="list-group-item">
            <strong>Phone:</strong> {user.phone}
          </li>
          <li className="list-group-item">
            <strong>Member Since:</strong> {user.joined}
          </li>
        </ul>
        <div className="d-flex justify-content-between">
          <button className="btn btn-primary">Edit Profile</button>
          <button className="btn btn-outline-danger">Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Account;
