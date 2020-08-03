import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <section>
                {/* footer start*/}
                <footer>
                    <div className="container w90 w-md90 w-sm90 w-xs80 mg0a">
                        <div className="container-row">
                            <div className="container-row-left w-xs100">
                                <a>Copyright © 2019 Bắp Cải</a>
                            </div>
                            <div className="container-row-right w-xs100">
                                <a href="#">facebook</a>
                                <a href="#">twitter</a>
                                <a href="#">email</a>
                                <a href="#">youtube</a>
                            </div>
                        </div>
                    </div>
                </footer>

            </section>
        );
    }
}

export default Footer;
