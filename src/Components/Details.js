import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import cookie from 'cookie';


export default function Details(props) {
    const {name, description, address, operatingHours} = props.biz
    const [hidden,isHidden] = useState(true)
    const cookies = cookie.parse(document.cookie)


    return (

        <div style={{width:"400px", 
                    height:"auto", 
                    margin:"auto",
                    border:"1px black solid", 
                    marginTop:"40px", 
                    borderRadius:"10px", 
                    boxShadow:" 0 0 5px",
                    textAlign: "center",
                    }}>
            <div style={{margin:"30px"}}>
                <h1>{name}</h1>
                <p style={{textAlign:"center"}}>{description}</p>
            </div>
            <Button variant="contained" style={{marginBottom: '10px'}} onClick={() => isHidden(!hidden)}>Details</Button>
            {cookies["loggedIn"] && (
                <div>
                    <DeleteIcon/>
                </div>
            )}
                {!hidden && (
                    <div>
                        <h2 style={{textAlign:"center",
                                    }}>{address}</h2>
                        <h2 style={{textAlign:"center"}}>{operatingHours}</h2>
                    </div>
                )}
            
        </div>

    )
}
