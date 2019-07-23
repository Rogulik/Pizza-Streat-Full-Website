import React,{useState} from 'react'
import {Map,GoogleApiWrapper,Marker,InfoWindow} from 'google-maps-react'
import icon from '../img/baseline-local_pizza-24px.svg'
import '../styles/GoogleMap.scss'


  

const GoogleMap = ({google}) => {
    const mapStyles = {
        width: '100%',
        height: '50rem',
        position:'relative'
        
      };
    const [positions, setPositions] = useState([
            {latitude: 14.5786,
             longitude: 121.1222,
             name: '205 ipil street St. Joseph Subd., Cainta Rizal'
            },
            {latitude: 14.588720467350932,
             longitude: 121.09727248549461,
             name: '2 nd flr ACM bldg., Sta. lucia cor. De castro ave Ortigas ext. Pasig City'
            },
            {latitude: 14.609456787642669,
             longitude: 121.09350264072418,
             name: 'Sitio Batong Dalig Avenue, Corner Market Avenue and Rizal Avenue, 1920 Taytay, Rizal'
            },
            {latitude: 14.559755,
             longitude: 121.135244,
             name: 'MRt avenue corner st mary street central signal p14 zone 3B taguig cty blck 9 lot 14 Al'
            },
            {latitude: 14.569157,
             longitude: 121.034613,
             name: '727 E. Pantaleon Rd., Hulo 1550 Mandaluyong, Philippines'
            }
    ])
    const [controlWindow,setControlWindow] = useState({
        showingInfoWindow: false,
        activeMarker:{},
        selectedPlace:{name:''}
    })
    const onMarkerClick = (props,marker,e) => {
        setControlWindow({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        })
    }
    const onClose = props => {
        if(controlWindow.showingInfoWindow){
            setControlWindow({
                showingInfoWindow: false,
                 activeMarker: null,
                 selectedPlace: {}
            })
        }

    }

    const displayMarkers = () => {
        return positions.map((position, index) => {
            return <Marker key={index} id={index} position={{
                lat: position.latitude,
                lng: position.longitude
            }}
            icon={{
                    url: icon,
                    fillColor: '#00CCBB',
                    fillOpacity: 1,
                    strokeColor: '',
                    strokeWeight: 0
                }}
            onClick={onMarkerClick}
            name={position.name || ''}
            />
        })
    }
    
    return (
        <div className='GoogleMap__container'>
        <Map 
            google={google}
            zoom={12}
            style={mapStyles}
            initialCenter={{lat:14.611776,lng:121.035866}}
        >

            {displayMarkers()}
            <InfoWindow
             marker={controlWindow.activeMarker}
            visible={controlWindow.showingInfoWindow}
            onClose={onClose}
            >
                <div>
                    <h4>{controlWindow.selectedPlace.name}</h4>
                </div>
        </InfoWindow>
        </Map>
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBTdXW8ZlNelyJBKPw4FzvRnUiqANI3t4c'
  })(GoogleMap);