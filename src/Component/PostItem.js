import React, { Component } from 'react';

class PostItem extends Component {
    render() {
        return (
            <div className="myblog-wrap-row-item">
                <div className="myblog-wrap-row-item__img">
                    <img src={this.props.url} alt="" />
                </div>
                <div className="myblog-wrap-row-item__info">
                    <div className="myblog-wrap-row-item__info-time"> <i className="fas fa-calendar-alt" />{this.props.date}
          </div>
                    <div className="myblog-wrap-row-item__info-cmt"> <i className="far fa-comments" /> {this.props.comment}</div>
                </div>
                <div className="myblog-wrap-row-item__txt">
                    <span>{this.props.title}</span>
                    <a href="#">+</a>
                </div>
            </div>
        );
    }
}

export default PostItem;
