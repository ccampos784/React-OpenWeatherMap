import React, {Component} from 'react'
import Weather from './components/Weather'
import WeatherSearchForm from './components/WeatherSearchForm'
import LoadingSpinner from './components/LoadingSpinner'

class App extends Component {
  constructor() {
    super()

    this.state = {
      zipCode: "",
      lat: "",
      lon: "",
      isLoading: false,
      errorLoading: false,
      errorLoadingMessage: "",
      loadedWeatherData: false,
      weatherData: {}
    }
  }

  getWeather = (searchType) => {
    const apiKey = '468ffc583cec4c456bd1c8f3a510548b'
    const apiURLBase = 'https://api.openweathermap.org/data/2.5/weather?appid=' + apiKey +'&units=imperial';
    const apiURLCoord = apiURLBase + '&lat=' + this.state.lat + '&lon=' + this.state.lon;
    const apiURLZip = apiURLBase + '&zip=' + this.state.zipCode.trim();

    let apiURL = "";

    this.setState({
      isLoading: true,
      errorLoading: false,
      loadedWeatherData: false,
      errorLoadingMessage: ''     
    })

    if(searchType === 'zip') {
      apiURL = apiURLZip;
    } else if (searchType === 'coord') {
      apiURL = apiURLCoord;
    }

    fetch(apiURL)
      .then(
        response => response.json().then( resp => {
            if (response.status > 200) {
            
              this.setState({
                errorLoading: true,
                errorLoadingMessage: resp.message
              })
            } 

            return resp
        })
      )
      .then(response => {

        setTimeout(() => {
          this.setState({
            isLoading: false
          })
  
          if (!this.state.errorLoading) {
            
            this.setState({
              weatherData: response,
              loadedWeatherData: true
            })
  
            console.log(response)
          }
        
        }, 500)
      })    
  }

  handleZipCodeChange = (event) => {

    this.setState({
      zipCode: event.target.value 
    })
  }

  searchZipCode = (event) => {
    event.preventDefault();

    this.getWeather('zip');
  }

  searchLocation = (event) => {
    event.preventDefault()

    this.getLocation();
  }

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.loadPosition);
    } else {
      console.log('Not supported');
    }
  }

  loadPosition = (pos) => {
    this.setState({
      lat: pos.coords.latitude,
      lon: pos.coords.longitude 
    })

    this.getWeather('coord');
  } 

  componentDidMount() {
    this.getLocation();
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <WeatherSearchForm 
              zipCode = {this.state.zipCode} 
              searchZipCode={this.searchZipCode} 
              getLocation={this. searchLocation} 
              handleZipCodeChange = {this.handleZipCodeChange} />
          
          {
            this.state.isLoading && 
            <div className='row'>
              <div className='col-sm-12'>
                <LoadingSpinner />
              </div>
            </div>
          }        

          {
            this.state.errorLoading && 
            <div className='row'>
              <div className='col-sm-12'>
                <h3>Error loading: { this.state.errorLoadingMessage }</h3>
              </div>
            </div>            
          }  

          {
            this.state.loadedWeatherData && 
            <Weather weatherData={this.state.weatherData} />           
          }
        </div>
            
      </div>
    );
  }
}

export default App;
