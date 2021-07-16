(this.webpackJsonpmusivibe=this.webpackJsonpmusivibe||[]).push([[0],{18:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c.n(a),n=c(12),i=c.n(n),b=c(4),r=c.n(b),l=c(6),o=c(3),j=c(8),u=(c(18),c(0)),d=function(e){var t=e.currentSong;return Object(u.jsxs)("div",{className:"song-container",children:[Object(u.jsx)("img",{alt:t.name,src:t.cover}),Object(u.jsx)("h2",{children:t.name}),Object(u.jsx)("h3",{children:t.artist})]})},m=c(7),v=c(5),O=function(e){var t=e.audioRef,c=e.currentSong,a=e.setCurrentSong,s=e.isPlaying,n=e.setIsPlaying,i=e.songInfo,b=e.songs,j=e.setSongs,d=e.setSongInfo,O=function(e){var t=b.map((function(t){return t.id===e.id?Object(o.a)(Object(o.a)({},t),{},{active:!0}):Object(o.a)(Object(o.a)({},t),{},{active:!1})}));j(t)},p=function(e){var t=Math.floor(e/60);return(t=t>=10?t:"0"+t)+":"+(e=(e=Math.floor(e%60))>=10?e:"0"+e)},x=function(){var e=Object(l.a)(r.a.mark((function e(n){var i,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=b.findIndex((function(e){return e.id===c.id})),l=b.length,"back"!==n){e.next=8;break}return e.next=5,a(0===i?b[l-1]:b[i-1]);case 5:O(0===i?b[l-1]:b[i-1]),e.next=11;break;case 8:return e.next=10,a(i===l-1?b[0]:b[i+1]);case 10:O(i===l-1?b[0]:b[i+1]);case 11:s&&t.current.play();case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h={transform:"translateX(".concat(i.animationPercentage,"%)")};return Object(u.jsxs)("div",{className:"player",children:[Object(u.jsxs)("div",{className:"time-control",children:[Object(u.jsx)("p",{children:p(i.currentTime)}),Object(u.jsxs)("div",{style:{background:"linear-gradient( to right, ".concat(c.color[0],",").concat(c.color[1],")")},className:"track",children:[Object(u.jsx)("input",{min:0,max:i.duration||0,value:i.currentTime,onChange:function(e){t.current.currentTime=e.target.value,d(Object(o.a)(Object(o.a)({},i),{},{currentTime:e.target.value}))},type:"range"}),Object(u.jsx)("div",{style:h,className:"track-animation"})]}),Object(u.jsx)("p",{children:i.duration?p(i.duration):"0:00"})]}),Object(u.jsxs)("div",{className:"play-control",children:[Object(u.jsx)(m.a,{onClick:function(){return x("back")},className:"skip-back font-icons",size:"2x",icon:v.a}),Object(u.jsx)(m.a,{onClick:function(){s?(t.current.pause(),n(!s)):(t.current.play(),n(!s))},className:"play font-icons",size:"2x",icon:s?v.d:v.e}),Object(u.jsx)(m.a,{onClick:function(){return x("forward")},className:"skip-forward font-icons",size:"2x",icon:v.b})]})]})},p=function(e){var t=e.audioRef,c=e.song,a=e.songs,s=e.setCurrentSong,n=e.isPlaying,i=e.id,b=e.setSongs,j=function(){var e=Object(l.a)(r.a.mark((function e(){var l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(c);case 2:l=a.map((function(e){return e.id===i?Object(o.a)(Object(o.a)({},e),{},{active:!0}):Object(o.a)(Object(o.a)({},e),{},{active:!1})})),b(l),n&&t.current.play();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{onClick:j,className:"library-song ".concat(c.active?"selected":""),children:[Object(u.jsx)("img",{alt:c.name,src:c.cover}),Object(u.jsxs)("div",{className:"song-description",children:[Object(u.jsx)("h3",{children:c.name}),Object(u.jsx)("h4",{children:c.artist})]})]})},x=function(e){var t=e.audioRef,c=e.songs,a=e.setCurrentSong,s=e.isPlaying,n=e.setSongs,i=e.libraryStatus;return Object(u.jsxs)("div",{className:"library ".concat(i?"library-status":""),children:[Object(u.jsx)("h2",{children:"Library"}),Object(u.jsx)("div",{className:"library-songs",children:c.map((function(e){return Object(u.jsx)(p,{isPlaying:s,audioRef:t,songs:c,setCurrentSong:a,song:e,id:e.id,setSongs:n},e.id)}))})]})},h=function(e){var t=e.libraryStatus,c=e.setLibraryStatus;return Object(u.jsx)("div",{children:Object(u.jsxs)("nav",{children:[Object(u.jsx)("h1",{children:"MusiVibe"}),Object(u.jsxs)("button",{onClick:function(){c(!t)},children:["Library",Object(u.jsx)(m.a,{icon:v.c})]})]})})},f=c(27);var g=function(){return[{name:"Beaver Creek",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",color:["#205950","#2ab3bf"],id:Object(f.a)(),active:!0},{name:"Daylight",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9272",color:["#EF8EA9","#ab417f"],id:Object(f.a)(),active:!1},{name:"Keep Going",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#CD607D","#c94043"],id:Object(f.a)(),active:!1},{name:"Nightfall",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9148",color:["#EF8EA9","#ab417f"],id:Object(f.a)(),active:!1},{name:"Reflection",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9228",color:["#CD607D","#c94043"],id:Object(f.a)(),active:!1},{name:"Under the City Stars",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(f.a)(),active:!1}]},N=function(e){var t=e.isPlaying,c=e.libraryStatus;return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"bubbles ".concat(t?"showBubble":"hideBubble","  \n         ").concat(c?"shrinkDiv":""),children:[Object(u.jsx)("div",{className:"bubble"}),Object(u.jsx)("div",{className:"bubble"}),Object(u.jsx)("div",{className:"bubble"}),Object(u.jsx)("div",{className:"bubble"}),Object(u.jsx)("div",{className:"bubble"}),Object(u.jsx)("div",{className:"bubble"}),Object(u.jsx)("div",{className:"bubble"}),Object(u.jsx)("div",{className:"bubble"}),Object(u.jsx)("div",{className:"bubble"}),Object(u.jsx)("div",{className:"bubble"}),Object(u.jsx)("div",{className:"bubble"}),Object(u.jsx)("div",{className:"bubble"}),Object(u.jsx)("div",{className:"bubble"}),Object(u.jsx)("div",{className:"bubble"}),Object(u.jsx)("div",{className:"bubble"}),Object(u.jsx)("div",{className:"bubble"}),Object(u.jsx)("div",{className:"bubble"}),Object(u.jsx)("div",{className:"bubble"}),Object(u.jsx)("div",{className:"bubble"}),Object(u.jsx)("div",{className:"bubble"}),Object(u.jsx)("div",{className:"bubble"}),Object(u.jsx)("div",{className:"bubble"}),Object(u.jsx)("div",{className:"bubble"}),Object(u.jsx)("div",{className:"bubble"}),Object(u.jsx)("div",{className:"bubble"}),Object(u.jsx)("div",{className:"bubble"}),Object(u.jsx)("div",{className:"bubble"}),Object(u.jsx)("div",{className:"bubble"}),Object(u.jsx)("div",{className:"bubble"}),Object(u.jsx)("div",{className:"bubble"}),Object(u.jsx)("div",{className:"bubble"}),Object(u.jsx)("div",{className:"bubble"}),Object(u.jsx)("div",{className:"bubble"}),Object(u.jsx)("div",{className:"bubble"}),Object(u.jsx)("div",{className:"bubble"}),Object(u.jsx)("div",{className:"bubble"}),Object(u.jsx)("div",{className:"bubble"}),Object(u.jsx)("div",{className:"bubble"}),Object(u.jsx)("div",{className:"bubble"}),Object(u.jsx)("div",{className:"bubble"}),Object(u.jsx)("div",{className:"bubble"}),Object(u.jsx)("div",{className:"bubble"}),Object(u.jsx)("div",{className:"bubble"})]})})};var y=function(){var e=Object(a.useRef)(null),t=Object(a.useState)(g()),c=Object(j.a)(t,2),s=c[0],n=c[1],i=Object(a.useState)(s[0]),b=Object(j.a)(i,2),m=b[0],v=b[1],p=Object(a.useState)(!1),f=Object(j.a)(p,2),y=f[0],S=f[1],k=Object(a.useState)({currentTime:0,duration:0,animationPercentage:0}),w=Object(j.a)(k,2),C=w[0],P=w[1],I=Object(a.useState)(!1),M=Object(j.a)(I,2),T=M[0],A=M[1],R=function(e){var t=e.target.currentTime,c=e.target.duration,a=Math.round(t),s=Math.round(c),n=Math.round(a/s*100);P(Object(o.a)(Object(o.a)({},C),{},{currentTime:t,duration:c,animationPercentage:n}))},D=function(){var t=Object(l.a)(r.a.mark((function t(){var c,a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=s.findIndex((function(e){return e.id===m.id})),a=s.length,t.next=4,v(c===a-1?s[0]:s[c+1]);case 4:y&&e.current.play();case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"App ".concat(T?"library-active":""),children:[Object(u.jsx)(N,{isPlaying:y,libraryStatus:T}),Object(u.jsx)(h,{libraryStatus:T,setLibraryStatus:A}),Object(u.jsx)(d,{currentSong:m}),Object(u.jsx)(O,{audioRef:e,setIsPlaying:S,isPlaying:y,currentSong:m,songInfo:C,setSongInfo:P,songs:s,setSongs:n,setCurrentSong:v}),Object(u.jsx)(x,{songs:s,setCurrentSong:v,audioRef:e,isPlaying:y,setSongs:n,libraryStatus:T}),Object(u.jsx)("audio",{onLoadedMetadata:R,onTimeUpdate:R,ref:e,src:m.audio,onEnded:D})]})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,28)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root")),S()}},[[25,1,2]]]);
//# sourceMappingURL=main.93fe8415.chunk.js.map