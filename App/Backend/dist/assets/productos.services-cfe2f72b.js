import{a as e,C as s,S as n}from"./index-39b704a7.js";const c=`${n}/api/categorias`;async function p(){try{return(await e.get(c)).data}catch{throw new s}}const a=`${n}/api/productos`;async function i(r){try{return(await e.get(a,{params:{categoria:r}})).data}catch{throw new s}}async function d(r,t){try{return await e.put(`${a}/${r}`,t)}catch(o){return o}}async function y(r){try{return await e.post(a,r)}catch(t){return t}}async function w(r){try{return await e.delete(`${a}/${r}`)}catch(t){return t}}export{i as a,y as b,w as d,p as g,d as u};
