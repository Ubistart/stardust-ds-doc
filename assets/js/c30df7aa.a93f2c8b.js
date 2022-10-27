"use strict";(self.webpackChunkstardust_ds_doc=self.webpackChunkstardust_ds_doc||[]).push([[234],{4137:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return a?r.createElement(v,l(l({ref:t},u),{},{components:a})):r.createElement(v,l({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},425:function(e,t,a){a.d(t,{Z:function(){return l}});var r=a(7294),n=a(4334),o="tabItem_Ymn6";function l(e){var t=e.children,a=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:a},t)}},4259:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(3117),n=a(7294),o=a(4334),l=a(1048),i=a(3609),s=a(1943),c=a(2957),u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,a,l=e.lazy,d=e.block,m=e.defaultValue,v=e.values,g=e.groupId,f=e.className,b=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=v?v:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.l)(h,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var T=null===m?m:null!=(t=null!=m?m:null==(a=b.find((function(e){return e.props.default})))?void 0:a.props.value)?t:b[0].props.value;if(null!==T&&!h.some((function(e){return e.value===T})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+T+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,s.U)(),w=k.tabGroupChoices,N=k.setTabGroupChoices,E=(0,n.useState)(T),O=E[0],C=E[1],x=[],P=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var j=w[g];null!=j&&j!==O&&h.some((function(e){return e.value===j}))&&C(j)}var I=function(e){var t=e.currentTarget,a=x.indexOf(t),r=h[a].value;r!==O&&(P(t),C(r),null!=g&&N(g,String(r)))},_=function(e){var t,a=null;switch(e.key){case"ArrowRight":var r,n=x.indexOf(e.currentTarget)+1;a=null!=(r=x[n])?r:x[0];break;case"ArrowLeft":var o,l=x.indexOf(e.currentTarget)-1;a=null!=(o=x[l])?o:x[x.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},f)},h.map((function(e){var t=e.value,a=e.label,l=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return x.push(e)},onKeyDown:_,onFocus:I,onClick:I},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":O===t})}),null!=a?a:t)}))),l?(0,n.cloneElement)(b.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function m(e){var t=(0,l.Z)();return n.createElement(d,(0,r.Z)({key:String(t)},e))}},6336:function(e,t,a){a.d(t,{rT:function(){return g},NB:function(){return s}});var r=a(7294),n="container_lnQK",o="table_gauC",l=function(e){var t=e.headers,a=e.rows,l=e.title;if(!t)throw new Error("Table headers are required");if(!a)throw new Error("Table rows are required");return r.createElement("div",{className:n},l&&r.createElement("h2",null,l),r.createElement("table",{className:o},r.createElement("thead",null,r.createElement("tr",null,t.map((function(e){return r.createElement("th",{key:e},e)})))),r.createElement("tbody",null,a.map((function(e,t){return r.createElement("tr",{key:"tr-"+t},e.map((function(e){return r.createElement("td",{key:e},e)})))})))))},i=["Nome","Tipo","Padr\xe3o","Descri\xe7\xe3o"],s=function(e){var t=e.rows,a=e.title,n=e.headers,o=void 0===n?i:n;if(!t)throw new Error("Table rows are required");if(!a)throw new Error("Table title is required");return r.createElement(l,{title:a,rows:t,headers:o})},c="grid_U0uC",u="container_WJlt",p="label_wc7V",d="hex_XeDR",m="square_xjVL",v="wrapper_aSA6",g=function(e){var t=e.colors;if(!t.length)throw new Error("Provide all props");return r.createElement("div",{className:c},t.map((function(e){return r.createElement("div",{className:u},r.createElement("div",{className:m,style:{backgroundColor:e.color}}),r.createElement("div",{className:v},r.createElement("div",{className:p},e.label),r.createElement("div",{className:d},e.hex)))})))}},3566:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return v}});var r=a(3117),n=a(102),o=(a(7294),a(4137)),l=a(4259),i=a(425),s=a(6336),c=["components"],u={id:"tag",displayed_sidebar:"reactJsSidebar",title:"Tag",description:"Componente de tag"},p=void 0,d={unversionedId:"react-js/components/tag",id:"react-js/components/tag",title:"Tag",description:"Componente de tag",source:"@site/docs/react-js/components/tag.mdx",sourceDirName:"react-js/components",slug:"/react-js/components/tag",permalink:"/stardust-ds-doc/docs/react-js/components/tag",draft:!1,tags:[],version:"current",frontMatter:{id:"tag",displayed_sidebar:"reactJsSidebar",title:"Tag",description:"Componente de tag"},sidebar:"reactJsSidebar",previous:{title:"Switch",permalink:"/stardust-ds-doc/docs/react-js/components/switch"},next:{title:"Typography",permalink:"/stardust-ds-doc/docs/react-js/components/typography"}},m={},v=[{value:"Importa\xe7\xe3o",id:"importa\xe7\xe3o",level:2},{value:"Uso",id:"uso",level:2},{value:"Tag com varia\xe7\xf5es",id:"tag-com-varia\xe7\xf5es",level:3},{value:"Tag com \xedcones",id:"tag-com-\xedcones",level:3},{value:"Tag customizado",id:"tag-customizado",level:3},{value:"Importa\xe7\xe3o",id:"importa\xe7\xe3o-1",level:2},{value:"Propriedades",id:"propriedades",level:3}],g={toc:v};function f(e){var t=e.components,a=(0,n.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"O componente Tag \xe9 usado para itens que precisam ser rotulados, categorizados ou organizados usando palavras-chave que os descrevem."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Obs.:")," Todos os exemplos s\xe3o edit\xe1vies.")),(0,o.kt)(l.Z,{groupId:"tag-component",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Uso",label:"Uso",mdxType:"TabItem"},(0,o.kt)("h2",{id:"importa\xe7\xe3o"},"Importa\xe7\xe3o"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Tag } from "@stardust-ds/react";\n')),(0,o.kt)("h2",{id:"uso"},"Uso"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'<Tag label="Tag" />\n')),(0,o.kt)("h3",{id:"tag-com-varia\xe7\xf5es"},"Tag com varia\xe7\xf5es"),(0,o.kt)("p",null,"Use a propriedade ",(0,o.kt)("inlineCode",{parentName:"p"},"variant")," para alterar o estilo visual do Tag. Voc\xea pode definir o valor como ",(0,o.kt)("inlineCode",{parentName:"p"},"primary"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"secondary")," e ",(0,o.kt)("inlineCode",{parentName:"p"},"tertiary"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'<div className="row">\n  <Tag label="primary" variant="primary" />\n  <Tag label="secondary" variant="secondary" />\n  <Tag label="tertiary" variant="tertiary" />\n</div>\n')),(0,o.kt)("h3",{id:"tag-com-\xedcones"},"Tag com \xedcones"),(0,o.kt)("p",null,"Voc\xea pode adicionar \xedcones do lado esquerdo e direito ao componente ",(0,o.kt)("inlineCode",{parentName:"p"},"Tag")," usando as propriedades iconLeft e iconRight respectivamente."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Obs.:")," Tamb\xe9m existe as propriedades ",(0,o.kt)("inlineCode",{parentName:"li"},"hasIconLeft")," e ",(0,o.kt)("inlineCode",{parentName:"li"},"hasIconRight")," que por padr\xe3o \xe9 um CloseIcon.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'<div className="row">\n  <Tag\n    label="primary"\n    variant="primary"\n    iconLeft={<PhosphorIcons.User size={32} weight="fill" />}\n  />\n  <Tag\n    label="secondary"\n    variant="secondary"\n    hasIconRight\n    onClose={() => alert("Clicou no \xedcone direito")}\n  />\n  <Tag\n    label="tertiary"\n    variant="tertiary"\n    hasIconLeft\n    onClose={() => alert("Clicou no \xedcone esquerdo")}\n  />\n</div>\n')),(0,o.kt)("h3",{id:"tag-customizado"},"Tag customizado"),(0,o.kt)("p",null,"Voc\xea tamb\xe9m pode criar sua pr\xf3pria tag customizada. Tamb\xe9m \xe9 poss\xedvel customizar o label atrav\xe9s da propriedade ",(0,o.kt)("inlineCode",{parentName:"p"},"labelTypographyProps"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'<div className="row">\n  <Tag label="Tag" bgColor="white" labelColor="black" />\n  <Tag\n    label="Tag"\n    bgColor="purple"\n    labelColor="white"\n    labelTypographyProps={{ type: "p4" }}\n  />\n  <Tag\n    label="Tag"\n    labelColor="red"\n    height={50}\n    bRadius="md"\n    mLeft="md"\n    labelTypographyProps={{ fontWeight: "black" }}\n    iconLeft={<PhosphorIcons.User size={32} weight="fill" />}\n  />\n</div>\n'))),(0,o.kt)(i.Z,{value:"Propriedades",label:"Propriedades",mdxType:"TabItem"},(0,o.kt)("h2",{id:"importa\xe7\xe3o-1"},"Importa\xe7\xe3o"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { TagProps } from "@stardust-ds/react";\n')),(0,o.kt)("h3",{id:"propriedades"},"Propriedades"),(0,o.kt)(s.NB,{title:"Componente Tag",rows:[["label","string","-","Obrigat\xf3ria"],["variant","string","primary","primary/secondary/tertiary"],["labelColor","string","positive","Opcional"],["bgColor","string","-","Opcional"],["bRadius","string","theme.borderRadius.xs","Opcional"],["height","number/string","theme.fixedHeight.sm","Opcional"],["hasIconLeft","boolean","false","Opcional"],["hasIconRight","boolean","false","Opcional"],["iconLeft","SVG","-","Opcional"],["iconRight","SVG","-","Opcional"],["onClose","function","-","Opcional"],["labelTypographyProps","object","-","Opcional (Todas as varia\xe7\xf5es de typography)"]],mdxType:"TableProps"}))))}f.isMDXComponent=!0}}]);