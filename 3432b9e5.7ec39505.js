(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{128:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},s=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(r),b=n,f=s["".concat(a,".").concat(b)]||s[b]||d[b]||i;return r?o.a.createElement(f,c({ref:t},u,{components:r})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},129:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return a}));var n=r(131),o=r(130);function i(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,a=i.forcePrependBaseUrl,c=void 0!==a&&a,p=i.absolute,u=void 0!==p&&p;if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(c)return t+r;var l=!r.startsWith(t)?t+r.replace(/^\//,""):r;return u?e+l:l}(i,r,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},130:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},131:function(e,t,r){"use strict";var n=r(0),o=r(19);t.a=function(){var e=Object(n.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},76:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(2),o=r(6),i=(r(0),r(128)),a=r(129),c={id:"index",title:"Desktop App"},p={unversionedId:"getting-started/index",id:"getting-started/index",isDocsHomePage:!1,title:"Desktop App",description:"Flipper helps you debug Android and iOS apps running in an emulator/simulator or connected physical development devices. Flipper consists of two parts:",source:"@site/../docs/getting-started/index.mdx",permalink:"/docs/getting-started/index",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/getting-started/index.mdx",sidebar:"setup",next:{title:"Set up your Android app",permalink:"/docs/getting-started/android-native"}},u=[],l={rightToc:u};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Flipper helps you debug Android and iOS apps running in an emulator/simulator or connected physical development devices. Flipper consists of two parts:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The desktop app"),Object(i.b)("li",{parentName:"ul"},"The native mobile SDKs for Android and iOS")),Object(i.b)("p",null,"To use Flipper, you need to add the mobile SDK to your app. If you are using React Native 0.62 or higher, this is largely done automatically for you."),Object(i.b)("hr",null),Object(i.b)("p",null,"The desktop part of Flipper doesn't need any particular setup. Simply download the latest build for ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.facebook.com/fbflipper/public/mac"}),"Mac"),", ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.facebook.com/fbflipper/public/linux"}),"Linux")," or ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.facebook.com/fbflipper/public/windows"}),"Windows")," and launch it. In order to work properly, Flipper requires a working installation of the Android and (if where applicable) iOS development tools on your system, as well as the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.openssl.org"}),"OpenSSL")," binary on your ",Object(i.b)("inlineCode",{parentName:"p"},"$PATH"),"."),Object(i.b)("p",null,"Once you start Flipper and launch an emulator/simulator or connect a device, you will already be able to see the device logs in Flipper. To see app specific data, you need to integrate our native SDKs with your app."),Object(i.b)("img",{alt:"Logs plugin",src:Object(a.a)("img/initial.png")}))}s.isMDXComponent=!0}}]);