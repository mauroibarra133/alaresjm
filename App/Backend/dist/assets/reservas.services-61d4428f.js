import{a,C as n,S as p}from"./index-742b257e.js";const t=`${p}/api/reservas`;async function h(e,r,s,o,c,i){try{return await a.post(t,{fecha:e,hora:r,id_usuario:s,cantidad_personas:o,lugar:c,cliente_reserva:i,id_estado:1})}catch{throw n()}}async function y(e){try{return await a.get(t,{params:e})}catch{throw new n}}async function g(e){try{return await a.delete(`${t}/${e}`)}catch(r){return r}}async function w(e,r){try{return await a.put(`${t}/${e}`,r)}catch(s){return s}}export{h as a,g as d,y as g,w as u};