import React, { Component } from 'react';

class Exp extends Component {
    render() {
        return (
            <section>
                {/*experience start*/}
                <div className="experince">
                    <div className="experince-wrap w100 mg0a ">
                        <div style={{ padding: '30px 0' }} className="tieude talc"><a className="td" >my experince</a></div>
                        <div className="experince-wrap-contain w100 w-md90 w-sm90 w-xs80  mg0a ">
                            {/* 1 row*/}
                            <div className="experince-row df">
                                {/* column thứ nhất*/}
                                <div className="experince-row-col w50 w-md50 w-sm100 w-xs100">
                                    {/*item thứ nhất trong col*/}
                                    <div className="experince-row-col-item df">
                                        <div className="experince-row-col-item-left w-xs100 ">
                                            <span>Behance</span>
                                            <p>2009 - 2013</p>
                                        </div>
                                        <div className="experince-row-col-item-right">
                                            <h1 className="ttfu"> <i className="fas fa-check-circle dai" /> junior high school</h1>
                                            <p>
                                                Join and complete the school curriculum</p>
                                        </div>
                                    </div>
                                    {/* item thứ hai trong col*/}
                                    <div className="experince-row-col-item df">
                                        <div className="experince-row-col-item-left w-xs100 ">
                                            <span>Behance</span>
                                            <p>2012 - 2014</p>
                                        </div>
                                        <div className="experince-row-col-item-right">
                                            <h1 className="ttfu"><i className="fas fa-check-circle" /> high school</h1>
                                            <p>
                                                Join and complete the school curriculum</p>
                                        </div>
                                    </div>
                                </div>
                                {/* column thứ hai*/}
                                <div className="experince-row-col w50 w-md50 w-sm100 w-xs100">
                                    {/*item thứ nhất trong col*/}
                                    <div className="experince-row-col-item df">
                                        <div className="experince-row-col-item-left">
                                            <span>Behance</span>
                                            <p>8-2014 - 12-2019</p>
                                        </div>
                                        <div className="experince-row-col-item-right">
                                            <h1><i className="fas fa-check-circle dai" />Electric University</h1>
                                            <p className="ttfu">
                                                Major in software engineering, Faculty of Information Technology</p>
                                        </div>
                                    </div>
                                    {/* item thứ hai trong col*/}
                                    <div className="experince-row-col-item df">
                                        <div className="experince-row-col-item-left">
                                            <span>Behance</span>
                                            <p>3-2020 - 6-2020</p>
                                        </div>
                                        <div className="experince-row-col-item-right">
                                            <h1><i className="fas fa-check-circle" />Intern Front-end</h1>
                                            <p>- At: I&amp;E VIETNAM TECHNOLOGY EDUCATION and Technology Development </p>
                                            <p className="pt20">- Recognition and Gains:</p>
                                            <p>    + Design and build a communication website for Hanoi University of Culture. </p>
                                            <p className="pt20">    +Technology used : Html/Css/Sass/Javascript/Jquery. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*experience end*/}

            </section>
        );
    }
}

export default Exp;
