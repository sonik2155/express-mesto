(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n(1),c=n.n(o),i=n(6),s=n.n(i),r=(n(15),n(9)),l=n(2),u=n.p+"static/media/logo.a307e1c4.svg";function p(){return Object(a.jsx)("header",{className:"header",children:Object(a.jsx)("img",{className:"header__logo",src:u,alt:"\u041c\u0435\u0441\u0442\u043e"})})}function d(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("p",{className:"footer__copyrigth",children:" \xa9 2020 Mesto Russia"})})}var m=n.p+"static/media/Pencil.a086f758.svg",j=n.p+"static/media/plus.d86bb2ed.svg",h=n.p+"static/media/Trash.a274c87c.svg",_=n.p+"static/media/like.49570bcb.svg",b=c.a.createContext();var f=function(e){var t=e.element,n=e.onCardLike,o=e.onCardDelete,i=e.onCardOpen,s=c.a.useContext(b),r={link:t.link,name:t.name,_id:t._id,owner:t.owner,likes:t.likes},l=r.likes.some((function(e){return e._id===s._id})),u=r.owner._id===s._id,p="element__delete ".concat(u?"element__delete_visible":"element__delete_hidden"),d="element__like ".concat(l?"element__like_active":"");return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("img",{className:"element__pic",onClick:function(){i(t)},src:t.link,alt:t.name}),Object(a.jsxs)("div",{className:"element__container",children:[Object(a.jsx)("button",{type:"button",onClick:function(){o(t)},className:p,children:Object(a.jsx)("img",{src:h,alt:"\u041a\u043d\u043e\u043f\u043a\u0430"})}),Object(a.jsxs)("h2",{className:"element__title",children:[" ",t.name," "]}),Object(a.jsxs)("div",{className:"element__like-zone",children:[Object(a.jsx)("button",{type:"button",onClick:function(){n(t)},className:d,children:Object(a.jsx)("img",{src:_,alt:"\u041b\u0430\u0439\u043a"})}),Object(a.jsx)("span",{className:"element__quantity-like",children:t.likes.length})]})]})]})};var O=function(e){var t=e.onCardDelete,n=e.cards,o=e.onCardLike,i=e.onAddPlace,s=e.onEditProfile,r=e.onEditAvatar,l=e.onCardClick,u=c.a.useContext(b);return Object(a.jsxs)("main",{className:"main",children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsx)("div",{className:"profile__zone",style:{backgroundImage:"url(".concat(u.avatar,")")},children:Object(a.jsx)("button",{type:"button",onClick:r,className:"profile__avatar-button",children:Object(a.jsx)("img",{className:"profile__pencil-img",alt:u.name,src:m})})}),Object(a.jsxs)("div",{className:"profile__info-container",children:[Object(a.jsxs)("div",{className:"profile__container",children:[Object(a.jsxs)("h1",{className:"profile__info-title",children:[" ",u.name," "]}),Object(a.jsx)("button",{type:"button",onClick:s,className:"profile__edit-button"})]}),Object(a.jsxs)("p",{className:"profile__info-profession",children:[" ",u.about," "]})]}),Object(a.jsx)("button",{type:"button",onClick:i,className:"profile__add-button",children:Object(a.jsx)("img",{className:"profile__plus-img",src:j,alt:"\u041a\u043d\u043e\u043f\u043a\u0430"})})]}),Object(a.jsx)("section",{className:"elements",children:Object(a.jsx)("ul",{className:"element",children:n.map((function(e,n){return Object(a.jsx)("li",{className:"element__card",children:Object(a.jsx)(f,{element:e,onCardOpen:l,onCardLike:o,onCardDelete:t})},e._id)}))})})]})};var x=function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen&&"popup_is-opened"),children:Object(a.jsxs)("form",{name:"popup__form",method:"POST",action:"#",className:"popup__container",noValidate:!0,onSubmit:e.onSubmit,children:[Object(a.jsxs)("h2",{className:"popup__title",children:[" ",e.title," "]})," ",e.children,Object(a.jsx)("button",{type:"button",onClick:e.onClose,className:"popup__close-button"}),Object(a.jsx)("button",{type:"submit",className:"popup__button",children:e.buttonTitle})]})})})};var v=function(e){var t=c.a.useContext(b),n=c.a.useState(""),o=Object(l.a)(n,2),i=o[0],s=o[1],r=c.a.useState(""),u=Object(l.a)(r,2),p=u[0],d=u[1];return c.a.useEffect((function(){s(t.name),d(t.about)}),[t]),Object(a.jsxs)(x,{name:"profile",isOpen:e.isOpen,title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:i,about:p})},buttonTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:[Object(a.jsxs)("label",{className:"popup__label",children:[Object(a.jsx)("input",{name:"name",id:"name",type:"text",placeholder:"\u0416\u0430\u043a-\u0418\u0432 \u041a\u0443\u0441\u0442\u043e",value:i,autoComplete:"off",minLength:"2",maxLength:"40",required:!0,onChange:function(e){s(e.target.value)},className:"popup__form popup__form_name_call"}),Object(a.jsx)("span",{className:"popup__error_visible",id:"name-error"})]}),Object(a.jsxs)("label",{className:"popup__label",children:[Object(a.jsx)("input",{name:"info",id:"text",type:"text",placeholder:"\u0418\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043e\u043a\u0435\u0430\u043d\u0430",value:p,autoComplete:"off",minLength:"2",maxLength:"200",required:!0,onChange:function(e){d(e.target.value)},className:"popup__form popup__form_job"}),Object(a.jsx)("span",{className:"popup__error_visible",id:"text-error"})]})]})};var C=function(e){var t=c.a.useRef();return Object(a.jsx)(x,{name:"avatar",isOpen:e.isOpen,title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},buttonTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:Object(a.jsx)("label",{className:"popup__label",children:Object(a.jsx)("input",{name:"picture",type:"url",id:"link",ref:t,required:!0,placeholder:"https://images.unsplash.com/photo-1599937749121-6d2b5063ea98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",autoComplete:"off",className:"popup__form popup__apdate_picture"})})})};var g=function(e){var t=c.a.useState(""),n=Object(l.a)(t,2),o=n[0],i=n[1],s=c.a.useState(""),r=Object(l.a)(s,2),u=r[0],p=r[1];return Object(a.jsxs)(x,{name:"add",isOpen:e.isOpen,title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:o,link:u})},buttonTitle:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",children:[Object(a.jsxs)("label",{className:"popup__label",children:[Object(a.jsx)("input",{name:"call",id:"nickname",type:"text",required:!0,onChange:function(e){i(e.target.value)},autoComplete:"off",minLength:"1",maxLength:"30",value:o,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:"popup__form popup__form_name_title"}),Object(a.jsx)("span",{className:"popup__error_visible",id:"nickname-error"})]}),Object(a.jsxs)("label",{className:"popup__label",children:[Object(a.jsx)("input",{name:"link",id:"url",type:"url",required:!0,value:u,onChange:function(e){p(e.target.value)},autoComplete:"off",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__form popup__form_pic_url"}),Object(a.jsx)("span",{className:"popup__error_visible",id:"url-error"})]})]})};var k=function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"popup popup_add_image ".concat(e.isOpen&&"popup_is-opened"),children:Object(a.jsxs)("figure",{className:"popup__case",children:[Object(a.jsx)("img",{className:"popup__pic",src:e.card.link,alt:e.card.name}),Object(a.jsx)("button",{type:"button",onClick:e.onClose,className:"popup__close-button"}),Object(a.jsxs)("h3",{className:"popup__name-pic",children:[" ",e.card.name," "]})]})})})},N=n(7),y=n(8),T=new(function(){function e(t){Object(N.a)(this,e),this._url=t.url,this._authorization=t.headers.authorization,this._contentType=t.headers["Content-type"]}return Object(y.a)(e,[{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:{authorization:this._authorization}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"addNewCards",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:{authorization:this._authorization,"Content-Type":this._contentType},body:JSON.stringify({name:t,link:n})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._authorization,"Content-Type":this._contentType}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:{authorization:this._authorization,"Content-Type":this._contentType}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"changeAvatar",value:function(e){var t=e.avatar;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":this._contentType},body:JSON.stringify({avatar:t})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getUserInformation",value:function(){return fetch("".concat(this._url,"/users/me/"),{method:"GET",headers:{authorization:this._authorization,"Content-Type":this._contentType}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"changeUserInfo",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this._url,"/users/me/"),{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":this._contentType},body:JSON.stringify({name:t,about:n})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-16",headers:{authorization:"344a64cf-b308-474c-8210-0f54155eeeb6","Content-type":"application/json"}});function S(){var e=c.a.useState(!1),t=Object(l.a)(e,2),n=t[0],o=t[1],i=c.a.useState(!1),s=Object(l.a)(i,2),u=s[0],m=s[1],j=c.a.useState(!1),h=Object(l.a)(j,2),_=h[0],f=h[1],x=c.a.useState(!1),N=Object(l.a)(x,2),y=N[0],S=N[1],P=c.a.useState({isOpen:!1}),z=Object(l.a)(P,2),E=z[0],L=z[1],A=c.a.useState(!1),w=Object(l.a)(A,2),U=w[0],D=w[1],I=c.a.useState([]),q=Object(l.a)(I,2),J=q[0],F=q[1];function H(){m(!1),o(!1),f(!1),S(!1)}return c.a.useEffect((function(){Promise.all([T.getUserInformation(),T.getInitialCards()]).then((function(e){D(e[0]),function(e){F(e.map((function(e){return{_id:e._id,link:e.link,name:e.name,owner:e.owner,likes:e.likes}})))}(e[1])})).catch((function(e){console.log(e)}))}),[]),Object(a.jsx)(b.Provider,{value:U,children:Object(a.jsxs)("div",{className:"page",children:[Object(a.jsx)(p,{}),Object(a.jsx)(O,{onEditProfile:function(){o(!0)},onAddPlace:function(){m(!0)},onEditAvatar:function(){f(!0)},onCardClick:function(e){L(e),S(!0)},cards:J,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===U._id}));T.changeLikeCardStatus(e._id,!t).then((function(t){var n=J.map((function(n){return n._id===e._id?t:n}));F(n)})).catch((function(e){console.log(e)}))},onCardDelete:function(e){T.deleteCard(e._id).then((function(){var t=J.filter((function(t){return t._id!==e._id}));F(t)})).catch((function(e){return console.log("Error ".concat(e))}))}}),Object(a.jsx)(d,{}),Object(a.jsx)(k,{card:E,isOpen:y,onClose:H}),Object(a.jsx)(v,{isOpen:n,onClose:H,onUpdateUser:function(e){var t=e.name,n=e.about;T.changeUserInfo({name:t,about:n}).then((function(e){D(e),H()})).catch((function(e){console.log(e)}))}}),Object(a.jsx)(C,{isOpen:_,onClose:H,onUpdateAvatar:function(e){var t=e.avatar;T.changeAvatar({avatar:t}).then((function(e){D(e),H()})).catch((function(e){console.log(e)}))}}),Object(a.jsx)(g,{isOpen:u,onClose:H,onAddPlace:function(e){var t=e.name,n=e.link;T.addNewCards({name:t,link:n}).then((function(e){F([e].concat(Object(r.a)(J))),H()})).catch((function(e){console.log(e)}))}})]})})}s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(S,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.b5cb28f1.chunk.js.map