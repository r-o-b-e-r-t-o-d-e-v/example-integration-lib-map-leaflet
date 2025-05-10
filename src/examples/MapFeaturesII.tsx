import 'leaflet/dist/leaflet.css';
import {MapContainer, Marker, Polyline, Popup, TileLayer, Tooltip} from "react-leaflet";
import getGeographicCenter from "../utils/MapUtilities.ts";

export default function MapFeaturesII() {

    interface LocationsCoordinates {
        madrid: [number, number];
        barcelona: [number, number]
        bilbao: [number, number]
    }

    const coords: LocationsCoordinates = {
        madrid: [40.4168, -3.7038],
        barcelona: [41.3851, 2.1734],
        bilbao: [43.2630, -2.9350]
    }

    return <div className={`
        w-full
        h-[50vh]
        flex items-center justify-center
        bg-blue-100/80
    `}>
        <div className={`
            w-[80%]
            h-[80%]
            flex items-center justify-center
            border-1 border-black/10
            bg-black/5
        `}>
            <MapContainer
                /*
                    The 'getGeographicCenter' method is simple a support
                    method whose goal is to always set as the center of
                    the map the center point among all the marker points
                 */
                center={getGeographicCenter(Object.values(coords))}
                zoom={6}
                scrollWheelZoom={true}
                touchZoom={true}
                zoomSnap={0.7}
                attributionControl={false}
                className={`w-full h-full`}
            >
                <TileLayer
                    attribution='&copy; <a href="https://carto.com/">CARTO</a> | &copy; OpenStreetMap contributors'
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                />
                <Marker position={coords.madrid}>
                    <Popup>Madrid</Popup>
                    <Tooltip>Madrid</Tooltip>
                </Marker>
                <Marker position={coords.barcelona}>
                    <Popup>Barcelona</Popup>
                    <Tooltip>Barcelona</Tooltip>
                </Marker>
                <Marker position={coords.bilbao}>
                    <Popup>Bilbao</Popup>
                    <Tooltip>Bilbao</Tooltip>
                </Marker>
                <Polyline positions={[coords.madrid, coords.barcelona]} color="#ee4433" />
                <Polyline positions={[coords.barcelona, coords.bilbao]} color="red" pathOptions={{
                    color: 'blue',
                    dashArray: '4, 8',
                    weight: 3,
                }}/>
            </MapContainer>
        </div>
    </div>
}
