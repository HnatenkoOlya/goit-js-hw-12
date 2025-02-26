import {fetchImages} from "./js/pixabay-api"
import {renderImages} from "./js/render-functions"
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const input = document.querySelector(".input");
const loader = document.querySelector(".loading-box");
const gallery = document.querySelector(".gallery");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const query = input.value.trim();
    if (query === "") {
        iziToast.warning({
            message: 'Please enter a keyword to search',
        });
        return;
    }
     gallery.innerHTML = "";
    loader.style.display = "block";
    console.log("Loader on");
    try {
       const images = await fetchImages(query);
       if (images.length === 0) {
        iziToast.error({
            message: 'Sorry, there are no images matching your search query. Please try again!',
        });
        return
       } 
       renderImages(images);
    } catch (error) {
        iziToast.error({
            message: 'Something went wrong. Please try again later.',
          });
       } finally {
        loader.style.display = "none"; 
        console.log("Loader off");
    }
})