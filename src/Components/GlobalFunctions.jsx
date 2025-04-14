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

    export function goFastTag(navigate, e) {
        e.preventDefault();
        navigate("/fast-recharge");
      }
export function goMobileRecharge(navigate, e) {
        e.preventDefault();
        navigate("/mobo-recharge");
      }
export function goDTHRecharge(navigate, e) {
        e.preventDefault();
        navigate("/dth-recharge");
      }
      export function goBroadbandRecharge(navigate, e) {
        e.preventDefault();
        navigate("/internet-recharge");
      }
export function goElectricityRecharge(navigate, e) {
        e.preventDefault();
        navigate("/electricity-bill-pay");
      }
export function goGasRecharge(navigate, e) {
        e.preventDefault();
        navigate("/gas-bill-pay");
      }

      export function goAbout(navigate, e) {
        navigate("/about");
      }

      export function goAccount(navigate, e) {
        navigate("/account");
      }