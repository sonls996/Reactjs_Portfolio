import React, { Component } from 'react';
import { Alert, AlertContainer } from "react-bs-notifier";
import { connect } from 'react-redux';
import styled from 'styled-components';

var ContentWrapper = styled.div`
  padding:20px 40px;
  background-color: ${JSON.parse(localStorage.getItem("color"))};
  color:white;
  box-shadow: 0 0 5px 2px #ccc;
  text-align:center;
  line-height:60px;
`
class AlertInfomation extends Component {
    turnOff = ()=>{
        this.props.showOffAlert();
    }

    showForm = ()=>{
        if(localStorage.getItem("color")!== null){
            return <AlertContainer>
            <Alert  onDissmiss={ ()=> this.turnOff()}  type="success" >
            <ContentWrapper>
            {this.props.alertContent}
            </ContentWrapper>
           
            </Alert>
        </AlertContainer>
        }
    }
    render() {
        if(this.props.isShowAlert === false){
            return null;
        } 
        return (
            <div>
                {this.showForm()}
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        isShowAlert: state.isShowAlert,
        colorAlert : state.colorAlert,
        alertContent: state.alertContent,
        
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showOffAlert: () => {
            dispatch("ALERT_OFF")
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AlertInfomation)
