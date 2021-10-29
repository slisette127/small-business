import React, { useState } from 'react'
import { smallBiz } from '../Data/smallBiz'
import Details from './Details';
import Directions from './Directions'
import { LoadScript } from '@react-google-maps/api';


export default function Listings() {
    const [list, setList] = useState(smallBiz)

    return (
        <div>
            {list.map((biz,index) => (
                <LoadScript
                googleMapsApiKey="AIzaSyAVA4rcMV0PwCwvOOGJz6MjjZYFePJdv-E">
              
                    <Details biz={biz}/>
                    
                </LoadScript>
            ))}
        </div>
    )
}
