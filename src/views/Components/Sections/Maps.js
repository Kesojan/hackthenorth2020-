import React from "react";

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class Maps extends React.Component {
    render() {
      return (
        <div class="map-container">
        <iframe width='100%' height="600" justifyContent="center" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.ch/maps?f=q&amp;source=s_q&amp;hl=de&amp;geocode=&amp;q=Bern&amp;aq=&amp;sll=28.9285745,77.09149350000007&amp;sspn=3.379772,8.453979&amp;ie=UTF8&amp;hq=&amp;hnear=Bern&amp;t=m&amp;z=12&amp;ll=28.9285745,77.09149350000007&amp;output=embed&amp;iwloc=near"></iframe>
    
    </div> 
        
      );
    }
  }
   
  export default GoogleApiWrapper({
    apiKey: ("AIzaSyDkwYkoNGpMSbCV3OtqCpty_ZYW46_QfA0")
  })(Maps)
  
  /*

<Map google={this.props.google} zoom={14}>
   
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
          <InfoWindow onClose={this.onInfoWindowClose}>
          </InfoWindow>
        </Map>


  */