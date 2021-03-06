import { LatLng } from "react-native-maps";

/* 
This is a a constants file, containing all the enums, types and interfaces for the mock data and other stuff that doesn't belong in a component.
*/

//Regex from UK .GOV website https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/488478/Bulk_Data_Transfer_-_additional_validation_valid_from_12_November_2015.pdf
export const PostcodeRegex: string =
  "([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))s?[0-9][A-Za-z]{2})";

export enum SearchBarMessages {
  Default = "Postcode or Beach Search",
  ValidationError = "invalid postcode...",
  Exception = "an error occured...",
}

//enum of acceptable map types for MapView
export enum MapTypes {
  standard = "standard",
  satellite = "satellite",
  hybrid = "hybrid",
}

export const PostcodeApiUrl: string = "https://api.postcodes.io/postcodes/";

export const DefaultLatDelta = 0.003;

export const DefaultLongDelta = 0.002;

export const InitialMapLocation = {
  latitude: 50.706461814683735,
  longitude: -1.909446157515049,
  latitudeDelta: DefaultLatDelta,
  longitudeDelta: DefaultLongDelta,
};

export enum BeachRiskLevel {
  VeryHigh = "Very High",
  High = "High",
  Medium = "Medium",
  Low = "Low",
  VeryLow = "Very Low",
}

export interface MockBeachItem {
  beachKey: number;
  beachName: string;
  latitude: number;
  longitude: number;
  mapPolygon: LatLng[];
  riskLevel: BeachRiskLevel;
}

