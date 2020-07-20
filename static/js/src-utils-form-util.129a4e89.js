(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"./src/enums/FormRegExp.ts":function(e,n,t){"use strict";var a={PINT:/[1-9]\d*/,PINT_AND_ZERO:/^([1-9]\d*|[0]{1,1})$/,NINT:/-[1-9]\d*/,CHINESE:/^[\u4e00-\u9fa5]+$/,NOT_CHINESE:/^[^\u4e00-\u9fa5]+$/,EMAIL:/\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/,NUMBER:/^\d{2,4}$/,NUMBER_OR_FLOAT:/^(-)?\d+(\.\d+)?$/,MOBILE:/^1[3456789]\d{9}$/,PHONE:/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/,INT_OR_FLOAT:/^([1-9][0-9]*)+(.[0-9]{1,4})?$/,SOCIALCREDITCODE:/^[A-Z0-9]{18}$/,SOCIALCREDITCODE_PRECISE:/^[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/g,BUSLICENSE:/\d{15}$/,ORGCODE:/^[A-Z0-9]{9}$/,TAXID:/^[A-Za-z0-9]{15}$|^[A-Za-z0-9]{18}$|^[A-Za-z0-9]{20}$/,IDCARD:/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)/,HK_IDCARD:/^([A-Z]\d{6,10}(\(\w{1}\))?)$/,TW_IDCARD:/^\d{8}|^[a-zA-Z0-9]{10}|^\d{18}$/,OFFICERCARD:/^[\u4E00-\u9FA5](\u5b57\u7b2c)([0-9a-zA-Z]{4,8})(\u53f7?)$/,ACCOUNTCARD:/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,PASSPORTCARD:/^([a-zA-z]|[0-9]){5,17}$/,DRIVERCARD:/^[1-8]\d{11}$/,IPADRESS:/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/,FAX:/^(\d{3,4}-)?\d{7,8}$/,ICP:/^[\u4eac\u6d25\u664b\u5180\u8499\u8fbd\u5409\u9ed1\u6caa\u82cf\u6d59\u7696\u95fd\u8d63\u9c81\u8c6b\u9102\u6e58\u7ca4\u6842\u743c\u6e1d\u5ddd\u8d35\u4e91\u85cf\u9655\u7518\u9752\u5b81\u65b0]ICP\u5907\d{8}(-[1-9]\d?)?$/};n.a=a,"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FormRegExp",filename:"src/enums/FormRegExp.ts"}})},"./src/forms/PhoneFormItem.tsx":function(e,n,t){"use strict";t("./node_modules/antd/es/form/style/index.js");var a=t("./node_modules/antd/es/form/index.js"),o=(t("./node_modules/antd/es/input/style/index.js"),t("./node_modules/antd/es/input/index.js")),r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),l=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),s=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js"),c=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),m=t("react"),p=t.n(m),b=t("./src/enums/FormRegExp.ts"),d=t("./node_modules/classnames/index.js"),u=function(e){Object(c.a)(t,e);var n=Object(s.a)(t);function t(){var e;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(e=n.call.apply(n,[this].concat(o))).getPhone=function(e){var n=b.a.MOBILE;switch(e){case 1:n=b.a.MOBILE;break;case 2:n=b.a.PHONE}return n},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props,n=e.fromItemProps,t=e.className,r=e.required,l=e.phoneType,s=e.style,c=e.name,m=e.label,b=e.emptyMsg,u=e.errMsg;return p.a.createElement(a.a.Item,Object.assign({className:d("phone-from",t),style:s},this.props,n,{name:c,label:m,rules:[{required:r,message:b||"\u8bf7\u586b\u5199\u7535\u8bdd\u53f7\u7801"},{pattern:this.getPhone(l),message:u||"\u7535\u8bdd\u53f7\u7801\u683c\u5f0f\u4e0d\u6b63\u786e"}]}),p.a.createElement(o.a,null))}}]),t}(m.Component);n.a=u,"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PhoneFormItem",filename:"src/forms/PhoneFormItem.tsx"}})},"./src/utils/FormUtil.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return x}));var a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js"),l=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),s=(t("./node_modules/antd/es/checkbox/style/index.js"),t("./node_modules/antd/es/checkbox/index.js")),c=(t("./node_modules/antd/es/button/style/index.js"),t("./node_modules/antd/es/button/index.js")),m=(t("./node_modules/antd/es/form/style/index.js"),t("./node_modules/antd/es/form/index.js")),p=(t("./node_modules/antd/es/input/style/index.js"),t("./node_modules/antd/es/input/index.js")),b=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),d=t("react"),u=t.n(d),i=t("./node_modules/@mdx-js/react/dist/esm.js"),j=t("./node_modules/father/node_modules/docz/dist/index.esm.js"),y=(t("./node_modules/antd/dist/antd.css"),t("./src/utils/FormUtil.tsx")),O=function(e){};O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IFormItemDataC",filename:"src/interfaces/Demo.ts"}});var I=t("./src/forms/PhoneFormItem.tsx"),h={};function x(e){var n=e.components,t=Object(b.a)(e,["components"]);return Object(i.b)("wrapper",Object.assign({},h,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"formutil"},"FormUtil"),Object(i.b)("p",null,"\u8868\u5355\u7684\u8f85\u52a9\u5de5\u5177"),Object(i.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(i.b)("h3",{id:"\u6e32\u67d3\u8868\u5355"},"\u6e32\u67d3\u8868\u5355"),Object(i.b)("p",null,"\u76ee\u6807\u662f\u89e3\u51b3\u8868\u5355\u5bf9\u9f50\uff0c\u95f4\u8ddd\u7684\u95ee\u9898\u3002\n\u89c4\u5219\u5982\u4e0b\uff1a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4e00\u884c2\u5217\uff0c\u6807\u7b7e\u548c\u5185\u5bb9\u7684\u5bbd\u5ea6\u4e3a\uff1a1:4"),Object(i.b)("li",{parentName:"ul"},"\u6807\u7b7e\u6587\u5b57\u5927\u4e8e6\u4e2a\u5b57\uff0c\u72ec\u5360\u4e00\u884c"),Object(i.b)("li",{parentName:"ul"},"\u53ef\u624b\u52a8\u4fee\u6539\uff1a\u9ed8\u8ba4\u7684\u5217\u6570\u3001\u6807\u7b7e\u5bbd\u5ea6"),Object(i.b)("li",{parentName:"ul"},"\u53ef\u5355\u72ec\u8bbe\u7f6e\u6bcf\u4e00\u4e2a\u8868\u5355\u9879\u5bbd\u5ea6\u3001\u8868\u5355\u9879\u6807\u7b7e\u7684\u5bbd\u5ea6")),Object(i.b)("h3",{id:"\u4e00\u4e2a\u6807\u51c6\u793a\u4f8b"},"\u4e00\u4e2a\u6807\u51c6\u793a\u4f8b"),Object(i.b)(j.c,{__position:0,__code:"class Demo extends React.Component {\n    render() {\n      const list = [\n        {\n          span: 24,\n          content: (\n            <img\n              style={{\n                height: 160,\n                width: 120,\n                border: '1px solid gray',\n                display: 'inline-block',\n              }}\n              alt=\"\u5934\u50cf\"\n            />\n          ),\n        },\n        {\n          label: '\u59d3\u540d',\n          name: 'name',\n          content: <Input />,\n          rules: [\n            {\n              required: true,\n            },\n          ],\n        },\n        {\n          label: '\u542f\u7528',\n          name: 'enable',\n          valuePropName: 'checked',\n          content: <Checkbox />,\n        },\n        {\n          label: '\u6027\u522b',\n          name: 'sex',\n          content: <Input />,\n        },\n        {\n          label: '\u516c\u53f8\u5730\u5740',\n          name: 'companyAddress',\n          content: <Input />,\n        },\n        {\n          label: '\u8eab\u4efd\u8bc1\u53f7\u7801',\n          name: 'idCard',\n          content: <Input />,\n        },\n        {\n          label: '\u4e2a\u4eba\u7b7e\u540d',\n          span: 24,\n          name: 'sign',\n          content: <Input />,\n        },\n        {\n          label: '\u7d27\u6025\u8054\u7cfb\u4eba',\n          span: 8,\n          name: 'friend',\n          content: <Input />,\n        },\n        {\n          label: '\u5ea7\u673a',\n          span: 8,\n          name: 'phone',\n          content: <Input />,\n        },\n        {\n          label: '\u5ea7\u673a',\n          span: 6,\n          name: 'phone2',\n          content: <Input />,\n        },\n        {\n          label: '\u5ea7\u673a',\n          span: 6,\n          content: <Input />,\n        },\n        {\n          span: 24,\n          content: (\n            <Button type=\"primary\" htmlType=\"submit\">\n              \u4fdd\u5b58\uff0c\u6211\u662f\u81ea\u52a8\u5bf9\u9f50\n            </Button>\n          ),\n        },\n      ]\n      return (\n        <div>\n          <Form\n            layout=\"Horizontal\"\n            onFinish={value => {\n              console.log(value)\n            }}\n          >\n            {FormUtil.renderFormItems(list)}\n          </Form>\n        </div>\n      )\n    }\n  }",__scope:{props:this?this.props:t,Playground:j.c,Props:j.d,FormUtil:y.a,IFormItemDataC:O,Input:p.a,Form:m.a,Button:c.a,Checkbox:s.a,PhoneFormItem:I.a},__codesandbox:"undefined",mdxType:"Playground"},function(e){Object(l.a)(t,e);var n=Object(r.a)(t);function t(){return Object(a.a)(this,t),n.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=[{span:24,content:Object(i.b)("img",{style:{height:160,width:120,border:"1px solid gray",display:"inline-block"},alt:"\u5934\u50cf"})},{label:"\u59d3\u540d",name:"name",content:Object(i.b)(p.a,{mdxType:"Input"}),rules:[{required:!0}]},{label:"\u542f\u7528",name:"enable",valuePropName:"checked",content:Object(i.b)(s.a,{mdxType:"Checkbox"})},{label:"\u6027\u522b",name:"sex",content:Object(i.b)(p.a,{mdxType:"Input"})},{label:"\u516c\u53f8\u5730\u5740",name:"companyAddress",content:Object(i.b)(p.a,{mdxType:"Input"})},{label:"\u8eab\u4efd\u8bc1\u53f7\u7801",name:"idCard",content:Object(i.b)(p.a,{mdxType:"Input"})},{label:"\u4e2a\u4eba\u7b7e\u540d",span:24,name:"sign",content:Object(i.b)(p.a,{mdxType:"Input"})},{label:"\u7d27\u6025\u8054\u7cfb\u4eba",span:8,name:"friend",content:Object(i.b)(p.a,{mdxType:"Input"})},{label:"\u5ea7\u673a",span:8,name:"phone",content:Object(i.b)(p.a,{mdxType:"Input"})},{label:"\u5ea7\u673a",span:6,name:"phone2",content:Object(i.b)(p.a,{mdxType:"Input"})},{label:"\u5ea7\u673a",span:6,content:Object(i.b)(p.a,{mdxType:"Input"})},{span:24,content:Object(i.b)(c.a,{type:"primary",htmlType:"submit",mdxType:"Button"},"\u4fdd\u5b58\uff0c\u6211\u662f\u81ea\u52a8\u5bf9\u9f50")}];return Object(i.b)("div",null,Object(i.b)(m.a,{layout:"Horizontal",onFinish:function(e){console.log(e)},mdxType:"Form"},y.a.renderFormItems(e)))}}]),t}(u.a.Component)),Object(i.b)("h3",{id:"\u4f7f\u7528\u7279\u6b8a\u7684formitem"},"\u4f7f\u7528\u7279\u6b8a\u7684formItem"),Object(i.b)("p",null,"\u672c\u793a\u4f8b\uff0c\u4f7f\u7528",Object(i.b)("inlineCode",{parentName:"p"},"<PhoneFormItem />")," \u505a\u4e3acontent\u503c\uff0c\u6b64\u65f6\u9700\u8bbe\u7f6e",Object(i.b)("inlineCode",{parentName:"p"},"contentIsFormItem:true")),Object(i.b)(j.c,{__position:1,__code:'class Demo extends React.Component {\n    render() {\n      const list = [\n        {\n          label: \'\u624b\u673a\u53f7\',\n          span: 8,\n          contentIsFormItem: true,\n          content: <PhoneFormItem required name="mobilePhone" />,\n        },\n        {\n          span: 24,\n          content: (\n            <Button type="primary" htmlType="submit">\n              \u4fdd\u5b58\n            </Button>\n          ),\n        },\n      ]\n      return (\n        <div>\n          <Form\n            layout="Horizontal"\n            onFinish={value => {\n              console.log(value)\n            }}\n          >\n            {FormUtil.renderFormItems(list)}\n          </Form>\n        </div>\n      )\n    }\n  }',__scope:{props:this?this.props:t,Playground:j.c,Props:j.d,FormUtil:y.a,IFormItemDataC:O,Input:p.a,Form:m.a,Button:c.a,Checkbox:s.a,PhoneFormItem:I.a},__codesandbox:"undefined",mdxType:"Playground"},function(e){Object(l.a)(t,e);var n=Object(r.a)(t);function t(){return Object(a.a)(this,t),n.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=[{label:"\u624b\u673a\u53f7",span:8,contentIsFormItem:!0,content:Object(i.b)(I.a,{required:!0,name:"mobilePhone",mdxType:"PhoneFormItem"})},{span:24,content:Object(i.b)(c.a,{type:"primary",htmlType:"submit",mdxType:"Button"},"\u4fdd\u5b58")}];return Object(i.b)("div",null,Object(i.b)(m.a,{layout:"Horizontal",onFinish:function(e){console.log(e)},mdxType:"Form"},y.a.renderFormItems(e)))}}]),t}(u.a.Component)),Object(i.b)("h3",{id:"\u4e00\u4e9b\u7279\u6b8a\u60c5\u51b5\u7684\u5904\u7406"},"\u4e00\u4e9b\u7279\u6b8a\u60c5\u51b5\u7684\u5904\u7406"),Object(i.b)(j.c,{__position:2,__code:"class Demo extends React.Component {\n    render() {\n      const list = [\n        {\n          content: (\n            <img\n              style={{\n                height: 160,\n                width: 120,\n                border: '1px solid gray',\n                display: 'inline-block',\n              }}\n              alt=\"\u5934\u50cf\"\n            />\n          ),\n        },\n        {\n          label: '\u59d3\u540d',\n          content: <Input />,\n        },\n        {\n          label: '\u56db\u4e2a\u6587\u5b57',\n          content: <Input />,\n        },\n        {\n          label: '\u8fd9\u91cc\u516d\u4e2a\u6587\u5b57',\n          content: <Input />,\n        },\n        {\n          label:\n            '\u6211\u662f\u6807\u7b7e\u5b57\u6570\u8d85\u8fc77\uff0c\u4f1a\u81ea\u52a8\u72ec\u5360\u4e00\u884c\uff0c\u4f46\u53ef\u80fd\u9700\u8981\u624b\u52a8\u8c03\u6574labe\u5360\u4f4d\uff0c\u5426\u5219\u663e\u793a\u4e0d\u5168',\n          labelSpan: 15,\n          content: <Input value=\"\u6211\u624b\u52a8\u8c03\u6574\u4e86\u6807\u7b7e\u5360\u4f4d\" />,\n        },\n        {\n          label: '\u6211\u4e5f\u5f88\u957f',\n          span: 12,\n          content: <Input value=\"\u6211\u4e5f\u5f88\u957f\uff0c\u4f46\u624b\u52a8\u8bbe\u7f6e\u4e86\u53ea\u5360\u534a\u884c\" />,\n        },\n        {\n          label: '\u6807\u7b7e',\n          span: 24,\n          content: <Input value=\"\u6211\u6807\u7b7e\u6587\u5b57\u4e0d\u957f\uff0c\u4f46\u624b\u52a8\u8bbe\u7f6e\u4e86\u72ec\u5360\u4e00\u884c\" />,\n        },\n        {\n          content: <Button type=\"primary\">\u4fdd\u5b58\uff0c\u6211\u662f\u81ea\u52a8\u5bf9\u9f50</Button>,\n        },\n      ]\n      return (\n        <div>\n          <Form layout=\"Horizontal\">{FormUtil.renderFormItems(list)}</Form>\n        </div>\n      )\n    }\n  }",__scope:{props:this?this.props:t,Playground:j.c,Props:j.d,FormUtil:y.a,IFormItemDataC:O,Input:p.a,Form:m.a,Button:c.a,Checkbox:s.a,PhoneFormItem:I.a},__codesandbox:"undefined",mdxType:"Playground"},function(e){Object(l.a)(t,e);var n=Object(r.a)(t);function t(){return Object(a.a)(this,t),n.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=[{content:Object(i.b)("img",{style:{height:160,width:120,border:"1px solid gray",display:"inline-block"},alt:"\u5934\u50cf"})},{label:"\u59d3\u540d",content:Object(i.b)(p.a,{mdxType:"Input"})},{label:"\u56db\u4e2a\u6587\u5b57",content:Object(i.b)(p.a,{mdxType:"Input"})},{label:"\u8fd9\u91cc\u516d\u4e2a\u6587\u5b57",content:Object(i.b)(p.a,{mdxType:"Input"})},{label:"\u6211\u662f\u6807\u7b7e\u5b57\u6570\u8d85\u8fc77\uff0c\u4f1a\u81ea\u52a8\u72ec\u5360\u4e00\u884c\uff0c\u4f46\u53ef\u80fd\u9700\u8981\u624b\u52a8\u8c03\u6574labe\u5360\u4f4d\uff0c\u5426\u5219\u663e\u793a\u4e0d\u5168",labelSpan:15,content:Object(i.b)(p.a,{value:"\u6211\u624b\u52a8\u8c03\u6574\u4e86\u6807\u7b7e\u5360\u4f4d",mdxType:"Input"})},{label:"\u6211\u4e5f\u5f88\u957f",span:12,content:Object(i.b)(p.a,{value:"\u6211\u4e5f\u5f88\u957f\uff0c\u4f46\u624b\u52a8\u8bbe\u7f6e\u4e86\u53ea\u5360\u534a\u884c",mdxType:"Input"})},{label:"\u6807\u7b7e",span:24,content:Object(i.b)(p.a,{value:"\u6211\u6807\u7b7e\u6587\u5b57\u4e0d\u957f\uff0c\u4f46\u624b\u52a8\u8bbe\u7f6e\u4e86\u72ec\u5360\u4e00\u884c",mdxType:"Input"})},{content:Object(i.b)(c.a,{type:"primary",mdxType:"Button"},"\u4fdd\u5b58\uff0c\u6211\u662f\u81ea\u52a8\u5bf9\u9f50")}];return Object(i.b)("div",null,Object(i.b)(m.a,{layout:"Horizontal",mdxType:"Form"},y.a.renderFormItems(e)))}}]),t}(u.a.Component)),Object(i.b)("h3",{id:"\u6e32\u67d3\u8868\u5355\u9879--\u8868\u5355\u9879\u4e3a\u5947\u6570\u65f6\uff0c\u6309\u94ae\u6362\u884c"},"\u6e32\u67d3\u8868\u5355\u9879--\u8868\u5355\u9879\u4e3a\u5947\u6570\u65f6\uff0c\u6309\u94ae\u6362\u884c"),Object(i.b)("p",null,"\u989d\u5916\u6dfb\u52a0\u4e00\u4e2a\u7a7a\u9879"),Object(i.b)(j.c,{__position:3,__code:"class Demo extends React.Component {\n    render() {\n      const list = [\n        {\n          label: '\u59d3\u540d',\n          content: <Input />,\n        },\n        {\n          label: '\u6027\u522b',\n          content: <Input />,\n        },\n        {\n          label: '\u5e74\u9f84',\n          content: <Input />,\n        },\n        {\n          content: null,\n        },\n        {\n          content: <Button type=\"primary\">\u4fdd\u5b58\uff0c\u6211\u662f\u81ea\u52a8\u5bf9\u9f50</Button>,\n        },\n      ]\n      return (\n        <div>\n          <Form layout=\"Horizontal\">{FormUtil.renderFormItems(list)}</Form>\n        </div>\n      )\n    }\n  }",__scope:{props:this?this.props:t,Playground:j.c,Props:j.d,FormUtil:y.a,IFormItemDataC:O,Input:p.a,Form:m.a,Button:c.a,Checkbox:s.a,PhoneFormItem:I.a},__codesandbox:"undefined",mdxType:"Playground"},function(e){Object(l.a)(t,e);var n=Object(r.a)(t);function t(){return Object(a.a)(this,t),n.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=[{label:"\u59d3\u540d",content:Object(i.b)(p.a,{mdxType:"Input"})},{label:"\u6027\u522b",content:Object(i.b)(p.a,{mdxType:"Input"})},{label:"\u5e74\u9f84",content:Object(i.b)(p.a,{mdxType:"Input"})},{content:null},{content:Object(i.b)(c.a,{type:"primary",mdxType:"Button"},"\u4fdd\u5b58\uff0c\u6211\u662f\u81ea\u52a8\u5bf9\u9f50")}];return Object(i.b)("div",null,Object(i.b)(m.a,{layout:"Horizontal",mdxType:"Form"},y.a.renderFormItems(e)))}}]),t}(u.a.Component)),Object(i.b)("h3",{id:"\u6e32\u67d3\u8868\u5355\u9879--\u4e09\u5217"},"\u6e32\u67d3\u8868\u5355\u9879--\u4e09\u5217"),Object(i.b)(j.c,{__position:4,__code:"class Demo extends React.Component {\n    render() {\n      const list = [\n        {\n          label: '\u59d3\u540d',\n          content: <Input />,\n        },\n        {\n          label: '\u6027\u522b',\n          content: <Input />,\n        },\n        {\n          label: '\u5e74\u9f84',\n          content: <Input />,\n        },\n        {\n          label: '\u6027\u522b',\n          content: <Input />,\n        },\n        {\n          content: <Button type=\"primary\">\u4fdd\u5b58\uff0c\u6211\u662f\u81ea\u52a8\u5bf9\u9f50</Button>,\n        },\n      ]\n      return (\n        <div>\n          <Form layout=\"Horizontal\">{FormUtil.renderFormItems(list, 3)}</Form>\n        </div>\n      )\n    }\n  }",__scope:{props:this?this.props:t,Playground:j.c,Props:j.d,FormUtil:y.a,IFormItemDataC:O,Input:p.a,Form:m.a,Button:c.a,Checkbox:s.a,PhoneFormItem:I.a},__codesandbox:"undefined",mdxType:"Playground"},function(e){Object(l.a)(t,e);var n=Object(r.a)(t);function t(){return Object(a.a)(this,t),n.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=[{label:"\u59d3\u540d",content:Object(i.b)(p.a,{mdxType:"Input"})},{label:"\u6027\u522b",content:Object(i.b)(p.a,{mdxType:"Input"})},{label:"\u5e74\u9f84",content:Object(i.b)(p.a,{mdxType:"Input"})},{label:"\u6027\u522b",content:Object(i.b)(p.a,{mdxType:"Input"})},{content:Object(i.b)(c.a,{type:"primary",mdxType:"Button"},"\u4fdd\u5b58\uff0c\u6211\u662f\u81ea\u52a8\u5bf9\u9f50")}];return Object(i.b)("div",null,Object(i.b)(m.a,{layout:"Horizontal",mdxType:"Form"},y.a.renderFormItems(e,3)))}}]),t}(u.a.Component)),Object(i.b)("h3",{id:"\u6e32\u67d3\u8868\u5355\u9879--\u4e09\u5217\u65f6\uff0c\u6309\u94ae\u53e6\u8d77\u4e00\u884c"},"\u6e32\u67d3\u8868\u5355\u9879--\u4e09\u5217\u65f6\uff0c\u6309\u94ae\u53e6\u8d77\u4e00\u884c"),Object(i.b)(j.c,{__position:5,__code:"class Demo extends React.Component {\n    render() {\n      const list = [\n        {\n          label: '\u59d3\u540d',\n          content: <Input />,\n        },\n        {\n          label: '\u6027\u522b',\n          content: <Input />,\n        },\n        {\n          label: '\u5e74\u9f84',\n          content: <Input />,\n        },\n        {\n          label: '\u6027\u522b',\n          content: <Input />,\n        },\n        {\n          span: 24,\n          content: <Button type=\"primary\">\u4fdd\u5b58</Button>,\n        },\n      ]\n      return (\n        <div>\n          <Form layout=\"Horizontal\">{FormUtil.renderFormItems(list, 3)}</Form>\n        </div>\n      )\n    }\n  }",__scope:{props:this?this.props:t,Playground:j.c,Props:j.d,FormUtil:y.a,IFormItemDataC:O,Input:p.a,Form:m.a,Button:c.a,Checkbox:s.a,PhoneFormItem:I.a},__codesandbox:"undefined",mdxType:"Playground"},function(e){Object(l.a)(t,e);var n=Object(r.a)(t);function t(){return Object(a.a)(this,t),n.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=[{label:"\u59d3\u540d",content:Object(i.b)(p.a,{mdxType:"Input"})},{label:"\u6027\u522b",content:Object(i.b)(p.a,{mdxType:"Input"})},{label:"\u5e74\u9f84",content:Object(i.b)(p.a,{mdxType:"Input"})},{label:"\u6027\u522b",content:Object(i.b)(p.a,{mdxType:"Input"})},{span:24,content:Object(i.b)(c.a,{type:"primary",mdxType:"Button"},"\u4fdd\u5b58")}];return Object(i.b)("div",null,Object(i.b)(m.a,{layout:"Horizontal",mdxType:"Form"},y.a.renderFormItems(e,3)))}}]),t}(u.a.Component)),Object(i.b)("h3",{id:"\u6e32\u67d3\u8868\u5355\u9879--\u4e09\u5217-1"},"\u6e32\u67d3\u8868\u5355\u9879--\u4e09\u5217"),Object(i.b)(j.c,{__position:6,__code:"class Demo extends React.Component {\n    render() {\n      const list = [\n        {\n          label: '\u59d3\u540d',\n          content: <Input />,\n        },\n        {\n          label: '\u6027\u522b',\n          content: <Input />,\n        },\n        {\n          label: '\u5e74\u9f84',\n          content: <Input />,\n        },\n        {\n          label: '\u6027\u522b',\n          content: <Input />,\n        },\n        {\n          content: <Button type=\"primary\">\u4fdd\u5b58\uff0c\u6211\u662f\u81ea\u52a8\u5bf9\u9f50</Button>,\n        },\n      ]\n      return (\n        <div>\n          <Form layout=\"Horizontal\">{FormUtil.renderFormItems(list, 3)}</Form>\n        </div>\n      )\n    }\n  }",__scope:{props:this?this.props:t,Playground:j.c,Props:j.d,FormUtil:y.a,IFormItemDataC:O,Input:p.a,Form:m.a,Button:c.a,Checkbox:s.a,PhoneFormItem:I.a},__codesandbox:"undefined",mdxType:"Playground"},function(e){Object(l.a)(t,e);var n=Object(r.a)(t);function t(){return Object(a.a)(this,t),n.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=[{label:"\u59d3\u540d",content:Object(i.b)(p.a,{mdxType:"Input"})},{label:"\u6027\u522b",content:Object(i.b)(p.a,{mdxType:"Input"})},{label:"\u5e74\u9f84",content:Object(i.b)(p.a,{mdxType:"Input"})},{label:"\u6027\u522b",content:Object(i.b)(p.a,{mdxType:"Input"})},{content:Object(i.b)(c.a,{type:"primary",mdxType:"Button"},"\u4fdd\u5b58\uff0c\u6211\u662f\u81ea\u52a8\u5bf9\u9f50")}];return Object(i.b)("div",null,Object(i.b)(m.a,{layout:"Horizontal",mdxType:"Form"},y.a.renderFormItems(e,3)))}}]),t}(u.a.Component)),Object(i.b)("h3",{id:"\u589e\u52a0\u6bcf\u5217\u7684\u95f4\u9694"},"\u589e\u52a0\u6bcf\u5217\u7684\u95f4\u9694"),Object(i.b)("p",null,"\u901a\u8fc7\u8bbe\u7f6erenderFormItems\u7684\u7b2c4\u4e2a\u53c2\u6570--",Object(i.b)("inlineCode",{parentName:"p"},"defaultContentSpan"),"\uff0c\u4f7f\u7528labelSpan + wrapSpan < 24\uff0c\u8fbe\u5230\u589e\u52a0\u6bcf\u5217\u95f4\u9694\u7684\u76ee\u7684"),Object(i.b)("p",null,"\u540c\u65f6\uff0c\u4e5f\u53ef\u4ee5\u7ed9\u8868\u5355\u9879\u5355\u72ec\u8bbe\u7f6ewrawSpan"),Object(i.b)(j.c,{__position:7,__code:"class Demo extends React.Component {\n    render() {\n      const list = [\n        {\n          label: '\u59d3\u540d',\n          content: <Input />,\n        },\n        {\n          label: '\u6027\u522b',\n          content: <Input />,\n        },\n        {\n          label: '\u5e74\u9f84',\n          content: <Input />,\n        },\n        {\n          label: '\u6027\u522b',\n          content: <Input value=\"\u6211\u5355\u72ec\u8bbe\u7f6e\u4e86wrapSpan\" />,\n          wrapSpan: 10,\n        },\n        {\n          content: <Button type=\"primary\">\u4fdd\u5b58</Button>,\n        },\n      ]\n      return (\n        <div>\n          <Form layout=\"Horizontal\">\n            {FormUtil.renderFormItems(list, 3, 6, 15)}\n          </Form>\n        </div>\n      )\n    }\n  }",__scope:{props:this?this.props:t,Playground:j.c,Props:j.d,FormUtil:y.a,IFormItemDataC:O,Input:p.a,Form:m.a,Button:c.a,Checkbox:s.a,PhoneFormItem:I.a},__codesandbox:"undefined",mdxType:"Playground"},function(e){Object(l.a)(t,e);var n=Object(r.a)(t);function t(){return Object(a.a)(this,t),n.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=[{label:"\u59d3\u540d",content:Object(i.b)(p.a,{mdxType:"Input"})},{label:"\u6027\u522b",content:Object(i.b)(p.a,{mdxType:"Input"})},{label:"\u5e74\u9f84",content:Object(i.b)(p.a,{mdxType:"Input"})},{label:"\u6027\u522b",content:Object(i.b)(p.a,{value:"\u6211\u5355\u72ec\u8bbe\u7f6e\u4e86wrapSpan",mdxType:"Input"}),wrapSpan:10},{content:Object(i.b)(c.a,{type:"primary",mdxType:"Button"},"\u4fdd\u5b58")}];return Object(i.b)("div",null,Object(i.b)(m.a,{layout:"Horizontal",mdxType:"Form"},y.a.renderFormItems(e,3,6,15)))}}]),t}(u.a.Component)),Object(i.b)("h2",{id:"\u53c2\u8003-iformitemdata"},"\u53c2\u8003 IFormItemData"),Object(i.b)(j.d,{of:O,mdxType:"Props"}))}x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/utils/FormUtil.mdx"}}),x.isMDXComponent=!0},"./src/utils/FormUtil.tsx":function(e,n,t){"use strict";t("./node_modules/antd/es/row/style/index.js");var a=t("./node_modules/antd/es/row/index.js"),o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),l=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),s=t("./node_modules/antd/lib/col/index.js"),c=t.n(s),m=t("./node_modules/antd/lib/form/FormItem.js"),p=t.n(m),b=t("react"),d=t.n(b),u=function(){function e(){Object(r.a)(this,e)}return Object(l.a)(e,null,[{key:"renderFormItems",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:6,r=arguments.length>3?arguments[3]:void 0;if(!e||!e.length)return null;for(var l=24/n,s=[],m=0;m<e.length;m++){var b=e[m],u=b.span;u||(u=b.label&&b.label.length>6?24:l),u=Math.min(24,u);var i=Math.min(24,b.labelSpan?b.labelSpan:Math.round(t*l/u)),j={wrapperCol:{}};b.label?j.labelCol={span:i}:j.wrapperCol.offset=i,b.wrapSpan?j.wrapperCol.span=b.wrapSpan:j.wrapperCol.span=r||24-i;var y=null;if(b.content){var O=Object.assign(Object(o.a)({label:b.label,name:b.name,rules:b.rules,valuePropName:b.valuePropName||"value"},j,{},b.formItemProps,{children:null}));y=b.contentIsFormItem?d.a.cloneElement(b.content,Object.assign(O,b.content.props)):d.a.createElement(p.a,O,b.content)}var I={span:u,formItem:y},h=void 0;s.length&&(h=s[s.length-1]),(!h||h.totalSpan+u>24)&&(h={totalSpan:0,cols:[]},s.push(h)),h.totalSpan+=u,h.cols.push(I)}return s.map((function(e,n){return d.a.createElement(a.a,{key:n},e.cols.map((function(e,n){return d.a.createElement(c.a,{key:n,span:e.span},e.formItem)})))}))}},{key:"renderInlinFormItems",value:function(e){return e&&e.length?e.map((function(e,n){return d.a.createElement(p.a,Object.assign({key:n,label:e.label,name:e.name,rules:e.rules},e.formItemProps),e.content)})):null}}]),e}();n.a=u,"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FormUtil",filename:"src/utils/FormUtil.tsx"}})}}]);