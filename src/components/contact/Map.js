
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const Map = () => {
    return(
        <div id='map' className='map-wrap'>
        <div className="info-map">
          Foued Amami,
          <br />
          Ezzahra, Tunis, Tunisia<br />
          <br />
          <span>
            <a href='mailto:amamifoued8@gmail.com' target='_blank' rel='noreferrer'>amamifoued8@gmail.com</a>
          </span>
        </div>
        <MapContainer center={[36.740493, 10.302977]} zoom={13} scrollWheelZoom={false} >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[36.740493, 10.302977]}>
            </Marker>
          </MapContainer>
        </div>
        
    )
}

export default Map