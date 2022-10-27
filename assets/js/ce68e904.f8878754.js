"use strict";(self.webpackChunkstardust_ds_doc=self.webpackChunkstardust_ds_doc||[]).push([[769],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=i(n),d=a,v=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(v,o(o({ref:t},u),{},{components:n})):r.createElement(v,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},425:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(4334),l="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},4259:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(3117),a=n(7294),l=n(4334),o=n(1048),c=n(3609),s=n(1943),i=n(2957),u="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,n,o=e.lazy,m=e.block,d=e.defaultValue,v=e.values,f=e.groupId,b=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),S=null!=v?v:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,c.l)(S,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var O=null===d?d:null!=(t=null!=d?d:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==O&&!S.some((function(e){return e.value===O})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+O+'" but none of its children has the corresponding value. Available values are: '+S.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,s.U)(),T=k.tabGroupChoices,N=k.setTabGroupChoices,y=(0,a.useState)(O),E=y[0],x=y[1],w=[],C=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var I=T[f];null!=I&&I!==E&&S.some((function(e){return e.value===I}))&&x(I)}var P=function(e){var t=e.currentTarget,n=w.indexOf(t),r=S[n].value;r!==E&&(C(t),x(r),null!=f&&N(f,String(r)))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=w.indexOf(e.currentTarget)+1;n=null!=(r=w[a])?r:w[0];break;case"ArrowLeft":var l,o=w.indexOf(e.currentTarget)-1;n=null!=(l=w[o])?l:w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},b)},S.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return w.push(e)},onKeyDown:j,onFocus:P,onClick:P},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(h.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function d(e){var t=(0,o.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},4292:function(e,t,n){n.d(t,{N:function(){return s}});var r=n(7294),a="container_lnQK",l="table_gauC",o=function(e){var t=e.headers,n=e.rows,o=e.title;if(!t)throw new Error("Table headers are required");if(!n)throw new Error("Table rows are required");return r.createElement("div",{className:a},o&&r.createElement("h2",null,o),r.createElement("table",{className:l},r.createElement("thead",null,r.createElement("tr",null,t.map((function(e){return r.createElement("th",{key:e},e)})))),r.createElement("tbody",null,n.map((function(e,t){return r.createElement("tr",{key:"tr-"+t},e.map((function(e){return r.createElement("td",{key:e},e)})))})))))},c=["Nome","Tipo","Padr\xe3o","Descri\xe7\xe3o"],s=function(e){var t=e.rows,n=e.title;if(!t)throw new Error("Table rows are required");if(!n)throw new Error("Table title is required");return r.createElement(o,{title:n,rows:t,headers:c})}},5232:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return v}});var r=n(3117),a=n(102),l=(n(7294),n(4137)),o=n(4259),c=n(425),s=n(4292),i=["components"],u={id:"select",displayed_sidebar:"reactJsSidebar",title:"Select",description:"Componente de Select"},p=void 0,m={unversionedId:"react-js/components/select",id:"react-js/components/select",title:"Select",description:"Componente de Select",source:"@site/docs/react-js/components/select.mdx",sourceDirName:"react-js/components",slug:"/react-js/components/select",permalink:"/stardust-ds-doc/docs/react-js/components/select",draft:!1,tags:[],version:"current",frontMatter:{id:"select",displayed_sidebar:"reactJsSidebar",title:"Select",description:"Componente de Select"},sidebar:"reactJsSidebar",previous:{title:"Switch",permalink:"/stardust-ds-doc/docs/react-js/components/switch"},next:{title:"Badge",permalink:"/stardust-ds-doc/docs/react-js/components/badge"}},d={},v=[{value:"Importa\xe7\xe3o",id:"importa\xe7\xe3o",level:2},{value:"Uso",id:"uso",level:2},{value:"Select controlado",id:"select-controlado",level:3},{value:"Select com se\xe7\xf5es",id:"select-com-se\xe7\xf5es",level:3},{value:"Select com multi sele\xe7\xe3o",id:"select-com-multi-sele\xe7\xe3o",level:3},{value:"Select com pesquisa",id:"select-com-pesquisa",level:3},{value:"Select sem op\xe7\xe3o de limpar o item selecionado",id:"select-sem-op\xe7\xe3o-de-limpar-o-item-selecionado",level:3},{value:"Select com label e helper text",id:"select-com-label-e-helper-text",level:3},{value:"Select com erro",id:"select-com-erro",level:3},{value:"Select sem nenhuma op\xe7\xe3o",id:"select-sem-nenhuma-op\xe7\xe3o",level:3},{value:"Importa\xe7\xe3o",id:"importa\xe7\xe3o-1",level:2},{value:"Interface de op\xe7\xf5es",id:"interface-de-op\xe7\xf5es",level:3},{value:"Interface de op\xe7\xf5es com se\xe7\xf5es",id:"interface-de-op\xe7\xf5es-com-se\xe7\xf5es",level:3},{value:"Propriedades",id:"propriedades",level:3}],f={toc:v};function b(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Obs.:")," Todos os exemplos s\xe3o edit\xe1vies.")),(0,l.kt)(o.Z,{groupId:"select-component",mdxType:"Tabs"},(0,l.kt)(c.Z,{value:"Uso",label:"Uso",mdxType:"TabItem"},(0,l.kt)("h2",{id:"importa\xe7\xe3o"},"Importa\xe7\xe3o"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Select } from "@stardust-ds/react";\n')),(0,l.kt)("h2",{id:"uso"},"Uso"),(0,l.kt)("p",null,"Exemplo de uso b\xe1sico do componente de select:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'<Select options={SELECT_OPTIONS.COLORS} placeholder="Selecione uma cor" />\n')),(0,l.kt)("h3",{id:"select-controlado"},"Select controlado"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'function example() {\n  const [option, setOption] = React.useState({});\n\n  return (\n    <>\n      <Typography mBottom="xxxs">Op\xe7\xe3o: {JSON.stringify(option)}</Typography>\n      <Select\n        options={SELECT_OPTIONS.COLORS}\n        value={option}\n        onSelect={(e) => setOption(e || {})}\n        placeholder="Select controlado"\n      />\n    </>\n  );\n}\n')),(0,l.kt)("h3",{id:"select-com-se\xe7\xf5es"},"Select com se\xe7\xf5es"),(0,l.kt)("p",null,"\xc9 poss\xedvel tamb\xe9m criar se\xe7\xf5es de op\xe7\xf5es, ou seja, se\xe7\xe3o de cidades e cores."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'<Select placeholder="Selecione uma op\xe7\xe3o" options={SELECT_OPTIONS.SECTIONS} />\n')),(0,l.kt)("h3",{id:"select-com-multi-sele\xe7\xe3o"},"Select com multi sele\xe7\xe3o"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'<Select\n  placeholder="Selecione uma ou mais op\xe7\xf5es"\n  options={SELECT_OPTIONS.SECTIONS}\n  multiSelect\n/>\n')),(0,l.kt)("h3",{id:"select-com-pesquisa"},"Select com pesquisa"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'<Select\n  placeholder="Select com pesquisa"\n  options={SELECT_OPTIONS.SECTIONS}\n  multiSelect\n  searchable\n/>\n')),(0,l.kt)("h3",{id:"select-sem-op\xe7\xe3o-de-limpar-o-item-selecionado"},"Select sem op\xe7\xe3o de limpar o item selecionado"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'<Select\n  placeholder="Select sem op\xe7\xe3o de limpeza"\n  options={SELECT_OPTIONS.SECTIONS}\n  multiSelect\n  clearable={false}\n/>\n')),(0,l.kt)("h3",{id:"select-com-label-e-helper-text"},"Select com label e helper text"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'<Select\n  label="Label"\n  helperText="Helper Text"\n  placeholder="Selecione uma op\xe7\xe3o"\n  options={SELECT_OPTIONS.SECTIONS}\n  noOptionsText="Nenhuma op\xe7\xe3o encontrada"\n/>\n')),(0,l.kt)("h3",{id:"select-com-erro"},"Select com erro"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'<Select\n  label="Label"\n  helperText="Helper Text"\n  hasError\n  placeholder="Selecione uma op\xe7\xe3o"\n  options={SELECT_OPTIONS.SECTIONS}\n  noOptionsText="Nenhuma op\xe7\xe3o encontrada"\n/>\n')),(0,l.kt)("h3",{id:"select-sem-nenhuma-op\xe7\xe3o"},"Select sem nenhuma op\xe7\xe3o"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'<Select\n  placeholder="Selecione uma op\xe7\xe3o"\n  options={[]}\n  noOptionsText="Nenhuma op\xe7\xe3o encontrada"\n/>\n'))),(0,l.kt)(c.Z,{value:"Propriedades",label:"Propriedades",mdxType:"TabItem"},(0,l.kt)("h2",{id:"importa\xe7\xe3o-1"},"Importa\xe7\xe3o"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import { SelectProps } from "@stardust-ds/react";\n')),(0,l.kt)("h3",{id:"interface-de-op\xe7\xf5es"},"Interface de op\xe7\xf5es"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"interface Option {\n  label: string;\n  value: string;\n}\n")),(0,l.kt)("h3",{id:"interface-de-op\xe7\xf5es-com-se\xe7\xf5es"},"Interface de op\xe7\xf5es com se\xe7\xf5es"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"interface Section {\n  section: string;\n  options: Option[];\n}\n")),(0,l.kt)("h3",{id:"propriedades"},"Propriedades"),(0,l.kt)(s.N,{title:"Componente Select",rows:[["label","string","-","Opcional"],["helperText","string","-","Opcional"],["placeholder","string","-","Opcional"],["options","Partial<Option> & Partial<Section>","-","Obrigat\xf3rio"],["value","Option | Option[]","-","Opcional"],["defaultValue","Option | Option[]","-","Opcional"],["onSelect","(value: Option) => void","-","Opcional (Tr\xe1s a op\xe7\xe3o selecionada)"],["onClear","() => void","-","Opcional (Realizar alguma a\xe7\xe3o ap\xf3s limpar o campo)"],["noOptionsText","string","-","Opcional"],["multiSelect","boolean","false","Opcional"],["disabled","boolean","false","Opcional"],["scrollYAtHeight","string | number","240","Opcional (Tamanho da listagem ao abrir o select)"],["clearable","boolean","true","Opcional (Apresentar X para limpar o campo)"],["searchable","boolean","false","Opcional"],["hasError","boolean","false","Opcional"]],mdxType:"TableProps"}))))}b.isMDXComponent=!0}}]);