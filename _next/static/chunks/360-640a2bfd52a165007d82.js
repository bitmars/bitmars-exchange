(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[360],{79352:function(e,t,n){"use strict";var a=n(85893),i=n(809),s=n.n(i),r=n(92447),u=n(14578),o=n(94184),c=n.n(o),p=n(67294);t.Z=function(e){var t=e.text,n=void 0===t?"Button":t,i=e.onClick,o=e.none,l=(0,p.useState)(!1),d=l[0],y=l[1],m=function(){var e=(0,r.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d){e.next=6;break}if(y(!0),!i){e.next=5;break}return e.next=5,i();case 5:y(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=c()({"bg-primary text-white":!o,"text-secondary bg-white":o,"w-40 py-3 text-xl flex items-center mx-auto justify-center shadow":!0,"cursor-not-allowed bg-opacity-60":d});return(0,a.jsxs)("button",{className:f,onClick:m,children:[n,d&&(0,a.jsx)(u.H_P,{className:"ml-2 animate-spin ".concat(o?"text-secondary":"text-white")})]})}},2094:function(e,t,n){"use strict";var a=n(85893),i=n(89583);t.Z=function(){return(0,a.jsx)("div",{className:"bg-secondary",children:(0,a.jsxs)("div",{className:"container mx-auto px-4 py-16",children:[(0,a.jsxs)("div",{className:"flex justify-center space-x-4 mb-4",children:[(0,a.jsx)("div",{className:"",children:(0,a.jsx)("a",{href:"https://twitter.com/Bitmars_BMARS",className:"",target:"_blank",children:(0,a.jsx)(i.fWC,{className:"text-white w-8 h-8"})})}),(0,a.jsx)("div",{className:"",children:(0,a.jsx)("a",{href:"https://t.me/bitmars_official",className:"",target:"_blank",children:(0,a.jsx)(i.AGi,{className:"text-white w-8 h-8"})})}),(0,a.jsx)("div",{className:"",children:(0,a.jsx)("a",{href:"https://t.me/bitmars_announcements",className:"",target:"_blank",children:(0,a.jsx)(i.AGi,{className:"text-white w-8 h-8"})})})]}),(0,a.jsx)("div",{className:"text-white",children:(0,a.jsx)("div",{className:"text-white text-center",children:"Copyright \xa9 2021 The Project by Bitmars. All Rights Reserved"})})]})})}},89885:function(e,t,n){"use strict";var a=n(85893),i=n(41664),s=n(67294),r=n(45155),u=n(11163),o=n(94184),c=n.n(o),p=[{t:"Home",l:"/"},{t:"Exchange",l:"/exchange"},{t:"Staking",l:"/staking"}];t.Z=function(){var e=(0,s.useState)(!1),t=e[0],n=e[1],o=(0,u.useRouter)();return(0,s.useEffect)((function(){console.log(o)})),(0,a.jsx)("div",{className:"",children:(0,a.jsx)("div",{className:"container mx-auto px-4",children:(0,a.jsxs)("div",{className:"text-xl py-8 flex items-center",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("img",{src:"/coins/bitmars-gold.png",alt:"",className:"w-16 h-16 rounded-full"}),(0,a.jsxs)("div",{className:"ml-2",children:[(0,a.jsx)("div",{className:"text-4xl text-primary font-medium",children:"Bitmars"}),(0,a.jsx)("div",{className:"text-secondary text-sm text-right",children:"Exchange"})]})]}),(0,a.jsx)("div",{className:"hidden lg:block",children:(0,a.jsx)("div",{className:"ml-16 flex space-x-8",children:p.map((function(e,t){var n=c()({"hover:text-primary font-medium":!0,"text-primary":o.asPath==e.l,"text-secondary":o.asPath!=e.l});return(0,a.jsx)(i.default,{href:e.l,children:(0,a.jsx)("a",{className:n,children:e.t})},t)}))})}),(0,a.jsx)("div",{className:"fixed right-4 top-12 z-50",children:(0,a.jsx)("div",{className:"w-8 h-8 bg-primary rounded flex items-center justify-center text-white cursor-pointer",onClick:function(){n(!t)},children:(0,a.jsx)(r.x10,{className:"w-6 h-6 text-white "})})}),t&&(0,a.jsx)("div",{className:"fixed inset-0 z-40 bg-white bg-opacity-90 flex items-center justify-center",children:(0,a.jsx)("div",{className:"relative z-30",children:p.map((function(e,t){return(0,a.jsx)(i.default,{href:e.l,children:(0,a.jsx)("a",{className:"block text-center text-secondary font-medium text-2xl",children:e.t})},t)}))})})]})})})}},99049:function(e,t,n){"use strict";var a=n(85893),i=n(67294),s=n(73328);t.Z=function(e){var t=e.data,n=void 0===t?[]:t,r=e.isOpen,u=e.onChange,o=e.onClose,c=(0,i.useRef)(null);(0,s.Z)(c,(function(){o&&o()}));var p=function(e){o&&o(),u&&u(e)};return r?(0,a.jsx)("div",{ref:c,className:"absolute left-0 bottom-0 transform translate-y-full w-full z-50",children:(0,a.jsx)("div",{className:"w-full shadow rounded border bg-white relative z-50",children:0===n.length?(0,a.jsx)("div",{className:"p-4",onClick:function(){return p()},children:"No options found!"}):n.map((function(e,t){return(0,a.jsxs)("div",{className:"p-4 flex items-center w-full hover:bg-primary cursor-pointer hover:text-white text-xl",onClick:function(){return p(e)},children:[(0,a.jsx)("img",{src:"/coins/".concat(e.img,".png"),className:"w-8 h-8 rounded-full"}),(0,a.jsx)("div",{className:"ml-4 font-bold",children:e.sym}),(0,a.jsx)("div",{className:"text-right flex-1",children:e.name})]},t)}))})}):null}},23767:function(e,t){"use strict";t.Z=[{img:"binance-coin",sym:"BNB",name:"Binance coin",minBuy:.01},{img:"tether",sym:"USDT",name:"Tether",minBuy:6,contractAddress:{56:"0x55d398326f99059ff775485246999027b3197955",97:"0xA94c81915CbEEd7dc80eCbf32dC0e1c5749Ef657"}},{img:"busd",sym:"BUSD",name:"Binance USD",minBuy:6,contractAddress:{56:"0xe9e7cea3dedca5984780bafc599bd69add087d56",97:"0xA94c81915CbEEd7dc80eCbf32dC0e1c5749Ef657"}},{img:"usdc",sym:"USDC",name:"USD Coin",minBuy:6,contractAddress:{56:"0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",97:"0xA94c81915CbEEd7dc80eCbf32dC0e1c5749Ef657"}}]},67136:function(e,t){"use strict";t.Z=[{img:"bitmars",sym:"BMA",name:"Bitmars",bnbPrice:15e8,stablePrice:3e6,contractAddress:{56:"0x2cb70098811690fbd5b4f7596706dbd8c850113e",97:"0xd2af539a5f9f6d75d070f77e24b26e88bc34d4a3"}},{img:"bitmars-gold",sym:"BMARS",name:"Bitmars Gold",bnbPrice:700,stablePrice:.7,contractAddress:{56:"0xd2af539a5f9f6d75d070f77e24b26e88bc34d4a3",97:"0xbeebc7f21d58aa7f0f057f53fffd624318cc5d5a"}}]},46280:function(e,t,n){"use strict";n.d(t,{$:function(){return x}});var a=n(809),i=n.n(a),s=n(92447),r=n(42484),u=n.n(r),o=n(3283),c=n.n(o),p=JSON.parse('[{"inputs":[{"internalType":"address","name":"_tokenAirdropAddress","type":"address"},{"internalType":"address","name":"_tokenSaleAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"_buySym","type":"string"},{"indexed":false,"internalType":"uint256","name":"_buyAmount","type":"uint256"},{"indexed":false,"internalType":"string","name":"_receiveSym","type":"string"},{"indexed":false,"internalType":"uint256","name":"_receiveAmount","type":"uint256"}],"name":"BuySale","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"aAmt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"aCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"aEBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"aSBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"aTot","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minBuyWithBnb","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minBuyWithStableToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"percent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sEBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sSBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sTot","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"safeTransferToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"safeTransferTokenWithAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"tokenAirdropAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256","name":"_bnbPrice","type":"uint256"},{"internalType":"uint256","name":"_stablePrice","type":"uint256"}],"name":"addPublicSaleToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"removePublicSaleToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"viewPublicSaleToken","outputs":[{"internalType":"uint256","name":"_bnbPrice","type":"uint256"},{"internalType":"uint256","name":"_stablePrice","type":"uint256"},{"internalType":"bool","name":"_active","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"changeAirdropAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_refer","type":"address"}],"name":"getAirdrop","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_refer","type":"address"},{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"buyPublicSaleWithBnb","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_refer","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"address","name":"_tokenBuyAddress","type":"address"}],"name":"buyPublicSaleWithStableToken","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"viewAirdrop","outputs":[{"internalType":"uint256","name":"StartBlock","type":"uint256"},{"internalType":"uint256","name":"EndBlock","type":"uint256"},{"internalType":"uint256","name":"DropCap","type":"uint256"},{"internalType":"uint256","name":"DropCount","type":"uint256"},{"internalType":"uint256","name":"DropAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"viewSale","outputs":[{"internalType":"uint256","name":"StartBlock","type":"uint256"},{"internalType":"uint256","name":"EndBlock","type":"uint256"},{"internalType":"uint256","name":"Cap","type":"uint256"},{"internalType":"uint256","name":"Total","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_aSBlock","type":"uint256"},{"internalType":"uint256","name":"_aEBlock","type":"uint256"},{"internalType":"uint256","name":"_aAmt","type":"uint256"},{"internalType":"uint256","name":"_aCap","type":"uint256"}],"name":"startAirdrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_sSBlock","type":"uint256"},{"internalType":"uint256","name":"_sEBlock","type":"uint256"},{"internalType":"uint256","name":"_sCap","type":"uint256"}],"name":"startSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_buyWithToken","type":"address"}],"name":"addStableTokenSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_buyWithToken","type":"address"}],"name":"removeStableToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"clear","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),l=JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]'),d=n(63984),y=n(38267),m=n(17714),f=n(94660),b=/^\d+(\.\d{0,6})?$/,x=function(){var e=(0,m.I0)(),t={walletconnect:{package:d.Z,options:{infuraId:"8043bb2cf99347b1bfadfb233c5325c0",rpc:{56:"https://bsc-dataseed.binance.org/",97:"https://data-seed-prebsc-1-s1.binance.org:8545"},network:"binance",chainId:Number("56")}}},n=function(){var n=(0,s.Z)(i().mark((function n(){var a,s,r,o,l;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!window.contract){n.next=3;break}return n.abrupt("return");case 3:return(a=new(u())({network:"binance",chainId:Number("56"),providerOptions:t})).clearCachedProvider(),n.next=7,a.connect();case 7:return s=n.sent,r=new(c())(s),n.next=11,r.eth.getChainId();case 11:if("56"==n.sent){n.next=14;break}return n.abrupt("return",(0,y.z)("Please select Binance Smart Chain"));case 14:return n.next=16,r.eth.getAccounts();case 16:return o=n.sent,l=new r.eth.Contract(p,"0xbeebc7f21d58aa7f0f057f53fffd624318cc5d5a"),window.contract=l,window.provider=r,e((0,f.hv)(o[0])),n.abrupt("return",o[0]);case 24:n.prev=24,n.t0=n.catch(0),console.log("err",n.t0);case 27:case"end":return n.stop()}}),n,null,[[0,24]])})));return function(){return n.apply(this,arguments)}}(),a=function(){var e=(0,s.Z)(i().mark((function e(t){var a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n();case 3:return e.next=5,window.provider.eth.getAccounts();case 5:return a=e.sent,e.next=8,window.contract.methods.getAirdrop(t).send({from:a[0]});case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),r=function(){var e=(0,s.Z)(i().mark((function e(t,a,s){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n();case 3:if(b.test(a)){e.next=5;break}return e.abrupt("return",(0,y.z)("Invalid input amount"));case 5:return e.next=7,window.provider.eth.getAccounts();case 7:return r=e.sent,e.next=10,window.contract.methods.buyPublicSaleWithBnb(t,s).send({from:r[0],value:a*Math.pow(10,18)});case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,n,a){return e.apply(this,arguments)}}(),o=function(){var e=(0,s.Z)(i().mark((function e(t,n){var a,s,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new window.provider.eth.Contract(l,n),e.next=3,a.methods.balanceOf(t).call();case 3:return s=e.sent,e.next=6,a.methods.decimals().call();case 6:return r=e.sent,e.abrupt("return",Number(s.toString())/Math.pow(10,Number(r.toString())));case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),x=function(){var e=(0,s.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.provider.eth.getBalance(t);case 2:return n=e.sent,e.abrupt("return",window.provider.utils.fromWei(n.toString(),"ether"));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,s.Z)(i().mark((function e(t,a){var s,r,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:if(b.test(a)){e.next=4;break}return e.abrupt("return",(0,y.z)("Invalid input amount"));case 4:return e.next=6,window.provider.eth.getAccounts();case 6:return s=e.sent,r=new window.provider.eth.Contract(l,t),e.next=10,r.methods.decimals().call();case 10:return u=e.sent,console.log(u),e.next=14,r.methods.approve("0xbeebc7f21d58aa7f0f057f53fffd624318cc5d5a",a*Math.pow(10,Number(u))).send({from:s[0]});case 14:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),v=function(){var e=(0,s.Z)(i().mark((function e(t,a,s,r){var u,o,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t,a,s,r),e.next=4,n();case 4:return e.next=6,window.provider.eth.getAccounts();case 6:return u=e.sent,o=new window.provider.eth.Contract(l,s),e.next=10,o.methods.decimals().call();case 10:return c=e.sent,e.next=13,window.contract.methods.buyPublicSaleWithStableToken(t,a*Math.pow(10,Number(c)),r,s).send({from:u[0]});case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t,n,a,i){return e.apply(this,arguments)}}();return{claimAirdrop:a,buySaleWithBnb:r,connect:n,buySaleWithToken:v,approve:h,getTokenBalance:o,getBnbBalance:x}}},34918:function(e,t,n){"use strict";var a=n(67294),i=n(11163),s=n(3283),r=n.n(s);t.Z=function(){var e=(0,a.useState)("0x000000000000000000000000000000000000dEaD"),t=e[0],n=e[1],s=(0,i.useRouter)();return(0,a.useEffect)((function(){r().utils.isAddress(s.query.address)&&n(s.query.address)}),[s.query]),[t]}},38267:function(e,t,n){"use strict";n.d(t,{z:function(){return i},i:function(){return s}});var a=n(1818),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Error";return a.store.addNotification({title:"Action failed",message:e,type:"danger",insert:"top",container:"top-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:5e3,onScreen:!0}})},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Success";return a.store.addNotification({title:"Success",message:e,type:"success",insert:"top",container:"top-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:5e3,onScreen:!0}})}},94660:function(e,t,n){"use strict";n.d(t,{hv:function(){return s},Lu:function(){return r},eQ:function(){return u},y_:function(){return o}});var a=(0,n(51355).oM)({name:"common",initialState:{address:null,balance:null},reducers:{setAccount:function(e,t){e.address=t.payload},setBalance:function(e,t){e.balance=t.payload}}}),i=a.actions,s=i.setAccount,r=i.setBalance,u=function(e){return e.common.balance},o=function(e){return e.common.address};t.ZP=a.reducer},36563:function(){},46601:function(){},89214:function(){},71922:function(){},2363:function(){},96419:function(){},56353:function(){},69386:function(){},31616:function(){},69862:function(){},40964:function(){},71408:function(){},23646:function(){}}]);