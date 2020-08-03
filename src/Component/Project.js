import React, { Component } from 'react';

class Project extends Component {
    render() {
        return (
            <section>
                {/*Portfolio start*/}
                <div id="portfolio" className="portfolio">
                    <div className="portfolio-wrap w100 w-md90 w-sm90 w-xs80 mg0a ">
                        <div style={{ paddingTop: '30px' }} className="tieude"><a href="/" className="td">my portfolio</a></div>
                        <div className="portfolio-wrap-contain">
                            {/* danh sách các mục*/}
                            <div className="cacmuc talc">
                                <a className="ttfu tdcrtn " href="/">web</a>
                                <a className="ttfu tdcrtn " href="/">all</a>
                                <a className="ttfu tdcrtn " href="/">design</a>
                                <a className="ttfu tdcrtn " href="/">new</a>
                            </div>
                            {/*- list sản phẩm đã làm của bắp*/}
                            <div className="portfolio-wrap-contain-cuc">
                                {/* row trên*/}
                                <div className="row df  ">
                                    <div className="col col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                        <div className="hi">
                                            <div style={{ height: '100%' }} className="col-item">
                                                <img src="./images/port1.jpg" alt="" />
                                                <div className="overlay"><a target="_blank" href="https://sonls996.github.io/karikhp009-gmail.com/"><i className="fas fa-link" /></a></div>
                                                <div className="moredetail">
                                                    <div className="text">
                                                        <h5>Travel Kit</h5>
                                                        <p>Bootstrap 4/ HTML/CSS</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                        <div style={{ flexDirection: 'column', justifyContent: 'space-between' }} className="hi df">
                                            <div className="col-item">
                                                <img src="./images/port2.jpg" alt="" />
                                                <div className="overlay"> <a href="/"><i className="fas fa-link" /></a></div>
                                                <div className="moredetail">
                                                    <div className="text">
                                                        <h5>Thám Hiểm Sơn Đòng</h5>
                                                        <p>Bootstrap 4/HTML/CSS</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ height: '50%' }} className="col-item">
                                                <img src="./images/port3.jpg" alt="" />
                                                <div className="overlay"><a href="/"><i className="fas fa-link" /></a></div>
                                                <div className="moredetail">
                                                    <div className="text">
                                                        <h5>Hào Hùng Sử Ta</h5>
                                                        <p>Bootstrap 4</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                        <div className="hi">
                                            <div style={{ height: '100%' }} className="col-item">
                                                <img src="./images/port4.jpg" alt="" />
                                                <div className="overlay"><a href="/"><i className="fas fa-link" /></a></div>
                                                <div className="moredetail">
                                                    <div className="text">
                                                        <h5>Đại Học Văn Hóa Hà Nội</h5>
                                                        <p>Bootstrap 4</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*row dưới*/}
                                <div className="row df">
                                    <div className="col col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                        <div style={{ flexDirection: 'column', justifyContent: 'space-between' }} className="hi df">
                                            <div style={{ marginBottom: '5px' }} className="col-item">
                                                <img src="./images/port5.jpg" alt="" />
                                                <div className="overlay"><a target="_blank" href="https://sonls996.github.io/Restaurant-Hotel/"><i className="fas fa-link" /></a></div>
                                                <div className="moredetail">
                                                    <div className="text">
                                                        <h5>Luxury Restaurant</h5>
                                                        <p>Bootstrap 4</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ height: '50%' }} className="col-item">
                                                <img src="./images/port6.jpg" alt="" />
                                                <div className="overlay"><a target="_blank" href="https://sonls996.github.io/Restaurant-Hotel/"><i className="fas fa-link" /></a>
                                                </div>
                                                <div className="moredetail">
                                                    <div className="text">
                                                        <h5>Luxury Hotel</h5>
                                                        <p>Bootstrap 4</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                        <div className="hi">
                                            <div style={{ height: '100%' }} className="col-item">
                                                <img src="./images/port7.jpg" alt="" />
                                                <div className="overlay"><a target="_blank" href="https://sonls996.github.io/Restaurant-Hotel/company.html"><i className="fas fa-link" /></a></div>
                                                <div className="moredetail">
                                                    <div className="text">
                                                        <h5>My Company</h5>
                                                        <p>Bootstrap 4/HTML/CSS/JS</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                        <div className="hi">
                                            <div style={{ height: '100%' }} className="col-item">
                                                <img src="./images/port8.jpg" alt="" />
                                                <div className="overlay"><a target="_blank" href="https://sonls996.github.io/Restaurant-Hotel/"><i className="fas fa-link" /></a></div>
                                                <div className="moredetail">
                                                    <div className="text">
                                                        <h5>Interior Design</h5>
                                                        <p>Bootstrap 4/HTML/CSS/JS</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Portfolio end*/}

            </section>
        );
    }
}

export default Project;
