import React from 'react';
import './MainWeatherWindow.css';

export default class MainWeatherWindow extends React.Component {
  render(props) {
    const Title = this.props.city ? null :<h1 className='title'>Weather Forecast</h1>;

    return (
      <div className='main'>
        <div className='inner-main'>
          {Title}
          <img
            src={
              this.props.data
                ? require(`../images/${this.props.data.icon}.svg`)
                : require('../images/01d.svg')
            }
            alt='sun'
            style={{
              visibility: this.props.city ? 'visible' : 'hidden',
              opacity: this.props.city ? '1' : '0'
            }}
            
          />
          
          

          <div
            className='today'
            style={{
              visibility: this.props.city ? 'visible' : 'hidden',
              opacity: this.props.city ? '1' : '0'
            }}
            
          >
            <h6 style={{
    backgroundColor: 'rgba(0, 255, 255, 0.5)',  // Cyan color with 50% opacity
    borderRadius: '15px',
    padding: '1%',
    color: 'rgba(0, 0, 255, 0.75)' 
    
}}>
    Developed By: AMIT PAL
</h6>
            <span>Today</span>
            <h1>{this.props.city}</h1>
            <p>
              Temperature: {this.props.data ? Math.round(this.props.data.temp - 273.15) : 0}
              °C
            </p>
            <p>{this.props.data ? this.props.data.weather_desc.toLowerCase() : ''}</p>
          </div>
        </div>
        {this.props.children}
      
      </div>
    );
  }
}
