/*
Készíts egy `objectConverter` nevű objektumot, ami az alábbi metódusokkal rendelkezik:
   - "arrayToMap(array)".
   - "arrayToSet(array)".
   - `setToMap(set)`
   - `setToArray(set)`
   - `mapToArray(map)`
   - `mapToSet(térkép)`
A fenti metódok értelemszerűen nem másra szolgálnak, mint az egyik összetett adattípusból konvertálják át az adatokat egy másikba.
Mindegyik metódus visszatérési értéke egy új Array, Map, vagy Set object.
*/

const objectConverter = {
    arrayToMap(array) {
        return new Map(array.map((item, index) => [index, item]))
    }
    arrayToSet(array) {
        return new Set(array);
    }
    setToMap(set) {
        return Array.from(set);
    }
    setToArray(set) {
        return Array.from(set);
    }
    mapToArray(map) {
        return new Map(Array.from(map.values()));
    }
    mapToSet(map) {
        return new Map(Array.from(map.values()));
    }
}

export default objectConverter;
