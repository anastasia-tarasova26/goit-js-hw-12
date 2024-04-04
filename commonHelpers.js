import{a as P,S as I,i as f}from"./assets/vendor-5401a4b0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const o={API_KEY:"42384910-73277182c896d015737fb8e33",API_URL:"https://pixabay.com/api/",PHOTO_ORIENTATION:"horizontal",IMAGE_TYPE:"photo",SAFESEARCH:!0,PHOTOS_PER_PAGE:15,ERROR_MESSAGES:{EMPTY_INPUT:"Input must not be empty. Please try again!",IMAGES_NOT_FOUND:"Sorry, there are no images matching your search query. Please try again!",RESOURSE_ERROR:"Requested resource is not found!"},NOTIFICATION_MESSAGE:{PHOTO_LIMIT_REACHED:"We're sorry, but you've reached the end of search results."},POP_UP_CONFIG:{message:null,iconUrl:"/img/error-icon.png",messageColor:"white",backgroundColor:"#EF4040",position:"topRight"},POP_UP_CONFIG_NOTIFICATION:{message:null,iconUrl:"/img/exclamation-mark.png",messageColor:"white",backgroundColor:"#87CEEB",position:"topRight"}};async function h(r,e){return await P.get(o.API_URL,{params:{key:o.API_KEY,q:r,image_type:o.IMAGE_TYPE,orientation:o.PHOTO_ORIENTATION,safesearch:o.SAFESEARCH,page:e,per_page:o.PHOTOS_PER_PAGE}})}function g(r){return r.map(e=>{const{largeImageURL:i,webformatURL:c,tags:t,likes:s,views:n,comments:R,downloads:_}=e;return`<li class="list-item">
      <div class="gallery-photo">
        <a href="${i}"
          ><img src="${c}" alt="${t}"
        /></a>
      </div>
      <div class="text-wrapper">
        <div class="list-item-container">
          <p class="header-text">likes</p>
          <p>${s}</p>
        </div>
        <div class="list-item-container">
          <p class="header-text">Views</p>
          <p>${n}</p>
        </div>
        <div class="list-item-container">
          <p class="header-text">Comments</p>
          <p>${R}</p>
        </div>
        <div class="list-item-container">
          <p class="header-text">Downloads</p>
          <p>${_}</p>
        </div>
      </div>
    </li>`}).join("")}const y=document.querySelector(".form"),a=document.querySelector(".input"),u=document.querySelector(".gallery"),O=document.querySelectorAll(".loader"),E=document.querySelector(".load-more-btn");document.querySelectorAll(".list-item");const p={firstLoader:O[0],secondLoader:O[1]};let d=2,S=null,m=null;y.addEventListener("submit",r=>{r.preventDefault(),m=new I(".gallery-photo a"),u.innerHTML="",L(sessionStorage.getItem("previousInput"),a.value),a.value?(p.firstLoader.classList.remove("hidden"),S=a.value,h(a.value).then(({data:{hits:e}})=>{e.length?(u.insertAdjacentHTML("beforeend",g(e)),E.classList.remove("hidden"),m.refresh()):l(o.ERROR_MESSAGES.IMAGES_NOT_FOUND,"error"),p.firstLoader.classList.add("hidden")}).catch(e=>{console.debug(e),l(o.ERROR_MESSAGES.RESOURSE_ERROR,"error")})):l(o.ERROR_MESSAGES.EMPTY_INPUT,"error"),sessionStorage.setItem("previousInput",a.value)});E.addEventListener("click",r=>{p.secondLoader.classList.remove("hidden"),h(S,d).then(({data:{hits:e,totalHits:i}})=>{p.secondLoader.classList.add("hidden"),u.insertAdjacentHTML("beforeend",g(e)),m.refresh(),T(),A(i,d),d++}).catch(e=>{console.debug(e),l(o.ERROR_MESSAGES.RESOURSE_ERROR,"error")})});function l(r,e){switch(e){case"error":f.show({...o.POP_UP_CONFIG,message:r});break;case"notification":f.show({...o.POP_UP_CONFIG_NOTIFICATION,message:r})}}function A(r,e){r<=e*o.PHOTOS_PER_PAGE&&(E.classList.add("hidden"),l(o.NOTIFICATION_MESSAGE.PHOTO_LIMIT_REACHED,"notification"))}function T(){const r=u.firstElementChild.getBoundingClientRect();window.scrollBy({top:r.height*4,behavior:"smooth"})}function L(r,e){if(r!==e)return d=2}
//# sourceMappingURL=commonHelpers.js.map
