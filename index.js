import{a as m,S as f,i}from"./assets/vendor-KnZd4sWe.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const d="48999193-84142b43a51cfa1138f8dc0d5",g="https://pixabay.com/api/";async function y(s){try{return(await m.get(g,{params:{key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){return console.error("Error while searching for images",t),[]}}const p=document.querySelector(".gallery");function h(s){p.innerHTML=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:r,views:n,comments:c,downloads:u})=>`<li class="gallery-item">
            <a href="${a}" class="gallery-link">
             <img src="${o}" class="gallery-img" alt="${e}"/>
              <div class="img-info">
              <p>Likes: ${r}</p>
              <p>Views: ${n}</p>
              <p>Comments: ${c}</p>
              <p>Downloads: ${u}</p>
              </div>
            </a>
           </li>`).join(""),new f(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}const L=document.querySelector(".form"),b=document.querySelector(".input"),l=document.querySelector(".loading-box"),w=document.querySelector(".gallery");L.addEventListener("submit",async s=>{s.preventDefault();const t=b.value.trim();if(t===""){i.warning({message:"Please enter a keyword to search"});return}w.innerHTML="",l.style.display="block",console.log("Loader on");try{const o=await y(t);if(o.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(o)}catch{i.error({message:"Something went wrong. Please try again later."})}finally{l.style.display="none",console.log("Loader off")}});
//# sourceMappingURL=index.js.map
