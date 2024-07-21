import{a as L,S as E,i as n}from"./assets/vendor-ee72e1a4.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))p(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&p(u)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function p(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();L.defaults.baseURL="https://pixabay.com";async function b(s,e,r){return(await L("/api/",{params:{page:e,per_page:r,key:"44962191-b2ae47cce5f09f25f6a2bff80",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const h=document.querySelector(".form"),g=document.querySelector(".images-list"),c=document.querySelector(".loader"),f=document.querySelector(".loader-more"),y=document.querySelector(".input"),a=document.querySelector(".btn-more");async function w(s){const e=await s.map(r=>`<li class="images-item">
        <a class="gallery-link" href="${r.largeImageURL}">
          <img
            class="gallery-image"
            src="${r.webformatURL}"
            alt="${r.tags}"

          />
          <div class="property">
          <p><span class="weight">Likes</span> ${r.likes}</p>
          <p><span class="weight">Views</span> ${r.views}</p>
          <p><span class="weight">Comments</span> ${r.comments}</p>
          <p><span class="weight">Downloads</span> ${r.downloads}</p>
          </div>
        </a>
      </li>`).join("");c.classList.remove("loader-open"),f.classList.remove("loader-more-open"),g.insertAdjacentHTML("beforeend",e),new E(".images-list a",{captionsData:"alt",captionDelay:250}).refresh()}async function S(s){const r=s.getBoundingClientRect().height;window.scrollBy({top:r*2.2,behavior:"smooth"})}let m=15,i=1,l,d,v;h.addEventListener("submit",async s=>{if(s.preventDefault(),a.classList.remove("btn-more-open"),g.innerHTML="",c.classList.add("loader-open"),l!==y.value.trim()&&(i=1),l=y.value.trim(),h.reset(),!l){n.error({title:"Error",message:"Please enter a search query"}),c.classList.remove("loader-open"),a.classList.remove("btn-more-open");return}try{const e=await b(l,i,m);if(e.hits.length===0){c.classList.remove("loader-open"),a.classList.remove("btn-more-open"),n.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!"});return}if(await w(e.hits),a.classList.add("btn-more-open"),i+=1,d=e.totalHits,v=Math.ceil(d/m),d<m)return a.classList.remove("btn-more-open"),n.info({position:"bottomRight",message:"We're sorry, but you've reached the end of search results."})}catch(e){n.error({title:"Error",message:`Something went wrong: ${e.message}`})}});a.addEventListener("click",async()=>{a.classList.remove("btn-more-open"),f.classList.add("loader-more-open");try{const s=await b(l,i,m);if(i>v)return f.classList.remove("loader-more-open"),n.info({position:"bottomRight",message:"We're sorry, but you've reached the end of search results."});await w(s.hits);const e=g.querySelector(".images-item");S(e),a.classList.add("btn-more-open"),i+=1}catch(s){n.error({title:"Error",message:`Something went wrong: ${s.message}`})}});
//# sourceMappingURL=commonHelpers.js.map
