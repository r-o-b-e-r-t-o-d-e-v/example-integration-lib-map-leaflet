import MapFeatures from "../examples/MapFeatures.tsx";
import MapFeaturesII from "../examples/MapFeaturesII.tsx";

export default function App() {
    return <div className={`
        w-full
        h-fit
        bg-blue-200
        flex flex-col items-center justify-center gap-1
    `}
    >
        <MapFeatures/>
        <MapFeaturesII/>
    </div>;
}
