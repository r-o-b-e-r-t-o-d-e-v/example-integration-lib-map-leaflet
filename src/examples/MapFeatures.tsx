import 'leaflet/dist/leaflet.css';
import {MapContainer, Marker, Popup, TileLayer, Tooltip} from "react-leaflet";

enum TileOption { TILE_A, TILE_B, TILE_C }

export default function MapFeatures() {
    const tileOption: TileOption = TileOption.TILE_C

    interface LocationsCoordinates {
        beijing: [number, number];
        xian: [number, number];
        shanghai: [number, number];
        kunming: [number, number]
    }

    const coords: LocationsCoordinates = {
        beijing: [39.9042, 116.4074],
        xian: [34.26, 108.9398],
        shanghai: [31.2304, 121.4737],
        kunming: [25.038, 102.718]
    }

    function getGeographicCenter(coords: [number, number][]): [number, number] {
        const total = coords.reduce(
            (acc, [lat, lon]) => [acc[0] + lat, acc[1] + lon] as [number, number],
            [0, 0]
        );

        const count = coords.length || 1;

        return [total[0] / count, total[1] / count];
    }

    return <div className={`
        w-full
        h-screen
        flex items-center justify-center
        bg-blue-100/40
    `}>
        <div className={`
            w-[80%]
            h-[40%]
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
                zoom={4}
                scrollWheelZoom={true}
                touchZoom={true}
                zoomSnap={0.7}
                attributionControl={false}
                className={`w-full h-full`}
            >
                {
                    (() => {
                        switch (tileOption) {
                            default:
                            // @ts-ignore
                            case TileOption.TILE_A:
                                return <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                            // @ts-ignore
                            case TileOption.TILE_B:
                                return <TileLayer
                                    attribution='&copy; <a href="https://carto.com/">CARTO</a> | &copy; OpenStreetMap contributors'
                                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                                />
                            case TileOption.TILE_C:
                                return <TileLayer
                                    attribution='&copy; <a href="https://carto.com/">CARTO</a> | &copy; OpenStreetMap contributors'
                                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                                />
                        }
                    })()
                }
                <Marker position={coords.beijing}>
                    <Popup>Beijing</Popup>
                    <Tooltip>Beijing</Tooltip>
                </Marker>
                <Marker position={coords.xian}>
                    <Popup>Xi'an</Popup>
                    <Tooltip>Xi'an</Tooltip>
                </Marker>
                <Marker position={coords.shanghai}>
                    <Popup>Shanghai</Popup>
                    <Tooltip>Shanghai</Tooltip>
                </Marker>
                <Marker position={coords.kunming}>
                    <Popup>Kunming</Popup>
                    <Tooltip>Kunming</Tooltip>
                </Marker>
            </MapContainer>
        </div>
    </div>
}
