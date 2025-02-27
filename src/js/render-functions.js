import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

export function renderImages(images, append = false) {
  if (!append) {
    gallery.innerHTML = "";
}
    const imagesMarkup = images 
     .map(({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
     }) => `<li class="gallery-item">
            <a href="${largeImageURL}" class="gallery-link">
             <img src="${webformatURL}" class="gallery-img" alt="${tags}"/>
              <div class="img-info">
              <p>Likes: ${likes}</p>
              <p>Views: ${views}</p>
              <p>Comments: ${comments}</p>
              <p>Downloads: ${downloads}</p>
              </div>
            </a>
           </li>`)
     .join("");
     gallery.insertAdjacentHTML("beforeend", imagesMarkup);
     
     const lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionPosition: 'bottom',
      captionDelay: 250,
    });
    lightbox.refresh();
}
 