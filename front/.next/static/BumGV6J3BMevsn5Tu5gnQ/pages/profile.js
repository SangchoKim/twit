(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"W+IF":function(e,t,n){"use strict";n.r(t);var a=n("ln6h"),r=n.n(a),o=n("O40h"),i=n("q1tI"),u=n.n(i),c=n("VXEj"),s=n("2/Rp"),l=n("bx4M"),d=n("CtXQ"),p=n("/MKj"),m=n("Vl3Y"),f=n("5rEg"),b=n("LAVF"),g=u.a.createElement,y=function(){var e=Object(i.useState)(""),t=e[0],n=e[1],a=Object(p.b)(),r=Object(p.c)(function(e){return e.user}),o=r.me,u=r.isEditingNickname,c=Object(i.useCallback)(function(e){n(e.target.value)},[]),l=Object(i.useCallback)(function(e){e.preventDefault(),a({type:b.c,data:t})},[t]);return g(m.a,{style:{marginBottom:"20px",border:"1px solid #d9d9d9",padding:"20px"},onSubmit:l},g(f.a,{addonBefore:"\ub2c9\ub124\uc784",value:t||o&&o.nickname,onChange:c}),g(s.a,{type:"primary",htmlType:"submit",loading:u},"\uc218\uc815"))},h=n("p+NB"),k=n("uor+"),w=u.a.createElement,j=function(){var e=Object(p.b)(),t=Object(p.c)(function(e){return e.user}),n=t.followingList,a=t.followerList,r=t.hasMoreFollower,o=t.hasMoreFollowing,u=Object(p.c)(function(e){return e.post}).mainPosts,m=Object(i.useCallback)(function(t){return function(){e({type:b.D,data:t})}},[]),f=Object(i.useCallback)(function(t){return function(){e({type:b.x,data:t})}},[]),g=Object(i.useCallback)(function(){e({type:b.l,offset:n.length})},[n.length]),h=Object(i.useCallback)(function(){e({type:b.i,offset:a.length})},[a.length]);return w("div",null,w(y,null),w(c.a,{style:{marginBottom:"20px"},grid:{gutter:4,xs:2,md:3},size:"small",header:w("div",null,"\ud314\ub85c\uc789 \ubaa9\ub85d"),loadMore:o&&w(s.a,{style:{width:"100%"},onClick:g},"\ub354 \ubcf4\uae30"),bordered:!0,dataSource:n,renderItem:function(e){return w(c.a.Item,{style:{marginTop:"20px"}},w(l.a,{actions:[w(d.a,{key:"stop",type:"stop",onClick:m(e.id)})]},w(l.a.Meta,{description:e.nickname})))}}),w(c.a,{style:{marginBottom:"20px"},grid:{gutter:4,xs:2,md:3},size:"small",header:w("div",null,"\ud314\ub85c\uc6cc \ubaa9\ub85d"),loadMore:r&&w(s.a,{style:{width:"100%"},onClick:h},"\ub354 \ubcf4\uae30"),bordered:!0,dataSource:a,renderItem:function(e){return w(c.a.Item,{style:{marginTop:"20px"}},w(l.a,{actions:[w(d.a,{key:"stop",type:"stop",onClick:f(e.id)})]},w(l.a.Meta,{description:e.nickname})))}}),w("div",null,u.map(function(e){return w(k.a,{key:+e.createdAt,post:e})})))};j.getInitialProps=function(){var e=Object(o.a)(r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=t.store.getState(),t.store.dispatch({type:b.i,data:n.user.me&&n.user.me.id}),t.store.dispatch({type:b.l,data:n.user.me&&n.user.me.id}),t.store.dispatch({type:h.w,data:n.user.me&&n.user.me.id});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();t.default=j},u1GD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){var e=n("W+IF");return{page:e.default||e}}])}},[["u1GD",1,0]]]);