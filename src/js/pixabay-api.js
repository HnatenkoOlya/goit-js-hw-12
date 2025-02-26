import axios from 'axios';

const API_KEY = "48999193-84142b43a51cfa1138f8dc0d5";
const BASE_URL = "https://pixabay.com/api/";

export async function fetchImages(query) {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                q: query,
                image_type: "photo",
                orientation: "horizontal",
                safesearch: true,
            }
        });
        return response.data.hits;
    } catch (error) {
        console.error("Error while searching for images", error);
        return [];
    }
}