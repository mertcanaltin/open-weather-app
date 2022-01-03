import{j as u,R as d,H as I,a as j,L,d as c,u as y,b as T,c as M,B,S as R,e as A,f as U,g as _,h as P,i as E}from"./vendor.f5d5e5df.js";const q=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function l(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=l(a);fetch(a.href,r)}};q();const e=u.exports.jsx,o=u.exports.jsxs,b=u.exports.Fragment,O=()=>e("footer",{className:"items-center mt-28",children:e("p",{className:"text-center",children:o("span",{className:"text-gray-600 dark:text-white",children:["mertcanaltin",e("span",{className:"ml-4",children:"\xA92022 - now"})]})})}),D=()=>{if(typeof window!="undefined"&&window.localStorage){const n=window.localStorage.getItem("color-theme");if(typeof n=="string")return n;const t=window.matchMedia("(prefers-color-scheme: dark)");if(t==null?void 0:t.matches)return"dark"}return"light"},w=d.createContext(),Y=({initialTheme:n,children:t})=>{const[l,i]=d.useState(D),a=r=>{const s=window.document.documentElement,h=r==="dark";s.classList.remove(h?"light":"dark"),s.classList.add(r),localStorage.setItem("color",r)};return n&&a(n),d.useEffect(()=>{a(l)},[l]),e(w.Provider,{value:{theme:l,setTheme:i},children:t})},f=()=>{const{theme:n,setTheme:t}=d.useContext(w);return e("div",{role:"switch",className:"transition duration-500 ease-in-out rounded-full p-2",children:n==="dark"?e(I,{onClick:()=>t(n==="dark"?"light":"dark"),className:"text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"}):e(j,{onClick:()=>t(n==="dark"?"light":"dark"),className:"text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"})})},W=()=>{const[n,t]=d.useState(!1),l=()=>{t(!n)};return o("nav",{className:"dark:text-white mb-4",children:[e("div",{className:"bg-gradient-to-r from-blue-100 dark:from-black via-green-200 dark:via-transparent to-indigo-400 dark:to-gray-700 w-auto h-6"}),e("div",{className:"2xl:max-w-6xl xl:max-w-4xl lg:max-w-4xl md:max-w-2xl mx-auto sm:px-6 md:px-0 lg:px-2 xl:px-0",children:o("div",{className:"relative flex items-center justify-between h-16",children:[o("div",{className:"absolute inset-y-0 left-0 flex items-center justify-between md:hidden",children:[o("button",{type:"button",className:"inline-flex items-center justify-center p-2 rounded-md text-indigo-700 dark:text-white hover:text-white hover:bg-indigo-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white","aria-controls":"mobile-menu","aria-expanded":"false",onClick:l,children:[e("span",{className:"sr-only",children:n?"Close main menu":"Open main menu"}),n?e("svg",{className:"block bg-green-200 dark:bg-transparent h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})}):e("svg",{className:"block bg-green-200  dark:bg-transparent h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})]}),e(f,{})]}),o("div",{className:"hidden md:contents",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"h-6 w-6 bg-green-200 dark:bg-transparent stroke-current text-indigo-500 dark:text-white",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"})}),e("div",{className:"flex-1 flex items-center justify-end sm:items-stretch sm:justify-end",children:e("div",{className:"hidden sm:block sm:ml-6",children:o("div",{className:"flex space-x-4 items-center",children:[o("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/mertcanaltin",className:"text-gray-400 hover:text-gray-500 transition-colors duration-200",children:[e("span",{className:"sr-only",children:"my GitHub"}),e("svg",{width:"24px",height:"24px",viewBox:"0 0 16 16",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})})]}),e(f,{})]})})})]})]})}),n?e("div",{className:"md:hidden max-w-2xl mx-auto px-2 sm:px-6 lg:px-2",id:"mobile-menu",children:o("div",{className:"flex flex-col sm:px-2 sm:pt-2 sm:pb-3 space-y-1 md:w-1/2",children:[e(L,{to:"/",className:"text-indigo-700 dark:text-white hover:bg-green-300 dark:bg-none dark:hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium",onClick:l,children:"Home"}),e("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/mertcanaltin",className:"text-indigo-700 dark:text-white hover:bg-green-300 dark:hover:bg-gray-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium",children:"GitHub"})]})}):null]})},H=({isSearching:n,onLocationChange:t})=>e("div",{className:"w-4/5 md:w-3/5 lg:w-1/2 m-auto",children:o("div",{className:"flex flex-row mx-2 p-2 justify-start border-b border-green-300 dark:border-white",children:[e("svg",{width:"24",height:"24",fill:"none",className:"mr-2 group-hover:text-gray-500 text-green-600 dark:text-white transition-colors duration-200",children:e("path",{d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),e("input",{type:"search",role:"search",onChange:t,placeholder:"Search for a location",className:"w-48 md:w-96 mr-8 dark:bg-black dark:text-white outline-none placeholder-gray-500 dark:placeholder-white"}),n?o("svg",{className:"animate-spin mt-1 -ml-1 h-5 w-5 text-indigo-700 dark:text-gray-500",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e("title",{children:"Search for a location"}),e("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",role:"progressbar"}),e("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}):null]})});async function F(n){const t=await fetch(n);if(!t.ok)throw G(t.status);return t.json()}function G(n){let t;switch(n){case 401:t="It looks like the API did not authorize your request. Please ensure you have a valid API key.";break;case 404:t="No results found. Check your query again or try searching for a different location.";break;case 429:t="It looks like you've made too many requests to the server. Please wait a while before trying again.";break;default:t="Server error";break}return new Error(t)}const $={"200":{recommendation:"Stormy with a bit of rain. Coat required"},"201":{recommendation:"Stormy with showers. Grab a brolly on your way out"},"202":{recommendation:"It's going to be absolutely torrential out there today. Carry as many umbrellas as you can"},"210":{recommendation:"Light storm on the way. Good time for that spare lightning detector you've had lying around"},"211":{recommendation:"A storm on the way. Mind your eardrums please."},"212":{recommendation:"Biblical weather today. Gumboots and a life jacket are the bare minimum"},"221":{recommendation:"Horrid weather. Jackets, brollies, heck, you might even need a boat"},"230":{recommendation:"Storms and a bit of rain. Brolly + layers I'm afraid"},"231":{recommendation:"Rain + storms aka you'll look pretty daft going without a jacket today"},"232":{recommendation:"Rainfall incoming. Umbrella for goodness sake!"},"300":{recommendation:"Well, a bit of rain never killed anyone. Am I even legally allowed to say er... *frantically deletes*"},"301":{recommendation:"Rain, but not terminal. Be sensible and wear a coat for heavens sake"},"302":{recommendation:"Rain, of the annoying variety. Don't get caught out"},"310":{recommendation:"The kind of rain you see people dance in in the movies. You'll be fine"},"311":{recommendation:"A spot of rain. Nothing to be overly worried about"},"312":{recommendation:"More rain, I'm afraid. Coat or jacket as standard"},"313":{recommendation:"Showers forecasted. That means a free shower for you if you don't carry a brolly"},"314":{recommendation:"Cats and dogs. Umbrella and a thick pair of wellies required."},"321":{recommendation:"Rain, but the sort you could survive by staying indoors. Umbrella optional"},"500":{recommendation:"You can get away with just a sweater today. Disclaimer: I will not be held responsible for any rain-related mishaps"},"501":{recommendation:"A bit more rain. Best carry an umbrella chap"},"502":{recommendation:"Now this is getting annoying. Umbrella + jacket required"},"503":{recommendation:"Biblical amounts of rain forecasted. Umbrella, jacket, coat, layers, life jacket, and standby boat as standard"},"504":{recommendation:"I'm delighted to tell you that you're not leaving the house today because you'd literally drown in the rain outside"},"511":{recommendation:"Rain, biting cold, soul-renching conditions, the works. You'd be well advised to seek cover and remain indoors"},"520":{recommendation:"Showers forecasted. Carry an umbrella for goodness sake!"},"521":{recommendation:"Showers forecasted. Please carry an umbrella for goodness sake"},"522":{recommendation:"You're getting absolutely drenched if you dare go without a military-grade jacket and umbrella combo today"},"531":{recommendation:"Ragged rains. You're going to need a jacket, wellies and industrial-strength fortitude to make it through this"},"600":{recommendation:"Light snow forecasted. You'll be fine"},"601":{recommendation:"Snow. But you'll live. Just carry a sweater for good measure"},"602":{recommendation:"It's blustery out there. Consider calling in sick at the office"},"611":{recommendation:"Umbrella and coat as standard"},"612":{recommendation:"Umbrella and coat as standard"},"613":{recommendation:"Umbrella and coat as standard"},"615":{recommendation:"Umbrella and coat as standard. Don't say I didn't warn you"},"616":{recommendation:"Umbrella + coat + a nice cup of a warm beverage recommended"},"620":{recommendation:"A light jacket should do the trick"},"621":{recommendation:"Rain + snow. Could be better. Could be worse. Jacket + brolly recommended"},"622":{recommendation:"It's an absolute warzone out there. Coat, umbrella, jacket and military-grade helmet required"},"701":{recommendation:"The air is thick with fog and there's just barely a light rain. Tread carefully"},"702":{recommendation:"Do you smell burning? I smell burning..."},"711":{recommendation:"Smoke warning - potential forest fire hazard. Be extremely vigilant and on the lookout for the most up to date weather advisories"},"721":{recommendation:"The sun's out but it's hazy. I've got work, but I'm lazy. Like a mini Eminem, right?"},"731":{recommendation:"Like walking out in the Sahara is what it looks like out there. Tech wear the absolute bare minimum"},"741":{recommendation:"Foggy weather. Visibility severely impacted. Take extreme care when driving if you must."},"751":{recommendation:"Potential sandstorms expected. Avoid the outdoors if you can"},"761":{recommendation:"Potential dust storms expected. Take cover and remain safe"},"762":{recommendation:"Volcanic ash advisory - stay indoors whenever possible"},"771":{recommendation:"Snow squall warning - avoid the outdoors if you can"},"781":{recommendation:"Tornado warning - take immediate cover at the first sign. Avoid windows."},"800":{recommendation:"It's a beautiful day. Lather up on some sunscreen and maybe carry a hat too for good measure."},"801":{recommendation:"Great day for a hanging out the laundry and maybe a nice picnic date later :)"},"802":{recommendation:"Love is in the air. Call that special someone up for a coffee"},"803":{recommendation:"'Netflix and chill' weather. It's pleasant outside"},"804":{recommendation:"Great day for a run. Pack that gym bag"}},V={"200":{recommendation:"Stormy with a bit of rain. Coat required"},"201":{recommendation:"Stormy with showers. Grab a brolly on your way out"},"202":{recommendation:"It's going to be absolutely torrential out there. Carry as many umbrellas as you can"},"210":{recommendation:"Light storm on the way. Good time for that spare lightning detector you've had lying around"},"211":{recommendation:"A storm on the way. Mind your eardrums please."},"212":{recommendation:"Biblical weather today. Gumboots and a life jacket are the bare minimum"},"221":{recommendation:"Horrid weather. Jackets, brollies, heck, you might even need a boat"},"230":{recommendation:"Storms and a bit of rain. Brolly + layers I'm afraid"},"231":{recommendation:"Rain + storms aka you'll look pretty daft going without a jacket today"},"232":{recommendation:"Rainfall incoming. Umbrella for goodness sake!"},"300":{recommendation:"Well, a bit of rain never killed anyone. Am I even legally allowed to say er... *frantically deletes*"},"301":{recommendation:"Rain, but not terminal. Be sensible and wear a coat for heavens sake"},"302":{recommendation:"Rain, of the annoying variety. Don't get caught out"},"310":{recommendation:"The kind of rain you see people dance in in the movies. You'll be fine"},"311":{recommendation:"A spot of rain. Nothing to be overly worried about"},"312":{recommendation:"More rain, I'm afraid. Coat or jacket as standard"},"313":{recommendation:"Showers forecasted. That means a free shower for you if you don't carry a brolly"},"314":{recommendation:"Cats and dogs. Umbrella and a thick pair of wellies required."},"321":{recommendation:"Rain, but the sort you could survive by staying indoors. Umbrella optional"},"500":{recommendation:"You can get away with just a sweater today. Disclaimer: I will not be held responsible for any rain-related mishaps"},"501":{recommendation:"A bit more rain. Best carry an umbrella chap"},"502":{recommendation:"Now this is getting annoying. Umbrella + jacket required"},"503":{recommendation:"Biblical amounts of rain forecasted. Umbrella, jacket, coat, layers, life jacket, and standby boat as standard"},"504":{recommendation:"I'm delighted to tell you that you're not leaving the house today because you'd literally drown in the rain outside"},"511":{recommendation:"Rain, biting cold, soul-renching conditions, the works. You'd be well advised to seek cover and remain indoors"},"520":{recommendation:"Showers forecasted. Carry an umbrella for goodness sake!"},"521":{recommendation:"Showers forecasted. Please carry an umbrella for goodness sake"},"522":{recommendation:"You're getting absolutely drenched if you dare go without a military-grade jacket and umbrella combo today"},"531":{recommendation:"Ragged rains. You're going to need a jacket, wellies and industrial-strength fortitude to make it through this"},"600":{recommendation:"Light snow forecasted. You'll be fine"},"601":{recommendation:"Snow. But you'll live. Just carry a sweater for good measure"},"602":{recommendation:"It's blustery out there. Consider calling in sick at the office"},"611":{recommendation:"Umbrella and coat as standard"},"615":{recommendation:"Umbrella and coat as standard. Don't say I didn't warn you"},"616":{recommendation:"Umbrella + coat + a nice cup of a warm beverage recommended"},"620":{recommendation:"A light jacket should do the trick"},"621":{recommendation:"Rain + snow. Could be better. Could be worse. Jacket + brolly recommended"},"622":{recommendation:"It's an absolute warzone out there. Coat, umbrella, jacket and military-grade helmet required"},"701":{recommendation:"The air is thick with fog and there's just barely a light rain. Tread carefully"},"702":{recommendation:"Do you smell burning? I smell burning..."},"711":{recommendation:"Smoke warning - potential forest fire hazard. Be extremely vigilant and on the lookout for the most up to date weather advisories"},"721":{recommendation:"Silent night, hazy night... you'll need your standard-issue mil-spec night vision goggles"},"731":{recommendation:"Like walking out in the Sahara is what it looks like out there. Tech wear the absolute bare minimum"},"741":{recommendation:"Foggy weather. Visibility severely impacted. Take extreme care when driving if you must."},"751":{recommendation:"Potential sandstorms expected. Avoid the outdoors if you can"},"761":{recommendation:"Potential dust storms expected. Take cover and remain safe"},"762":{recommendation:"Volcanic ash advisory - stay indoors whenever possible"},"771":{recommendation:"Snow squall warning - avoid the outdoors if you can"},"781":{recommendation:"Tornado warning - take immediate cover at the first sign. Avoid windows."},"800":{recommendation:"Clear skies. Kind of night where you fire up stellarium and cozy up underneath the telescope"},"801":{recommendation:"Cloudy skies on a blustery evening. Snuggle up with a hot cuppa"},"802":{recommendation:"Cloudy gusts forecasted. You'll wanna get a coat"},"803":{recommendation:"Cloudy and blustery outside. Coat required"},"804":{recommendation:"Cloudy with a chance of meatballs"},"900":{recommendation:"\u26A0\uFE0F Tornado warning \u26A0\uFE0F Seek safe shelter immediately. stay away from doors, windows, outside walls and protect your head!"},"902":{recommendation:"\u26A0\uFE0F Hurricane warning \u26A0\uFE0F Stay indoors and away from windows. Be on the lookout for the latest emergency response information"},"903":{recommendation:"Snowflakes falling with a chilly wind blowing. Christmas already?"},"904":{recommendation:"Absolutely blazing outside. Ice baths on rotation is the bare minimum"},"906":{recommendation:"Hailstorm forecasted. Take cover"},"957":{recommendation:"Strong winds. Hold on to something or someone strong"}};var J={day:$,night:V};const K={"200":{label:"thunderstorm with light rain",icon:"thunderstorm"},"201":{label:"thunderstorm with rain",icon:"thunderstorm"},"202":{label:"thunderstorm with heavy rain",icon:"thunderstorm"},"210":{label:"light thunderstorm",icon:"lightning"},"211":{label:"thunderstorm",icon:"lightning"},"212":{label:"heavy thunderstorm",icon:"lightning"},"221":{label:"ragged thunderstorm",icon:"lightning"},"230":{label:"thunderstorm with light drizzle",icon:"thunderstorm"},"231":{label:"thunderstorm with drizzle",icon:"thunderstorm"},"232":{label:"thunderstorm with heavy drizzle",icon:"thunderstorm"},"300":{label:"light intensity drizzle",icon:"sprinkle"},"301":{label:"drizzle",icon:"sprinkle"},"302":{label:"heavy intensity drizzle",icon:"rain"},"310":{label:"light intensity drizzle rain",icon:"rain"},"311":{label:"drizzle rain",icon:"rain"},"312":{label:"heavy intensity drizzle rain",icon:"rain"},"313":{label:"shower rain and drizzle",icon:"rain"},"314":{label:"heavy shower rain and drizzle",icon:"rain"},"321":{label:"shower drizzle",icon:"sprinkle"},"500":{label:"light rain",icon:"sprinkle"},"501":{label:"moderate rain",icon:"rain"},"502":{label:"heavy intensity rain",icon:"rain"},"503":{label:"very heavy rain",icon:"rain"},"504":{label:"extreme rain",icon:"rain"},"511":{label:"freezing rain",icon:"rain-mix"},"520":{label:"light intensity shower rain",icon:"showers"},"521":{label:"shower rain",icon:"showers"},"522":{label:"heavy intensity shower rain",icon:"showers"},"531":{label:"ragged shower rain",icon:"storm-showers"},"600":{label:"light snow",icon:"snow"},"601":{label:"snow",icon:"sleet"},"602":{label:"heavy snow",icon:"snow"},"611":{label:"sleet",icon:"rain-mix"},"612":{label:"shower sleet",icon:"rain-mix"},"615":{label:"light rain and snow",icon:"rain-mix"},"616":{label:"rain and snow",icon:"rain-mix"},"620":{label:"light shower snow",icon:"rain-mix"},"621":{label:"shower snow",icon:"snow"},"622":{label:"heavy shower snow",icon:"snow"},"701":{label:"mist",icon:"showers"},"711":{label:"smoke",icon:"smoke"},"721":{label:"haze",icon:"day-haze"},"731":{label:"sand, dust whirls",icon:"dust"},"741":{label:"fog",icon:"day-fog"},"751":{label:"sand",icon:"cloudy-gusts"},"761":{label:"dust",icon:"dust"},"762":{label:"volcanic ash",icon:"dust"},"771":{label:"squalls",icon:"cloudy-gusts"},"781":{label:"tornado",icon:"tornado"},"800":{label:"clear sky",icon:"day-sunny"},"801":{label:"few clouds",icon:"day-cloudy-gusts"},"802":{label:"scattered clouds",icon:"day-cloudy-gusts"},"803":{label:"broken clouds",icon:"day-cloudy-gusts"},"804":{label:"overcast clouds",icon:"day-sunny-overcast"},"900":{label:"tornado",icon:"tornado"},"901":{label:"tropical storm",icon:"storm-showers"},"902":{label:"hurricane",icon:"hurricane"},"903":{label:"cold",icon:"snowflake-cold"},"904":{label:"hot",icon:"hot"},"905":{label:"windy",icon:"windy"},"906":{label:"hail",icon:"hail"},"951":{label:"calm",icon:"sunny"},"952":{label:"light breeze",icon:"cloudy-gusts"},"953":{label:"gentle breeze",icon:"cloudy-gusts"},"954":{label:"moderate breeze",icon:"cloudy-gusts"},"955":{label:"fresh breeze",icon:"cloudy-gusts"},"956":{label:"strong breeze",icon:"cloudy-gusts"},"957":{label:"high wind, near gale",icon:"strong-wind"},"958":{label:"gale",icon:"cloudy-gusts"},"959":{label:"severe gale",icon:"cloudy-gusts"},"960":{label:"storm",icon:"thunderstorm"},"961":{label:"violent storm",icon:"thunderstorm"},"962":{label:"hurricane",icon:"cloudy-gusts"}},Q={"200":{label:"thunderstorm with light rain",icon:"night-alt-thunderstorm"},"201":{label:"thunderstorm with rain",icon:"night-alt-thunderstorm"},"202":{label:"thunderstorm with heavy rain",icon:"night-alt-thunderstorm"},"210":{label:"light thunderstorm",icon:"night-alt-lightning"},"211":{label:"thunderstorm",icon:"night-alt-lightning"},"212":{label:"heavy thunderstorm",icon:"night-alt-lightning"},"221":{label:"ragged thunderstorm",icon:"night-alt-lightning"},"230":{label:"thunderstorm with light drizzle",icon:"night-alt-thunderstorm"},"231":{label:"thunderstorm with drizzle",icon:"night-alt-thunderstorm"},"232":{label:"thunderstorm with haeavy drizzle",icon:"night-alt-thunderstorm"},"300":{label:"light intensity drizzle",icon:"night-alt-sprinkle"},"301":{label:"drizzle",icon:"night-alt-sprinkle"},"302":{label:"heavy intensity drizzle",icon:"night-alt-rain"},"310":{label:"light intensity drizzle",icon:"night-alt-rain"},"311":{label:"drizzle rain",icon:"night-alt-rain"},"312":{label:"heavy intensity drizzle rain",icon:"night-alt-rain"},"313":{label:"shower rain and drizzle",icon:"night-alt-rain"},"314":{label:"heavy shower rain and drizzle",icon:"night-alt-rain"},"321":{label:"shower drizzle",icon:"night-alt-sprinkle"},"500":{label:"light rain",icon:"night-alt-sprinkle"},"501":{label:"moderate rain",icon:"night-alt-rain"},"502":{label:"heavy intensity rain",icon:"night-alt-rain"},"503":{label:"very heavy rain",icon:"night-alt-rain"},"504":{label:"extreme rain",icon:"night-alt-rain"},"511":{label:"freezing rain",icon:"night-alt-rain-mix"},"520":{label:"light intensity shower rain",icon:"night-alt-showers"},"521":{label:"shower rain",icon:"night-alt-showers"},"522":{label:"heavy intensity shower rain",icon:"night-alt-showers"},"531":{label:"ragged shower rain",icon:"night-alt-storm-showers"},"600":{label:"light snow",icon:"night-alt-snow"},"601":{label:"snow",icon:"night-alt-sleet"},"602":{label:"heavy snow",icon:"night-alt-snow"},"611":{label:"sleet",icon:"night-alt-rain-mix"},"612":{label:"light shower sleet",icon:"night-alt-rain-mix"},"615":{label:"light rain and snow",icon:"night-alt-rain-mix"},"616":{label:"rain and snow",icon:"night-alt-rain-mix"},"620":{label:"light shower snow",icon:"night-alt-rain-mix"},"621":{label:"shower snow",icon:"night-alt-snow"},"622":{label:"heavy shower snow",icon:"night-alt-snow"},"701":{label:"mist",icon:"night-alt-showers"},"711":{label:"smoke",icon:"smoke"},"721":{label:"haze",icon:"day-haze"},"731":{label:"sand/dust whirls",icon:"dust"},"741":{label:"fog",icon:"night-fog"},"761":{label:"sand",icon:"dust"},"762":{label:"dust",icon:"dust"},"781":{label:"volcanic ash",icon:"tornado"},"800":{label:"clear sky",icon:"night-clear"},"801":{label:"cloudy gusts",icon:"night-alt-cloudy-gusts"},"802":{label:"cloudy gusts",icon:"night-alt-cloudy-gusts"},"803":{label:"cloudy gusts",icon:"night-alt-cloudy-gusts"},"804":{label:"cloudy",icon:"night-alt-cloudy"},"900":{label:"tornado",icon:"tornado"},"902":{label:"hurricane",icon:"hurricane"},"903":{label:"snowflake-cold",icon:"snowflake-cold"},"904":{label:"hot",icon:"hot"},"906":{label:"hail",icon:"night-alt-hail"},"957":{label:"strong wind",icon:"strong-wind"}};var p={day:K,night:Q};c.extend(y);const k="wi wi-",X={}.VITE_API_KEY,Z={}.VITE_API_URL;function x(n,t,l){const i=`?q=${t}&units=${l}&APPID=${X}`,{data:a,error:r}=T(`${Z}/${n}/${i}`,F);return n==="weather"?{weather:(a==null?void 0:a.weather)?v(a):null,isLoading:!a&&!r,isError:r}:{forecast:(a==null?void 0:a.list)&&Object.entries(a).length?a.list.filter(s=>s.dt_txt.match(/09:00:00/)).map(v):null,isLoading:!a&&!r,isError:r}}function v(n){const t={location:n.name,condition:n.cod,country:n.sys.country,date:n.dt,description:n.weather[0].description,feels_like:Math.round(n.main.feels_like),humidity:n.main.humidity,icon_id:n.weather[0].id,sunrise:n.sys.sunrise,sunset:n.sys.sunset,temperature:Math.round(n.main.temp),timezone:n.timezone/3600,wind_speed:Math.round(n.wind.speed*3.6)};return n.dt_txt&&(t.dt_txt=n.dt_txt,t.forecastIcon=k+p.day[t.icon_id].icon),(t.sunset||t.sunrise)&&(t.currentTime=c.utc(c.unix(t.date)).utcOffset(t.timezone).format(),t.sunrise=c.utc(c.unix(t.sunrise)).utcOffset(t.timezone).format(),t.sunset=c.utc(c.unix(t.sunset)).utcOffset(t.timezone).format(),t.isDay=t.currentTime>t.sunrise&&t.currentTime<t.sunset,t.weatherIcon=k+p[t.isDay?"day":"night"][t.icon_id].icon,t.weatherRecommendation=J[t.isDay?"day":"night"][t.icon_id].recommendation),n.weather[0].description&&(t.description=n.weather[0].description.charAt(0).toUpperCase()+n.weather[0].description.slice(1)),n.main.temp_min&&n.main.temp_max&&(t.max=Math.round(n.main.temp_max),t.min=Math.round(n.main.temp_min)),Object.entries(t).map(([l,i])=>i===void 0&&delete t[l]),t}const N=()=>e("div",{className:"m-16",children:e("div",{role:"progressbar",className:"rounded-md p-4 max-w-sm w-full mx-auto h-40 m-16",children:o("div",{className:"animate-pulse flex space-x-4",children:[e("div",{className:"rounded-full bg-gray-300 h-12 w-12"}),o("div",{className:"flex-1 space-y-4 py-1",children:[e("div",{className:"h-4 bg-gray-300 rounded w-3/4"}),o("div",{className:"space-y-2",children:[e("div",{className:"h-4 bg-gray-300 rounded w-5/6"}),e("div",{className:"h-4 bg-gray-300 rounded w-5/6"}),e("div",{className:"h-4 bg-gray-300 rounded"}),e("div",{className:"h-4 bg-gray-300 rounded"})]})]})]})})}),ee=({location:n,units:t})=>{const{forecast:l,isLoading:i,isError:a}=x("forecast",n,t);return i||a?e(N,{}):e(b,{children:e("div",{className:"m-4",children:e("div",{className:"",children:l.map((r,s)=>e("ul",{className:"mt-4",children:o("li",{className:"flex flex-row text-gray-500 dark:text-white p-1",children:[e("span",{className:"flex-1 text-left",children:c(r.dt_txt).format("dddd")}),e("span",{className:"text-indigo-700 dark:text-white text-2xl",children:e("span",{className:r.forecastIcon})}),o("span",{className:"flex-1 text-right",children:[r.min,"\xB0 / ",r.max,"\xB0"]})]})},s))})})})};c.extend(y);const te=({location:n,units:t})=>{const l=!!t.match(/metric/i),{weather:i,isLoading:a,isError:r}=x("weather",n,t);return a||r?e(N,{}):e(b,{children:o("div",{className:"m-4",children:[o("div",{className:"sm",children:[o("p",{className:"tracking-wide text-2xl dark:text-white font-semibold",children:[i.location,", ",i.country]}),o("p",{className:"text-gray-500 dark:text-gray-400 tracking-wide",children:[c(i.date).format("dddd"),","," ",c.utc(i.date).utcOffset(i.timezone).format("h:mm A"),", ",i.description]})]}),o("div",{className:"flex flex-row justify-between my-8 lg:my-4 text-5xl lg:text-6xl tracking-wide",children:[o("span",{className:"mt-6 md:mt-10 text-gray-500 dark:text-white font-light",children:[i.temperature,"\xB0",o("span",{className:"flex flex-col text-gray-500 dark:text-gray-400 font-normal tracking-wide text-base mt-1",children:["Feels like ",i.feels_like,"\xB0"]})," "]}),e("div",{className:"text-8xl sm:text-9xl mt-4 text-indigo-700 dark:text-white",children:e("span",{className:i.weatherIcon})})]}),o("div",{className:"text-indigo-700 dark:text-gray-400 mt-1",children:[e("span",{className:"wi wi-strong-wind text-xl"}),o("span",{className:"ml-1 mr-2 text-gray-500 dark:text-white tracking-wide",children:[i.wind_speed,l?"m/s":"mph"," winds"]}),e("span",{className:"wi wi-humidity text-xl"}),o("span",{className:"ml-1 text-gray-500 dark:text-white tracking-wide",children:[i.humidity,"% humidity"]})]}),e("div",{className:"mt-10 text-center text-2xl text-gray-500 dark:text-white tracking-wide mb-4",children:i.weatherRecommendation})]})})},ne=({units:n,onUnitsChange:t})=>{const[l,i]=d.useState(!1),[a,r]=d.useState(!!n.match(/metric/i)),s=()=>{i(!l)};return o("div",{className:"w-full md:w-3/5 lg:w-1/2 m-auto mt-4",children:[o("button",{type:"button",className:"text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-500 focus:ring-green-200 dark:focus:ring-white",id:"toggle-units","aria-expanded":"false","aria-haspopup":"true",onClick:s,children:[e("span",{className:"sr-only",children:"Open toggle units menu"}),o("svg",{width:"30px",height:"30px",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"h-6 w-6 stroke-current text-gray-500",children:[e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})]}),l?e("div",{className:"origin-top mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none",role:"menu","aria-orientation":"vertical","aria-labelledby":"toggle settings",children:e("ul",{children:o("li",{onClick:()=>{t(n.match(/metric/i)?"imperial":"metric"),r(!a),s()},className:"block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600",role:"menuitem",children:["Change units",e("br",{}),o("span",{className:"text-xs text-indigo-500 dark:text-white",children:[a?"Imperial":"Metric"," ",a?"(F\xB0, mph)":"(C\xB0, m/s)"]})]})})}):null]})},ae=500;function oe(){const[n,t]=d.useState("New York"),[l,i]=d.useState(""),[a,r]=d.useState(!1),[s,h]=d.useState("metric"),z=d.useMemo(()=>M(m=>{i(m)},ae),[]),C=m=>{const g=m.target.value.trim();g&&r(!0),z(g)},S=m=>{h(m)};return d.useEffect(()=>{l&&(t(l),r(!1))},[l]),e("div",{className:"dark:bg-black min-h-screen",children:o(B,{children:[e(W,{}),e(R,{children:e(A,{exact:!0,path:"/",children:e("main",{children:o("div",{className:"mx-auto w-5/6 md:w-full 2xl:max-w-7xl xl:max-w-6xl",children:[e(H,{location:n,isSearching:a,onLocationChange:C}),o("div",{className:"shadow-lg rounded-lg h-auto overflow-hidden w-full md:w-3/5 lg:w-1/2 m-auto mt-4 divide-y-2 divide-light-blue-400",children:[e(te,{location:n,units:s}),e(ee,{location:n,units:s})]}),e(ne,{units:s,onUnitsChange:S}),e(O,{})]})})})})]})})}U.render(e(_,{value:{onError:n=>{n&&P(`Error: ${n.message}`,{type:"error"})},onSuccess:n=>{n&&E()},shouldRetryOnError:!1},children:e(Y,{children:e(oe,{})})}),document.getElementById("root"));
