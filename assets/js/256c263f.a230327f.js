"use strict";(self.webpackChunkstardust_ds_doc=self.webpackChunkstardust_ds_doc||[]).push([[898],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,b=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},425:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),o=n(4334),a="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,l),hidden:n},t)}},4259:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(3117),o=n(7294),a=n(4334),l=n(1048),i=n(3609),u=n(1943),s=n(2957),c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,n,l=e.lazy,p=e.block,m=e.defaultValue,b=e.values,v=e.groupId,f=e.className,g=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=b?b:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.l)(h,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,u.U)(),B=N.tabGroupChoices,w=N.setTabGroupChoices,C=(0,o.useState)(k),E=C[0],x=C[1],T=[],O=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var P=B[v];null!=P&&P!==E&&h.some((function(e){return e.value===P}))&&x(P)}var j=function(e){var t=e.currentTarget,n=T.indexOf(t),r=h[n].value;r!==E&&(O(t),x(r),null!=v&&w(v,String(r)))},_=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,o=T.indexOf(e.currentTarget)+1;n=null!=(r=T[o])?r:T[0];break;case"ArrowLeft":var a,l=T.indexOf(e.currentTarget)-1;n=null!=(a=T[l])?a:T[T.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":p},f)},h.map((function(e){var t=e.value,n=e.label,l=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return T.push(e)},onKeyDown:_,onFocus:j,onClick:j},l,{className:(0,a.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),l?(0,o.cloneElement)(g.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function m(e){var t=(0,l.Z)();return o.createElement(p,(0,r.Z)({key:String(t)},e))}},6336:function(e,t,n){n.d(t,{rT:function(){return v},NB:function(){return u}});var r=n(7294),o="container_lnQK",a="table_gauC",l=function(e){var t=e.headers,n=e.rows,l=e.title;if(!t)throw new Error("Table headers are required");if(!n)throw new Error("Table rows are required");return r.createElement("div",{className:o},l&&r.createElement("h2",null,l),r.createElement("table",{className:a},r.createElement("thead",null,r.createElement("tr",null,t.map((function(e){return r.createElement("th",{key:e},e)})))),r.createElement("tbody",null,n.map((function(e,t){return r.createElement("tr",{key:"tr-"+t},e.map((function(e){return r.createElement("td",{key:e},e)})))})))))},i=["Nome","Tipo","Padr\xe3o","Descri\xe7\xe3o"],u=function(e){var t=e.rows,n=e.title,o=e.headers,a=void 0===o?i:o;if(!t)throw new Error("Table rows are required");if(!n)throw new Error("Table title is required");return r.createElement(l,{title:n,rows:t,headers:a})},s="grid_U0uC",c="container_WJlt",d="label_wc7V",p="hex_XeDR",m="square_xjVL",b="wrapper_aSA6",v=function(e){var t=e.colors;if(!t.length)throw new Error("Provide all props");return r.createElement("div",{className:s},t.map((function(e){return r.createElement("div",{className:c},r.createElement("div",{className:m,style:{backgroundColor:e.color}}),r.createElement("div",{className:b},r.createElement("div",{className:d},e.label),r.createElement("div",{className:p},e.hex)))})))}},4668:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return b}});var r=n(3117),o=n(102),a=(n(7294),n(4137)),l=n(4259),i=n(425),u=n(6336),s=["components"],c={id:"button",displayed_sidebar:"reactJsSidebar",title:"Button",description:"Componente de bot\xe3o"},d=void 0,p={unversionedId:"react-js/components/button",id:"react-js/components/button",title:"Button",description:"Componente de bot\xe3o",source:"@site/docs/react-js/components/button.mdx",sourceDirName:"react-js/components",slug:"/react-js/components/button",permalink:"/stardust-ds-doc/docs/react-js/components/button",draft:!1,tags:[],version:"current",frontMatter:{id:"button",displayed_sidebar:"reactJsSidebar",title:"Button",description:"Componente de bot\xe3o"},sidebar:"reactJsSidebar",previous:{title:"Badge",permalink:"/stardust-ds-doc/docs/react-js/components/badge"},next:{title:"Checkbox",permalink:"/stardust-ds-doc/docs/react-js/components/checkbox"}},m={},b=[{value:"Importa\xe7\xe3o",id:"importa\xe7\xe3o",level:2},{value:"Uso",id:"uso",level:2},{value:"Button com varia\xe7\xf5es",id:"button-com-varia\xe7\xf5es",level:3},{value:"Button com toda a largura preenchida",id:"button-com-toda-a-largura-preenchida",level:3},{value:"Button com propriedade <code>bgColor</code>",id:"button-com-propriedade-bgcolor",level:3},{value:"Button com icones",id:"button-com-icones",level:3},{value:"Button customizado",id:"button-customizado",level:3},{value:"Importa\xe7\xe3o",id:"importa\xe7\xe3o-1",level:2},{value:"Propriedades",id:"propriedades",level:3}],v={toc:b};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Componente de bot\xe3o para executar evento ou a\xe7\xf5es. Pode ser usado para submeter formul\xe1rios, abrir links, etc."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Obs.:")," Todos os exemplos s\xe3o edit\xe1vies.")),(0,a.kt)(l.Z,{groupId:"button-component",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Uso",label:"Uso",mdxType:"TabItem"},(0,a.kt)("h2",{id:"importa\xe7\xe3o"},"Importa\xe7\xe3o"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Button } from "@stardust-ds/react";\n')),(0,a.kt)("h2",{id:"uso"},"Uso"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},"<Button>Button</Button>\n")),(0,a.kt)("h3",{id:"button-com-varia\xe7\xf5es"},"Button com varia\xe7\xf5es"),(0,a.kt)("p",null,"Use a propriedade ",(0,a.kt)("inlineCode",{parentName:"p"},"variant")," para alterar o estilo visual do Button. Voc\xea pode definir o valor como ",(0,a.kt)("inlineCode",{parentName:"p"},"primary")," e ",(0,a.kt)("inlineCode",{parentName:"p"},"secondary"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'<div className="row">\n  <Button variant="primary">Primary</Button>\n  <Button variant="secondary">Button</Button>\n</div>\n')),(0,a.kt)("h3",{id:"button-com-toda-a-largura-preenchida"},"Button com toda a largura preenchida"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'function example() {\n  const [isFullWidth, setIsFullWidth] = useState(false);\n  return (\n    <>\n      <div className="row" style={{ alignItems: "center" }}>\n        <Switch checked={isFullWidth} onChange={setIsFullWidth} />\n        <Typography type="l1">Preencher toda a largura</Typography>\n      </div>\n\n      <Button mTop="xxxs" isFullWidth={isFullWidth}>\n        Button\n      </Button>\n    </>\n  );\n}\n')),(0,a.kt)("h3",{id:"button-com-propriedade-bgcolor"},"Button com propriedade ",(0,a.kt)("inlineCode",{parentName:"h3"},"bgColor")),(0,a.kt)("p",null,"Use a propriedade bgColor para alterar a cor do ",(0,a.kt)("inlineCode",{parentName:"p"},"Button"),". Voc\xea pode definir o valor para qualquer uma das cores do seu sistema de design."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'function example(props) {\n  const { brand } = useTheme();\n  return (\n    <div className="row">\n      <Button bgColor={brand.color.primary.pure}>Primary</Button>\n      <Button bgColor={brand.color.secondary.pure}>Secondary</Button>\n      <Button bgColor={brand.color.positive.pure}>Positive</Button>\n      <Button bgColor={brand.color.negative.pure}>Negative</Button>\n    </div>\n  );\n}\n')),(0,a.kt)("h3",{id:"button-com-icones"},"Button com icones"),(0,a.kt)("p",null,"Voc\xea pode adicionar \xedcones esquerdo e direito ao componente ",(0,a.kt)("inlineCode",{parentName:"p"},"Button")," usando as propriedades iconLeft e iconRight respectivamente."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'<div className="row">\n  <Button iconLeft={<DownloadIcon />}>Button</Button>\n  <Button iconRight={<DownloadIcon />}>Button</Button>\n</div>\n')),(0,a.kt)("h3",{id:"button-customizado"},"Button customizado"),(0,a.kt)("p",null,"Voc\xea tamb\xe9m pode criar seu pr\xf3prio bot\xe3o customizado."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'<div className="row">\n  <Button\n    typographyProps={{ fontWeight: "light", type: "p2", color: "aqua" }}\n    bWidth="hairline"\n    bColor="aqua"\n    bStyle="solid"\n  >\n    Button\n  </Button>\n\n  <Button\n    labelColor="black"\n    bgColor="green"\n    bWidth="hairline"\n    bColor="red"\n    bStyle="solid"\n  >\n    Button\n  </Button>\n</div>\n'))),(0,a.kt)(i.Z,{value:"Propriedades",label:"Propriedades",mdxType:"TabItem"},(0,a.kt)("h2",{id:"importa\xe7\xe3o-1"},"Importa\xe7\xe3o"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { ButtonProps } from "@stardust-ds/react";\n')),(0,a.kt)("h3",{id:"propriedades"},"Propriedades"),(0,a.kt)(u.NB,{title:"Componente Button",rows:[["children","node","-","Conte\xfado do componente"],["variant","string","primary","primary/secondary"],["isFullWidth","boolean","false","true/false"],["labelColor","string","-","Cor da label"],["bgColor","string","-","Cor de fundo"],["bWidth","string","-","Largura da borda"],["bColor","string","-","Cor da borda"],["bStyle","string","-","Estilo da borda"]],mdxType:"TableProps"}))))}f.isMDXComponent=!0}}]);