import{r as o,u as B,j as e,H as g,x as k}from"./index-183b0b0a.js";import{l as D,u as X,g as N}from"./index-b3d27b4c.js";import{c as G}from"./xmark-solid-4f97102d.js";import{F}from"./FormVacio-e22c76e3.js";import{M as T}from"./Modal-24a39e88.js";const R="data:image/webp;base64,UklGRrwDAABXRUJQVlA4WAoAAAAQAAAAPwAAPwAAQUxQSOICAAABoG3btmm7GrFt27adZ9u2bdu2bdu2rWvf2MnR6g99nr3mmOsHImICRDF/n21334aFvb27tXc+cT9el9sI+VbnuI61+Au+/2jmUpojsHootTOF/4Tl3ws5UuodzA8m1siXKFG+GpMemvC2pBO5/4fxZCkJsfQpA/7L6UD8e+D3dcRn3Q+E2/H0ZoFf5BPf+V8QpqkViqB/MonFzP9QeH6t7QDwraxYLf8dALYoZY+k8WJ5EkVm1RkNAK+S2kryHwCM0LlFo8T6GLqukjySCtkrQpHJNCoDwE+i+DMAVNRoTwc0DlJbjYG0TGM5DdAYRVM0ptAojX60XGMF9dVoRwc0DlFbjUr0k8YvVEEjcRQAFLZXDACiEmvITRptbyxdF9UR9CqprST/02Cd7BEAMMHWZAAIz6Ijm+l7OTsVftBGUS4QBgD/ZLaR5V8ACMuvJVMILwv4K/gSPFHUE9wmfKjvp+FH8M34epLtFQFnyoRS9iyM/2cVF4u9NgCPJtfKnzhx/lpTHsP8qqi4WfgXk/+fC4mrKR/ZeZRSHE3a5T4sPxua0oXE4z9D8fO4xFqxuv4L5X+7xlTJdh7Re/cXdK2eM0XcuCly1ei64IEXDXAuq0KLDzB75zqkEZ9pOp73THjfzFaMaTD/WJ5LrOZeGWYApsSwEmcDjN7GTGI9yxYT1sexEPcwjC+ri2rNnw04HNdXjPUw7kkuykm3GbA1pp95YG+oODjCI8z20Rwc2V6c7BhJaBJS7o/kdRRHW3v0OW8IMa+Dh4qzIwlXYkbXFbxDHN5F6BBNqjf0MqlLyX+hVylMU8E1xenahImGpO9pgzi+jT4koyEA8COTa1nDAGAwPaNl4vwqeiEiZQHAy+VeHg8ASovMo3MSwAs0W+QJdQhCF3ooaT0AXpogpPUAeGkbAcB9CeRDAGg4nhYEYxGN3UpdgtGdNt2i6sGoSTd+o+zByEm/vqWUwUhNb8IobjDiURhWUDggtAAAALAGAJ0BKkAAQAA/EXKsUT+nJCK3+AgD8CIJagDG7IgZ4B3iBSRMuExX/jEAhjFPPuzrxxDZanXqbOaRzteAAP7vhH/9Uz/8nD//p0mcwPwO2X+trBvwul76L52POUcx9/a6D4hpsYANP6DC3DWz23vSyJt9vIPePqOoD0nea5xWwQvbLUMoSMd4oAVC3J6eVO7N13ybQ4UfkzaflWvHf3cVz38s9/5Vt//LjgDPgMgYDGMcAA==",O="data:image/webp;base64,UklGRrQCAABXRUJQVlA4WAoAAAAQAAAAHwAAHwAAQUxQSMoBAAABkHNt2yHJyu/WrG0boW3btm17N7IyW5Ft22Zk266qJ6ivsBExAfgtM+PY69+/Xx+bUZpQa56Xz3M1giVfKenWnE516nSae1vSiuQB0p2TTlTEs9JJ6WxaX0mn9W94BJ+Rkf90KuFnoay2BGxvaYGPMpYmYSzerFlxA5NllfLaqysxV90bknSjjit2Tbs9CjlqCDDYlt6/l+xBAE3kFDCN0eMIUM3SiRJQ4qSsKkDkmUaatmsJwCmdTQJIOq+TAMu11fRAA4BsjqpjrCk7CzBQ90zv1AKoKDthSnJUEWit16a3agmUlVKaUktlgLZ6ZbqnQUDaP2pjaqc/aYChumPaopUAW/Qwmyv7Y20CWKNNpqF6GQeKftXT3vny9X6mL4WB+CsNNuX+q64AtT/L+Kk2QHf9y21ijd7kAMi3+rP0eXVegKyvtAbPXO90Mgl3Ik+eBO6kk3qXy4vGttZFXD7Xym6C37HSZH9TpLH4Xyynk582tlYRMHFIvyp6lfmhE0lBSHtb7wqZ8r/W/QwEz/9G99K70tzS+8KEWfaHDsYhtlt/ahBuW0crYZGcLoQ9XRoxUppO6JENsixtjIRH0jHpTDL+Z+br1zMTEFZQOCDEAAAAUAUAnQEqIAAgAD6FNpRIP6MiITfoA/AQiWwAtReAjALsA9ADypP2Z+Az9wAbKgeHsXSAAP7jdwuEmzw6ehaD+WQfYVLrgR++n657JuycxzziP9VSa5PNkzeNMwrFZsak1Z5exhINY/X8zZJdcsmgb9j6jOJhJi4n+8ub5+NkJS1gepThG53pAd2fOUZmOr2qvkFk9/8xp7bCI3g0OlEB5XuJwtz9lHHDf9Pfoe//ycMcB8R0nmLqw2uU0GweXUEtZ8vgAA==",J="data:image/webp;base64,UklGRg4CAABXRUJQVlA4WAoAAAAQAAAAHwAAHwAAQUxQSG0BAAABkKP9/9o23ymc1TgFynCAbrR2C46MV2DOCcyls4SzlWFjnPr4r6f+q/ApSH/9fYOImAA5do9WTr+E4ZeTyki3PGaLAY5BtT9J+7oBnheWxsaWii+AcLfVqf8hmK1zij2/beAg7XD1E1Qzcs7ehTeXYzJvsONKPGF5n4toO6JxXR5vWA5a/1uHMcW2ZR00ATuSsoaa4vd/XnPQPWyfVKSecfjGpEvOUFF3wKZ8aRvTNQrn/F2AoSrP5E8vKJ9SaEaJ468sNmOJz5axZkzQsIwniPw+GDVJ4yuLTs+jWI9a4vMJRaf8wOD/t1uiyhxVeO6U+CWlETjv7yIMdgds+9ul3qkqJusrH1CW+kPu+npAo0fSLkz4mYYtSWo9wN70cStkr+U/pV/zYyHZlOV1WtGXX8PdnFv+Aby+pPj0PpidC3EXdwPYS8m1ddsCL0vL4+PLpVeA3WpRwt6ywbFe7pHHrqHS8WdrPx8XBzvlCABWUDggegAAAJADAJ0BKiAAIAA/AXaxUisnJKKoCqlgIAlsAK4qId3iUCEoNAAA/s6Ay4NDnqxazx4S2KPWkQZtuQ/fV3JVcZu+wDV4lZUPtHv2aRyiwSv+l3Hoc6CEyY/KQQkHHaefu49c431eW7ArJZYLCxBPn2O0QuZpfYvzwAAA",U="data:image/webp;base64,UklGRtgDAABXRUJQVlA4WAoAAAAQAAAAPwAAPwAAQUxQSGoCAAABkINt2yE732FwFNu2nXQ2Ktu2bdtmlSuVbds2Nyc2F0+x//zzz0yXKiImQP4Tjchf3vmCkU5EbseNR2MdqIw7GzqQN+COdg5I20uPnf4BDMlnmcaAC7eh/a+b1/iRyWvM9sbbx0of8COTVsbt7z7Z9q2OMdFOlHFvgblaizDazQEZAfzOprPBzBAn4t4C83SKPjdxKa0TMgz4nU1DInPls51NbNuIewss0HGlDRkK/M7updTJwEL39UirORb4nT2szlPsfxxiyv6+sOeYDOVxib+aiPiMUMDAPCO8yizS/KOBP5PEYKbDfhMciRaJSGs/Rty5GGCWeDjmNBBq5iHJngw8USSktYx3ldQEEJF8t9A8k8FNqSzWoD3RC8v1Rnsh23G/1d+diV6wW33FjbfPDw1KaySu597H72+vr+tIhh2oP3Yy0NSH+nguc9kfoznZVu8g1slFTUVfRLuljZoBdB/GG+oJcKFpzhITfwG+OK2oW4B/TtmcdQ4DTDJ0E9gTKyJS7TfQTqsmEGwqIhK5EXgXZaPN6UuXLl26AQRyiHIB8PGSbjKwVZSJX4C7ly5d0cgbwPqtqGthsr1K7qCrqIzmB4saRlpYPND5qIjcqfErXjXCyGJV1BuNQD+FRBQqX758+QpvgbmKbG+BueV1RwA/iyiGAL+rlQ/PIjanASzLLJG1HwE/s4pu3FvgTfMoSTM1CKwXs2l8AIEXnwmfIPo9CP/2zA/wNachqfILzT1RNmRDmNrfWIxXeG4RWhUrdiOnBy3e1RIHUw27BnzfVlVMltzyCbg3MUkcji+SPVpMR2Ytkkb+MwVWUDggSAEAAHAJAJ0BKkAAQAA+wVKgSyelIyKx9V2w8BgJbADMw/d7txxPS8S/K/1AbaLzAfqP+zvvaegDzmeoA9ADpSPKqBtu5NZIR2l54owkmh+gPU1y4LZrGAD+eD//zq/f4ljujrikZPC+6IuJxYWGpqpwEZVaG73B/4sE33LWereiulsJYSbnsmxnjJ5Mx1/cTn0esz73iwLrNbeWHHXZobTHnOyRtc5rYr8a+tP//BzHiR5tQw3RameY7xM3WdrKMVKF/ANnw+qhXPVwIMkqCNpERSZ9QEFO308hOvgilTV3QiutzmQHGtGXX8TMmeu48X4EEd6bMbyQf9h6kXKwZWOnpmNeArmCAU5s7BP58suMNp1ekdF7Dy2xzK14YUB8BXyZn/yz3SmujvXdzoBaZgT7zl1LeGTXuXjFBsdnreMH/ffYODNc2bEAAAA=",W="data:image/webp;base64,UklGRlIDAABXRUJQVlA4WAoAAAAQAAAAPwAAPwAAQUxQSFMCAAABoHRt2yFJetq2bdtbo9S2bWNtu/+CbZvDnY3UsF1W1L34vsiMiByvImIC9O9qiz2x2O4WydPnaBGAc21oqWSoMOsT4vx6dZWgNd78ggTfHmkZpIEXirF/smDBJxYovjAwIBVmfYLduTa0lKQ+R4sM4OvVVQIw+iX2l7uby7X57pcWeJHh3y9YP1lQSXFXWvCJhZ/9A3CuDS2lxPscLQIIRnN53Dw48vxPotn5TDyOpniX/nM4za3ZK7yPeNY7F2Ju5wlevRAQcsv0ITLSo7IPAaa5mfK1ACgnKe2XUJrlEMAhSSoP5Pv3CqgpKQKZLSTNAHhY1qgNvPAvBDSxcb+UeucCoXoymwM/+vcZ0EPSYoAldUNAbm9ZewGf+ncDmCSp1D0g8z2AGbJPBa76txvYJEktMrEflOtWYKd/M4DrhhbbHpR1uwlM968zkFfVKHXbCNeTa7V8oJPhdTTF0LfAeEMtMiGvr9wnAl/LDyKWncBzi0aGQimK8wmwLQg9AQZZEhwE0N2XyEiLbgIfl0us3MfAdVnkc3cH2JnYbqCkVzB0CnDSEkl3gFMKSK0fgfzU+IbmApE6QdGAQiBnRDwjcoGCAQqMFpQAxRtK2UptLAZKFihAWugAnK5h1DgD4CxSoDTPAYilSxkxAGe+AqbhLzBPnMB8MUIJpcVwjaZ4o2YfGPYPmslMi0VT3KLEGfFI5XcW2gp3lZc1CpEgSd0/MD7oLldcjZSoW2Skdyq9/IcflpeWN8n5/7BMkvztxWQ73+FVcr1qp6Zn3yXPu/Pt9M8fAFZQOCDYAAAAEAgAnQEqQABAAD8FbKtRK6YkIr30SAFwIIlqAMy85Hhr1AbYDn2dMz3n3/cZOer+guizpKLzBg3hTJvUD1wq18MjC9f5rIhsdAD+4uAxSF9zd6EVVVaOu1fxi2K4lr+au+rhSe/UFHY5cCqt9cMFd1NjfSQpXM9D5akU9T5ApfNt7S0UpAgq9SfxUaZyAXX7OVJCDLCPd+BwLdJc+VZ7+o+K6dDfwzObnvOvJDtPTnsBt8WJyFaOmMezeyDippP8+fy+M/8P4x14raPWhwCWBGyYl/dISAAA",K=D("/");function V({modalPedido:u,closeModal:p}){const s=u.pedido,h=o.useId(),[l,c]=o.useState(s.estado_pedido),{auth:A}=B();async function m(i){A.data.rol!=="Guest"&&i.target.value!=s.estado__pedido&&((await X({id:s.id,state:i.target.value})).status==200?(c(i.target.value),s.estado_pedido=i.target.value,K.emit("orderUpdated",s)):console.log("No se pudo wn"))}return console.log(A),e.jsxs("div",{className:"dashboard__modal",children:[e.jsxs("div",{className:"verpedido__modal-top dashboard__modal-top",children:[e.jsx("p",{className:"verpedido__top-id dashboard__modal-top-id ",children:`Pedido nº ${s.id}`}),e.jsx("div",{className:"verpedido__top-cruz dashboard__top-cruz",children:e.jsx("img",{src:G,alt:"Cerrar",onClick:p})})]}),e.jsx("div",{className:"verpedido__estado dashboard__estado-modal",children:e.jsxs("select",{name:h,id:h,defaultValue:l,value:l==s.estado__pedido?l:s.estado__pedido,onChange:m,disabled:A.data.rol=="Guest",children:[e.jsx("option",{value:"A confirmar",children:"A confirmar"}),e.jsx("option",{value:"Confirmado",children:"Confirmado"}),e.jsx("option",{value:"En Preparacion",children:"En Preparacion"}),e.jsx("option",{value:"Listo",children:"Listo"}),e.jsx("option",{value:"En Reparto",children:"En Reparto"}),e.jsx("option",{value:"Entregado",children:"Entregado"}),e.jsx("option",{value:"Cancelado",children:"Cancelado"})]})}),e.jsxs("div",{className:"verpedido__infouser",children:[e.jsxs("div",{className:"verpedido__dato dashboard__dato",children:[e.jsx("img",{src:R,alt:"Nombre Completo",className:"dashboard-icon verpedido__dato-icon"}),e.jsx("div",{children:s.nombre_completo})]}),e.jsxs("div",{className:"verpedido__dato dashboard__dato",children:[e.jsx("img",{src:O,alt:"Direccion",className:"dashboard-icon verpedido__dato-icon"}),e.jsx("div",{children:s.direccion})]}),e.jsxs("div",{className:"verpedido__dato dashboard__dato",children:[e.jsx("img",{src:J,alt:"Hora",className:"dashboard-icon verpedido__dato-icon"}),e.jsx("div",{children:s.hora})]})]}),e.jsx("div",{className:"verpedido__detalle-wrapper",children:e.jsxs("div",{className:"verpedido__detalle",children:[e.jsxs("div",{className:"verpedido__header",children:[e.jsx("div",{children:"Nombre"}),e.jsx("div",{children:"Cantidad"}),e.jsx("div",{children:"Subtotal"})]}),e.jsxs("div",{className:"verpedido__body",children:[s.descr_pedidos.split(",").map((i,r)=>e.jsx("div",{className:"verpedido__row",children:i.split("-").map((n,v)=>e.jsx("div",{children:v==2?"$"+n:n},v))},r)),e.jsxs("div",{className:"verpedido__row verpedido__row-total",children:[e.jsx("div",{className:"verpedido__total-title",children:"TOTAL"}),e.jsx("div",{className:"verpedido__total",children:"$"+s.total})]})]})]})}),e.jsxs("div",{className:"verpedido__nota",children:[e.jsx("label",{htmlFor:"",children:"Nota: "}),e.jsx("p",{children:s.nota||"-"})]}),e.jsxs("div",{className:"verpedido__infoentrega",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"verpedido__entrega",children:[e.jsx("img",{src:U,className:"dashboard-icon verpedido__dato-icon",alt:"Tipo de entrega"}),e.jsx("div",{children:s.tipoentrega})]}),e.jsxs("div",{className:"verpedido__pago",children:[e.jsx("img",{src:W,className:"dashboard-icon verpedido__dato-icon",alt:"Tipo de pago"}),e.jsx("div",{children:s.tipopago})]})]}),e.jsx("div",{className:"verpedido__monto",children:`Paga con $${s.monto_cambio||0}`})]})]})}const b=D("/");function H(){const u=o.useId(),p=o.useId(),s=o.useId(),l=new Date().toISOString().split("T")[0],c=new Date;c.setDate(c.getDate()-1);const A=c.toISOString().split("T")[0],[m,i]=o.useState([]),[r,n]=o.useState(l),[v,P]=o.useState(window.innerWidth>768),[t,j]=o.useState({entregado:!0,cancelado:!0}),[_,x]=o.useState({isSubmitted:!1,isGood:!1,msg:""}),[w,S]=o.useState({isSubmitted:!1,pedido:{}});o.useEffect(()=>{async function d(){try{const a=await N({date:r});i(a.data.data)}catch(a){x({isSubmitted:!0,isGood:!1,msg:a.message})}}d()},[r]),o.useEffect(()=>{const d=()=>{P(window.innerWidth>768)};return window.addEventListener("resize",d),()=>{window.removeEventListener("resize",d)}},[]),o.useEffect(()=>(b.on("connect",()=>{b.on("adminOrder",d=>{i(Q=>[d,...Q]);const a=document.getElementById("verpedidos__body"),y=document.getElementById(`pedido-${d.id}`);a.classList.add("animate-slide-down"),y.classList.add("animate-fade-in"),setTimeout(()=>{a.classList.remove("animate-slide-down"),y.classList.remove("animate-fade-in")},1e3)})}),()=>{b.off("adminOrder")}),[]);async function C(){try{const d=await N({date:r});i(f(d.data.data))}catch(d){x({isSubmitted:!0,isGood:!1,msg:d.message})}}function M(d){n(d.target.value)}function f(d){if(!t.entregado&&!t.cancelado)return d;if(t.entregado&&t.cancelado)return d.filter(a=>{if(a.estado_pedido!="Cancelado"&&a.estado_pedido!="Entregado")return a});if(t.entregado)return d.filter(a=>a.estado_pedido!="Entregado");if(t.cancelado)return d.filter(a=>a.estado_pedido!="Cancelado")}function E(d){S({isSubmitted:!0,pedido:d}),document.body.classList.add("disable-scroll")}function I(){S({isSubmitted:!1,pedido:{}}),document.body.classList.remove("disable-scroll"),C()}function z(){x({isSubmitted:!1,isGood:!1,msg:""})}return console.log(m),e.jsxs("div",{className:"veritems verpedidos",children:[e.jsxs("div",{className:"verpedidos__fechas veritems__fechas",children:[e.jsx("div",{className:"verpedidos__fecha-ayer button veritems__fechas-button",onClick:()=>n(A),children:"Ayer"}),e.jsx("input",{id:u,className:"verpedidos__fecha-input",type:"date",onChange:M,value:r}),e.jsx("div",{className:"verpedidos__fecha-hoy button veritems__fechas-button",onClick:()=>n(l),children:"Hoy"})]}),e.jsxs("div",{className:"veritems__filters verpedidos__filters",children:[e.jsxs("div",{className:"veritems__filter verpedidos__filter",children:[e.jsx("img",{src:g("Entregado"),alt:"Entregado",className:"verpedidos__icon"}),e.jsx("label",{htmlFor:s,children:t.entregado?"Mostrar entregados":"Ocultar entregados"}),e.jsx("input",{id:s,type:"checkbox",onClick:()=>j({entregado:!t.entregado,cancelado:t.cancelado})})]}),e.jsxs("div",{className:"veritems__filter verpedidos__filter",children:[e.jsx("img",{src:g("Cancelado"),alt:"Cancelado",className:"verpedidos__icon"}),e.jsx("label",{htmlFor:p,children:t.cancelado?"Mostrar cancelados":"Ocultar cancelados"}),e.jsx("input",{id:p,type:"checkbox",onClick:()=>j({entregado:t.entregado,cancelado:!t.cancelado})})]})]}),e.jsxs("div",{className:"verpedidos__pedidos veritems__lista",children:[e.jsxs("div",{className:"verpedidos__header veritems__header",children:[e.jsx("div",{className:"veritems__header-column verpedidos__header-column",children:"Hora"}),e.jsx("div",{className:" veritems__header-column  verpedidos__header-column",children:"Cliente"}),e.jsx("div",{className:"veritems__header-column  verpedidos__header-column",children:"Estado"})]}),e.jsx("div",{className:"veritems__body verpedidos__body",id:"verpedidos__body",children:f(m).length<=0?e.jsx(F,{msg:"No hay pedidos el dia de hoy",msgButton:":("}):f(m).map(d=>e.jsxs("div",{className:"veritems__row verpedidos__body-row",id:`pedido-${d.id}`,onClick:()=>E(d),children:[e.jsx("div",{className:"veritems__dato verpedidos__dato ver-lista__dato",children:d.hora}),e.jsx("div",{className:"veritems__dato verpedidos__dato ver-lista__dato",children:d.nombre_completo}),e.jsxs("div",{className:"veritems__dato verpedidos__dato ver-lista__dato",children:[e.jsx("img",{src:g(d.estado_pedido),alt:d.estado_pedido}),v&&e.jsx("p",{children:d.estado_pedido})]})]},d.id))})]}),w.isSubmitted&&e.jsx(k,{comp:"verpedidos",children:e.jsx(V,{modalPedido:w,closeModal:I})}),e.jsx(T,{isSubmitted:_.isSubmitted,isGoodStatus:_.isGood,msg:_.msg,handleSubmit:z})]})}const ee=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"}));export{H as V,ee as a,O as l,J as r,R as u};
