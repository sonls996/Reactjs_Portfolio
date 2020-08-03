import React, { Component } from 'react';

class Service extends Component {
    render() {
        return (
            <section>
                {/*My service start*/}
                <div id="service" className="myservice">
                    <div className="myservice-wrap">
                        <div className="myservice-wrap-title">
                            <a className="td tieude talc" href="#">my service</a>
                        </div>
                        <div className="myservice-wrap-row">
                            {/* 1 item trong row service*/}
                            <div className="myservice-wrap-row-item col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="boccc">
                                    <div className="myservice-wrap-row-item__icon">
                                        <i className="fas fa-laptop" />
                                    </div>
                                    <div className="myservice-wrap-row-item__title">html/css/javascript</div>
                                    <div className="myservice-wrap-row-item__txt">Convert file PSD to HTML/CSS/JS
          </div>
                                </div>
                            </div>
                            {/* 1 item trong row service*/}
                            <div className="myservice-wrap-row-item col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="boccc">
                                    <div className="myservice-wrap-row-item__icon">
                                        <i className="far fa-heart" />
                                    </div>
                                    <div className="myservice-wrap-row-item__title">sass/scss</div>
                                    <div className="myservice-wrap-row-item__txt">
                                        Organize Css code with Sass/Scss
          </div>
                                </div>
                            </div>
                            {/* 1 item trong row service*/}
                            <div className="myservice-wrap-row-item col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="boccc">
                                    <div className="myservice-wrap-row-item__icon">
                                        <i className="fas fa-crosshairs" />
                                    </div>
                                    <div className="myservice-wrap-row-item__title">jquery/bootstrap</div>
                                    <div className="myservice-wrap-row-item__txt">
                                        Use the libraries available to the project
          </div>
                                </div>
                            </div>
                            {/* 1 item trong row service*/}
                            <div className="myservice-wrap-row-item col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="boccc">
                                    <div className="myservice-wrap-row-item__icon">
                                        <i className="fab fa-wordpress-simple" />
                                    </div>
                                    <div className="myservice-wrap-row-item__title">ReactJs</div>
                                    <div className="myservice-wrap-row-item__txt">
                                        Knowledge of reactjs
          </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*My service end*/}

            </section>
        );
    }
}

export default Service;
