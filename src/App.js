import React from 'react';
import logo from './img/filed-logo-01.png';
import './index.css';
import FormComponent from "./components/FormComponent";
import group from './img/Group 392.png';
import artboard from './img/Artboard 1.png';
import twitter from './img/twitter.svg';
import facebook from './img/facebook (1).svg';
import instagram from './img/instagram.svg';
import icon from './img/Icon material-format-quote.svg';
import avatar from './img/avatar.png';
import check from './img/Icon awesome-check.svg';
import bigCircle from './img/Ellipse 11.svg';
import mediumCircle from './img/Ellipse 10.svg';
import smallCircle from './img/Ellipse 9.svg';


function App() {

  return (
      <div>
          <div style={{marginLeft: 158}}>
              <div style={{flex:1, display: "flex", flexDirection: "row"}}>
                  <div style={{flex: 1}}>
                      <div style={logoStyle}>
                          <img src={logo} alt="Logo" />
                      </div>
                      <div style={{marginTop: 80, width: 568, textAlign: 'left'}}>
                          <p style={text1}>Book a demo today and get two weeks for  {'\t'}
                              <span style={{color:'#38CCF5'}}>free</span>. Why?
                          </p>
                      </div>
                      <div style={{marginTop: "40"}}>
                          <p style={text2}>Because Our AI-Powered Software Will Exceed Your Marketing Goals.</p>
                          <div style={{marginTop:144}}>
                              <img src={artboard} alt="Art board"/>
                          </div>
                      </div>
                  </div>
                  <div style={{flex: 1}}>
                      <img
                          style={{marginLeft: -200, marginBottom: -536}}
                          src={bigCircle} alt="White Circle" />
                      <img
                          style={{marginLeft:-144, marginBottom: -586}}
                          src={mediumCircle} alt="White Circle" />
                      <img
                          style={{marginLeft: -104, marginBottom: -626}}
                          src={smallCircle} alt="WHiteCircle" />

                      <div style={container}/>
                     <FormComponent style={formComponent} />
                  </div>
              </div>
          </div>
          <p style={text3}>Our Offer: Intelligent Automation. Real-time Insights. Unparalleled Results.</p>
          <img src={group} style={{width:'100%'}} alt="Group"/>
          <div style={{width:'100%', flexDirection:'row', display: "flex"}}>
              <div style={container1}>
                <p style={text4}>The  {'\t'}
                    <span style={{color:'#38CCF5'}}>
                     Benefits
                    </span>
                    {'\t'} of using Filed</p>
              </div>
              <div style={container2}>
                  <div style={{display:"flex", flexDirection:"row"}}>
                      <img style={{marginLeft: 60}}
                          src={check} alt="Check"/>
                      <p style={text5}>
                          Ability to scale using Dexter, our AI-powered marketing genius.</p>
                  </div>

                  <div style={{display:"flex", flexDirection:"row"}}>
                      <img style={{marginLeft: 60}}
                          src={check} alt="Check"/>
                      <p style={text6}>
                          Client Success Manager who will optimize your
                          Facebook ad campaigns and focus on driving the best
                          possible results for you.</p>
                  </div>
                  <div style={{display:"flex", flexDirection:"row"}}>
                      <img style={{marginLeft: 60}}
                          src={check} alt="Check"/>
                      <p style={text5}>
                          This is a limited time offer only.</p>
                  </div>
              </div>
          </div>
          <div style={container3}>
               <div style={{ width: 340, color:'white'}}>
                   <div style={container5}>
                       <img src={icon} alt="Icon"/>
                       <p style={text7}>
                           "It surpassed our expectations"
                       </p>
                   </div>
                    <div>
                        <p style ={text8}>
                            "Filed has completely surpassed our expectations.
                            I will refer everyone I know.
                            Filed is worth much more than I paid."
                        </p>
                    </div>
                   <div style={container4}>
                        <img src={avatar} style={{width:108, height:108}} alt="Avatar"/>
                        <div style={{marginLeft:20}}>
                            <p style={text9}>
                               Tania Y.
                            </p>
                            <p style={text10}>
                                Flexi Content @Hello
                            </p>
                       </div>
                   </div>
               </div>

                <div style={{ width:340,  color:'white'}}>
                    <div style={container5}>
                        <img src={icon} alt="Icon"/>
                        <p style={text7}>
                            “The essential marketing tool”
                        </p>
                    </div>
                    <p style ={text8}>
                    “Filed is the most valuable business resource we have EVER purchased.
                    I was amazed at the quality of filed.
                    We were treated like royalty.”
                    </p>
                    <div style={container4}>
                        <img src={avatar} style={{width:108, height:108}} alt="Avatar"/>
                            <div style={{marginLeft:20}}>
                                <p style={text9}>
                                    Jack Francis
                                </p>
                                <p style={text10}>
                                    Manager @ Accidents Direct
                                </p>
                            </div>
                    </div>
                </div>


                <div style={{width:340,  color:'white'}}>
                    <div style={container5}>
                        <img src={icon} alt="Icon"/>
                        <p  style={text7}>
                            “Your company is truly upstanding”
                        </p>
                    </div>
                    <p style ={text8}>
                    “The service was excellent.
                    After using filed my business skyrocketed!
                    It really saves me time and effort.”
                    </p>
                    <div style={container4}>
                        <img src={avatar} style={{width:108, height:108}} alt="Avatar"/>
                        <div style={{marginLeft:20}}>
                            <p style={text9}>
                                Dawna N.
                            </p>
                            <p style={text10}>
                                Editor @ Museum of Typography
                            </p>
                        </div>
                    </div>
                </div>
          </div>



          <div style={container6}>
              <div style={{flex:3,
              }}>
                <p style={footerText}>
                    Copyright © 2020. All Rights Reserved.
                </p>
              </div>
                  <button style={footerButton}>
                      HOME
                  </button>
                  <button style={footerButton}>
                      FEATURES
                  </button >
                  <button style={footerButton}>
                      TERMS
                  </button>
                  <button style={footerButton}>
                      PRIVACY
                  </button>
                  <button style={footerButton}>
                      CONTACT US
                  </button>
              <div style={{flex:1, marginRight: 140}}>
                  <img src={facebook} style={{marginLeft:24}} alt="Facebook"/>
                  <img src={instagram} style={{marginLeft: 24}} alt="Instragram"/>
                  <img
                      src={twitter} style={{marginLeft: 24}} alt="Twitter"/>
              </div>

          </div>
      </div>

  );
}
const footerButton = {
    flex:1,
    border: "none",
    color:"white",
    backgroundColor:"transparent",
    fontSize: "18px",
    fontFamily: "Roboto, sans-serif",
    lineHeight: "22px",
}
const footerText = {
    color:"white",
    fontFamily: "Roboto, sans-serif",
    fontSize: "18px",
    fontWeight:500,
    lineHeight: "22px",
    marginLeft: 160
}
const logoStyle = {
    marginTop: 130,
    left: 174,
    width: 158,
    height: 54,
    backgroundImage: './img/filed-logo-01.png'}

