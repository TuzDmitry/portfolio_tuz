(this.webpackJsonpportfolio_tuz=this.webpackJsonpportfolio_tuz||[]).push([[0],[,,function(e,t,a){e.exports={link:"NavMenu_link__ADQni",navMenu:"NavMenu_navMenu__3lVF_"}},function(e,t,a){e.exports={main:"Main_main__15a4O",container:"Main_container__31CSG",greeting:"Main_greeting__3DTS2",h1:"Main_h1__2-FI7",firstLastName:"Main_firstLastName__zQITG",myPhotoContainer:"Main_myPhotoContainer__32pWb"}},function(e,t,a){e.exports=a.p+"static/media/my_main_photo.ba8db61a.jpg"},function(e,t,a){e.exports={project:"Project_project__37PCJ",projectName:"Project_projectName__1HB2k",image:"Project_image__n8J79",projectDescription:"Project_projectDescription__194D_",skill:"Project_skill__1ceks"}},function(e,t,a){e.exports={footer:"Footer_footer__yrt7S",container:"Footer_container__1oXuR",social:"Footer_social__9jHaf",copyright:"Footer_copyright__2ftxS"}},,function(e,t,a){e.exports={skills:"Skills_skills__YctX8",container:"Skills_container__2OEsn",skillsContainer:"Skills_skillsContainer__ZMLpW"}},function(e,t,a){e.exports={skill:"Skill_skill__3kiQA",skillName:"Skill_skillName__3NOPE",skillDescription:"Skill_skillDescription__1d3F3"}},function(e,t,a){e.exports={projects:"Projects_projects__1YxGq",container:"Projects_container__3Qs-I",projectsContainer:"Projects_projectsContainer__3neTs"}},function(e,t,a){e.exports={contacts:"Contacts_contacts__2KHU9",container:"Contacts_container__3wwaC",form:"Contacts_form__tN_kO"}},,,function(e,t,a){e.exports={header:"Header_header__m2c6K",container:"Header_container__3XqXs"}},,function(e,t,a){e.exports={moduleLine:"TitleBlock_moduleLine__3M4Y0",titleBlock:"TitleBlock_titleBlock__Ltkqa"}},function(e,t,a){e.exports={btnBlock:"Btn_btnBlock__rRrsd",btnProject:"Btn_btnProject__11aae"}},function(e,t,a){e.exports={slogan:"Slogan_slogan__2tTIH",container:"Slogan_container__3_pjK"}},,,,function(e,t,a){},,,function(e,t,a){e.exports=a.p+"static/media/html.1894126b.png"},function(e,t,a){e.exports=a.p+"static/media/css.ddbb6e6f.png"},function(e,t,a){e.exports=a.p+"static/media/react.84331f10.png"},function(e,t,a){e.exports=a.p+"static/media/js.35b5cbd5.png"},function(e,t,a){e.exports=a.p+"static/media/project_1.0e5f617c.jpg"},function(e,t,a){e.exports=a.p+"static/media/project_2.e6014240.jpg"},function(e,t,a){e.exports=a.p+"static/media/project_3.3dcdfcdd.jpg"},function(e,t,a){e.exports=a.p+"static/media/project_4.0d5b0438.jpg"},,,function(e,t,a){e.exports=a(50)},,,,,function(e,t,a){},,,,,,,function(e,t,a){e.exports=a.p+"static/media/Html5_Css3_JS_React_Angular_Vue.1c088c20.svg"},,,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(24),r=a.n(o),i=(a(40),a(22),a(14)),l=a.n(i),s=a(2),m=a.n(s);var p=function(){return c.a.createElement("nav",{className:m.a.navMenu},c.a.createElement("a",{href:"#main",className:m.a.link},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),c.a.createElement("a",{href:"#skills",className:m.a.link},"\u0421\u043a\u0438\u043b\u043b\u044b"),c.a.createElement("a",{href:"#projects",className:m.a.link},"\u0420\u0430\u0431\u043e\u0442\u044b"),c.a.createElement("a",{href:"#contacts",className:m.a.link},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"))};var u=function(){return c.a.createElement("div",{className:l.a.header},c.a.createElement("div",{className:l.a.container},c.a.createElement(p,null)))},_=a(3),d=a.n(_),k=function(e){return c.a.createElement("div",{id:"main",className:d.a.main},c.a.createElement("div",{className:d.a.container},c.a.createElement("div",{className:d.a.greeting},c.a.createElement("div",null,"Hi"),c.a.createElement("div",null,"I am ",c.a.createElement("br",null),c.a.createElement("span",{className:d.a.firstLastName}," ",e.state.info.myName)),c.a.createElement("h1",null,e.state.info.description)),c.a.createElement("div",null,c.a.createElement("div",{className:d.a.myPhotoContainer},c.a.createElement("img",{src:e.state.info.srcPhoto,alt:"Here you could see my photo"})))))},f=a(8),N=a.n(f),g=a(9),E=a.n(g),v=function(e){return c.a.createElement("div",{className:E.a.skill},c.a.createElement("img",{src:e.imgOfSkill,alt:"skill img"}),c.a.createElement("h3",{className:E.a.skillName},e.nameOfSkill),c.a.createElement("div",{className:E.a.skillDescription},e.descriptOfSkill))},j=(a(41),a(47),a(16)),b=a.n(j),h=function(e){return c.a.createElement("div",{className:b.a.titleBlock},c.a.createElement("h2",null,e.titleName),c.a.createElement("div",{className:b.a.moduleLine}))},x=function(e){var t=e.state.skillItems.map((function(e){return c.a.createElement(v,{key:e.id,imgOfSkill:e.srcLogo,nameOfSkill:e.skillName,descriptOfSkill:e.description})}));return c.a.createElement("div",{id:"skills",className:N.a.skills},c.a.createElement("div",{className:N.a.container},c.a.createElement(h,{titleName:e.state.titleName}),c.a.createElement("div",{className:N.a.skillsContainer},t)))},y=a(10),B=a.n(y),C=a(5),P=a.n(C),S=a(17),L=a.n(S),w=function(e){return c.a.createElement(c.a.Fragment,null,"btnBlock"===e.btn.buttonClass&&c.a.createElement("button",{className:L.a.btnBlock},e.btn.buttonName),"btnProject"===e.btn.buttonClass&&c.a.createElement("button",{className:L.a.btnProject},e.btn.buttonName))},M=function(e){var t={backgroundImage:"url('".concat(e.urlImg,"')")};return c.a.createElement("div",{className:P.a.project},c.a.createElement("div",{className:P.a.image,style:t},c.a.createElement(w,{btn:e.state.button})),c.a.createElement("h3",{className:P.a.projectName},e.nameOfProject),c.a.createElement("div",{className:P.a.projectDescription},e.descriptOfProject))},I=a(4),T=a.n(I),O=a(25),D=a.n(O),F=a(26),H=a.n(F),R=a(27),J=a.n(R),z=a(28),A=a.n(z),K=a(29),W=a.n(K),Q=a(30),V=a.n(Q),X=a(31),Y=a.n(X),q=a(32),G=a.n(q),U={headerBlock:{navLinks:[{id:"main",title:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"},{id:"skills",title:"\u0421\u043a\u0438\u043b\u043b\u044b"},{id:"projects",title:"\u0420\u0430\u0431\u043e\u0442\u044b"},{id:"contacts",title:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}]},mainBlock:{info:{myName:"Dmitry Tuz",description:"\u042f React \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a",srcPhoto:T.a}},skillsBlock:{titleName:"My Skills",skillItems:[{id:0,skillName:"React",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 React \u043d\u0430\u0432\u044b\u043a\u0430",srcLogo:J.a},{id:1,skillName:"HTML",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 HTML \u043d\u0430\u0432\u044b\u043a\u0430",srcLogo:D.a},{id:2,skillName:"CSS",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 CSS \u043d\u0430\u0432\u044b\u043a\u0430",srcLogo:H.a},{id:3,skillName:"JS",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 JS \u043d\u0430\u0432\u044b\u043a\u0430",srcLogo:A.a}]},projectsBlock:{titleName:"My Works",button:{buttonName:"C\u043c\u043e\u0442\u0440\u0435\u0442\u044c",buttonClass:"btnProject"},projectItems:[{id:1,projectName:"Social Network",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 Social Network",srcImgProject:W.a},{id:2,projectName:"ToDo List",description:"ToDo List",srcImgProject:V.a},{id:3,projectName:"Catch me if you can",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 Catch me if you can",srcImgProject:Y.a},{id:4,projectName:"Counter",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 Counter",srcImgProject:G.a}]},sloganBlock:{titleName:"\u0420\u0430\u0441\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u044e \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b",button:{buttonName:"\u041d\u0430\u043d\u044f\u0442\u044c \u043c\u0435\u043d\u044f",buttonClass:"btnBlock"}},contactBlock:{titleName:"Contact Me",button:{buttonName:"Send Message",buttonClass:"btnBlock"}},footerBlock:{titleName:"\u0422\u0443\u0437 \u0414\u043c\u0438\u0442\u0440\u0438\u0439",copyrightText:"\xa9 2020, All Rights Reserved",socialContacts:[{id:"1",urladress:"vk.com",srcLogo:"https://toy-boy.ru/images/vkontakte.png",altText:"VK"},{id:"2",urladress:"facebook.com",srcLogo:"https://toy-boy.ru/images/vkontakte.png",altText:"FaceBook"},{id:"3",urladress:"linkedin.com",srcLogo:"https://www.clipartmax.com/png/full/62-624588_linkedin-help-linkedin-logo-2018-png.png",altText:"Linkedin"}]}},Z=function(e){var t=e.state.projectItems.map((function(t){return c.a.createElement(M,{key:t.id,nameOfProject:t.projectName,urlImg:t.srcImgProject,state:e.state,descriptOfProject:t.description})}));return c.a.createElement("div",{id:"projects",className:B.a.projects},c.a.createElement("div",{className:B.a.container},c.a.createElement(h,{titleName:e.state.titleName}),c.a.createElement("div",{className:B.a.projectsContainer},t)))},$=a(18),ee=a.n($),te=function(e){return c.a.createElement("div",{className:ee.a.slogan},c.a.createElement("div",{className:ee.a.container},c.a.createElement(h,{style:{},titleName:e.state.titleName}),c.a.createElement(w,{btn:e.state.button})))},ae=a(11),ne=a.n(ae);var ce=function(e){return c.a.createElement("div",{id:"contacts",className:ne.a.contacts},c.a.createElement("div",{className:ne.a.container},c.a.createElement(h,{titleName:e.state.titleName}),c.a.createElement("form",{className:ne.a.form,action:""},c.a.createElement("input",{className:"formcontrol",type:"text",value:"Name"}),c.a.createElement("input",{className:"formcontrol",type:"text",value:"E-mail"}),c.a.createElement("textarea",{className:"form-control",name:"",id:"",cols:"30",rows:"5",value:"Your message"}),c.a.createElement(w,{btn:e.state.button}))))},oe=a(6),re=a.n(oe),ie=function(e){"url('".concat(T.a,"')");return c.a.createElement("div",{className:re.a.footer},c.a.createElement("div",{className:re.a.container},c.a.createElement(h,{titleName:e.state.titleName}),c.a.createElement("div",{className:re.a.social},c.a.createElement("a",{href:""},c.a.createElement("img",{src:"https://toy-boy.ru/images/vkontakte.png",alt:"VK"})),c.a.createElement("a",{href:""},c.a.createElement("img",{src:"https://zberovski.ru/wp-content/uploads/2018/11/Facebook-logo-icon-vectorcopy-big_copy-1020x1024.png",alt:"FaceBook"})),c.a.createElement("a",{href:""},c.a.createElement("img",{src:"https://www.clipartmax.com/png/full/62-624588_linkedin-help-linkedin-logo-2018-png.png",alt:"Linkedin"}))),c.a.createElement("div",{className:re.a.copyright},e.state.copyrightText)))},le=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"portfolio"},c.a.createElement(u,null),c.a.createElement(k,{state:U.mainBlock}),c.a.createElement(x,{state:U.skillsBlock}),c.a.createElement(Z,{state:U.projectsBlock}),c.a.createElement(te,{state:U.sloganBlock}),c.a.createElement(ce,{state:U.contactBlock}),c.a.createElement(ie,{state:U.footerBlock})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var se=a(13);r.a.render(c.a.createElement(se.a,null,c.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[35,1,2]]]);
//# sourceMappingURL=main.06a24756.chunk.js.map