(this["webpackJsonpgraphql-client"]=this["webpackJsonpgraphql-client"]||[]).push([[0],{106:function(e,t,n){"use strict";n.r(t);var c,a,r=n(3),s=n.n(r),i=n(65),l=n.n(i),o=n(105),j=n(49),d=n(107),b=n(118),u=n(28),h=n(22),m=n(68),O=new b.a({uri:"http://localhost:5000/graphql"}),x=new m.a({uri:"ws://localhost:5000/graphql",options:{reconnect:!0}}),v=Object(u.split)((function(e){var t=e.query,n=Object(h.e)(t);return"OperationDefinition"===n.kind&&"subscription"===n.operation}),x,O),p=new j.a({link:v,cache:new d.a}),g=n(20),N=n(10),f=n(34),y=n(21),S=(n(48),n(27)),w=n(119),k=n(121),q=n(1),$=Object(S.a)(c||(c=Object(y.a)(["\n  query GetAllARTIST {\n    artists {\n        name\n        country\n        id\n        songs{\n          title\n          duration\n          genre\n          id\n          artistId\n        }\n    }\n  }\n"]))),A=Object(S.a)(a||(a=Object(y.a)(["\n    mutation addArtist($name: String!, $country: String!){\n      addArtist(artist: {name: $name, country: $country}){\n            name\n            country\n        }\n    }\n"])));var I=function(){var e,t,n=Object(w.a)($),c=n.loading,a=n.error,r=n.data,s=Object(k.a)(A),i=Object(f.a)(s,1)[0];return c?Object(q.jsx)("p",{children:"Loading..."}):a?Object(q.jsx)("p",{children:"Error :("}):Object(q.jsxs)("div",{className:"container",children:[Object(q.jsx)("h2",{className:"text-center mt-3",children:"Artist"}),Object(q.jsx)("div",{className:"row justify-content-center",children:Object(q.jsx)("div",{className:"col-md-6",children:Object(q.jsxs)("form",{onSubmit:function(n){n.preventDefault(),i({variables:{name:e.value,country:t.value}}).catch((function(e){console.log("grapghql err",e)}))},children:[Object(q.jsxs)("div",{className:"form-row",children:[Object(q.jsx)("div",{className:"col",children:Object(q.jsx)("input",{type:"text",className:"form-control",placeholder:"Name",required:!0,ref:function(t){return e=t},id:"name"})}),Object(q.jsx)("div",{className:"col",children:Object(q.jsx)("input",{type:"text",className:"form-control",placeholder:"Country",required:!0,ref:function(e){return t=e},id:"country"})})]}),Object(q.jsx)("br",{}),Object(q.jsx)("div",{children:Object(q.jsx)("button",{type:"submit",className:"btn btn-outline-dark",children:"Submit"})})]})})}),Object(q.jsx)("div",{className:"row mt-5",children:r.artists.map((function(e,t){return Object(q.jsx)("div",{className:"col-md-4",children:Object(q.jsxs)("div",{className:"card py-5 px-5",children:[Object(q.jsxs)("h4",{children:["Artist Name: ",e.name]}),Object(q.jsxs)("h4",{children:["Country: ",e.country]}),Object(q.jsx)(g.b,{className:"btn btn-outline-dark mt-4",to:{pathname:"/songs/".concat(e.id),state:e.songs},children:" Songs"})]})},t)}))})]})};var D,G,T=function(){return Object(q.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(q.jsx)("a",{className:"navbar-brand",href:"#",children:"GraphQl"}),Object(q.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(q.jsx)("span",{className:"navbar-toggler-icon"})}),Object(q.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(q.jsxs)("div",{className:"navbar-nav",children:[Object(q.jsxs)(g.b,{className:"nav-item nav-link active",href:"#",to:"/",children:["Artist",Object(q.jsx)("span",{className:"sr-only",children:"(current)"})]}),Object(q.jsx)(g.b,{className:"nav-item nav-link active",href:"#",to:"/allsongs",children:"Songs"})]})})]})},C=Object(S.a)(D||(D=Object(y.a)(["\n    mutation addSong($title: String!, $duration: Int!, $genre: String!, $artistId: ID! ){\n        addSong(song: {title: $title, duration: $duration, genre: $genre, artistId: $artistId}){\n            title\n            duration\n            genre\n            artistId\n        }\n    }\n"]))),M=Object(S.a)(G||(G=Object(y.a)(["\n        mutation deleteSong($id: ID!){\n            deleteSong(id: $id)\n        }\n    "])));var E,J=function(e){var t,n,c,a=e.location.state,r=Object(N.f)().id,s=Object(k.a)(C),i=Object(f.a)(s,1)[0],l=Object(k.a)(M),o=Object(f.a)(l,1)[0];return Object(q.jsx)("div",{children:Object(q.jsxs)("div",{className:"container",children:[Object(q.jsx)("h2",{className:"text-center mt-3",children:"Songs"}),Object(q.jsx)("div",{className:"row justify-content-center",children:Object(q.jsx)("div",{className:"col-md-6",children:Object(q.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i({variables:{title:t.value,duration:Number(n.value),genre:c.value,artistId:r}}).catch((function(e){console.log("grapghql err",e)})),console.log(t.value,n.value,c.value,r)},children:[Object(q.jsxs)("div",{className:"form-row",children:[Object(q.jsx)("div",{className:"col",children:Object(q.jsx)("input",{type:"text",className:"form-control",placeholder:"Title",required:!0,ref:function(e){return t=e},id:"title"})}),Object(q.jsx)("div",{className:"col",children:Object(q.jsx)("input",{type:"number",className:"form-control",placeholder:"Duration",required:!0,ref:function(e){return n=e},id:"duration"})})]}),Object(q.jsx)("br",{}),Object(q.jsx)("div",{className:"form-row",children:Object(q.jsx)("div",{className:"col",children:Object(q.jsx)("input",{type:"text",className:"form-control",placeholder:"Genre",required:!0,ref:function(e){return c=e},id:"genre"})})}),Object(q.jsx)("br",{}),Object(q.jsx)("div",{children:Object(q.jsx)("button",{type:"submit",className:"btn btn-outline-dark",children:"Submit"})})]})})}),Object(q.jsx)("div",{className:"row mt-5",children:a&&a.map((function(e,t){return Object(q.jsx)("div",{className:"col-md-4",children:Object(q.jsxs)("div",{className:"card py-5 px-5",children:[Object(q.jsxs)("h4",{children:["Song Title: ",e.title]}),Object(q.jsxs)("h4",{children:["Duration: ",e.duration]}),Object(q.jsxs)("h4",{children:["Genre: ",e.genre]}),Object(q.jsx)("button",{className:"btn btn-outline-dark",onClick:function(){return function(e){o({variables:{id:e}})}(e.id)},children:"Delete"})]})},t)}))})]})})},L=Object(S.a)(E||(E=Object(y.a)(["\n  query GetAllSongs {\n    songs {\n        title\n          duration\n          genre\n          id\n          artistId\n          artist{\n            name\n            country\n            id    \n        }\n    }\n  }\n"])));var B=function(){var e=Object(w.a)(L),t=e.loading,n=e.error,c=e.data;return t?Object(q.jsx)("p",{children:"Loading..."}):n?Object(q.jsx)("p",{children:"Error :("}):(console.log(c.songs),Object(q.jsxs)("div",{className:"container",children:[Object(q.jsx)("h2",{className:"text-center mt-3",children:"Songs"}),Object(q.jsx)("div",{className:"row mt-5",children:c.songs.map((function(e,t){return Object(q.jsx)("div",{className:"col-md-4",children:Object(q.jsxs)("div",{className:"card py-5 px-5",children:[Object(q.jsxs)("h4",{children:["Song Title: ",e.title]}),Object(q.jsxs)("h4",{children:["Duration: ",e.duration]}),Object(q.jsxs)("h4",{children:["Genre: ",e.genre]}),Object(q.jsxs)("h4",{children:["Artist: ",e.artist.name]}),Object(q.jsxs)("h4",{children:["Country: ",e.artist.country]})]},t)})}))})]}))};var Q=function(){return Object(q.jsxs)(g.a,{children:[Object(q.jsx)(T,{}),Object(q.jsxs)(N.c,{children:[Object(q.jsx)(N.a,{exact:!0,path:"/",component:I}),Object(q.jsx)(N.a,{path:"/songs/:id",component:J}),Object(q.jsx)(N.a,{path:"/allsongs",component:B})]})]})};n(104);var R=function(){return Object(q.jsx)(o.a,{client:p,children:Object(q.jsx)(Q,{})})};l.a.render(Object(q.jsx)(s.a.StrictMode,{children:Object(q.jsx)(R,{})}),document.getElementById("root"))},48:function(e,t,n){}},[[106,1,2]]]);
//# sourceMappingURL=main.5423b278.chunk.js.map