const text1 = {
    fontSize: "44px",
    fontFamily: "Roboto, sans-serif",
    lineHeight: "66px",
    fontWeight: 540
}
const text2 = {
    fontSize:"28px",
    fontFamily:  "Roboto, sans-serif",
    lineHeight: "34px",
    width: "456px",
    fontWeight: 540
}
const container = {
    height: 366,
    marginTop:118,
    width: 370,
    borderRadius: 184,
    backgroundColor: '#9BE5FA',
    marginLeft:-115
}
const formComponent = {
    marginRight: 188,
    marginTop: -281,
    backgroundColor: '#FBFBFB',
    zIndex: 999,
    borderRadius: 30,
    width: 651,
}
const text3 = {
    fontSize: "34px",
    lineHeight: "41px",
    color: "#38CCF5",
    marginLeft: 450,
    marginBottom: -310,
    marginTop: 270,
    fontFamily: "Roboto , sans-serif",
    letterSpacing: "0px",
    fontWeight: 550
}
const container1 = {
    flex:1,
    marginLeft: 180,
    height:270,
    marginTop: 110
}
const text4 = {
    fontSize: "34px",
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 550,
    lineHeight: "43px",
}
const container2 = {
    flex:1,
    display:"flex",
    flexDirection:'column',
    justifyContent: 'center',
}
const text5 = {
    marginLeft:45,
    fontSize:"20px",
    lineHeight: "28px",
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 540
}
const text6 = {
    marginLeft:45,
    fontSize:"20px",
    lineHeight: "28px",
    textAlign:'left',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 540,
    width:628
}
 const container3 = {
     width:'100%',
     backgroundColor: '#38CCF5',
     flexDirection:'row',
     display:'flex',
     height: 468,
     justifyContent:'space-around',
     alignItems:'center',
     alignContent: 'center'
 }
  const text7 = {
      marginLeft: 46,
      fontSize:"24px",
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 500,
      lineHeight: "29px"
  }
  const text8 = {
      textAlign: 'left',
      fontFamily:"Roboto, sans-serif",
      fontSize: "16px",
      lineHeight: "26px",
      fontWeight: 500
  }
   const text9 = {
       fontSize:"18px",
       lineHeight: "22px",
       fontFamily:"Roboto, sans-serif",
       fontWeight: 700
   }
    const text10 = {
        fontSize: "16px",
        fontFamily:"Roboto, sans-serif",
        lineHeight: "28px",
        fontWeight: 500,
        fontStyle:"italic",
    }
    const container4 = {
        display:"flex",
        flexDirection:"row",
        marginTop: 24
    }
    const container5 = {
        display:"flex",
        flexDirection:"row",
        justifyContent:'space-around',
    }
    const container6 = {
        width:'100%',
        backgroundColor: '#595957',
        display: "flex",
        flexDirection: 'row',
        justifyContent:'space-between',
        textAlign: 'center',
        alignItems:'center',
        height: 110
    }
export default App;
