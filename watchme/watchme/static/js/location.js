function geocodeLatLng(geocoder, lat, lon) {
    let latlng = {lat: parseFloat(lat), lng: parseFloat(lon)};
    
    geocoder.geocode({'location': latlng}, function(results, status) {
        if (status === 'OK') {
            if (results[0]) {
                let location = results[0].address_components[3].long_name + ", " + results[0].address_components[5].long_name
                
                $("#location-text").text(location);
                console.log(location);
            } else {
                console.log('No results found');
            }
        } else {
            console.log('Geocoder failed due to: ' + status);
        }
    });
}

function findme() {
    $.getJSON("http://freegeoip.net/json/", function(data) {
        let country_code = data.country_code;
        let country = data.country_name;
        let ip = data.ip;
        let time_zone = data.time_zone;
        let latitude = data.latitude;
        let longitude = data.longitude;

        console.log("Country Code: " + country_code);
        console.log("Time Zone: " + time_zone);  

        let geocoder = new google.maps.Geocoder;
        geocodeLatLng(geocoder, latitude, longitude);
    });
}

$(document).ready(findme());
