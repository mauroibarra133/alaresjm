import{a as c,S as d,C as g,r,j as e,P as m,t as A}from"./index-2e9bb68a.js";import{F as h}from"./FormVacio-d0d82b2d.js";import{L as p}from"./LoaderComponent-06ad75c7.js";const x="data:image/webp;base64,UklGRtwCAABXRUJQVlA4WAoAAAAQAAAAMQAAKQAAQUxQSOwAAAABgGrbtuvkuCvvDxyb8gd0+SKRqZL+BU+9L3gqisgn6b05cAxUkL3p3jscx90bFRkREyCdRY0m0oW9VpbNp8X/kWv92h+/tocdLbfwZaEHExyd/zLkgif4zMArOLdg8BVFTRhxBXXNsGFMl1EvMTHHPGSB1AVJSU1IkVSCuGvGzYggu9tGTRD6YNxTD+g29gggR5vSMCmzbB+Q0NqAYvOS81sERLFxr12QbhldQ3JbMS8JUZFT1vpOiIgM7XLeBq80TPw1423AqSC7r3BXA4KOD19eAC+HK5MqTKdRo1wulxvDw41yudRV9NJpB1ZQOCDKAQAAsAoAnQEqMgAqAD6lTJ9LpiQioaV4DMjAFIlmAL4Dr743Tbkbf1fW7aXnqmMX2WywuAGlEZ+MliRJ0PLSFQCTt7wDOvDJ2aXfgQsGyul+07JvzkpEYAuiqSKP4dhRwAD+66wDz4qqp29NRpKBaWHEXlts6OVVz1nUmQPpAkdl5jB6C5RIKaDggWzN+y3vnnCRAebYsCr/nDED3cP3/8KyJzcXm+s2Fie/FfERtpLvd8AUNvv7HXTcVeO4s0WMvJyKpOdsMhz07SwV7IXmoZftjb9+gq4IClZ+2SI59NQ/aw7sH8IuBAKVBHdPhBr/sc1K85JOZqbos8CFcFvn7JL1o1SuoBkNH7AJCxgUtTPyIewsRHxuB8H8P/smrGYF1V8VhB+97nYC2kajn91j78a1HvRIAEXvfPCMkst3YS76dMqGhPHqSo2/aAiJ/piIeX0rUilJlkHtx7MbZDvN49n46v62wkVoXoImtLTGr5qCHKXYliId4GXk87Ox1B0hkMkYqO6q85dTEEMXdxAgZo0oCtP0AlUzYjyxFYJyzMZcMe3ocvIhVZ9v/iOHEHkNROPhGsSjP2wi/Sm3mf1QlZFAAKxo1mdgZJAAAAA=";async function k(){try{return await c.get(`${d}/api/ranking`)}catch{throw new g}}function _(){const n=new Date,[i,t]=r.useState(!0),[o,l]=r.useState([]);return r.useEffect(()=>{async function s(){try{const a=await k();l(a.data),t(!1)}catch(a){t(!1),console.log(a)}}s()},[]),e.jsxs("div",{className:"ranking__container",children:[e.jsx(m,{pathPrev:"Home",pathActual:"Ranking de Clientes",goTo:"Home"}),e.jsx("div",{className:"ranking__title",children:e.jsxs("p",{className:"mes",children:[`${A[n.getMonth()].toUpperCase()}   `,e.jsx("span",{className:"año",children:` ${n.getFullYear()}`})]})}),e.jsxs("div",{className:"ranking__desc",children:[e.jsx("p",{children:"El primero de cada mes se llevara una burger a eleccion!"}),e.jsx("img",{src:x,alt:"Imagen de Hamburguesa"})]}),e.jsxs("div",{className:"ranking__table-container",children:[e.jsxs("div",{className:"ranking__table-header",children:[e.jsx("div",{className:"ranking__header-position ranking__header-column",children:e.jsx("p",{children:"#"})}),e.jsx("div",{className:" ranking__header-column ranking__header-client",children:e.jsx("p",{children:"Clientes"})}),e.jsx("div",{className:" ranking__header-column ranking__header-points",children:e.jsx("p",{children:"Puntos"})})]}),e.jsx("div",{className:`ranking__table-body ${i?"center":""}`,children:i?e.jsx(p,{color:"orange",size:"small"}):o.length<=0?e.jsx(h,{goTo:"/carta",msg:"Se el primer cliente de este mes!",msgButton:"PEDIR"}):o.slice(0,10).map((s,a)=>e.jsxs("div",{className:"ranking__table-row",children:[e.jsxs("div",{children:[e.jsx("div",{className:"ranking__position",children:`${a+1}º`}),e.jsx("div",{className:"ranking__client",children:`${s.nombre} ${s.apellido}`})]}),e.jsx("div",{className:"ranking__points",children:`${s.puntos} pts`})]},s.id_usuario))})]})]})}export{_ as default};
