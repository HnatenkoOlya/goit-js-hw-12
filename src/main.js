import {fetchImages} from "./js/pixabay-api"
import {renderImages} from "./js/render-functions"
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const input = document.querySelector(".input");
const loader = document.querySelector(".loading");
const gallery = document.querySelector(".gallery");
const btnLoad = document.querySelector(".load-btn")

let query = "";
let page = 1;
let totalHits = 0;

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    query = input.value.trim();
    if (query === "") {
        iziToast.warning({
            message: 'Please enter a keyword to search',
        });
        return;
    }
    gallery.innerHTML = "";
    page = 1;
    btnLoad.style.display = "none";
    loader.style.display = "block";
    console.log("Loader on");

    try {
        const response = await fetchImages(query, page);
        totalHits = response.totalHits;
        const images = response.hits;
       if (images.length === 0) {
        iziToast.error({
            message: 'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
       } 
       renderImages(images);
       if (page * 40 < totalHits) {
        btnLoad.style.display = "block";
    }
    } catch (error) {
        iziToast.error({
            message: 'Something went wrong. Please try again later.',
          });
       } finally {
        loader.style.display = "none"; 
        console.log("Loader off");
    }
})
btnLoad.addEventListener("click", async () => {
    page += 1;
    loader.style.display = "block";
    console.log("Loader on");
    try {
        const response = await fetchImages(query, page);
        const images = response.hits;
        if (images.length === 0) {
            btnLoad.style.display = "none";
            return;
          }

          renderImages(images, true);
          const galleryItem = gallery.querySelector('.gallery-item');
    const itemHeight = galleryItem.getBoundingClientRect().height;

    window.scrollBy({
        top: itemHeight * 2,
        behavior: 'smooth',
    });

          if ((page - 1) * 40 + images.length >= totalHits) {
            btnLoad.style.display = "none";
            iziToast.info({
                message: 'We are sorry, but you have reached the end of search results.',
            });
        }
    } catch (error) {
        iziToast.error({
            message: 'Something went wrong. Please try again later.',
        });
    } finally {
        loader.style.display = "none";
        console.log("Loader off");
    }
})