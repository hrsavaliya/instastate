import './App.css';
import React from "react";
import {Input} from "antd";
import Odometer from 'react-odometerjs';
import {getSearchData,intervalgetSearchData} from "../../instastate/src/Actions/App";
import pic1 from "../src/Assets/images/newinsta.webp"
import pic2 from "../src/Assets/images/newfacebook.webp"
import pic3 from "../src/Assets/images/newtwitter.png"



class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userData: {},
            searchData : "",
            duplicateSearchData:"",
            selectedUserName: ""
        }

    }

    componentDidMount() {
        const userName = ["kimkardashian","jeelbhanvadiya78","priyankachopra","katrinakaif","urvashirautela","rashmika_mandanna","virat.kohli","cristiano"];
        const Random = userName[Math.floor(Math.random() * userName.length)];
        this.setState({
            selectedUserName:Random
        })
       this.randomUser(Random)

        setInterval(
            async () => {
                const min = 1111111;
                const max = 9999999;
                const rand =  min + (Math.random() * (max-min));
                const data = await intervalgetSearchData(this.state.userData.userName || this.state.duplicateSearchData || Random, rand)
                 data.userName= this.state.searchData
                console.log("sadas", data)
                this.setState({userData: {data}},() => {

                })
            },
            5000
        );
    }

    randomUser =async (Random) =>{
        const min = 1111111;
        const max = 9999999;
        const rand =  min + (Math.random() * (max-min));
        const data = await getSearchData(Random,rand);
        // data.userName= searchData
        this.setState({userData : {data}})
    }

    searchName = (e) => {
        const {value} = e.target;
        this.setState({searchData : value})
        if(e.key === 'Enter' || e.keyCode === 13){
            this.setState({duplicateSearchData: value})
            this.onSubmit();
        }
    };

    onSubmit = async () => {
        const { searchData } = this.state
        const min = 1111111;
        const max = 9999999;
        const rand =  min + (Math.random() * (max-min));
        const data = await getSearchData(searchData,rand);
        data.userName= searchData
        this.setState({userData : data})
    };

    render() {
        const {userData, searchData} = this.state
        const data = userData && userData.data && userData.data.data && userData.data.data.data
        return (
            <>
                <div className="header-container">
                    <nav className="header-navigation">
                        <div className="container">
                            <div className="nav-wrapper">
                                <div id="menu-container">
                                    <a id="logo" href="#"
                                       className="brand-logo center tooltipped hide-on-med-and-down"
                                       data-position="bottom" data-delay={200}
                                       data-tooltip="Click to load a random user!"><span>Insta</span>statistics</a>
                                    <a id="logo" href="#" className="brand-logo left tooltipped hide-on-med-and-up"
                                       data-position="bottom"
                                       data-delay={200}
                                       data-tooltip="Click to load a random user!"><span>Insta</span>statistics</a>
                                    {/*<span><SearchOutlined style={{fontSize:16,color:"black",background:"white"}}/></span>*/}
                                    <Input style={{background:"white", width:"30%", padding:3}} className="ExportsCustomers customersDropdown" name="app"
                                           onChange={this.searchName}
                                           value={searchData}
                                           placeholder="Enter User Name"
                                           onKeyPress={this.searchName}/>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="container">
                    <div style={{marginTop: -365}}>
                        <div className="user-information">
                            <div className="username">
                                {/*<p className="header-subtitle">Live Instagram Statistics</p>*/}
                                {/*<p><span id="profile-name">{data && data.username || this.state.selectedUserName}</span> <span id="verified" className="hide"><i*/}
                                {/*    className="material-icons tooltipped" data-position="right" data-delay={50}*/}
                                {/*    data-tooltip="Verified User">verified_user</i></span></p>*/}
                            </div>
                        </div>
                        <div className="searchresults content">
                            <ul id="search-results">
                            </ul>
                        </div>
                        <div className="content center">
                            <div className="row">
                                <div className="col">
                            <div className="username">
                            <img style={{borderRadius:"25px",height:320}} id="profile-picture" src={(data && data.avatar)  || "./Assets/images/default_avatar.jpg"}
                                 className="circle responsive-img content left"/>
                            </div>
                                </div>
                                <div className="col">
                            <div>
                                <p className="header-subtitle">Live Instagram Statistics</p>
                                <p><span id="profile-name" style={{color:"#000000"}}>{(data && data.username) || this.state.selectedUserName}</span> <span id="verified" className="hide"><i
                                    className="material-icons tooltipped" data-position="right" data-delay={50}
                                    data-tooltip="Verified User">verified_user</i></span></p>
                            </div>
                            <p className="subtitle">Followers</p>
                            <div id="follower-count"><Odometer value={(data && data.followerCount) || 0} format="(,ddd),dd" /></div>
                                    <p style={{display:"inline-flex"}}>
                                <span style={{marginRight:25}}>
                                    <p  className="subtitle"><i className="material-icons">people</i>&nbsp;&nbsp;Following
                                    </p>
                                    <div  id="following-count">{(data && data.followingCount) || 0}</div>
                                </span>
                                <span>
                                    <p className="subtitle"><i className="material-icons">photo_camera</i>&nbsp;&nbsp;Posts
                                    </p>
                                    <div id="posts-count">{data && data.mediaCount || 0}</div>
                                </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="content center">
                            <div className="row">
                                <div className="col s12">
                                    <p className="subtitle"><i className="material-icons">description</i>&nbsp;&nbsp;<span
                                        id="about-title">About {data && data.username || "User"}
</span>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12">
                                    <p id="about-section"><em>{data && data.biography || "No Data Available"}</em></p>
                                </div>
                            </div>
                        </div>
                        <div className="content">
                            <div className="row">
                                <div className="col-sm-12">
                                    <p className="subtitle"><i className="material-icons">share</i>&nbsp;&nbsp;Share</p>
                                    <p className="social-share" style={{marginTop:20}}>
                                    <a style={{
                                        marginTop: 10,
                                        borderRadius: 15,
                                        marginRight:15
                                    }}> <img src={pic1} style={{height:50,width:50}}/></a>
                                        <a style={{
                                            marginTop: 10,
                                            borderRadius: 15,
                                            marginRight:15
                                        }}> <img src={pic2} style={{height:50,width:50}}/></a>
                                        <a style={{
                                            marginTop: 10,
                                            borderRadius: 15
                                        }}> <img src={pic3} style={{height:50,width:50}}/></a>
                                    </p>
                                    <div className="divider"/>
                                    {/*<p>*/}
                                    {/*    Click on the link below to copy it to your clipboard so you can share it with*/}
                                    {/*    others!*/}
                                    {/*    <input type="text" name="url" placeholder="N/A" id="shareURL"*/}
                                    {/*           onClick="this.select(); copyShareLink('site');" readOnly/>*/}
                                    {/*</p>*/}

                                </div>
                                <div className="col-sm-12">
                                    <div className="divider"/>
                                    <p className="subtitle"><i className="material-icons">domain</i>&nbsp;&nbsp;Follow Us
                                    </p>
                                    <p style={{display: "flex", marginTop: 15}}><a id="about-section-url" href="#">
                                    </a>

                                        <a style={{
                                            height: 24,
                                            fontSize: 10,
                                            background: "#1b95e0"
                                        }} className="waves-effect waves-dark btn btn-rounded twitter"
                                           href="https://twitter.com/Instastatistics"
                                           data-show-count="false"><i style={{
                                            marginTop: -10, verticalAlign: "sub",
                                        }}
                                                                      className="fa fa-twitter"/>Follow @Instastatistics</a>
                                        <a style={{
                                            height: 24,
                                            fontSize: 10,
                                            marginLeft: 10,
                                            background: "#1b95e0"
                                        }} className="waves-effect waves-dark btn btn-rounded twitter"
                                           href="https://twitter.com/BjarnBronsveld"
                                           data-show-count="false"><i style={{
                                            marginTop: -10, verticalAlign: "sub",
                                        }}
                                                                      className="fa fa-twitter"/>Follow @BjarnBronsveld</a>

                                    <a style={{
                                        height: 24,
                                        fontSize: 10,
                                        marginLeft: 10,
                                    }} className="waves-effect waves-dark btn btn-rounded twitter"
                                       href="https://twitter.com/BjarnBronsveld"
                                       data-show-count="false"><i style={{
                                        marginTop: -10, verticalAlign: "sub",
                                    }}
                                                                  className="fa fa-like"/>vind ik leuk</a> <a
                                    style={{
                                        height: 24,
                                        fontSize: 10,
                                        marginLeft: 10,
                                    }} className="waves-effect waves-dark btn btn-rounded twitter"
                                    href="https://twitter.com/BjarnBronsveld"
                                    data-show-count="false"><i style={{
                                    marginTop: -10, verticalAlign: "sub",
                                }}
                                                               className="fa fa-like"/>Delen</a>
                                    </p>
                                    <div className="fb-like" data-href="https://instastatistics.com"
                                         data-layout="button_count"
                                         data-action="like" data-size="small" data-show-faces="true" data-share="true">
                                        <p/>
                                    </div>
                                    <p>
                                    </p>


                                    {/*<i className="fa fa-twitter"><i className="fa fa-facebook"><i className="fa fa-instagram">*/}
                                    {/*</i></i></i>*/}
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="center container grey-text text-darken-4">
                        <p style={{marginTop: 50, color: "grey"}}>
                            Copyright &copy; 2021 <a href="https://evolve.social/">Evolve Social</a> - All rights reserved.
                            |
                            Instastatistics is not affiliated with nor
                            endorsed by Instagram or any of its affiliates or subsidiaries.<br/>
                            By using our service, you agree to our <a href="#">Privacy and Cookie
                            Policy</a>
                        </p>
                    </div>
                </div>
            </>
        )
    }
}

export default App;
