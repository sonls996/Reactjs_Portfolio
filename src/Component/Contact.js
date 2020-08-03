import React, { Component } from 'react';
import { Letter } from './Letter';
import { Alert } from 'react-bs-notifier';
import { connect } from 'react-redux';
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state={
            isShow:true
        }
    }
    isChange = (event)=>{
        let name = event.target.name;
        let text= event.target.value;
        this.setState({
            [name]:text
        })
        
    }
    sendData = (e)=>{
        e.preventDefault();
        
        if(localStorage.getItem("userMessage")===null){
            return localStorage.setItem("userMessage","[]");
        } 
        var letter = JSON.parse(localStorage.getItem("userMessage"));
       
        var tinnhan = {};
        tinnhan.name = this.state.fName;
        tinnhan.email= this.state.fMail;
        tinnhan.message= this.state.fMessage;
        
        if(!tinnhan.name || !tinnhan.email || !tinnhan.message){
            
            this.props.failAlert();
            setTimeout(()=> this.props.hiddenAlert(),2000);
            
            // localStorage.setItem("color","");
        } else{
            letter.push(tinnhan);
            localStorage.setItem("userMessage",JSON.stringify(letter));
            this.props.showAlert();
            setTimeout(()=> this.props.hiddenAlert(),4000);
            console.log("Gửi tin nhắn thành công");
            
            // localStorage.setItem("color","");
            // Để lại thông báo 
        }
    }
    render() {
        return (
            <section>
                {/* contact start*/}
                <div id="contact" className="contact">
                    <div className="contact-wrap w100 w-md90 w-sm90 w-xs80 mg0a">
                        {/* contact me*/}
                        <div className="contact-wrap__gettouch">
                            <div className="contact-wrap__gettouch__title">
                                <h1 style={{ position: 'relative', textAlign: 'left' }} className="tieude td">Contact me</h1>
                                <p>
                                    When you sleep and I am awake for the future</p>
                            </div>
                            <div className="contact-wrap__gettouch__info">
                                {/*item*/}
                                <div className="contact-wrap__gettouch__info-item">
                                    <div className="contact-wrap__gettouch__info-item__icon">
                                        <i className="fas fa-phone" />
                                    </div>
                                    <div className="contact-wrap__gettouch__info-item__contact">
                                        <span>Phone</span>
                                        <p> +84 : 398473263</p>
                                    </div>
                                </div>
                                <div className="contact-wrap__gettouch__info-item">
                                    <div className="contact-wrap__gettouch__info-item__icon">
                                        <i className="far fa-envelope" />
                                    </div>
                                    <div className="contact-wrap__gettouch__info-item__contact">
                                        <span>Email</span>
                                        <p> sonlhepuit@gmail.com</p>
                                    </div>
                                </div>
                                <div className="contact-wrap__gettouch__info-item">
                                    <div className="contact-wrap__gettouch__info-item__icon">
                                        <i className="fas fa-university" />
                                    </div>
                                    <div className="contact-wrap__gettouch__info-item__contact">
                                        <span>Location</span>
                                        <p> Phu Do,Ha Noi</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact-wrap__contact">
                            <div className="contact-wrap__contact-wrap">
                                <form >
                                    <div className="ipu">
                                        <input
                                        onChange={ (event)=> this.isChange(event)}
                                         type="text" name="fName"  placeholder="Your name" required />
                                        <input
                                        onChange={ (event)=> this.isChange(event)}
                                         type="text" name="fMail"  placeholder="Your email" required />
                                    </div>
                                    <textarea onChange={(event)=> this.isChange(event)} name="fMessage"  cols={40} rows={10} placeholder="Your message" required defaultValue={""} />
                                    <div>
                                    <input
                                    onClick={ (e)=> this.sendData(e)}
                                     type="submit"   defaultValue="SEND MASSAGE" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* contact end*/}

            </section>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showAlert: () => {
            dispatch({
                type:"ALERT_ON",
                alertContent:"Gửi tin nhắn thành công",
                colorAlert:"#f5f5f5",
            })
        },
        failAlert: () => {
            dispatch({
                type:"ALERT_ON",
                alertContent:"Bạn chưa điền đủ thông tin, xin vui lòng thử lại !",
                colorAlert:"#d8000096",
            })
        },
        hiddenAlert: () => {
            dispatch({
                type:"ALERT_OFF"
            })
        },
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        isShowAlert: state.isShowAlert,
        colorAlert:state.colorAlert
    }
}
 export default connect( mapStateToProps,mapDispatchToProps)(Contact)
