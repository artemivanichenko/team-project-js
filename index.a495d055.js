var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,r.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r);var i=r("dFiq8"),a=r("cDqy2"),l=r("7od7n");function c(e,n,t){const r=Math.ceil(e/n);if(1===r)return"";let i=1===t?" inactive":"",a=`<li class="pagination__number left-arrow${i}" data-page="${t-1}">&lt;</li>`;for(let e=1;e<=r;e++){a+=`<li class="pagination__number${e===t?" inactive":""}" data-page="${e}">${e}</li>`}return i=t===r?" inactive":"",a+=`<li class="pagination__number right-arrow${i}" data-page="${t+1}">&gt;</li>`,a}const o=document.querySelectorAll(".search-form"),s=document.querySelector("#content-results"),u=document.querySelector("#content-title"),d=document.querySelector("#pagination"),f=o[0],p=o[1];let g;function m(e){e.preventDefault();const n=e.target.elements.search.value;u.innerHTML="Searching results..",s.innerHTML="";const t=(0,i.calculateCocktails)();(0,a.fetchCocktailsByName)(n).then((e=>{g=e,u.innerHTML="Cocktails",s.innerHTML=(0,l.getDrinksMarkup)(e.slice(0,t)),d.innerHTML=c(e.length,t,1),h()})).catch((e=>{u.innerHTML=e,s.innerHTML=(0,l.getErrorMarkup)()}))}function v(e){const n=Number(e.target.dataset.page),t=(0,i.calculateCocktails)(),r=g,a=n*t,o=a-t;s.innerHTML=(0,l.getDrinksMarkup)(r.slice(o,a)),d.innerHTML=c(r.length,t,n),h()}function h(){const e=document.querySelectorAll(".pagination__number");for(const n of e)n.className.includes("inactive")||n.addEventListener("click",v)}f.addEventListener("submit",m),p.addEventListener("submit",m),f.addEventListener("input",(()=>{p.elements.search.value=f.elements.search.value})),p.addEventListener("input",(()=>{f.elements.search.value=p.elements.search.value}));
//# sourceMappingURL=index.a495d055.js.map
