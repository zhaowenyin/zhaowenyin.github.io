(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16755b0a"],{4147:function(t,n,e){"use strict";var r=e("d4ce"),i=e.n(r);i.a},"45ab":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"view"},[e("CommonHeader",{attrs:{back:t.onBack,title:t.$route.query.title||""}}),e("div",{staticClass:"html-box add-html-box"},[e("RichText",{attrs:{html:t.html}})],1)],1)},i=[],a=e("5d73"),u=e.n(a),o=e("cebc"),c=(e("cadf"),e("551c"),e("097d"),e("5520")),s=e("2f62"),l=e("d2a0"),f={data:function(){return{}},components:{CommonHeader:c["a"],RichText:l["a"]},created:function(){},watch:{},computed:Object(o["a"])({},Object(s["d"])("task",{taskList:function(t){return t.taskList},resultList:function(t){return t.resultList}}),{html:function(){var t=this.$route.query.id;if(0===this.taskList.length){var n=!0,e=!1,r=void 0;try{for(var i,a=u()(this.resultList);!(n=(i=a.next()).done);n=!0){var o=i.value;if(o.frontend_id===t)return o.question.html}}catch(p){e=!0,r=p}finally{try{n||null==a.return||a.return()}finally{if(e)throw r}}}else if(this.taskList.length>0){var c=!0,s=!1,l=void 0;try{for(var f,d=u()(this.taskList);!(c=(f=d.next()).done);c=!0){var h=f.value,v=!0,m=!1,y=void 0;try{for(var k,b=u()(h);!(v=(k=b.next()).done);v=!0){var w=k.value;if(w.frontend_id===t)return w.question.html}}catch(p){m=!0,y=p}finally{try{v||null==b.return||b.return()}finally{if(m)throw y}}}}catch(p){s=!0,l=p}finally{try{c||null==d.return||d.return()}finally{if(s)throw l}}}return null}}),methods:{onBack:function(){this.$router.go(-1)}}},d=f,h=(e("4147"),e("ef6c"),e("2877")),v=Object(h["a"])(d,r,i,!1,null,"642925cc",null);v.options.__file="Link.vue";n["default"]=v.exports},"8a3d":function(t,n,e){},d4ce:function(t,n,e){},ef6c:function(t,n,e){"use strict";var r=e("8a3d"),i=e.n(r);i.a}}]);