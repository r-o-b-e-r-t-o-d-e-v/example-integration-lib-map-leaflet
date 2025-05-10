export default function getGeographicCenter(coords: [number, number][]): [number, number] {
    const total = coords.reduce(
        (acc, [lat, lon]) => [acc[0] + lat, acc[1] + lon] as [number, number],
        [0, 0]
    );

    const count = coords.length || 1;

    return [total[0] / count, total[1] / count];
}
