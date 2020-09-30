import React from 'react';
import logo from './img/filed-logo-01.png';
import styles from './App.css';
import './index.css';
import circle from './img/Ellipse 8.png';
import FormComponent from "./components/FormComponent";
import orangeCicles from './img/Repeat Grid 2.png';
import group from './img/Group 392.png';
import artboard from './img/Artboard 1.png';

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
                  <div style={{flex: 1}}>
                      <div style={{marginRight: "30px",   zIndex: 999}}>
                            <img src={orangeCicles} />
                      </div>
                      <div style={{height: 366,
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


          <div style={{width:'100%'}}>
              <img src={group} />
          </div>
          <div style={{width:'100%', flexDirection:'row', display: "flex"}}>
              <div style={{flex:1, marginLeft: 158}}>
                <h2>The Benefits of using Filed</h2>
              </div>
              <div style={{flex:1}}>
                <p>Ability to scale using Dexter, our AI-powered marketing genius.</p>
                <p>Client Success Manager who will optimize your Facebook ad campaigns and
                    focus on driving the best possible results for you.</p>
                <p>This is a limited time offer only.</p>
              </div>
          </div>
          <div style={{width:'100%',
              backgroundColor: '#38CCF5',
              flexDirection:'row', display:'flex'}}>
               <div style={{flex:1}}>
                   <p>
                       "It surpassed our expectations"
                   </p>
                   <p>
                   "Filed has completely surpassed our expectations.
                   I will refer everyone I know.
                   Filed is worth much more than I paid."
                   </p>
                   <p>
                       Tania Y. Flexi Content @Hello
                   </p>
               </div>
                <div style={{flex:1}}>
                    <p>
                        “The essential marketing tool”
                    </p>
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
                    <p>
                        “Your company is truly upstanding”
                    </p>
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
              justifyContent:'center',
              textAlign: 'center',
              alignItems:'center'
          }}>
              <div style={{flex:1}}>
                <p style={{color:"white"}}>
                    Copyright © 2020. All Rights Reserved.
                </p>
              </div>
              <div style={{flex:1}}>
                  <button className="button">
                      Home
                  </button>
                  <button className="button">
                      FEATURES
                  </button>
                  <button className="button">
                      TERMS
                  </button>
                  <button className="button">
                      PRIVACY
                  </button>
                  <button className="button">
                      CONTACT US
                  </button>
              </div>
          </div>



      </div>

  );
}

export default App;
