(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{94184:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)){if(r.length){var i=a.apply(null,r);i&&e.push(i)}}else if("object"===s)if(r.toString===Object.prototype.toString)for(var c in r)n.call(r,c)&&r[c]&&e.push(c);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},16071:function(e,t,r){"use strict";var n=r(53848),a=r(69448);t.default=void 0;var s=a(r(67294)),i=r(11689),c=r(72441),l=r(75749),o={};function u(e,t,r,n){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;o[t+"%"+r+(a?"%"+a:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,r=(0,c.useRouter)(),a=r&&r.pathname||"/",d=s.default.useMemo((function(){var t=(0,i.resolveHref)(a,e.href,!0),r=n(t,2),s=r[0],c=r[1];return{href:s,as:e.as?(0,i.resolveHref)(a,e.as):c||s}}),[a,e.href,e.as]),f=d.href,x=d.as,h=e.children,m=e.replace,p=e.shallow,v=e.scroll,j=e.locale;"string"===typeof h&&(h=s.default.createElement("a",null,h));var g=s.Children.only(h),y=g&&"object"===typeof g&&g.ref,N=(0,l.useIntersection)({rootMargin:"200px"}),b=n(N,2),w=b[0],E=b[1],k=s.default.useCallback((function(e){w(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,w]);(0,s.useEffect)((function(){var e=E&&t&&(0,i.isLocalURL)(f),n="undefined"!==typeof j?j:r&&r.locale,a=o[f+"%"+x+(n?"%"+n:"")];e&&!a&&u(r,f,x,{locale:n})}),[x,f,E,j,t,r]);var O={ref:k,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,s,c,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(r))&&(e.preventDefault(),null==c&&(c=n.indexOf("#")<0),t[a?"replace":"push"](r,n,{shallow:s,locale:l,scroll:c}))}(e,r,f,x,m,p,v,j)},onMouseEnter:function(e){(0,i.isLocalURL)(f)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),u(r,f,x,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var _="undefined"!==typeof j?j:r&&r.locale,C=r&&r.isLocaleDomain&&(0,i.getDomainLocale)(x,_,r&&r.locales,r&&r.domainLocales);O.href=C||(0,i.addBasePath)((0,i.addLocale)(x,_,r&&r.defaultLocale))}return s.default.cloneElement(g,O)};t.default=d},75749:function(e,t,r){"use strict";var n=r(53848);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!i,l=(0,a.useRef)(),o=(0,a.useState)(!1),u=n(o,2),d=u[0],f=u[1],x=(0,a.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),r||d||e&&e.tagName&&(l.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=c.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,s=n.observer,i=n.elements;return i.set(e,t),s.observe(e),function(){i.delete(e),s.unobserve(e),0===i.size&&(s.disconnect(),c.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[r,t,d]);return(0,a.useEffect)((function(){if(!i&&!d){var e=(0,s.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,s.cancelIdleCallback)(e)}}}),[d]),[x,d]};var a=r(67294),s=r(98391),i="undefined"!==typeof IntersectionObserver;var c=new Map},2094:function(e,t,r){"use strict";var n=r(85893),a=r(89583);t.Z=function(){return(0,n.jsx)("div",{className:"bg-secondary",children:(0,n.jsxs)("div",{className:"container mx-auto px-4 py-16",children:[(0,n.jsxs)("div",{className:"flex justify-center space-x-4 mb-4",children:[(0,n.jsx)("div",{className:"",children:(0,n.jsx)("a",{href:"https://twitter.com/Bitmars_BMARS",className:"",target:"_blank",children:(0,n.jsx)(a.fWC,{className:"text-white w-8 h-8"})})}),(0,n.jsx)("div",{className:"",children:(0,n.jsx)("a",{href:"https://t.me/bitmars_official",className:"",target:"_blank",children:(0,n.jsx)(a.AGi,{className:"text-white w-8 h-8"})})}),(0,n.jsx)("div",{className:"",children:(0,n.jsx)("a",{href:"https://t.me/bitmars_announcements",className:"",target:"_blank",children:(0,n.jsx)(a.AGi,{className:"text-white w-8 h-8"})})})]}),(0,n.jsx)("div",{className:"text-white",children:(0,n.jsx)("div",{className:"text-white text-center",children:"Copyright \xa9 2021 The Project by Bitmars. All Rights Reserved"})})]})})}},89885:function(e,t,r){"use strict";var n=r(85893),a=r(41664),s=r(67294),i=r(45155),c=r(11163),l=r(94184),o=r.n(l),u=[{t:"Home",l:"/"},{t:"Exchange",l:"/exchange"},{t:"Staking",l:"/staking"}];t.Z=function(){var e=(0,s.useState)(!1),t=e[0],r=e[1],l=(0,c.useRouter)();return(0,s.useEffect)((function(){console.log(l)})),(0,n.jsx)("div",{className:"",children:(0,n.jsx)("div",{className:"container mx-auto px-4",children:(0,n.jsxs)("div",{className:"text-xl py-8 flex items-center",children:[(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)("img",{src:"/coins/bitmars-gold.png",alt:"",className:"w-16 h-16 rounded-full"}),(0,n.jsxs)("div",{className:"ml-2",children:[(0,n.jsx)("div",{className:"text-4xl text-primary font-medium",children:"Bitmars"}),(0,n.jsx)("div",{className:"text-secondary text-sm text-right",children:"Exchange"})]})]}),(0,n.jsx)("div",{className:"hidden lg:block",children:(0,n.jsx)("div",{className:"ml-16 flex space-x-8",children:u.map((function(e,t){var r=o()({"hover:text-primary font-medium":!0,"text-primary":l.asPath==e.l,"text-secondary":l.asPath!=e.l});return(0,n.jsx)(a.default,{href:e.l,children:(0,n.jsx)("a",{className:r,children:e.t})},t)}))})}),(0,n.jsx)("div",{className:"fixed right-4 top-12 z-50",children:(0,n.jsx)("div",{className:"w-8 h-8 bg-primary rounded flex items-center justify-center text-white cursor-pointer",onClick:function(){r(!t)},children:(0,n.jsx)(i.x10,{className:"w-6 h-6 text-white "})})}),t&&(0,n.jsx)("div",{className:"fixed inset-0 z-40 bg-white bg-opacity-90 flex items-center justify-center",children:(0,n.jsx)("div",{className:"relative z-30",children:u.map((function(e,t){return(0,n.jsx)(a.default,{href:e.l,children:(0,n.jsx)("a",{className:"block text-center text-secondary font-medium text-2xl",children:e.t})},t)}))})})]})})})}},34480:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var n=r(85893),a=r(89885),s=function(){return(0,n.jsx)("div",{className:"custom-bg bg-no-repeat bg-contain bg-right mb-32",style:{height:"calc(100vh - 128px)",marginTop:"-64px"},children:(0,n.jsx)("div",{className:"container mx-auto px-4 h-full overflow-hidden",children:(0,n.jsx)("div",{className:"flex items-center h-full",children:(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10",children:(0,n.jsx)("div",{className:"relative",children:[100,250,300,600].map((function(e,t){return(0,n.jsx)("div",{className:"rounded-full border absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",style:{width:"".concat(e,"px"),height:"".concat(e,"px")}})}))})}),(0,n.jsxs)("div",{className:"text-5xl font-medium text-secondary relative z-20",children:["To Exchange ",(0,n.jsx)("span",{className:"text-primary",children:"Seamlessly"})]})]})})})})},i=r(41664),c=function(){return(0,n.jsx)("div",{className:"",children:(0,n.jsxs)("div",{className:"container mx-auto px-4",children:[(0,n.jsx)("div",{className:"flex -mx-4 flex-wrap items-stretch mb-32",children:[{t:"Safe Trading",c:"Dependable On Chain Trading Based on 0x."},{t:"Swift Confirmation",c:"Quick Trade With Lighting Fast Order Speed. Efficient and Powerful."},{t:"Stable Exchange Rate",c:"Secure Trading Ensured With The Most Optimized Gas Fee"}].map((function(e,t){return(0,n.jsx)("div",{className:"w-full lg:w-1/3 px-4 flex mb-4 lg:mb-0",children:(0,n.jsxs)("div",{className:"shadow-md border border-white hover:border-primary rounded-2xl px-4 py-4",children:[(0,n.jsx)("div",{className:"text-3xl font-medium text-primary text-center mb-4",children:e.t}),(0,n.jsx)("div",{className:"text-secondary text-xl",children:e.c})]})},t)}))}),(0,n.jsx)("div",{className:"container mx-auto px-4",children:(0,n.jsx)("div",{className:"mb-32 text-center",children:(0,n.jsx)(i.default,{href:"/exchange",children:(0,n.jsx)("a",{className:"text-xl text-white bg-primary inline-block w-44 text-center py-3 rounded-sm mx-auto",children:"Launch App"})})})})]})})},l=r(2094),o=function(){return(0,n.jsxs)("div",{className:"",children:[(0,n.jsx)(a.Z,{}),(0,n.jsx)(s,{}),(0,n.jsx)(c,{}),(0,n.jsx)(l.Z,{})]})}},78581:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(34480)}])},41664:function(e,t,r){e.exports=r(16071)},11163:function(e,t,r){e.exports=r(72441)},44405:function(e,t,r){"use strict";r.d(t,{w_:function(){return o}});var n=r(67294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=n.createContext&&n.createContext(a),i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};function l(e){return e&&e.map((function(e,t){return n.createElement(e.tag,i({key:t},e.attr),l(e.child))}))}function o(e){return function(t){return n.createElement(u,i({attr:i({},e.attr)},t),l(e.child))}}function u(e){var t=function(t){var r,a=e.attr,s=e.size,l=e.title,o=c(e,["attr","size","title"]),u=s||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,o,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==s?n.createElement(s.Consumer,null,(function(e){return t(e)})):t(a)}}},function(e){e.O(0,[774,445,158,351],(function(){return t=78581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);