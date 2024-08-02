from fastapi import FastAPI
import scripts
from pydantic import BaseModel


class Restaurant(BaseModel):
    name: str
    address: str

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/sorted_distance")
async def sortedDistance():
    restaurants = scripts.getRestaurants()
    return scripts.sortByDistance(restaurants)

@app.post("/add_restaurant")
async def add(restaurant: Restaurant):
    restaurantDict = {
        "name": restaurant.name,
        "address": restaurant.address
    }
    scripts.addRestaurant(restaurantDict)
    return {
        "msg": "Success",
    }
