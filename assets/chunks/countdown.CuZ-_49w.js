import{ad as z,ae as j,a2 as N,af as w,ag as h,c as O,f as T,U as k}from"./theme.CK6SIbTt.js";import{p as m,r as p,q as l,o as v,t as y,v as t,y as e,a,X as i,u as n,_ as g,Y as M}from"./framework.DcRevfCx.js";import{d as V}from"./dayjs.min.CkjGvWXk.js";const Y=m({__name:"basic",setup(b){const r=p(0),u=z(r,{duration:1500});return r.value=172e3,(o,d)=>{const s=l("el-statistic"),c=l("el-col"),_=l("el-icon"),f=l("el-row");return v(),y(f,null,{default:t(()=>[e(c,{span:6},{default:t(()=>[e(s,{title:"Daily active users",value:268500})]),_:1}),e(c,{span:6},{default:t(()=>[e(s,{value:138},{title:t(()=>[a("div",{style:{display:"inline-flex","align-items":"center"}},[i(" Ratio of men to women "),e(_,{style:{"margin-left":"4px"},size:12},{default:t(()=>[e(n(j))]),_:1})])]),suffix:t(()=>[i("/100")]),_:1})]),_:1}),e(c,{span:6},{default:t(()=>[e(s,{title:"Total Transactions",value:n(u)},null,8,["value"])]),_:1}),e(c,{span:6},{default:t(()=>[e(s,{title:"Feedback number",value:562},{suffix:t(()=>[e(_,{style:{"vertical-align":"-0.125em"}},{default:t(()=>[e(n(N))]),_:1})]),_:1})]),_:1})]),_:1})}}}),C=g(Y,[["__scopeId","data-v-6299cd72"]]),q=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"})),H=m({__name:"card",setup(b){return(r,u)=>{const o=l("el-icon"),d=l("el-tooltip"),s=l("el-statistic"),c=l("el-col"),_=l("el-row");return v(),y(_,{gutter:16},{default:t(()=>[e(c,{span:8},{default:t(()=>[a("div",{class:"statistic-card"},[e(s,{value:98500},{title:t(()=>[a("div",{style:{display:"inline-flex","align-items":"center"}},[i(" Daily active users "),e(d,{effect:"dark",content:"Number of users who logged into the product in one day",placement:"top"},{default:t(()=>[e(o,{style:{"margin-left":"4px"},size:12},{default:t(()=>[e(n(w))]),_:1})]),_:1})])]),_:1}),a("div",{class:"statistic-footer"},[a("div",{class:"footer-item"},[a("span",null,"than yesterday"),a("span",{class:"green"},[i(" 24% "),e(o,null,{default:t(()=>[e(n(h))]),_:1})])])])])]),_:1}),e(c,{span:8},{default:t(()=>[a("div",{class:"statistic-card"},[e(s,{value:693700},{title:t(()=>[a("div",{style:{display:"inline-flex","align-items":"center"}},[i(" Monthly Active Users "),e(d,{effect:"dark",content:"Number of users who logged into the product in one month",placement:"top"},{default:t(()=>[e(o,{style:{"margin-left":"4px"},size:12},{default:t(()=>[e(n(w))]),_:1})]),_:1})])]),_:1}),a("div",{class:"statistic-footer"},[a("div",{class:"footer-item"},[a("span",null,"month on month"),a("span",{class:"red"},[i(" 12% "),e(o,null,{default:t(()=>[e(n(O))]),_:1})])])])])]),_:1}),e(c,{span:8},{default:t(()=>[a("div",{class:"statistic-card"},[e(s,{value:72e3,title:"New transactions today"},{title:t(()=>[a("div",{style:{display:"inline-flex","align-items":"center"}}," New transactions today ")]),_:1}),a("div",{class:"statistic-footer"},[a("div",{class:"footer-item"},[a("span",null,"than yesterday"),a("span",{class:"green"},[i(" 16% "),e(o,null,{default:t(()=>[e(n(h))]),_:1})])]),a("div",{class:"footer-item"},[e(o,{size:14},{default:t(()=>[e(n(T))]),_:1})])])])]),_:1})]),_:1})}}}),I=g(H,[["__scopeId","data-v-c2df25e2"]]),A=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"})),P=m({__name:"countdown",setup(b){const r=p(Date.now()+252e5),u=p(Date.now()+1e3*60*60*24*2),o=p(V().add(1,"month").startOf("month"));function d(){u.value=Date.now()+1e3*60*60*24*2}return(s,c)=>{const _=l("el-countdown"),f=l("el-col"),x=l("el-button"),D=l("el-icon"),S=l("el-row");return v(),y(S,null,{default:t(()=>[e(f,{span:8},{default:t(()=>[e(_,{title:"Start to grab",value:r.value},null,8,["value"])]),_:1}),e(f,{span:8},{default:t(()=>[e(_,{title:"Remaining VIP time",format:"HH:mm:ss",value:u.value},null,8,["value"]),e(x,{class:"countdown-footer",type:"primary",onClick:d},{default:t(()=>[i("Reset ")]),_:1})]),_:1}),e(f,{span:8},{default:t(()=>[e(_,{format:"DD [days] HH:mm:ss",value:o.value},{title:t(()=>[a("div",{style:{display:"inline-flex","align-items":"center"}},[e(D,{style:{"margin-right":"4px"},size:12},{default:t(()=>[e(n(k))]),_:1}),i(" Still to go until next month ")])]),_:1},8,["value"]),a("div",{class:"countdown-footer"},M(o.value.format("YYYY-MM-DD")),1)]),_:1})]),_:1})}}}),B=g(P,[["__scopeId","data-v-484a00b1"]]),F=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"}));export{q as _,A as a,F as b};