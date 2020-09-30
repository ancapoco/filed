import React, { useState} from 'react';

const FormComponent = (props) => {
    const [checked, setChecked] = useState(false);
    return(
         <div style={{...props.style}}>
             <p style={{textAlign:'center',
                     fontSize:34,
                     fontFamily:'Roboto serif'
             }}>Let's start</p>
             <div style={{textAlign:'center'}}>
                 <p>Fill out the form and we'll get in touch to get your trial set up.</p>
             </div>

             <div style={{marginLeft:77, marginTop:85.5}}>
                 <p style={{fontSize: 22,
                 fontFamily:'Roboto'
                 }}>Do you want to make ads that convert?</p>
                 <div style={{flexDirection:"row", marginTop: 21,justifyContent:'space-between' , flex:1}}>
                     <label style={{marginTop: 19}}>
                         <input type="radio" value="yes"
                         />
                         Yes
                     </label>
                     <label>
                         <input type="radio" value="no"/>
                         No
                     </label>
                 </div>
                 <p style={{marginTop: 47,
                        fontSize:18,
                        fontFamily:'Roboto'
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
                 <button style={{marginBottom: 50,width: 521,
                     height: 48,backgroundColor:'#FF6E4E', color:'white',
                     boxShadow: '0 4 8 #00000029',
                     borderRadius: 10

                 }}>GET STARTED</button>
             </div>

         </div>
    );
}

export default FormComponent;
