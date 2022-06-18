let lat1 = 47.59143034442687
let lon1 = -121.9777863164362

let lat2 = 47.591339828252494
let lon2 = -121.97784177026443

let lat3 = 47.59126631168124
let lon3 = -121.97766554574355

let lat4 = 47.59129490615685
let lon4 = -121.97758862215902

let lat5 = 47.591370514494976
let lon5 = -121.97782811907945

let lat6 = 47.5913030892947
let lon6 = -121.9778427315419

const R = 6371000; // metres
const phi1 = lat1 * Math.PI/180;
const phi2 = lat6 * Math.PI/180;

const deltaPhi = (lat1-lat6) * Math.PI/180;
const deltaLambda = (lon1-lon6) * Math.PI/180;

const a = Math.sin(deltaPhi/2) * Math.sin(deltaPhi/2) +
            Math.cos(phi1) * Math.cos(phi2) *
            Math.sin(deltaLambda/2) * Math.sin(deltaLambda/2);

const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

const d = R * c;

const feet_per_meter = 3.28084
console.log("hello!")
console.log("The two users are " + (d*feet_per_meter) + " feet away")