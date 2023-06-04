//Get Current location 
const  getCurrentLocation=async ()=>{
    if (navigator?.geolocation) {  //client side navigator
          const position = navigator.geolocation.getCurrentPosition();
          const headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Content-Type',
          };
          
          const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`,
          {headers}
          );
          const Loc = await response.json();
          const currentLocation={
            placeId:Loc.place_id,
            latitude:Loc.lat,
            longitude:Loc.lon,
            city:Loc.address.city,
            state:Loc.address.state,
            country:Loc.address.country,
            countryCode:Loc.address.country_code
        }
          return currentLocation;
      } else {  
        alert("Geolocation is not supported by this browser.(Hint: Either navigator or geolocation is not supported )");  
      }
}
//Client side package
