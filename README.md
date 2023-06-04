# Open-Source-Reverse-Geocoding
```
import getCurrentLocation from 'free-gps-location';

getCurrentLocation().then((loc)=>{
/*
code here ...
const locationId=loc.placeId;
const latitude=loc.latitude;
const longitude=loc.longitude;
const city=loc.city;
const state=loc.state;
const country=loc.country;
const countryCode=loc.countryCode;
*/
})
```

## OR

```
import getCurrentLocation from 'free-gps-location';
const getLocation=async ()=>{
const loc=await getCurrentLocation();
const locationId=loc.placeId;
const latitude=loc.latitude;
const longitude=loc.longitude;
const city=loc.city;
const state=loc.state;
const country=loc.country;
const countryCode=loc.countryCode;
}
```