export const MockData: MockBeachItem[] = [
  {
    beachKey: 1,
    beachName: "Branksome Chine",
    latitude: 50.706461814683735,
    longitude: -1.909446157515049,
    mapPolygon: [
      { latitude: 50.701568, longitude: -1.9193 },
      { latitude: 50.702009, longitude: -1.918463 },
      { latitude: 50.704218, longitude: -1.914107 },
      { latitude: 50.705202, longitude: -1.911902 },
      { latitude: 50.706058, longitude: -1.910175 },
      { latitude: 50.706337, longitude: -1.909478 },
      { latitude: 50.7083, longitude: -1.904412 },
      { latitude: 50.709984, longitude: -1.899597 },
      { latitude: 50.711259, longitude: -1.895434 },
      { latitude: 50.711938, longitude: -1.893546 },
      { latitude: 50.711639, longitude: -1.893546 },
      { latitude: 50.710633, longitude: -1.896593 },
      { latitude: 50.710036, longitude: -1.89831 },
      { latitude: 50.709015, longitude: -1.90171 },
      { latitude: 50.708118, longitude: -1.904285 },
      { latitude: 50.706814, longitude: -1.907589 },
      { latitude: 50.706352, longitude: -1.908791 },
      { latitude: 50.705482, longitude: -1.910808 },
      { latitude: 50.705129, longitude: -1.911452 },
      { latitude: 50.70333, longitude: -1.915154 },
      { latitude: 50.7017, longitude: -1.918201 },
      { latitude: 50.701292, longitude: -1.918802 },
    ],
    riskLevel: BeachRiskLevel.VeryLow,
  },
  {
    beachKey: 2,
    beachName: "Sandbanks Beach",
    latitude: 50.6882118692494,
    longitude: -1.937926858663559,
    mapPolygon: [
      { latitude: 50.683336, longitude: -1.946157 },
      { latitude: 50.683084, longitude: -1.945942 },
      { latitude: 50.683418, longitude: -1.945599 },
      { latitude: 50.683519, longitude: -1.945298 },
      { latitude: 50.683547, longitude: -1.945041 },
      { latitude: 50.68371, longitude: -1.944644 },
      { latitude: 50.683839, longitude: -1.944376 },
      { latitude: 50.683825, longitude: -1.943893 },
      { latitude: 50.683737, longitude: -1.943485 },
      { latitude: 50.683853, longitude: -1.943002 },
      { latitude: 50.68409, longitude: -1.94296 },
      { latitude: 50.684362, longitude: -1.942713 },
      { latitude: 50.684818, longitude: -1.941683 },
      { latitude: 50.686126, longitude: -1.939428 },
      { latitude: 50.686697, longitude: -1.938452 },
      { latitude: 50.686894, longitude: -1.93857 },
      { latitude: 50.687044, longitude: -1.938377 },
      { latitude: 50.687984, longitude: -1.937197 },
      { latitude: 50.688181, longitude: -1.937358 },
      { latitude: 50.690151, longitude: -1.934811 },
      { latitude: 50.696782, longitude: -1.926059 },
      { latitude: 50.701213, longitude: -1.91885 },
      { latitude: 50.701566, longitude: -1.919322 },
      { latitude: 50.699084, longitude: -1.923537 },
      { latitude: 50.698514, longitude: -1.92401 },
      { latitude: 50.694871, longitude: -1.929631 },
      { latitude: 50.690041, longitude: -1.936298 },
      { latitude: 50.687268, longitude: -1.93986 },
      { latitude: 50.687051, longitude: -1.939731 },
      { latitude: 50.684803, longitude: -1.94295 },
      { latitude: 50.684709, longitude: -1.942883 },
      { latitude: 50.684097, longitude: -1.944139 },
      { latitude: 50.683791, longitude: -1.945179 },
      { latitude: 50.683363, longitude: -1.946102 },
    ],
    riskLevel: BeachRiskLevel.Low,
  },
  {
    beachKey: 3,
    beachName: "Bournemouth Beach",
    latitude: 50.71518479061355,
    longitude: -1.8755205720663068,
    mapPolygon: [
      { latitude: 50.711931, longitude: -1.893497 },
      { latitude: 50.712869, longitude: -1.89045 },
      { latitude: 50.713834, longitude: -1.886695 },
      { latitude: 50.715185, longitude: -1.879588 },
      { latitude: 50.71691, longitude: -1.870576 },
      { latitude: 50.717927, longitude: -1.863149 },
      { latitude: 50.718662, longitude: -1.857719 },
      { latitude: 50.719005, longitude: -1.853983 },
      { latitude: 50.718665, longitude: -1.853855 },
      { latitude: 50.718027, longitude: -1.860006 },
      { latitude: 50.71766, longitude: -1.862666 },
      { latitude: 50.717252, longitude: -1.866495 },
      { latitude: 50.716845, longitude: -1.869607 },
      { latitude: 50.716342, longitude: -1.871924 },
      { latitude: 50.715649, longitude: -1.876022 },
      { latitude: 50.715092, longitude: -1.878662 },
      { latitude: 50.713965, longitude: -1.884734 },
      { latitude: 50.713122, longitude: -1.888017 },
      { latitude: 50.711668, longitude: -1.893317 },
      { latitude: 50.711886, longitude: -1.893446 },
    ],
    riskLevel: BeachRiskLevel.VeryHigh,
  },
  {
    beachKey: 4,
    beachName: "Boscombe Beach",
    latitude: 50.71910878328881,
    longitude: -1.8430524319410324,
    mapPolygon: [
      { latitude: 50.718333, longitude: -1.853985 },
      { latitude: 50.718985, longitude: -1.853943 },
      { latitude: 50.718496, longitude: -1.852054 },
      { latitude: 50.718767, longitude: -1.849951 },
      { latitude: 50.718985, longitude: -1.847591 },
      { latitude: 50.719256, longitude: -1.845445 },
      { latitude: 50.719365, longitude: -1.842527 },
      { latitude: 50.719691, longitude: -1.837377 },
      { latitude: 50.720101, longitude: -1.828939 },
      { latitude: 50.72021, longitude: -1.824905 },
      { latitude: 50.720318, longitude: -1.820742 },
      { latitude: 50.72059, longitude: -1.81718 },
      { latitude: 50.720264, longitude: -1.81276 },
      { latitude: 50.720101, longitude: -1.807953 },
      { latitude: 50.720101, longitude: -1.806751 },
      { latitude: 50.720753, longitude: -1.806794 },
      { latitude: 50.72096, longitude: -1.815609 },
      { latitude: 50.72096, longitude: -1.821789 },
      { latitude: 50.720851, longitude: -1.831037 },
      { latitude: 50.720579, longitude: -1.83447 },
      { latitude: 50.720036, longitude: -1.843311 },
      { latitude: 50.719384, longitude: -1.851071 },
      { latitude: 50.719058, longitude: -1.853732 },
    ],
    riskLevel: BeachRiskLevel.High,
  },
  {
    beachKey: 5,
    beachName: "Southbourne Beach",
    latitude: 50.719336973998466,
    longitude: -1.7928347736597061,
    mapPolygon: [
      { latitude: 50.720098, longitude: -1.806628 },
      { latitude: 50.719935, longitude: -1.802637 },
      { latitude: 50.719446, longitude: -1.799333 },
      { latitude: 50.719174, longitude: -1.796655 },
      { latitude: 50.718739, longitude: -1.793393 },
      { latitude: 50.718373, longitude: -1.788871 },
      { latitude: 50.717938, longitude: -1.785481 },
      { latitude: 50.717869, longitude: -1.783962 },
      { latitude: 50.717814, longitude: -1.782245 },
      { latitude: 50.717597, longitude: -1.780057 },
      { latitude: 50.717271, longitude: -1.77834 },
      { latitude: 50.718195, longitude: -1.77834 },
      { latitude: 50.718195, longitude: -1.781344 },
      { latitude: 50.718303, longitude: -1.783833 },
      { latitude: 50.71863, longitude: -1.786494 },
      { latitude: 50.718956, longitude: -1.78967 },
      { latitude: 50.719726, longitude: -1.795678 },
      { latitude: 50.72027, longitude: -1.80057 },
      { latitude: 50.720596, longitude: -1.802544 },
      { latitude: 50.72065, longitude: -1.80366 },
      { latitude: 50.720704, longitude: -1.804347 },
      { latitude: 50.720813, longitude: -1.805033 },
      { latitude: 50.720813, longitude: -1.805462 },
      { latitude: 50.720867, longitude: -1.805977 },
    ],
    riskLevel: BeachRiskLevel.Medium,
  },
  {
    beachKey: 6,
    beachName: "Hengistbury Head",
    latitude: 50.71507079143355,
    longitude: -1.759541854262352,
    mapPolygon: [
      { latitude: 50.717291, longitude: -1.778202 },
      { latitude: 50.717128, longitude: -1.775884 },
      { latitude: 50.717128, longitude: -1.775369 },
      { latitude: 50.716911, longitude: -1.77288 },
      { latitude: 50.716259, longitude: -1.767645 },
      { latitude: 50.714784, longitude: -1.761 },
      { latitude: 50.713425, longitude: -1.754735 },
      { latitude: 50.711686, longitude: -1.749413 },
      { latitude: 50.711143, longitude: -1.748984 },
      { latitude: 50.711632, longitude: -1.748726 },
      { latitude: 50.712501, longitude: -1.748126 },
      { latitude: 50.714132, longitude: -1.74495 },
      { latitude: 50.714675, longitude: -1.744907 },
      { latitude: 50.71549, longitude: -1.744435 },
      { latitude: 50.71598, longitude: -1.744092 },
      { latitude: 50.716958, longitude: -1.743405 },
      { latitude: 50.717284, longitude: -1.743062 },
      { latitude: 50.71799, longitude: -1.742418 },
      { latitude: 50.718642, longitude: -1.741946 },
      { latitude: 50.719458, longitude: -1.741345 },
      { latitude: 50.720218, longitude: -1.741002 },
      { latitude: 50.720979, longitude: -1.740744 },
      { latitude: 50.721577, longitude: -1.740315 },
      { latitude: 50.722555, longitude: -1.740015 },
      { latitude: 50.724348, longitude: -1.739285 },
      { latitude: 50.72375, longitude: -1.740658 },
      { latitude: 50.723424, longitude: -1.74113 },
      { latitude: 50.722935, longitude: -1.740916 },
      { latitude: 50.722392, longitude: -1.741045 },
      { latitude: 50.721468, longitude: -1.741602 },
      { latitude: 50.720762, longitude: -1.741817 },
      { latitude: 50.720055, longitude: -1.742289 },
      { latitude: 50.719023, longitude: -1.742976 },
      { latitude: 50.718208, longitude: -1.743405 },
      { latitude: 50.717121, longitude: -1.74422 },
      { latitude: 50.716088, longitude: -1.744907 },
      { latitude: 50.714838, longitude: -1.745851 },
      { latitude: 50.712882, longitude: -1.748984 },
      { latitude: 50.713588, longitude: -1.753544 },
      { latitude: 50.71473, longitude: -1.757964 },
      { latitude: 50.71549, longitude: -1.761526 },
      { latitude: 50.716311, longitude: -1.765471 },
      { latitude: 50.7168, longitude: -1.768346 },
      { latitude: 50.717072, longitude: -1.769805 },
      { latitude: 50.717561, longitude: -1.774183 },
      { latitude: 50.717887, longitude: -1.777144 },
      { latitude: 50.717995, longitude: -1.777659 },
    ],
    riskLevel: BeachRiskLevel.Low,
  },
  {
    beachKey: 7,
    beachName: "Avon Beach",
    latitude: 50.729052675300935,
    longitude: -1.7342767864465714,
    mapPolygon: [
      { latitude: 50.726853, longitude: -1.737128 },
      { latitude: 50.726635, longitude: -1.736613 },
      { latitude: 50.727179, longitude: -1.73554 },
      { latitude: 50.727776, longitude: -1.734982 },
      { latitude: 50.728646, longitude: -1.734038 },
      { latitude: 50.729949, longitude: -1.732493 },
      { latitude: 50.731525, longitude: -1.730176 },
      { latitude: 50.732774, longitude: -1.72803 },
      { latitude: 50.734024, longitude: -1.724039 },
      { latitude: 50.734567, longitude: -1.722108 },
      { latitude: 50.734893, longitude: -1.722065 },
      { latitude: 50.734664, longitude: -1.723202 },
      { latitude: 50.734487, longitude: -1.723738 },
      { latitude: 50.734127, longitude: -1.725123 },
      { latitude: 50.733937, longitude: -1.725553 },
      { latitude: 50.73357, longitude: -1.726636 },
      { latitude: 50.733068, longitude: -1.728181 },
      { latitude: 50.732228, longitude: -1.729979 },
      { latitude: 50.731685, longitude: -1.73087 },
      { latitude: 50.730431, longitude: -1.733066 },
      { latitude: 50.729684, longitude: -1.733892 },
      { latitude: 50.728434, longitude: -1.735061 },
      { latitude: 50.726953, longitude: -1.736971 },
    ],
    riskLevel: BeachRiskLevel.Medium,
  },
  {
    beachKey: 8,
    beachName: "Highcliffe Beach",
    latitude: 50.73553266527488,
    longitude: -1.7194300889968872,
    mapPolygon: [
      { latitude: 50.734897, longitude: -1.722006 },
      { latitude: 50.734625, longitude: -1.72207 },
      { latitude: 50.734707, longitude: -1.721727 },
      { latitude: 50.734951, longitude: -1.719796 },
      { latitude: 50.735304, longitude: -1.717221 },
      { latitude: 50.735601, longitude: -1.715121 },
      { latitude: 50.73571, longitude: -1.714263 },
      { latitude: 50.735873, longitude: -1.71216 },
      { latitude: 50.736199, longitude: -1.709928 },
      { latitude: 50.736375, longitude: -1.707795 },
      { latitude: 50.736375, longitude: -1.704383 },
      { latitude: 50.736457, longitude: -1.701217 },
      { latitude: 50.736525, longitude: -1.697977 },
      { latitude: 50.73681, longitude: -1.694293 },
      { latitude: 50.736973, longitude: -1.692748 },
      { latitude: 50.736878, longitude: -1.69249 },
      { latitude: 50.737082, longitude: -1.691246 },
      { latitude: 50.737272, longitude: -1.691289 },
      { latitude: 50.737571, longitude: -1.691289 },
      { latitude: 50.737598, longitude: -1.692125 },
      { latitude: 50.737353, longitude: -1.692619 },
      { latitude: 50.73719, longitude: -1.692962 },
      { latitude: 50.737, longitude: -1.695215 },
      { latitude: 50.737044, longitude: -1.699184 },
      { latitude: 50.736989, longitude: -1.704462 },
      { latitude: 50.736854, longitude: -1.707745 },
      { latitude: 50.736636, longitude: -1.709913 },
      { latitude: 50.736609, longitude: -1.710878 },
      { latitude: 50.736409, longitude: -1.711822 },
      { latitude: 50.736246, longitude: -1.714654 },
      { latitude: 50.73611, longitude: -1.714933 },
      { latitude: 50.735974, longitude: -1.716478 },
      { latitude: 50.735675, longitude: -1.718431 },
      { latitude: 50.735594, longitude: -1.718667 },
      { latitude: 50.735526, longitude: -1.719375 },
      { latitude: 50.735051, longitude: -1.720988 },
      { latitude: 50.734901, longitude: -1.721911 },
    ],
    riskLevel: BeachRiskLevel.Low,
  },
];
