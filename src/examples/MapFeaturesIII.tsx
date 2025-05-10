import 'leaflet/dist/leaflet.css';
import {MapContainer, Marker, Popup, TileLayer, Tooltip} from "react-leaflet";
import getGeographicCenter from "../utils/MapUtilities.ts";
import L from 'leaflet';

export default function MapFeaturesIII() {

    interface LocationsCoordinates {
        berlin: [number, number]
        hamburg: [number, number]
        munich: [number, number]
        koln: [number, number]
    }

    const coords: LocationsCoordinates = {
        berlin: [52.5200, 13.4050],
        hamburg: [53.5511, 9.9937],
        munich: [48.1351, 11.5820],
        koln: [50.9375, 6.9603],
    }

    const customImageIcon = new L.Icon({
        iconUrl: '/custom-marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [0, -32],
        tooltipAnchor: [15, -28],
        // // Line below can be uncommented if you want to add css
        // className: "custom-marker-icon"
    });

    const customCircleIcon = new L.DivIcon({
        popupAnchor: [5, -10],
        tooltipAnchor: [20, 0],
        className: 'custom-icon',
        html: '<div style="background-color: #DF2222; width: 20px; height: 20px; border-radius: 50%;"></div>',
    });

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
            {/*/!*   ************************************************* *!/*/}
            {/*   /!*This block is a small hack to tint all the markers   *!/*/}
            {/*/!*   ************************************************* *!/*/}
            {/*<style>*/}
            {/*    {`*/}
            {/*      .leaflet-marker-icon {*/}
            {/*        filter: hue-rotate(150deg) saturate(1.45) brightness(1);*/}
            {/*      }*/}
            {/*    `}*/}
            {/*</style>*/}
            <MapContainer
                /*
                    The 'getGeographicCenter' method is simple a support
                    method whose goal is to always set as the center of
                    the map the center point among all the marker points
                 */
                center={getGeographicCenter(Object.values(coords))}
                zoom={5}
                scrollWheelZoom={true}
                touchZoom={true}
                zoomSnap={0.7}
                attributionControl={false}
                className={`w-full h-full`}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={coords.berlin}>
                    <Popup>Berlin</Popup>
                    <Tooltip>Berlin</Tooltip>
                </Marker>
                <Marker position={coords.hamburg} icon={customCircleIcon}>
                    <Popup>Hamburg</Popup>
                    <Tooltip>Hamburg</Tooltip>
                </Marker>
                <Marker position={coords.munich} icon={customImageIcon}>
                    <Popup>Munich</Popup>
                    <Tooltip>Munich</Tooltip>
                </Marker>
                <Marker position={coords.koln}>
                    <Popup>Koln</Popup>
                    <Tooltip>Koln</Tooltip>
                </Marker>
            </MapContainer>
        </div>
    </div>
}
