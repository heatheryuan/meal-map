import requests
import config
import json
import os

GOOGLE_API_KEY = config.google_api_key

def addRestaurant(restaurant):
    # TODO: prevent duplicate entries
    lat, long = geocode(restaurant["address"])
    restaurant["lat"] = lat
    restaurant["long"] = long
    url = 'http://127.0.0.1:8090/api/collections/restaurants/records'
    x = requests.post(url, json = restaurant)

def geocode(address):
    url = 'https://maps.googleapis.com/maps/api/geocode/json'
    params = {'address': address, 'key': GOOGLE_API_KEY}
    r = requests.get(url, params=params)
    results = r.json()['results']
    location = results[0]['geometry']['location']
    return location['lat'], location['lng']

def currLocation():
    url = "https://www.googleapis.com/geolocation/v1/geolocate?key=" + GOOGLE_API_KEY
    response = requests.post(url)
    location_data = response.json()['location']
    lat, long = location_data['lat'], location_data['lng']
    return ((float(lat), float(long)))

def distance(loc1, loc2):
    x, y = loc1
    X, Y = loc2
    
    a, b = X-x, Y-y
    
    return (a**2 + b**2)**1/2

def sortByDistance(restaurants):
    currLoc = currLocation()
    sortedRestaurants = sorted(restaurants, key=lambda data: distance(currLoc, (data["lat"], data["long"])))
    return sortedRestaurants

def getRestaurants():
    url = "http://127.0.0.1:8090/api/collections/restaurants/records?page=1&perPage=30"
    r = requests.get(url)
    results = r.json()['items']

    restaurants = []
    for row in results:
        data = {
            'id': row['collectionId'],
            'name': row["name"],
            "address": row["address"],
            "lat": row["lat"],
            "long": row["long"]
        }
        restaurants.append(data)
    return restaurants

# restaurants = getRestaurants()
# print(restaurants)
# print(sortByDistance(restaurants))