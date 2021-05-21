import React , { useState } from 'react'
import './popup.css'
import 'reactjs-popup/dist/index.css';
import { Fab } from '@material-ui/core';


function NewPop(props) {

    const [Buttonpopup , setButtonpopup] = useState(true);

    
    
    return (Buttonpopup) ? (
        
        <div className="popup" onClick={() => setButtonpopup(false)}>
            <div className="popup-inner">
                <button className="close-btn" onClick={() => setButtonpopup(false)}>X</button>
                <div className="content">
                    {' '}
                    <h1>Ketto Crowdfunding</h1>
                    <h3>#WeStandTogether - Oxygen Support for 10K+ Vulnerable Families</h3>
                    <br />
                    The aim of the project is to provide emergency oxygen support for all the 10K Vulnerable Families in all the 6 urban poor settlements, where we are conducting 'Covid19 Relief Project' from the past 8 months in association with Azim Premji Foundation (APF), BBMP & Govt. of Karnataka.
                    <br />
                    <br />
                    <a
                        class="thm-btn yellowcolor"
                        href="https://www.ketto.org/fundraiser/westandtogether-oxygen-support-for-10k-vulnerable-families?payment=form"
                        title=""
                        itemprop="url"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none"}}
                    >Click to know more</a>
                </div>
                { props.children }
            </div>
        </div>
    ) 
    :
    "";
}

export default NewPop
