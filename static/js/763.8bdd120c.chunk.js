"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[763],{3457:function(e,t,n){n.r(t),n.d(t,{ContentContainer:function(){return de},default:function(){return pe}});var r=n(8683),o=n(5671),a=n(3144),s=n(136),i=n(5716),l=n(2791),u="Content_containerInfoAndPosts__K-4vc",c="Content_containerInfo__K-Awl",d="Content_containerPosts__hRFaP",p="Content_headerContent__5zGjm",f=n(364),m="AddPost_postContainer__j6mqH",h="AddPost_title__48lN8",v=n(6139),_=n(704),x=n(9595),j=n(3079),g=n(1917),P=n(6006),y=n(184),b=(0,j.D)(100),C=(0,_.Z)({form:"profileAddPostForm"})((function e(t){var n=t.handleSubmit;return(0,y.jsxs)("form",{onSubmit:n,className:x.Z.form,children:[(0,y.jsx)("div",{className:x.Z.data,children:(0,y.jsx)(v.Z,{placeholder:"Enter you post",type:"text",name:"post",component:g.u,validate:[b]})}),(0,y.jsx)(P.G,{form:e})]})})),k=n(6138),N=(0,f.$j)(null,(function(e){return{addPost:function(t){return e((0,k.Pi)(t))}}}))((function(e){var t=e.addPost;return(0,y.jsxs)("div",{className:m,children:[(0,y.jsx)("h3",{className:h,children:"My posts"}),(0,y.jsx)(C,{onSubmit:function(e){t(e.post)}})]})})),Z="MyPosts_myPostsContainer__JJOly",D="PostCompponent_post__wtL2o",w="PostCompponent_avatarAndName__-paSU",S="PostCompponent_message__OEw-+",A="PostCompponent_likes__8Nc8c",F=n(7025),I=(0,n(8499).Z)(l.createElement("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}),"FavoriteBorder"),U=n(7171),M=function(e){return(0,y.jsxs)("div",{className:D,children:[(0,y.jsxs)("div",{className:w,children:[(0,y.jsx)(U.Y,{img:e.userAvatar,size:30}),(0,y.jsx)("h5",{style:{marginLeft:"5px"},children:e.userName})]}),(0,y.jsxs)("span",{className:S,children:[" ",e.message]}),(0,y.jsxs)("div",{className:A,children:[(0,y.jsx)(F.Z,{onClick:function(){var t=e.likes+1;e.addLike(t,e.id)},size:"small",children:(0,y.jsx)(I,{color:"primary"})}),(0,y.jsxs)("span",{children:[" ",e.likes]})]})]})},T=l.memo(M),L=(0,l.memo)((function(e){return(0,y.jsxs)("div",{className:Z,children:[(0,y.jsx)(N,{}),e.postData.map((function(t){return(0,y.jsx)(T,{id:t.id,message:t.message,likes:t.likes,userName:e.userName,userAvatar:e.userAvatar,addLike:e.addLike},t.id)}))]})})),O=(0,f.$j)((function(e){return{postData:e.profilePage.postData,userName:e.profilePage.profile.fullName,userAvatar:e.profilePage.profile.photos.small}}),(function(e){return{addLike:function(t,n){return e((0,k.dE)(t,n))}}}))(L),E=n(885),z="Profile_mainContainer__h6HI4",J="Profile_avatarContainer__PQXug",B="Profile_infoContainer__6ZjPD",H="Profile_Name__iHknu",W="Profile_data__fWdt5",G="Profile_editButton__w3vjk",$=n(7749),K=n(9038),q=function(e){var t=e.status,n=e.updateUserStatus,r=(0,l.useState)(!1),o=(0,E.Z)(r,2),a=o[0],s=o[1],i=(0,l.useState)(t),u=(0,E.Z)(i,2),c=u[0],d=u[1];(0,l.useEffect)((function(){t!==c&&d(t)}),[t]);return(0,y.jsxs)("div",{style:{height:"max-content",fontWeight:"bold",width:"100%",wordBreak:"break-word"},children:["Status:",a?(0,y.jsx)(K.Z,{value:c,onBlur:function(){s(!1),n(c)},onChange:function(e){d(e.currentTarget.value)},autoFocus:!0}):(0,y.jsx)("span",{style:{fontStyle:"italic",minWidth:"100px",minHeight:"12px",cursor:"pointer",fontWeight:"normal"},onDoubleClick:function(){s(!0)},children:t?" "+t:" -"})]})},V="Contact_link__ycuhH",Q=function(e){var t=e.title,n=e.link;return(0,y.jsxs)("span",{style:{margin:"0 15px",wordBreak:"break-word"},children:[t,":",(0,y.jsx)("a",{href:n,className:V,children:n})]})},R=function(e){var t=e.profile;return(0,y.jsxs)("div",{className:W,children:[(0,y.jsxs)("span",{children:[" About me: ",t.aboutMe," "]}),(0,y.jsxs)("span",{children:[" Looking for a job: ",t.lookingForAJob?"\u2705":""]}),t.lookingForAJob&&(0,y.jsxs)("span",{children:[" Skills: ",t.lookingForAJobDescription]}),(0,y.jsx)("span",{children:" Contacts: "}),Object.entries(t.contacts).map((function(e){return(0,y.jsx)(Q,{title:e[0],link:e[1]},e[0])}))]})},X=n(98),Y="ProfileDataForm_form__VS-xp",ee="ProfileDataForm_error__5rPKb",te=(0,_.Z)({form:"profileInfoForm"})((function e(t){var n=t.handleSubmit,r=t.error;return(0,y.jsxs)("form",{onSubmit:n,className:Y,children:[r&&(0,y.jsxs)("div",{className:ee,children:[" ",r," "]}),(0,y.jsx)(v.Z,{placeholder:"Full name",type:"text",name:"fullName",component:g.u,validate:[j.C]}),(0,y.jsx)(v.Z,{placeholder:"About",type:"text",name:"aboutMe",component:g.u,validate:[j.C]}),(0,y.jsx)(v.Z,{type:"checkbox",name:"lookingForAJob",component:X.F,validate:[j.C],label:"Looking for a job"}),(0,y.jsx)(v.Z,{placeholder:"Skills",type:"text",name:"lookingForAJobDescription",component:g.u}),Object.keys({facebook:"",website:"",vk:"",twitter:"",instagram:"",youtube:"",github:"",mainLink:""}).map((function(e){return(0,y.jsx)(v.Z,{placeholder:e,type:"text",name:e,component:g.u},e)})),(0,y.jsx)(P.G,{form:e})]})})),ne=n(6513),re=function(e){var t=e.profile,n=e.savePhoto,r=e.status,o=e.updateUserStatus,a=e.isOwner,s=e.saveProfile,i=(0,l.useState)(!1),u=(0,E.Z)(i,2),c=u[0],d=u[1];return t?(0,y.jsxs)("div",{className:z,children:[(0,y.jsx)("div",{className:J,children:(0,y.jsx)(U.Y,{img:t.photos.large,savePhoto:n,size:200,isOwner:a})}),(0,y.jsxs)("div",{className:B,children:[(0,y.jsx)("div",{className:H,children:t.fullName}),(0,y.jsx)(q,{status:r,updateUserStatus:o}),c?(0,y.jsx)(te,{onSubmit:function(e){s(e),d(!1)},initialValues:t}):(0,y.jsx)(R,{profile:t}),a&&!c&&(0,y.jsx)(ne.Z,{onClick:function(){return d(!0)},variant:"contained",color:"primary",className:G,children:"Edit"})]})]}):(0,y.jsx)($.p,{})};var oe=function(e){return(0,y.jsxs)("div",{className:"content",children:[(0,y.jsx)("div",{children:(0,y.jsx)("img",{className:p,alt:"big content",src:"https://img5.goodfon.ru/wallpaper/nbig/5/2e/gory-skaly-vodoem-les-otrazhenie-bereg.jpg"})}),(0,y.jsxs)("div",{className:u,children:[(0,y.jsx)("div",{className:c,children:(0,y.jsx)(re,{profile:e.profile,status:e.status,isOwner:e.isOwner,savePhoto:e.savePhoto,saveProfile:e.saveProfile,updateUserStatus:e.updateUserStatus})}),(0,y.jsx)("div",{className:d,children:(0,y.jsx)(O,{})})]})]})},ae=n(9271),se=n(7781),ie=n(2453),le=function(e){return e.profilePage.postData},ue=function(e){return e.profilePage.profile},ce=function(e){return e.profilePage.status},de=function(e){(0,s.Z)(n,e);var t=(0,i.Z)(n);function n(){var e;(0,o.Z)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).refreshProfile=function(){var t=e.props.match.params.userID;t||""===(t=e.props.userID?e.props.userID.toString():"")&&e.props.history.push("/login"),e.props.getUserProfileTC(t),e.props.getUserStatusTC(t)},e}return(0,a.Z)(n,[{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,n){this.props.match.params.userID!==e.match.params.userID&&this.refreshProfile()}},{key:"render",value:function(){return(0,y.jsx)(oe,(0,r.Z)({isOwner:!this.props.match.params.userID,savePhoto:this.props.savePhotoTC,saveProfile:this.props.saveProfileTC},this.props))}}]),n}(l.Component),pe=(0,se.qC)((0,f.$j)((function(e){return{postData:le(e),profile:ue(e),status:ce(e),isAuth:(0,ie.Od)(e),userID:(0,ie.VN)(e)}}),{addPost:k.Pi,addLike:k.dE,setUserProfile:k.$l,getUserProfileTC:k.d$,getUserStatusTC:k.Qw,updateUserStatus:k.wM,savePhotoTC:k.Tw,saveProfileTC:k.Ms}),ae.EN)(de)},6006:function(e,t,n){n.d(t,{G:function(){return i}});n(2791);var r=n(364),o=n(2381),a=n(6513),s=n(184),i=function(e){var t=e.form,n=(0,r.I0)();return(0,s.jsx)(a.Z,{type:"submit",color:"primary",variant:"contained",onClick:function(){n((0,o.Ps)(t))},children:"Send"})}},98:function(e,t,n){n.d(t,{F:function(){return s}});var r=n(4135),o=n(5193),a=n(184),s=function(e){var t=e.input,n=e.label;return(0,a.jsx)(r.Z,{control:(0,a.jsx)(o.Z,{checked:!!t.value,onChange:t.onChange,color:"primary"}),label:n})}},1917:function(e,t,n){n.d(t,{u:function(){return l}});var r=n(8683),o=n(5987),a=(n(2791),n(9038)),s=n(184),i=["input","placeholder","variant","type","meta"],l=function(e){var t=e.input,n=e.placeholder,l=e.variant,u=e.type,c=e.meta,d=c.touched,p=c.error;(0,o.Z)(e,i);return(0,s.jsx)(a.Z,(0,r.Z)((0,r.Z)({},t),{},{style:{marginBottom:"10px"},error:d&&p,helperText:d&&p,fullWidth:!0,label:n,type:u,variant:l||"outlined",size:"small"}))}},3079:function(e,t,n){n.d(t,{C:function(){return r},D:function(){return o}});var r=function(e){return e?void 0:"Field is required"},o=function(e){return function(t){return t&&t.length>e?"Max length is ".concat(e," symbols"):void 0}}},9595:function(e,t){t.Z={dialogsContainer:"Dialogs_dialogsContainer__8cx4-",dialogs:"Dialogs_dialogs__oe96H",sidebar:"Dialogs_sidebar__4F+Oi",dialogsMessages:"Dialogs_dialogsMessages__F6PfG",dialogsItems:"Dialogs_dialogsItems__zeEWD",addDialogContainer:"Dialogs_addDialogContainer__1AuXx",messageInput:"Dialogs_messageInput__RpvMK"}},885:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(181);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],s=!0,i=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);s=!0);}catch(l){i=!0,o=l}finally{try{s||null==n.return||n.return()}finally{if(i)throw o}}return a}}(e,t)||(0,r.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=763.8bdd120c.chunk.js.map