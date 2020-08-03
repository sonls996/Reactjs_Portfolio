import React, { Component } from 'react';
import imgbanner  from "../images/bg_son_2.png"
class Banner extends Component {
    render() {
        return (
            <section>
                {/* me start*/}
                <div className="me">
                    <div className="me-wrap">
                        <div className="me-wrap-info dfgiua  ">
                            <div className="me-wrap-info-contain ">
                                <h5 className="ttfu">Hello, My name is</h5>
                                <h1 className="ttfu">Le Hong Son</h1>
                                <p>I'm 24 years old, currently living and working in Hanoi.</p>
                                <div className="buttonn">
                                    <a className="tdcrtn ttfu talc  dfgiua" href="#portfolio">my work</a>
                                </div>
                            </div>
                        </div>
                        <div className="me-wrap-img">
                            <img src={imgbanner} alt="Bạn Lê Hồng Sơn" title=" Bạn Lê Hồng Sơn" />
                        </div>
                    </div>
                </div>
                {/* me end*/}

            </section>
        );
    }
}

export default Banner;
