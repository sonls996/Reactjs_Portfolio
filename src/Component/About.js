import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <section>

                {/* about start*/}
                <div id="about" className="about">
                    <div className="about-wrap">
                        <div style={{ padding: '30px 0' }} className="tieude "><a className="td tdcrtn" href="#">about me</a></div>
                        <div className="about-wrap-contain df w100 w-md90 w-sm90 w-xs80">
                            <div className="about-wrap-contain-info  col-lg-6 col-md-6 col-sm-6 col-xs-100 mg0a   ">
                                <h5>Howdy !</h5>
                                <p>You’ve gotta dance like there’s nobody watching,Love like you’ll never be hurt,Sing like there’s nobody listening,And live like it’s heaven on earth.</p>
                                <div className="buttonn ttfu"><a className="tdcrtn" href="#">download my cv <i className="fas fa-cloud-download-alt" /></a></div>
                            </div>
                            <div className="about-wrap-contain-skill  col-lg-6 col-md-6 col-sm-6 col-xs-12   ">
                                <div className="about-wrap-contain-skill-wrap   w80 w-md80 w-sm80 w-xs80 w-xs100">
                                    {/* skill contain*/}
                                    <div className="skill-bar">
                                        <div className="skill-bar-title df">
                                            <span style={{ width: '80%' }}>HTML/CSS/SASS/SCSS</span> <span>80%</span>
                                        </div>
                                        <div className="skill-bar-count">
                                            <div className="skill html" />
                                        </div>
                                    </div>
                                    {/* skill contain*/}
                                    <div className="skill-bar">
                                        <div className="skill-bar-title df">
                                            <span style={{ width: '60%' }}>JAVASCRIPT/JQUERY</span> <span>60%</span>
                                        </div>
                                        <div className="skill-bar-count">
                                            <div className="skill js" />
                                        </div>
                                    </div>
                                    {/* skill contain*/}
                                    <div className="skill-bar">
                                        <div className="skill-bar-title df">
                                            <span style={{ width: '60%' }}>RESPONSIVE WEB DESIGN</span> <span>60%</span>
                                        </div>
                                        <div className="skill-bar-count">
                                            <div className="skill design" />
                                        </div>
                                    </div>
                                    {/* skill contain*/}
                                    <div className="skill-bar">
                                        <div className="skill-bar-title df">
                                            <span style={{ width: '50%' }}>REACTJS</span> <span>50%</span>
                                        </div>
                                        <div className="skill-bar-count">
                                            <div className="skill rwd" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* about end*/}

            </section>
        );
    }
}

export default About;
