const citymap = {
    lisboa: {
        center: { lat: 38.736946, lng: -9.142685 },
        population: 504718,
    },
    Porto: {
        center: { lat: 41.15, lng: -8.61024 },
        population: 214349,
    },
};


async function initMap() {
    const json = await getData()
    console.log(json[1].st_x)
    console.log(typeof json[1].st_x)
    var myLatlng = new google.maps.LatLng(parseFloat(json[1].st_x), parseFloat(json[1].st_y));

    var mapOptions = {
        zoom: 9,
        center: myLatlng
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(parseFloat(json[1].st_x), parseFloat(json[1].st_y)),
        title:"Hello World!"
    });

    marker.setMap(map);

}

window.initMap = initMap;


function removehash(a){

    let b=a.substring(a.indexOf('"')+1,a.length)
    b=b.substring(0,b.indexOf('"'))
    return b
}

async function getData(){
    var targetUrl = 'https://cfg-api-ultimate.herokuapp.com/store'
    document.getElementById("name1").innerText=removehash(sessionStorage.getItem("user_name"))
    document.getElementById("name2").innerText=removehash(sessionStorage.getItem("user_name"))
    document.getElementById("email").innerText=removehash(sessionStorage.getItem("user_email"))

    const response = await fetch(targetUrl)
    const data = await response.json()
    console.log(data)
    return data

}