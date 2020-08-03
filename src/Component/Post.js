import React, { Component } from 'react';
import anh from "../images/blog1.jpg";
import anh2 from "../images/blog2.jpg";
import anh3 from "../images/blog3.jpg";
import PostItem from './PostItem';
var dataPost =[
    {
        id:1,
        date:"April 04,2020",
        comment:" 5 Comments",
        title: " How to Responsive Web Design",
        "url":require("../images/blog1.jpg")
    },
    {
        id:2,
        date:"April 03,2020",
        comment:" 125 Comments",
        title: " How to convert PSD to HTML,CSS",
        "url":require("../images/blog2.jpg")
    },
    {
        id:3,
        date:"April 02,2020",
        comment:" 15 Comments",
        title: " Learn Javascript in 15 minutes",
        "url":require("../images/blog3.jpg")
    }
]
class Post extends Component {
    // showItem = ()=>{
    //     dataPost.map((value,index)=>{
    //         <PostItem></PostItem>
    //     })
    // }
    render() {
        return (
            <section>
                <div id="blog" className="myblog">
                    <div className="myblog-wrap">
                        <div style={{ padding: '30px 0' }} className="myblog-wrap-title">
                            <div className="tieude"><a className="td">my blog</a></div>
                        </div>
                        <div className="myblog-wrap-row ">
                            {/* item*/}
                            
                            {
                                dataPost.map((value,index)=>{
                                return (
                                    <PostItem
                                    id={value.id}
                                    key={value.id}
                                    date={value.date}
                                    comment={value.comment}
                                    title={value.title}
                                    url={value.url}
                                    item={value}
                                    ></PostItem>
                                )
                            })
                            }

                            
                            
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default Post;
