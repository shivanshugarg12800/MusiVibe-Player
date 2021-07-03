(this.webpackJsonpmusivibe=this.webpackJsonpmusivibe||[]).push([[0],{18:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(12),i=n.n(r),s=n(4),o=n.n(s),u=n(6),l=n(3),d=n(8),b=(n(18),n(0)),j=function(e){var t=e.currentSong;return Object(b.jsxs)("div",{className:"song-container",children:[Object(b.jsx)("img",{alt:t.name,src:t.cover}),Object(b.jsx)("h2",{children:t.name}),Object(b.jsx)("h3",{children:t.artist})]})},p=n(7),h=n(5),f=function(e){var t=e.audioRef,n=e.currentSong,a=e.setCurrentSong,c=e.isPlaying,r=e.setIsPlaying,i=e.songInfo,s=e.songs,d=e.setSongs,j=e.setSongInfo,f=function(e){var t=s.map((function(t){return t.id===e.id?Object(l.a)(Object(l.a)({},t),{},{active:!0}):Object(l.a)(Object(l.a)({},t),{},{active:!1})}));d(t)},m=function(e){var t=Math.floor(e/60);return(t=t>=10?t:"0"+t)+":"+(e=(e=Math.floor(e%60))>=10?e:"0"+e)},g=function(){var e=Object(u.a)(o.a.mark((function e(r){var i,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=s.findIndex((function(e){return e.id===n.id})),u=s.length,"back"!==r){e.next=8;break}return e.next=5,a(0===i?s[u-1]:s[i-1]);case 5:f(0===i?s[u-1]:s[i-1]),e.next=11;break;case 8:return e.next=10,a(i===u-1?s[0]:s[i+1]);case 10:f(i===u-1?s[0]:s[i+1]);case 11:c&&t.current.play();case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v={transform:"translateX(".concat(i.animationPercentage,"%)")};return Object(b.jsxs)("div",{className:"player",children:[Object(b.jsxs)("div",{className:"time-control",children:[Object(b.jsx)("p",{children:m(i.currentTime)}),Object(b.jsxs)("div",{style:{background:"linear-gradient( to right, ".concat(n.color[0],",").concat(n.color[1],")")},className:"track",children:[Object(b.jsx)("input",{min:0,max:i.duration||0,value:i.currentTime,onChange:function(e){t.current.currentTime=e.target.value,j(Object(l.a)(Object(l.a)({},i),{},{currentTime:e.target.value}))},type:"range"}),Object(b.jsx)("div",{style:v,className:"track-animation"})]}),Object(b.jsx)("p",{children:i.duration?m(i.duration):"0:00"})]}),Object(b.jsxs)("div",{className:"play-control",children:[Object(b.jsx)(p.a,{onClick:function(){return g("back")},className:"skip-back",size:"2x",icon:h.a}),Object(b.jsx)(p.a,{onClick:function(){c?(t.current.pause(),r(!c)):(t.current.play(),r(!c))},className:"play",size:"2x",icon:c?h.d:h.e}),Object(b.jsx)(p.a,{onClick:function(){return g("forward")},className:"skip-forward",size:"2x",icon:h.b})]})]})},m=function(e){var t=e.audioRef,n=e.song,a=e.songs,c=e.setCurrentSong,r=e.isPlaying,i=e.id,s=e.setSongs,d=function(){var e=Object(u.a)(o.a.mark((function e(){var u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(n);case 2:u=a.map((function(e){return e.id===i?Object(l.a)(Object(l.a)({},e),{},{active:!0}):Object(l.a)(Object(l.a)({},e),{},{active:!1})})),s(u),r&&t.current.play();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{onClick:d,className:"library-song ".concat(n.active?"selected":""),children:[Object(b.jsx)("img",{alt:n.name,src:n.cover}),Object(b.jsxs)("div",{className:"song-description",children:[Object(b.jsx)("h3",{children:n.name}),Object(b.jsx)("h4",{children:n.artist})]})]})},g=function(e){var t=e.audioRef,n=e.songs,a=e.setCurrentSong,c=e.isPlaying,r=e.setSongs,i=e.libraryStatus;return Object(b.jsxs)("div",{className:"library ".concat(i?"library-status":""),children:[Object(b.jsx)("h2",{children:"Library"}),Object(b.jsx)("div",{className:"library-songs",children:n.map((function(e){return Object(b.jsx)(m,{isPlaying:c,audioRef:t,songs:n,setCurrentSong:a,song:e,id:e.id,setSongs:r},e.id)}))})]})},v=function(e){var t=e.libraryStatus,n=e.setLibraryStatus;return Object(b.jsx)("div",{children:Object(b.jsxs)("nav",{children:[Object(b.jsx)("h1",{children:"MusiVibe"}),Object(b.jsxs)("button",{onClick:function(){n(!t)},children:["Library",Object(b.jsx)(p.a,{icon:h.c})]})]})})},O=n(27);var x=function(){return[{name:"Beaver Creek",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",color:["#205950","#2ab3bf"],id:Object(O.a)(),active:!0},{name:"Daylight",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9272",color:["#EF8EA9","#ab417f"],id:Object(O.a)(),active:!1},{name:"Keep Going",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#CD607D","#c94043"],id:Object(O.a)(),active:!1},{name:"Nightfall",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9148",color:["#EF8EA9","#ab417f"],id:Object(O.a)(),active:!1},{name:"Reflection",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9228",color:["#CD607D","#c94043"],id:Object(O.a)(),active:!1},{name:"Under the City Stars",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(O.a)(),active:!1}]};var y=function(){var e=Object(a.useRef)(null),t=Object(a.useState)(x()),n=Object(d.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(c[0]),s=Object(d.a)(i,2),p=s[0],h=s[1],m=Object(a.useState)(!1),O=Object(d.a)(m,2),y=O[0],S=O[1],k=Object(a.useState)({currentTime:0,duration:0,animationPercentage:0}),C=Object(d.a)(k,2),w=C[0],N=C[1],P=Object(a.useState)(!1),I=Object(d.a)(P,2),M=I[0],T=I[1],A=function(e){var t=e.target.currentTime,n=e.target.duration,a=Math.round(t),c=Math.round(n),r=Math.round(a/c*100);N(Object(l.a)(Object(l.a)({},w),{},{currentTime:t,duration:n,animationPercentage:r}))},R=function(){var t=Object(u.a)(o.a.mark((function t(){var n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c.findIndex((function(e){return e.id===p.id})),a=c.length,t.next=4,h(n===a-1?c[0]:c[n+1]);case 4:y&&e.current.play();case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"App ".concat(M?"library-active":""),children:[Object(b.jsx)(v,{libraryStatus:M,setLibraryStatus:T}),Object(b.jsx)(j,{currentSong:p}),Object(b.jsx)(f,{audioRef:e,setIsPlaying:S,isPlaying:y,currentSong:p,songInfo:w,setSongInfo:N,songs:c,setSongs:r,setCurrentSong:h}),Object(b.jsx)(g,{songs:c,setCurrentSong:h,audioRef:e,isPlaying:y,setSongs:r,libraryStatus:M}),Object(b.jsx)("audio",{onLoadedMetadata:A,onTimeUpdate:A,ref:e,src:p.audio,onEnded:R})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root")),S()}},[[25,1,2]]]);
//# sourceMappingURL=main.f1215363.chunk.js.map