var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,r.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r);var i=r("cDqy2"),l=r("7od7n");const o=document.querySelectorAll(".search-form"),a=document.querySelector("#content-results"),s=document.querySelector("#content-title"),u=o[0],c=o[1];function d(e){e.preventDefault();const n=e.target.elements.search.value;s.innerHTML="Searching results..",a.innerHTML="",(0,i.fetchCocktailsByName)(n).then((e=>{s.innerHTML="Cocktails",a.innerHTML=(0,l.getDrinksMarkup)(e)})).catch((e=>{s.innerHTML=e,a.innerHTML=(0,l.getErrorMarkup)()}))}u.addEventListener("submit",d),c.addEventListener("submit",d),u.addEventListener("input",(()=>{c.elements.search.value=u.elements.search.value})),c.addEventListener("input",(()=>{u.elements.search.value=c.elements.search.value}));
//# sourceMappingURL=index.8d6474bc.js.map