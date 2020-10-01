import React from 'react';
import orangeCicle from "../img/Repeat Grid 2.png";

const FormFirstStep = (props) => {

    return(
        <div style={{...props.style,boxShadow: '0px 4px 20px #00000029',
            borderRadius: 30,}}>
            <br/>
            <br/>
            <br/>
            <br/>
            <h3 style={{textAlign:'center',
                fontSize:"34px",
                lineHeight: "41px",
                fontFamily:'Roboto, sans-serif',
                fontWeight: 700
            }}>Let's start</h3>

            <p style={{
                fontSize:"20px",
                lineHeight: "24px",
                textAlign:'center',
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 540,
                width: 370,
                marginLeft: 140
            }}>
                Fill out the form and we'll get in touch to get your trial set up.</p>


            <div style={{marginLeft:77, marginTop:86}}>
                <p style={{
                    fontSize: "18px",
                    lineHeight:"22px",
                    fontFamily:'Roboto, sans-serif',
                    fontWeight: 550
                }}>Do you want to make ads that convert?</p>
                <div style={{flexDirection:"row",
                    marginTop: 21,
                    flex:1,
                }}>
                    <label style={{marginTop: 19, }}>
                        <input
                            style={{fontSize: "16px",
                            fontWeight: 500,
                                fontFamily: "Roboto, sans-serif",
                                lineHeight: "19px"
                            }}
                            type="radio" value="yes"
                        />
                        Yes
                    </label>
                    <label>
                        <input
                            style={{marginLeft:174}}
                            type="radio" value="no"/>
                        No
                    </label>
                </div>
                <p style={{marginTop: 47,
                    fontSize:"18px",
                    fontWeight:550,
                    lineHeight:"22px",
                    fontFamily:'Roboto, sans-serif'
                }}>What's your monthly ad budget?</p>
                <div style={{marginTop: 19}}>
                    <select style={{height: 48, width:509, border: '1 solid #DEDEDE',
                        borderRadius: 10}}>
                        <option>Select</option>
                    </select>
                </div>
            </div>
            <div style={{marginTop:101,display: "flex",
                flexDirection: 'row',
                justifyContent:'center',
                textAlign: 'center',
                alignItems:'center'}}>
                <button style={{marginBottom: 50,
                    width: 521,
                    height: 48,
                    backgroundColor:'#FF6E4E',
                    color:'white',
                    boxShadow: '0 4 8 #00000029',
                    borderRadius: 10,
                    fontFamily: "Roboto, sans-serif",
                    fontSize: '20px',
                    lineHeight: '24px',
                    fontWeight: 500
                }}
                onClick={props.onSubmit}>GET STARTED</button>
            </div>
        </div>
    );
}

export default FormFirstStep;
