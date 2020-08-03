// import {createStore} from "redux";
// import { createStore } from 'redux';
 var redux = require("redux");
const portfolioInitialState = {
    isKaka:true,
    isShowAlert: false
}
  const allReducer = (state = portfolioInitialState, action) => {
    switch (action.type) {
        case "ALERT_ON":
            
                localStorage.setItem("color",JSON.stringify(action.colorAlert));
            
            return {...state,isShowAlert:true,alertContent:action.alertContent,colorAlert:action.colorAlert}
        case "ALERT_OFF":
            return {...state,isShowAlert:false}
            case "TEST":
            console.log("thành công");
                return {...state}
        default:
            return {...state}
    }
  }
    var  store = redux.createStore(allReducer);
   
    // store.subscribe(()=>{
    //     console.log("Store changed : ", store.getData())
    // })
export default store;