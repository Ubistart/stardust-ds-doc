"use strict";(self.webpackChunkstardust_ds_doc=self.webpackChunkstardust_ds_doc||[]).push([[238],{4137:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return m}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),u=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},p=function(e){var a=u(e.components);return n.createElement(l.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return t?n.createElement(f,s(s({ref:a},p),{},{components:t})):n.createElement(f,s({ref:a},p))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},425:function(e,a,t){t.d(a,{Z:function(){return s}});var n=t(7294),r=t(4334),o="tabItem_Ymn6";function s(e){var a=e.children,t=e.hidden,s=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:t},a)}},4259:function(e,a,t){t.d(a,{Z:function(){return m}});var n=t(3117),r=t(7294),o=t(4334),s=t(1048),i=t(3609),l=t(1943),u=t(2957),p="tabList__CuJ",c="tabItem_LNqP";function d(e){var a,t,s=e.lazy,d=e.block,m=e.defaultValue,f=e.values,v=e.groupId,g=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:k.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),y=(0,i.l)(b,(function(e,a){return e.value===a.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===m?m:null!=(a=null!=m?m:null==(t=k.find((function(e){return e.props.default})))?void 0:t.props.value)?a:k[0].props.value;if(null!==N&&!b.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,l.U)(),T=h.tabGroupChoices,O=h.setTabGroupChoices,j=(0,r.useState)(N),w=j[0],E=j[1],x=[],P=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var C=T[v];null!=C&&C!==w&&b.some((function(e){return e.value===C}))&&E(C)}var I=function(e){var a=e.currentTarget,t=x.indexOf(a),n=b[t].value;n!==w&&(P(a),E(n),null!=v&&O(v,String(n)))},q=function(e){var a,t=null;switch(e.key){case"ArrowRight":var n,r=x.indexOf(e.currentTarget)+1;t=null!=(n=x[r])?n:x[0];break;case"ArrowLeft":var o,s=x.indexOf(e.currentTarget)-1;t=null!=(o=x[s])?o:x[x.length-1]}null==(a=t)||a.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},g)},b.map((function(e){var a=e.value,t=e.label,s=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===a?0:-1,"aria-selected":w===a,key:a,ref:function(e){return x.push(e)},onKeyDown:q,onFocus:I,onClick:I},s,{className:(0,o.Z)("tabs__item",c,null==s?void 0:s.className,{"tabs__item--active":w===a})}),null!=t?t:a)}))),s?(0,r.cloneElement)(k.filter((function(e){return e.props.value===w}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==w})}))))}function m(e){var a=(0,s.Z)();return r.createElement(d,(0,n.Z)({key:String(a)},e))}},712:function(e,a,t){t.r(a),t.d(a,{assets:function(){return d},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var n=t(3117),r=t(102),o=(t(7294),t(4137)),s=t(4259),i=t(425),l=["components"],u={id:"installation",displayed_sidebar:"reactNativeSidebar",title:"Instala\xe7\xe3o",description:"Instala\xe7\xe3o e configura\xe7\xe3o do @stardust-ds/react-native"},p=void 0,c={unversionedId:"react-native/getting-started/installation",id:"react-native/getting-started/installation",title:"Instala\xe7\xe3o",description:"Instala\xe7\xe3o e configura\xe7\xe3o do @stardust-ds/react-native",source:"@site/docs/react-native/getting-started/installation.mdx",sourceDirName:"react-native/getting-started",slug:"/react-native/getting-started/installation",permalink:"/stardust-ds-doc/docs/react-native/getting-started/installation",draft:!1,tags:[],version:"current",frontMatter:{id:"installation",displayed_sidebar:"reactNativeSidebar",title:"Instala\xe7\xe3o",description:"Instala\xe7\xe3o e configura\xe7\xe3o do @stardust-ds/react-native"},sidebar:"reactNativeSidebar",previous:{title:"Primeiros passos",permalink:"/stardust-ds-doc/docs/react-native/getting-started/"}},d={},m=[{value:"SVG",id:"svg",level:3},{value:"Tipografia - customizada (Poppins)",id:"tipografia---customizada-poppins",level:3},{value:"Instalando a library",id:"instalando-a-library",level:3}],f={toc:m};function v(e){var a=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},f,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Nossa ",(0,o.kt)("strong",{parentName:"p"},"library")," faz uso de algumas depend\xeancias e configura\xe7\xf5es padr\xf5es que s\xe3o necess\xe1rias para o nosso funcionamento ",(0,o.kt)("strong",{parentName:"p"},"default")," que segue o nosso ",(0,o.kt)("em",{parentName:"p"},"Design System"),"."),(0,o.kt)("p",null,"Essas depend\xeancias por exemplo s\xe3o:"),(0,o.kt)("h3",{id:"svg"},"SVG"),(0,o.kt)("p",null,"Necess\xe1rio configurar duas ",(0,o.kt)("strong",{parentName:"p"},"libraries"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/react-native-svg/react-native-svg"},"react-native-svg")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Caso esteja utilizando Typescript (o que recomendamos), precisar\xe1 criar um arquivo, ou adicionar caso exista um, para que o typescript reconhe\xe7a os imports dos svgs:\n",(0,o.kt)("inlineCode",{parentName:"li"},"custom.d.ts"),":")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"declare module '*.svg' {\n  const content: any;\n  export default content;\n}\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/kristerkari/react-native-svg-transformer"},"react-native-svg-transformer")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Para podermos manipular as cores dos svg que eventualmente usar\xe1, precisamos criar um arquivo para a configura\xe7\xe3o desses svgs.\n",(0,o.kt)("inlineCode",{parentName:"li"},".svgrrc"))),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},'  {\n    "replaceAttrValues": {\n      "#000000": "{props.fill}",\n      "black": "{props.fill}"\n    }\n  }\n')))),(0,o.kt)("admonition",{title:"Tenha ATEN\xc7\xc3O",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Caso a cor do seu svg n\xe3o for um dos valores '#000000' ou 'black', a cor do mesmo n\xe3o ser\xe1 alterada. Para isso, ou mude as cores do svg para tais cores mencionadas ou adicione uma nova propriedade no 'replaceAttrValues' com a cor que quer substituir. exemplo: \"red\": \"{props.fill}\"")),(0,o.kt)("h3",{id:"tipografia---customizada-poppins"},"Tipografia - customizada (",(0,o.kt)("a",{parentName:"h3",href:"./src/assets/fonts/"},"Poppins"),")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\xc9 necess\xe1rio criar um arquivo chamado de ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native.config.js")," caso o teu projeto n\xe3o possua.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Criar uma pasta ",(0,o.kt)("inlineCode",{parentName:"p"},"assets/fonts")," e colocar os arquivos de fontes dentro.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"react-native.config.js"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  assets: ["./assets/fonts"],\n};\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Ent\xe3o execute o comando"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx react-native link\n")),(0,o.kt)("p",{parentName:"li"},"Para maior entendimento da utiliza\xe7\xe3o do Typography em diferentes sistemas operacionais, consulte a documenta\xe7\xe3o espec\xedfica ",(0,o.kt)("a",{parentName:"p",href:"./Typography.md"},"aqui")))),(0,o.kt)("h3",{id:"instalando-a-library"},"Instalando a library"),(0,o.kt)("p",null,"Ap\xf3s as configura\xe7\xf5es acima, temos que instalar a nossa ",(0,o.kt)("strong",{parentName:"p"},"library")," como uma depend\xeancia no vosso projeto."),(0,o.kt)(s.Z,{groupId:"yarn-npm",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"  yarn add @stardust-ds/react-native\n"))),(0,o.kt)(i.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"  npm install @stardust-ds/react-native\n")))),(0,o.kt)("p",null,"Agora precisamos fazer algumas configura\xe7\xf5es para podermos utilizar os recursos dentro do projeto."),(0,o.kt)("p",null,"Precisamos encapsular o seu ",(0,o.kt)("strong",{parentName:"p"},"APP")," no ",(0,o.kt)("inlineCode",{parentName:"p"},"ThemeManager")," para o tema ser acess\xedvel em toda a aplica\xe7\xe3o:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { ThemeManager } from "@stardust-ds/react-native";\n\nconst App = () => (\n  <ThemeManager>\n    <SeuAppAqui />\n  </ThemeManager>\n);\n')),(0,o.kt)("p",null,"Com essa configura\xe7\xe3o j\xe1 ser\xe1 poss\xedvel fazer a utiliza\xe7\xe3o dos componentes dispon\xedveis na ",(0,o.kt)("em",{parentName:"p"},"library"),"."))}v.isMDXComponent=!0}}]);