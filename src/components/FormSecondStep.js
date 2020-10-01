import React from 'react';
import orangeCicle from "../img/Repeat Grid 2.png";


const FormSecondStep = (props) => {
    return(
        <div style={props.style}>
            <div style={{width:651,
                height: 724,
                boxShadow: '0px 4px 20px #00000029',
                borderRadius: 30,
                backgroundColor:'#FBFBFB',
            }}>
                <br/>
                <br/>
                <br/>
                <br/>
            <h3 style={{
                fontSize: 34,
                textAlign:'center',
                fontFamily: 'Roboto, sans-serif'
            }}>
                We’ll be in touch to get your trial set up.
            </h3>
                <p style={{textAlign:'center',
                    marginTop: 19,
                    fontSize: 19
                }}>
                    Fill Out Form
                </p>
                <div style ={{marginLeft:70}}>
                    <div style={{display: 'flex',
                        flexDirection:'row',
                        marginTop: 20,
                    }}>
                        <input
                            style={{height: 48,
                                width: 246,
                                border: '1px solid #DEDEDE',
                                borderRadius: 10,
                            }}
                            type = "text"
                            name = "firstName"
                            placeholder="First Name *"
                        />
                        <input
                            style={{height: 48,
                                width: 246,
                                border: '1px solid #DEDEDE',
                                borderRadius: 10,
                                marginLeft: 18
                            }}
                            type = "text"
                            name = "lastName"
                            placeholder="Last Name*"
                        />
                    </div>
                    <div style={{display:'flex',
                        flexDirection:'column',
                        marginRight:70}}>
                        <input
                            style={{marginTop:40,
                                height: 48,
                                border: '1px solid #DEDEDE',
                                borderRadius: 10,
                            }}
                            name = "email"
                            placeholder="Work Email*"
                        />
                        <input
                            style={{marginTop:40,
                                height: 48,
                                border: '1px solid #DEDEDE',
                                borderRadius: 10,
                            }}
                            name = "budget"
                            placeholder="Monthly Advertising Budget *"
                        />
                        <input
                            style={{marginTop:40,
                                height: 48,
                                border: '1px solid #DEDEDE',
                                borderRadius: 10,
                            }}
                            type = "number"
                            name = "phone"
                            placeholder="Romania (Roman)"
                        />
                    </div>
                    <button style={{
                        marginTop: 64,
                        width: 521,
                        height: 48,
                        backgroundColor: '#FF6E4E',
                        boxShadow: '0px 4px 20px #00000029',
                        borderRadius: 10,
                        color: 'white',
                        border: '1px solid #DEDEDE',
                        fontSize: 20,
                        fontFamily: "Roboto, sans-serif",
                        fontWeight: 'bold'
                    }}>
                        GET FREE TRIAL
                    </button>
                </div>
            </div>
        </div>
    );
}


export default FormSecondStep;
