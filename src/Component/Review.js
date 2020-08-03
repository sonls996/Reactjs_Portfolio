import React, { Component } from 'react';
import anhtien from '../images/person_4.jpg'
class Review extends Component {
    render() {
        return (
            <section>
                {/*Giấy chứng thực, nhận xét đánh giá*/}
                <div className="nhanxet">
                    <div className="nhanxet-wrap w100 w-md90 w-sm90 w-xs80 mg0a  ">
                        <div style={{ padding: '30px 0' }} className="tieude"><a href="#" className="td">Testimonial</a></div>
                        <div className="nhanxet-wrap-contain col-lg-8 col-md-8 col-sm-8 col-xs-12 mg0a ">
                            <div className="nhanxet-wrap-contain-img mg0a">
                                <img src={anhtien} alt="" />
                            </div>
                            <div className="nhanxet-wrap-contain-info">
                                <h1 className="ttfu talc">Le Duc Tien</h1>
                                <h5 className="ttfu talc">Technology Manager</h5>
                                <p className="talc">
                                    Hard to learn knowledge, always take the initiative in the work of the company, actively contributing to improve the company's products. Cheerful enthusiasm and sociable with the company colleagues..
        </p>
                                <div className="dotted">
                                    <span />
                                    <span />
                                    <span />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default Review;
