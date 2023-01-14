"use strict";(self.webpackChunkreact_homework_08=self.webpackChunkreact_homework_08||[]).push([[510],{8510:function(n,e,t){t.r(e),t.d(e,{default:function(){return on}});var r,i,o,a,c,d,s,l,u,x,p,h,m,f,g,b,j=t(2791),Z=t(9434),v=t(4270),w=t(6916),y=function(n){return n.contacts.items},k=function(n){return n.contacts.isLoading},C=function(n){return n.contacts.error},z=(0,w.P1)([function(n){return n.filter},y],(function(n,e){var t=n.value.trim().toLowerCase();return e.filter((function(n){return n.name.trim().toLowerCase().includes(t)}))})),F=t(6052),q=t(5705),L=t(168),_=t(4926),I=(0,_.Z)(q.l0)(r||(r=(0,L.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 5px 10px;\n\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 1.33;\n  color: white;\n"]))),P=(0,_.Z)(q.gN)(i||(i=(0,L.Z)(["\n  width: 100%;\n  background-color: inherit;\n  outline: none;\n  border-radius: 4px;\n  padding: 5px;\n  height: 28px;\n  font-size: 16px;\n  color: antiquewhite;\n"]))),R=_.Z.label(o||(o=(0,L.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 5px 10px;\n"]))),S=_.Z.button(a||(a=(0,L.Z)(["\n  display: block;\n  margin: 20px auto 0 auto;\n  padding: 8px;\n  font-size: 12px;\n  color: #e0dede;\n  min-width: 100px;\n  border: 1px solid gray;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.5);\n  text-shadow: 0 0 5px #000;\n"]))),K=_.Z.p(c||(c=(0,L.Z)(["\n  color: red;\n"]))),T=t(3329),A=function(n){var e=n.name;return(0,T.jsx)(q.Bc,{name:e,render:function(n){return(0,T.jsx)(K,{children:n})}})},B={name:"",number:""},D=t(2797),E=D.Ry({name:D.Z_().required(),number:D.Rx().min(8,"Too Short!").required()}),G=function(){var n=(0,Z.I0)(),e=(0,Z.v9)(y);return(0,T.jsx)(q.J9,{initialValues:B,validationSchema:E,onSubmit:function(t,r){var i=r.resetForm;if(t){if(e.find((function(n){return n.name.toLowerCase()===t.name.toLowerCase()})))return alert("".concat(t.name," is already in contact")),!1;n((0,F.uK)(t)),i()}},children:(0,T.jsxs)(I,{autoComplete:"off",children:[(0,T.jsxs)("div",{children:[(0,T.jsx)(R,{htmlFor:"name",children:"Full name"}),(0,T.jsxs)("div",{children:[(0,T.jsx)(P,{name:"name",type:"text",placeholder:"Full name"}),(0,T.jsx)(A,{name:"name"})]})]}),(0,T.jsxs)("div",{children:[(0,T.jsx)(R,{htmlFor:"number",children:"Phone number"}),(0,T.jsxs)("div",{children:[(0,T.jsx)(P,{name:"number",type:"text",placeholder:"Phone number"}),(0,T.jsx)(A,{name:"number"})]})]}),(0,T.jsx)(S,{type:"submit",children:"Add contact"})]})})},J=_.Z.h3(d||(d=(0,L.Z)(["\n  color: #003060;\n"]))),N=function(n){var e=n.message;return(0,T.jsx)(J,{children:e})},V=t(1634),Y=_.Z.label(s||(s=(0,L.Z)(["\n  color: #979595;\n"]))),H=_.Z.input(l||(l=(0,L.Z)(["\n  width: 100%;\n  background-color: inherit;\n  outline: none;\n  border-radius: 4px;\n  padding: 5px;\n  height: 28px;\n  font-size: 16px;\n  color: antiquewhite;\n"]))),M=function(){var n=(0,Z.I0)();return(0,T.jsxs)(Y,{children:[(0,T.jsx)("span",{children:"Find contact by name "}),(0,T.jsx)(H,{type:"text",placeholder:"enter name or phone number...",name:"filter",onChange:function(e){return n((0,V.T)(e.target.value))}})]})},O=_.Z.ul(u||(u=(0,L.Z)(["\n  justify-content: center;\n  align-items: center;\n  padding: 10px 0;\n"]))),Q=_.Z.li(x||(x=(0,L.Z)(["\n  display: block;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  margin: 4px 0;\n  padding: 5px 10px;\n  border-radius: 5%;\n  border: 1px solid gray;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 1.33;\n  color: white;\n"]))),U=_.Z.div(p||(p=(0,L.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),W=_.Z.button(h||(h=(0,L.Z)(["\n  display: block;\n  padding: 8px;\n  font-size: 12px;\n  color: #e0dede;\n  width: 60px;\n  border: 1px solid gray;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.5);\n  text-shadow: 0 0 5px #000;\n"]))),X=function(n){var e=n.contact,t=e.id,r=e.name,i=e.number,o=(0,Z.I0)();return(0,T.jsx)(Q,{children:(0,T.jsxs)(U,{children:[(0,T.jsx)("p",{children:r}),(0,T.jsx)("p",{children:i}),(0,T.jsx)(W,{type:"button",onClick:function(){return o((0,F.GK)(t))},children:"Delete"})]})})},$=function(){var n=(0,Z.v9)(z);return(0,T.jsx)(O,{children:n.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,T.jsx)(X,{contact:{id:e,name:t,number:r}},e)}))})},nn=_.Z.div(m||(m=(0,L.Z)(["\n  margin: 20px auto 20px auto;\n  width: 500px;\n  height: auto;\n  padding: 20px;\n  background: rgba(0, 0, 0, 0.3);\n  border-radius: 5%;\n"]))),en=_.Z.h1(f||(f=(0,L.Z)(["\n  margin-bottom: 16px;\n  font-weight: 500;\n  font-size: 30px;\n  line-height: 1.18;\n  text-align: center;\n  color: #979595;\n"]))),tn=_.Z.h2(g||(g=(0,L.Z)(["\n  margin-top: 20px;\n  margin-bottom: 16px;\n  font-weight: 500;\n  font-size: 30px;\n  line-height: 1.18;\n  text-align: center;\n  color: #979595;\n"]))),rn=_.Z.section(b||(b=(0,L.Z)(["\n  margin: 20px auto;\n"])));function on(){var n=(0,Z.I0)(),e=(0,Z.v9)(k),t=(0,Z.v9)(C);(0,j.useEffect)((function(){n((0,F.yF)())}),[n]);var r=(0,Z.v9)(y);return(0,T.jsxs)(nn,{children:[(0,T.jsx)(v.q,{children:(0,T.jsx)(en,{children:"Phonebook"})}),(0,T.jsx)(G,{}),e&&!t&&(0,T.jsx)("b",{children:"Request in progress..."}),(0,T.jsx)(tn,{children:"Contacts"}),0===r.length?(0,T.jsx)(N,{message:"Your contact book is empty, add your first contact!"}):(0,T.jsxs)(rn,{children:[(0,T.jsx)(M,{}),(0,T.jsx)($,{})]})]})}}}]);
//# sourceMappingURL=510.6887102a.chunk.js.map