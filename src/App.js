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

function App() {
  return (
      <div>
          <div style={{marginLeft: 158}}>
              <div style={{flex:1, display: "flex", flexDirection: "row"}}>
                  <div style={{flex: 1}}>
                      <div style={{marginTop: 130,
                                  left: 174,
                          width: 158,
                          height: 54,
                          backgroundImage: './img/filed-logo-01.png'}}>
                          <img src={logo} alt="Logo" />
                      </div>
                      <div style={{marginTop: 80,
                                    width: 568,
                                    textAlign: 'left'}}>
                          <h1 style={{fontSize: "44px",
                              fontFamily: "Roboto, serif",
                              lineHeight: "66px",
                              width: "586px",
                          }}>
                              Book a demo today and get two weeks for free. Why?
                          </h1>
                      </div>
                      <div style={{marginTop: "40"}}>
                          <p style={{fontSize:"28px", fontFamily:  "Roboto, serif",
                              lineHeight: "34px", width: "456px"
                          }}>
                              Because Our AI-Powered Software Will Exceed Your Marketing Goals.
                          </p>
                          <div style={{marginTop:144}}>
                              <img src={artboard} />
                          </div>
                      </div>
                  </div>
                  <div style={{flex: 1,}}>
                      <div style={{height: 366,
                          marginTop:118,
                          width: 370,
                          borderRadius: 184,
                          backgroundColor: '#9BE5FA',
                          marginLeft:-105
                      }}/>
                     <FormComponent style={{marginTop: -281,
                         backgroundColor: '#FBFBFB',
                         zIndex: 999,
                         borderRadius: 30,
                         width: 651,
                     }} />
                  </div>
              </div>
          </div>

          <p style={{fontSize: 24,
              color: "#38CCF5",
              marginLeft: 427,
              marginBottom: -90
          }}>Our Offer: Intelligent Automation. Real-time Insights. Unparalleled Results.</p>

          <img src={group} style={{width:'100%'}} />
          <div style={{width:'100%', flexDirection:'row', display: "flex"}}>
              <div style={{flex:1,
                  marginLeft: 158,
                  height:270,
                  marginTop: 110
              }}>
                <h2 style={{fontSize: 34}}>The Benefits of using Filed</h2>
              </div>
              <div style={{flex:1,
                  display:"flex",
                  alignItems:'left',
                  flexDirection:'column',
                  justifyContent: 'center'
              }}>
                  <div style={{display:"flex", flexDirection:"row"}}>
                      <img src={check}/>
                      <p>Ability to scale using Dexter, our AI-powered marketing genius.</p>
                  </div>

                  <div style={{display:"flex", flexDirection:"row"}}>
                      <img src={check}/>
                      <p>Client Success Manager who will optimize your
                          Facebook ad campaigns and focus on driving the best
                          possible results for you.</p>
                  </div>
                  <div style={{display:"flex", flexDirection:"row"}}>
                      <img src={check}/>
                      <p>This is a limited time offer only.</p>
                  </div>
              </div>
          </div>
          <div style={{width:'100%',
              backgroundColor: '#38CCF5',
              flexDirection:'row',
              display:'flex',
              height: 469,
          }}>
               <div style={{flex:1, textAlign:'center', justifyContent:'center', marginLeft:174}}>
                   <div style={{display:"flex", flexDirection:"row",
                       marginTop: 98}}>
                       <img src={icon}/>
                       <p style={{color:"white",
                           fontFamily:'Roboto',
                           fontSize:24,
                            textAlign:"left",
                           width:215
                       }}>
                           "It surpassed our expectations"
                       </p>
                   </div>
                    <div>
                        <p style={{marginTop: 8,
                            textAlign: "left",
                            color:"white",
                            fontSize: 16
                        }}>
                            "Filed has completely surpassed our expectations.
                            I will refer everyone I know.
                            Filed is worth much more than I paid."
                        </p>
                    </div>
                   <div style={{display:"flex",
                       flex:1,
                       flexDirection:"row",
                       alignItems:'center',
                       marginBottom: 55
                   }}>
                        <img src={avatar} style={{width:109, height:109}}/>
                        <p style={{
                           color:"white",
                           marginLeft: 29,
                           textAlign:'left',
                           width: 193,
                           height: 62

                       }}>
                           Tania Y. <br/> Flexi Content @Hello
                       </p>
                   </div>
               </div>
                <div style={{flex:1}}>
                    <div style={{display:"flex", flexDirection:"row"}}>
                        <img src={icon}/>
                        <p>
                            “The essential marketing tool”
                        </p>
                    </div>
                    <p>
                    “Filed is the most valuable business resource we have EVER purchased.
                    I was amazed at the quality of filed.
                    We were treated like royalty.”
                    </p>
                    <p>
                        Jack Francis Manager @ Accidents Direct
                    </p>
                </div>
                <div style={{flex:1}}>
                    <div style={{display:"flex", flexDirection:"row"}}>
                        <img src={icon}/>
                        <p>
                            “Your company is truly upstanding”
                        </p>
                    </div>
                    <p>
                    “The service was excellent.
                    After using filed my business skyrocketed!
                    It really saves me time and effort.”
                    </p>
                    <p>
                        Dawna N. Editor @ Museum of Typography
                    </p>
                </div>
          </div>
          <div style={{width:'100%',
              backgroundColor: '#595957',
              display: "flex",
              flexDirection: 'row',
              justifyContent:'space-between',
              textAlign: 'center',
              alignItems:'center',
              height: 110
          }}>
              <div style={{flex:3}}>
                <p style={{color:"white"}}>
                    Copyright © 2020. All Rights Reserved.
                </p>
              </div>
                  <button style={{flex:1, border: "none", color:"white", backgroundColor:"transparent"}}>
                      Home
                  </button>
                  <button style={{flex:1, border: "none", color:"white", backgroundColor:"transparent"}}>
                      FEATURES
                  </button >
                  <button style={{flex:1, border: "none", color:"white", backgroundColor:"transparent"}}>
                      TERMS
                  </button>
                  <button style={{flex:1, border: "none", color:"white", backgroundColor:"transparent"}}>
                      PRIVACY
                  </button>
                  <button style={{flex:1, border: "none", color:"white", backgroundColor:"transparent"}}>
                      CONTACT US
                  </button>
              <div style={{flex:1}}>
                  <img src={facebook} style={{marginLeft:24}}/>
                  <img src={instagram} style={{marginLeft: 24}}/>
                  <img src={twitter} style={{marginLeft: 24}}/>
              </div>
          </div>
      </div>

  );
}

export default App;
