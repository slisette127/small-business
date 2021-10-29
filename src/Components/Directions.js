import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};


function Directions(props) {

    const {latitude, longitude} = props

    console.log("props: "+props.latitude)

    return (
    
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat:+latitude, lng: +longitude}}
        zoom={15}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    
  )
}



export default Directions
