const http = new XMLHttpRequest()
let result = document.querySelector("#result")

document.querySelector("#share").addEventListener(
    "click", () => {
    const [userLat, userLong] = findMyCoordinates()
})

document.querySelector("#submit").addEventListener(
    "click", () => {
    console.log("test")
    addRestaurant()
    document.getElementById("address-form").reset()
})

let restaurants = new Map();

function findMyCoordinates() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                return [position.coords.latitude, position.coords.longitude]
            }, (err) => {
                alert(err.message)
            }
        )
    } else {
        alert("Geolocation is not supported by your browser")
    }
}

function addRestaurant() {
    let address = Array.from(document.querySelectorAll("#address-form input"))
        .reduce((acc, input) => ({...acc,
            [input.id]: input.value}), {});
    // TODO: convert address to coordinates
    restaurants[address.name] = (0, 0);
}