import { useNavigate } from "react-router-dom";
 // goHome.js
export function goHome(navigate, e) {
    e.preventDefault();
    navigate("/home");
  }
  
export function handleRecharge(e){
    e.preventDefault();
    alert("Recharge Successful");
    }