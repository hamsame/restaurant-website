import React, { Component } from 'react'
import Navbar from './Navbar'
// import { GoogleApiWrapper } from 'google-maps-react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

class Contact extends Component {
  render() {
    var mapstyle = {
      width: '80%',
      height: '30%',
      margin: '0 auto',
    }
    document.title = 'Hill | Contact'
    return (
      <>
        <div>
          <Navbar />
          <div className='contact-section'>
            <div className='details'>
              <h3>London</h3>
              <ul>
                <li>123 High Street</li>
                <li>London, LDN 123</li>
                <li>info@example.com</li>
                <li>0208 123 456 78</li>
              </ul>
            </div>
            <div className='form'>
              <form>
                <label htmlFor='firstName'>First Name : </label>
                <input type='text' name='firstName' id='firstName' />
                <label htmlFor='lastName'>Last Name : </label>
                <input type='text' name='lastName' id='lastName' />
                <label htmlFor='email'>Email : </label>
                <input type='text' name='email' id='email' />
                <label htmlFor='message'>Message : </label>
                <textarea name='message' id='message'></textarea>
                <button className='btn'>Submit</button>
              </form>
            </div>
          </div>
          <div style={{ margin: '2rem 10%', textAlign: 'center' }}>
            <h4>Visit Us</h4>
            <br />
            <br />
            <Map
              google={this.props.google}
              containerStyle={mapstyle}
              initialCenter={{
                lat: 51.504501,
                lng: -0.0865,
              }}
              zoom={14}
            >
              <Marker onClick={this.onMarkerClick} name={'Current location'} />
              <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
            </Map>
          </div>
        </div>
        <p style={{ padding: '13rem 0 0' }}></p>
      </>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBTC5jEhlrDv9PaDMKNdnQ5gZQ_BI_RlHY',
})(Contact)
