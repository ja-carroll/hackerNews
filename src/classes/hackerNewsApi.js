import axios from "axios"

export default class HackerNewsApi {

    getStories(type) {
        return axios.get("https://hacker-news.firebaseio.com/v0/" + type + ".json")
        .then(response => {
            return response.data;
        });
    }

    getAllItems(itemIds) {
        var itemPromises = [];
        for (var i=0; i< itemIds.length; i++) {
            itemPromises.push(this.getItem(itemIds[i]));
        } 
        return axios.all(itemPromises).then(responses => {
            return responses;
        });
    }

    getItem(itemId) {
        return axios.get("https://hacker-news.firebaseio.com/v0/item/" + itemId + ".json")
        .then(response => {
            return response.data;
        });
    }
    
}