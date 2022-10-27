"use strict";(self.webpackChunkstardust_ds_doc=self.webpackChunkstardust_ds_doc||[]).push([[555],{4137:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(h,l(l({ref:t},u),{},{components:r})):n.createElement(h,l({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},425:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(7294),o=r(4334),a="tabItem_Ymn6";function l(e){var t=e.children,r=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,l),hidden:r},t)}},4259:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(3117),o=r(7294),a=r(4334),l=r(1048),c=r(3609),i=r(1943),s=r(2957),u="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,r,l=e.lazy,p=e.block,m=e.defaultValue,h=e.values,b=e.groupId,f=e.className,v=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=h?h:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,c.l)(k,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===m?m:null!=(t=null!=m?m:null==(r=v.find((function(e){return e.props.default})))?void 0:r.props.value)?t:v[0].props.value;if(null!==g&&!k.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,i.U)(),C=x.tabGroupChoices,w=x.setTabGroupChoices,E=(0,o.useState)(g),T=E[0],N=E[1],O=[],j=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var I=C[b];null!=I&&I!==T&&k.some((function(e){return e.value===I}))&&N(I)}var P=function(e){var t=e.currentTarget,r=O.indexOf(t),n=k[r].value;n!==T&&(j(t),N(n),null!=b&&w(b,String(n)))},_=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n,o=O.indexOf(e.currentTarget)+1;r=null!=(n=O[o])?n:O[0];break;case"ArrowLeft":var a,l=O.indexOf(e.currentTarget)-1;r=null!=(a=O[l])?a:O[O.length-1]}null==(t=r)||t.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":p},f)},k.map((function(e){var t=e.value,r=e.label,l=e.attributes;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return O.push(e)},onKeyDown:_,onFocus:P,onClick:P},l,{className:(0,a.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=r?r:t)}))),l?(0,o.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,l.Z)();return o.createElement(p,(0,n.Z)({key:String(t)},e))}},6336:function(e,t,r){r.d(t,{rT:function(){return b},NB:function(){return i}});var n=r(7294),o="container_lnQK",a="table_gauC",l=function(e){var t=e.headers,r=e.rows,l=e.title;if(!t)throw new Error("Table headers are required");if(!r)throw new Error("Table rows are required");return n.createElement("div",{className:o},l&&n.createElement("h2",null,l),n.createElement("table",{className:a},n.createElement("thead",null,n.createElement("tr",null,t.map((function(e){return n.createElement("th",{key:e},e)})))),n.createElement("tbody",null,r.map((function(e,t){return n.createElement("tr",{key:"tr-"+t},e.map((function(e){return n.createElement("td",{key:e},e)})))})))))},c=["Nome","Tipo","Padr\xe3o","Descri\xe7\xe3o"],i=function(e){var t=e.rows,r=e.title,o=e.headers,a=void 0===o?c:o;if(!t)throw new Error("Table rows are required");if(!r)throw new Error("Table title is required");return n.createElement(l,{title:r,rows:t,headers:a})},s="grid_U0uC",u="container_WJlt",d="label_wc7V",p="hex_XeDR",m="square_xjVL",h="wrapper_aSA6",b=function(e){var t=e.colors;if(!t.length)throw new Error("Provide all props");return n.createElement("div",{className:s},t.map((function(e){return n.createElement("div",{className:u},n.createElement("div",{className:m,style:{backgroundColor:e.color}}),n.createElement("div",{className:h},n.createElement("div",{className:d},e.label),n.createElement("div",{className:p},e.hex)))})))}},9518:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return h}});var n=r(3117),o=r(102),a=(r(7294),r(4137)),l=r(4259),c=r(425),i=r(6336),s=["components"],u={id:"checkbox",displayed_sidebar:"reactJsSidebar",title:"Checkbox",description:"Componente de Checkbox"},d=void 0,p={unversionedId:"react-js/components/checkbox",id:"react-js/components/checkbox",title:"Checkbox",description:"Componente de Checkbox",source:"@site/docs/react-js/components/checkbox.mdx",sourceDirName:"react-js/components",slug:"/react-js/components/checkbox",permalink:"/stardust-ds-doc/docs/react-js/components/checkbox",draft:!1,tags:[],version:"current",frontMatter:{id:"checkbox",displayed_sidebar:"reactJsSidebar",title:"Checkbox",description:"Componente de Checkbox"},sidebar:"reactJsSidebar",previous:{title:"Button",permalink:"/stardust-ds-doc/docs/react-js/components/button"},next:{title:"Input",permalink:"/stardust-ds-doc/docs/react-js/components/input"}},m={},h=[{value:"Importa\xe7\xe3o",id:"importa\xe7\xe3o",level:2},{value:"Uso",id:"uso",level:2},{value:"Checkbox customizado",id:"checkbox-customizado",level:3},{value:"Importa\xe7\xe3o",id:"importa\xe7\xe3o-1",level:2},{value:"Propriedades",id:"propriedades",level:3}],b={toc:h};function f(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Obs.:")," Todos os exemplos s\xe3o edit\xe1vies.")),(0,a.kt)(l.Z,{groupId:"checkbox-component",mdxType:"Tabs"},(0,a.kt)(c.Z,{value:"Uso",label:"Uso",mdxType:"TabItem"},(0,a.kt)("h2",{id:"importa\xe7\xe3o"},"Importa\xe7\xe3o"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Checkbox } from "@stardust-ds/react";\n')),(0,a.kt)("h2",{id:"uso"},"Uso"),(0,a.kt)("p",null,"Exemplo de uso b\xe1sico do componente de checkbox:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'function example() {\n  const [isChecked, setIsChecked] = useState(true);\n  return (\n    <div className="row" style={{ alignItems: "center" }}>\n      <Checkbox\n        checked={isChecked}\n        // FIXME: Ajustar onChange do checkbox (devolver true/false)\n        onChange={() => setIsChecked(!isChecked)}\n      />\n      <Typography type="l1">Checkbox</Typography>\n    </div>\n  );\n}\n')),(0,a.kt)("h3",{id:"checkbox-customizado"},"Checkbox customizado"),(0,a.kt)("p",null,"Voc\xea tamb\xe9m pode criar seu pr\xf3prio checkbox customizado."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'function example() {\n  const [isChecked, setIsChecked] = useState(true);\n  return (\n    <div className="row">\n      <div className="row" style={{ alignItems: "center" }}>\n        <Checkbox\n          checked={isChecked}\n          activeColor="red"\n          inactiveColor="red"\n          iconColor="black"\n          onChange={() => setIsChecked(!isChecked)}\n        />\n        <Typography type="l1">Checkbox</Typography>\n      </div>\n      <div className="row" style={{ alignItems: "center" }}>\n        <Checkbox\n          checked={isChecked}\n          iconColor="red"\n          onChange={() => setIsChecked(!isChecked)}\n        />\n        <Typography type="l1">Checkbox</Typography>\n      </div>\n    </div>\n  );\n}\n'))),(0,a.kt)(c.Z,{value:"Propriedades",label:"Propriedades",mdxType:"TabItem"},(0,a.kt)("h2",{id:"importa\xe7\xe3o-1"},"Importa\xe7\xe3o"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { CheckboxProps } from "@stardust-ds/react";\n')),(0,a.kt)("h3",{id:"propriedades"},"Propriedades"),(0,a.kt)(i.NB,{title:"Componente Checkbox",rows:[["activeColor","string","theme.brand.color.primary.pure","Qualquer cor"],["inactiveColor","string","theme.neutrals.pureBlack","Qualquer cor"],["iconColor","string","theme.neutrals.pureWhite","Qualquer cor"]],mdxType:"TableProps"}))))}f.isMDXComponent=!0}}]);