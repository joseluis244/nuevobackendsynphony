(this.webpackJsonpsymphonyadinistracion=this.webpackJsonpsymphonyadinistracion||[]).push([[0],{106:function(e,t,a){e.exports=a.p+"static/media/edit-black-48dp.a2198ba1.svg"},118:function(e,t,a){e.exports=a(245)},123:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){},145:function(e,t,a){},240:function(e,t,a){},242:function(e,t,a){},243:function(e,t,a){},244:function(e,t,a){},245:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(9),c=a.n(r),o=(a(123),a(8)),l=(a(124),a(125),a(273)),s=a(277),u=a(278),m=a(98),d=a.n(m),f=a(29),E=a.n(f);var v={PostFile:function(e,t){return new Promise((function(a,n){E.a.post("./".concat(e),t).then((function(e){200===e.status?a(e.data):n(e.status)})).catch((function(e){n(e)}))}))},GetData:function(e,t){return void 0===t&&(t={}),new Promise((function(a,n){E.a.get("".concat(e),t).then((function(e){a(e.data)})).catch((function(e){n(e)}))}))},PutData:function(e,t){return new Promise((function(a,n){E.a.put(e,t).then((function(e){a(e.data)}))}))},DelData:function(e,t){return new Promise((function(a,n){E.a.delete("".concat(e,"/").concat(t._id)).then((function(e){a(e.data)}))}))},DelData2:function(e,t){return new Promise((function(a,n){E.a.delete("".concat(e,"/").concat(t)).then((function(e){a(e.data)}))}))},PostData:function(e,t){return new Promise((function(a,n){E.a.post(e,t).then((function(e){a(e.data)}))}))}};var h={Authenticar:function(e){return new Promise((function(t,a){(function(e){return new Promise((function(t,a){var n=new FileReader;n.onload=function(e){t(e.target.result)},n.readAsText(e)}))})(e).then((function(e){v.PostFile("keyload",{key:e}).then((function(a){a.err?(document.getElementById("keyinput").value="",alert("Llave no valida"),t(!1)):(window.localStorage.setItem("AdminUser",JSON.stringify(a.user)),window.localStorage.setItem("KeyMed",e),t(!0))}))}))}))}};var g=function(e){var t=Object(n.useState)(null),a=Object(o.a)(t,2),r=a[0],c=a[1];return i.a.createElement("div",{id:"Login"},i.a.createElement(l.a,{className:"Contenedor"},i.a.createElement("div",{className:"Login1"},i.a.createElement("img",{src:d.a,alt:"logo",width:200})),i.a.createElement("div",{className:"Login2"},"Cargar la Llave"),i.a.createElement("div",{className:"Login3"},i.a.createElement(s.a,{type:"file",onChange:function(e){c(e.target.files[0])},inputProps:{accept:".key"},id:"keyinput"})),i.a.createElement("div",{className:"Login4"},i.a.createElement(u.a,{variant:"contained",color:"secondary",onClick:function(){h.Authenticar(r).then((function(t){t?e.OnLogin():c(null)}))}},"Cargar"))))};var O={IsLogin:function(){return new Promise((function(e,t){var a=window.localStorage.getItem("KeyMed");null!==a?v.PostFile("keyload",{key:a}).then((function(t){t.err?e({key:!1,activo:!1}):(window.localStorage.setItem("AdminUser",JSON.stringify(t.user)),e({key:!0,activo:!0}))})).catch((function(e){alert("Falla en la comunucacion con el servidor")})):e({key:!1,activo:!1})}))}},b=a(111),C=a(281),D=(a(145),a(19)),N=a(38),p=a.n(N);var w={cargardashboard:function(){return new Promise((function(e,t){v.GetData("./Dashboard").then((function(t){e({err:!1,data:t})}))}))},xlsx:function(){return new Promise((function(e,t){v.GetData("./Dashboardxlsx",{responseType:"blob"}).then((function(t){var a=window.URL.createObjectURL(t),n=document.createElement("a");n.href=a,n.setAttribute("download","".concat(p()().format("YYYYMMDD"),".xlsx")),n.click(),e({err:!1,data:null})})).catch((function(e){t({err:!0,data:e})}))}))}},A=a(33),j=a(34),I=["#2364AA","#73BFB8","#EA7317","#3DA5D9","#FEC601"],y=["#8CB369","#F4A259","#BC4B51","#F4E285","#5B8E7D"],L=function(){function e(){Object(A.a)(this,e),this.cantidadEstudios=0,this.usodisco=new S,this.cantidaddia=new k(I),this.cantidadmes=new k(I),this.cantidaddiaEq=new k(y),this.cantidadmesEq=new k(y),this.estudios24=[]}return Object(j.a)(e,[{key:"Datos",value:function(){return{cantidadEstudios:this.cantidadEstudios,usodisco:this.usodisco,cantidaddia:this.cantidaddia.verdatos(),cantidadmes:this.cantidadmes.verdatos(),cantidaddiaEq:this.cantidaddiaEq.verdatos(),cantidadmesEq:this.cantidadmesEq.verdatos(),estudios24:this.estudios24}}}]),e}(),k=function(){function e(t){Object(A.a)(this,e),this.labels=[],this.datasets=[{data:[],backgroundColor:t}]}return Object(j.a)(e,[{key:"verdatos",value:function(){return{labels:this.labels,datasets:this.datasets}}}]),e}(),S=function(){function e(){Object(A.a)(this,e),this.labels=["libre","usado"],this.datasets=[{data:[100,0],backgroundColor:["#008148","#CC2936"]}]}return Object(j.a)(e,[{key:"verdatos",value:function(){return{labels:this.labels,datasets:this.datasets}}}]),e}(),R=new L,T=a(35),P=a(100),F=a.n(P),x=a(279);a(240);var B=function(e){return i.a.createElement("h5",{style:{marginLeft:"5px"}},e.titulo)},M=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1];return a?i.a.createElement("div",{className:"toolbar2L"}):i.a.createElement("div",{className:"toolbar2",onClick:function(){r(!0),w.xlsx().then((function(){r(!1)}))}},i.a.createElement(x.a,null,i.a.createElement(F.a,{fontSize:"large"})))},U=function(){var e=Object(n.useState)(R.Datos()),t=Object(o.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){return w.cargardashboard().then((function(e){var t=e.data;r(Object(D.a)({},t))})),function(){}}),[]),i.a.createElement("div",{id:"Dashboard"},i.a.createElement("div",{className:"toolbar"},i.a.createElement("div",{className:"toolbar1"},"Dasboard"),i.a.createElement(M,null)),i.a.createElement("div",{className:"data"},i.a.createElement("div",{className:"Rows"},i.a.createElement("div",{style:{display:"flex",alignItems:"center",fontWeight:"bold",fontSize:"25px"}},"Total de estudios:",a.cantidadEstudios),i.a.createElement("div",null,i.a.createElement(B,{titulo:"espacio de disco"}),i.a.createElement(T.Pie,{data:a.usodisco}))),i.a.createElement("div",{className:"Rows"},i.a.createElement("div",null,i.a.createElement(B,{titulo:"estudios Dia"}),i.a.createElement(T.Doughnut,{data:a.cantidaddia})),i.a.createElement("div",null,i.a.createElement(B,{titulo:"estudios Dia(Equipos)"}),i.a.createElement(T.Doughnut,{data:a.cantidaddiaEq}))),i.a.createElement("div",{className:"Rows"},i.a.createElement("div",null,i.a.createElement(B,{titulo:"estudios mes"}),i.a.createElement(T.Doughnut,{data:a.cantidadmes})),i.a.createElement("div",null,i.a.createElement(B,{titulo:"estudios mes(Equipos)"}),i.a.createElement(T.Doughnut,{data:a.cantidadmesEq})))))};var G={cargardifucion:function(){return new Promise((function(e,t){v.GetData("./Difucion").then((function(t){e({err:!1,data:t})}))}))},ActualizarDifucion:function(e){return new Promise((function(t,a){v.PutData("./Difucion",e).then((function(e){t(e)}))}))},AgregarDifucion:function(e){return new Promise((function(t,a){!function(e){for(var t,a=Object.keys(e),n=0;n<a.length;n++){var i=a[n];if("correo"===i){if(!((t=e[i]).split("@").length>1&&t.split("@")[1].split(".").length>1))return!1;if(""===e[i])return!1}}return!0}(e)?t({err:!0,data:"Datos Incopletos"}):v.PostData("./Difucion",e).then((function(e){t({err:!1,data:e})}))}))},BorrarDifucion:function(e){return new Promise((function(t,a){v.DelData2("./Difucion",e._id).then((function(e){t(e)}))}))}},Y=a(102),q=a.n(Y),W=a(282),J=a(280),z=a(101),H=a.n(z);a(242);var _=function(e){var t=Object(n.useState)({listo:!1,items:[]}),a=Object(o.a)(t,2),r=a[0],c=a[1],l=r.listo?r.items.length>0?i.a.createElement($,Object.assign({items:r.items},e)):i.a.createElement(X,null):i.a.createElement(K,null);return Object(n.useEffect)((function(){return G.cargardifucion().then((function(e){e.err||c({listo:!0,items:e.data})})),function(){}}),[]),i.a.createElement("div",{className:"Lista"},i.a.createElement("div",{className:"Contenedor"},l),i.a.createElement(J.a,{className:"FabIcono",color:"secondary","aria-label":"edit",onClick:e.AgregarDifucion},i.a.createElement(H.a,null)))},K=function(){return i.a.createElement("div",null,"Cargando....")},X=function(){return i.a.createElement("div",null,"No existen registros....")},$=function(e){for(var t=e.items,a=[],n=0;n<t.length;n++){var r=t[n];a.push(i.a.createElement(Q,Object.assign({key:n,item:r},e)))}return i.a.createElement("ul",{className:"ListaDificion"},a)},Q=function(e){return i.a.createElement("li",{className:"ItemLista"},i.a.createElement("div",{className:"ItemDatos"},i.a.createElement("div",{className:"ItemDatos1"},e.item.nombre),i.a.createElement("div",{className:"ItemDatos2"},e.item.area)),i.a.createElement("div",{className:"Itemicon"},i.a.createElement(x.a,{edge:"end","aria-label":"Editar",onClick:function(){e.EditarDifucion(e.item)}},i.a.createElement(q.a,null))))},V=function(e){var t=Object(n.useState)({nombre:"",area:"",correo:"",prefijo:"",telefono:""}),a=Object(o.a)(t,2),r=a[0],c=a[1],l=function(e){var t=r;t[e.target.name]=e.target.value,c(Object(D.a)({},t))};return i.a.createElement("div",{className:"Agregar"},i.a.createElement("div",{className:"AgregarInps"},i.a.createElement(Z,{onChange:l,value:r.nombre,name:"nombre",label:"nombre"}),i.a.createElement(Z,{onChange:l,value:r.area,name:"area",label:"area"}),i.a.createElement(Z,{onChange:l,value:r.correo,name:"correo",label:"correo"}),i.a.createElement(Z,{onChange:l,value:r.prefijo,name:"prefijo",label:"prefijo"}),i.a.createElement(Z,{onChange:l,value:r.telefono,name:"telefono",label:"telefono"})),i.a.createElement("div",{className:"AgregarBtns"},i.a.createElement(u.a,{className:"AddBtn",color:"primary",onClick:function(){G.AgregarDifucion(r).then((function(t){t.err?alert(t.data):e.ListaDifucion()}))}},"Agregar"),i.a.createElement(u.a,{className:"CancelBtn",color:"secondary",onClick:e.ListaDifucion},"Cancelar")))},Z=function(e){return i.a.createElement("div",{className:"InputItem"},i.a.createElement(W.a,Object.assign({},e,{className:"InputCustom"})))},ee=function(e){var t=Object(n.useState)(e.itemupdate),a=Object(o.a)(t,2),r=a[0],c=a[1],l=function(e){var t=r;t[e.target.name]=e.target.value,c(Object(D.a)({},t))};return i.a.createElement("div",{className:"Agregar"},i.a.createElement("div",{className:"AgregarInps"},i.a.createElement(Z,{onChange:l,value:r.nombre,name:"nombre",label:"nombre"}),i.a.createElement(Z,{onChange:l,value:r.area,name:"area",label:"area"}),i.a.createElement(Z,{onChange:l,value:r.correo,name:"correo",label:"correo"}),i.a.createElement(Z,{onChange:l,value:r.prefijo,name:"prefijo",label:"prefijo"}),i.a.createElement(Z,{onChange:l,value:r.telefono,name:"telefono",label:"telefono"})),i.a.createElement("div",{className:"AgregarBtns"},i.a.createElement(u.a,{className:"AddBtn",color:"primary",onClick:function(){G.AgregarDifucion(r)}},"Actualizar"),i.a.createElement(u.a,{className:"CancelBtn",color:"secondary",onClick:function(){G.BorrarDifucion(r).then((function(){e.ListaDifucion()}))}},"Borrar"),i.a.createElement(u.a,{className:"CancelBtn",color:"secondary",onClick:e.ListaDifucion},"Cancelar")))},te=function(){var e,t=Object(n.useState)(0),a=Object(o.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)({}),s=Object(o.a)(l,2),u=s[0],m=s[1],d=function(){c(0)};switch(r){case 0:e=i.a.createElement(_,{AgregarDifucion:function(){c(1)},EditarDifucion:function(e){m(Object(D.a)({},e)),c(2)}});break;case 1:e=i.a.createElement(V,{ListaDifucion:d});break;case 2:e=i.a.createElement(ee,{ListaDifucion:d,itemupdate:u});break;default:e=i.a.createElement(_,null)}return i.a.createElement("div",{id:"Difucion"},i.a.createElement("div",{className:"Cabeza"},"Difucion"),i.a.createElement("div",{className:"Componente"},e))};var ae={cargarestudios:function(){return new Promise((function(e,t){v.GetData("./estudios").then((function(t){e({err:!1,data:t})}))}))},eliminarestudio:function(e){return new Promise((function(t,a){v.DelData2("./estudios",e.EST_UID).then((function(e){t(e)}))}))}},ne=a(103),ie=a.n(ne),re=a(104),ce=a.n(re),oe=a(105),le=a.n(oe);a(243);var se=function(){return i.a.createElement("div",null,"Cargando.....")},ue=function(){return i.a.createElement("div",null,"No existen registros.....")},me=function(e){for(var t=e.estudios,a=[],n=t.length-1;n>0;n--){var r=t[n];a.push(i.a.createElement(de,Object.assign({},e,{key:n,item:r})))}return i.a.createElement("ul",{className:"Lista"},a)};var de=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(null),s=Object(o.a)(l,2),u=s[0],m=s[1],d=r?i.a.createElement(Ee,{CancelarEliminacion:function(){clearTimeout(u),c(!1)},EliminarEstudio:function(){clearTimeout(u),c(!1),ae.eliminarestudio(e.item).then((function(){e.reloadlist()}))}}):i.a.createElement(fe,{onBorrar:function(){m(setTimeout((function(){c(!1)}),2e4)),c(!0)}});return i.a.createElement("li",{className:"ItemLista"},i.a.createElement("div",{className:"ItemLista1"},i.a.createElement("div",{className:"ItemLista11"},i.a.createElement("div",{className:"ItemLista111"},e.item.NOMBRE),i.a.createElement("div",{className:"ItemLista112"},p()(e.item.FECHA,"YYYYMMDD").format("DD/MM/YYYY"))),i.a.createElement("div",null,function(e){var t;switch(e){case"CT":t="Tomografia";break;case"MR":t="Resonancia";break;case"CR":case"DX":t="Rayos X";break;case"US":t="Ecografia";break;default:t="DICOM"}return t}(e.item.SERIES[0].MODALIDAD))),i.a.createElement("div",{className:"ItemLista2"},d))},fe=function(e){return i.a.createElement(x.a,{edge:"end","aria-label":"delete",onClick:e.onBorrar},i.a.createElement(ie.a,null))},Ee=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(x.a,{edge:"end","aria-label":"delete",onClick:e.EliminarEstudio},i.a.createElement(ce.a,null)),i.a.createElement(x.a,{edge:"end","aria-label":"delete",onClick:e.CancelarEliminacion},i.a.createElement(le.a,null)))},ve=function(){var e,t=Object(n.useState)({listo:!1,estudios:[]}),a=Object(o.a)(t,2),r=a[0],c=a[1];return e=r.listo?r.estudios.length>0?i.a.createElement(me,{reloadlist:function(){c({listo:!1,estudios:[]}),ae.cargarestudios().then((function(e){c({listo:!0,estudios:e.data})}))},estudios:r.estudios}):i.a.createElement(ue,null):i.a.createElement(se,null),Object(n.useEffect)((function(){return ae.cargarestudios().then((function(e){c({listo:!0,estudios:e.data})})),function(){}}),[]),i.a.createElement("div",{id:"Estudios"},i.a.createElement("h3",null,"Estudios"),i.a.createElement("div",{className:"Contenedor"},e))},he=function(){function e(){Object(A.a)(this,e),this.DATOS={NOMBRE:"",APELLIDO:"",PREFIJO:"",TELEFONO:"",CORREO:""},this.LOGIN={USUARIO:"",PASSWORD:"Medicaltec2020"},this.CONFIGURACION={LISTABLE:!0,RESTRINGIDO:!1,TIPO:"admin",ESTADO:"activo",FECHACREACION:new Date,ULTIMOACCESO:new Date},this.LISTA=[]}return Object(j.a)(e,[{key:"agregardatos",value:function(e,t){this.DATOS[e]=t}},{key:"json",value:function(){return{DATOS:this.DATOS,LOGIN:this.LOGIN,CONFIGURACION:this.CONFIGURACION,LISTA:this.LISTA}}}]),e}();var ge={CargarLista:function(){return new Promise((function(e,t){v.GetData("./listausuarios").then((function(t){e(t)})).catch((function(e){t(e)}))}))},updateuser:function(e){return new Promise((function(t,a){v.PutData("./actualizarusuario",e).then((function(e){t(e)}))}))},validardatos:function(e){if(e.LOGIN.USUARIO.split("@").length<2)return!1;for(var t=Object.keys(e.DATOS),a=0;a<t.length;a++){var n=t[a];if(""===e.DATOS[n])return!1}return!0},crearusuario:function(e){return new Promise((function(t,a){v.PutData("./crearusuario",e).then((function(e){t(e)}))}))},borrarusuario:function(e){return new Promise((function(t,a){v.DelData("./actualizarusuario",e).then((function(e){t(e)}))}))}},Oe=a(106),be=a.n(Oe);a(244);var Ce=function(e){for(var t=e.Lista.lista,a=[],n=0;n<t.length;n++){var r=t[n];a.push(i.a.createElement(De,Object.assign({key:n},e,{usuario:r})))}return i.a.createElement("div",{className:"Main"},i.a.createElement("div",null,i.a.createElement("h3",null,"Usaurios")),i.a.createElement("div",{className:"Main1"},i.a.createElement(u.a,{variant:"contained",color:"secondary",onClick:e.OnCreate},"Agregar Usuario")),i.a.createElement("div",{className:"Main2"},e.Lista.listo?a:"Cargando..."))},De=function(e){var t=e.usuario;return i.a.createElement("div",{className:"ItemLista"},i.a.createElement("div",{className:"ItemLista1"},"".concat(t.DATOS.NOMBRE," ").concat(t.DATOS.APELLIDO)),i.a.createElement("div",{className:"ItemLista2",onClick:function(){e.OnEdit(t)}},i.a.createElement(x.a,{edge:"end","aria-label":"delete"},i.a.createElement("img",{src:be.a,alt:"icon",width:25}))))},Ne=function(e){var t=Object(n.useState)(e.usuario),a=Object(o.a)(t,2),r=a[0],c=a[1],l=function(e){var t=r;t.DATOS[e.target.name]=e.target.value,c(Object(D.a)({},t))};return i.a.createElement("div",{className:"Editar"},i.a.createElement("h3",null,"Editar"),i.a.createElement("div",{className:"Contenedor"},i.a.createElement("div",{className:"InputCont"},i.a.createElement(W.a,{onChange:l,value:r.DATOS.NOMBRE,name:"NOMBRE",label:"Nombres",style:{width:"100%"}})),i.a.createElement("div",{className:"InputCont"},i.a.createElement(W.a,{onChange:l,value:r.DATOS.APELLIDO,name:"APELLIDO",label:"Apellidos",style:{width:"100%"}})),i.a.createElement("div",{className:"InputCont"},i.a.createElement(W.a,{onChange:l,value:r.DATOS.PREFIJO,name:"PREFIJO",label:"Prefijo",style:{width:"100%"}})),i.a.createElement("div",{className:"InputCont"},i.a.createElement(W.a,{onChange:l,value:r.DATOS.TELEFONO,name:"TELEFONO",label:"Telefono",style:{width:"100%"}})),i.a.createElement("div",{className:"InputCont"},i.a.createElement(W.a,{onChange:l,value:r.DATOS.CORREO,name:"CORREO",label:"Correo",style:{width:"100%"}}))),i.a.createElement("div",{style:{marginTop:"20px",marginLeft:"15px"}},i.a.createElement(u.a,{variant:"contained",color:"primary",onClick:function(){ge.updateuser(r).then((function(t){t.err||e.OnFinish()}))},style:{marginRight:"15px"}},"Editar"),i.a.createElement(u.a,{variant:"contained",color:"secondary",onClick:function(){ge.borrarusuario(r).then((function(t){t.err||e.OnFinish()}))},style:{marginRight:"15px"}},"Borrar"),i.a.createElement(u.a,{variant:"contained",color:"secondary",onClick:e.OnFinish},"Cancelar")))},pe=function(e){var t=Object(n.useState)((new he).json()),a=Object(o.a)(t,2),r=a[0],c=a[1],l=function(e){r.DATOS[e.target.name]=e.target.value,"CORREO"===e.target.name&&(r.LOGIN.USUARIO=e.target.value),c(Object(D.a)({},r))};return i.a.createElement("div",{className:"Crear"},i.a.createElement("h3",null,"Crear usuarios"),i.a.createElement("div",{className:"Contenedor"},i.a.createElement("div",{className:"InputCont"},i.a.createElement(W.a,{onChange:l,value:r.DATOS.NOMBRE,name:"NOMBRE",label:"Nombres",style:{width:"100%"}})),i.a.createElement("div",{className:"InputCont"},i.a.createElement(W.a,{onChange:l,value:r.DATOS.APELLIDO,name:"APELLIDO",label:"Apellidos",style:{width:"100%"}})),i.a.createElement("div",{className:"InputCont"},i.a.createElement(W.a,{onChange:l,value:r.DATOS.PREFIJO,name:"PREFIJO",label:"Prefijo",style:{width:"100%"}})),i.a.createElement("div",{className:"InputCont"},i.a.createElement(W.a,{onChange:l,value:r.DATOS.TELEFONO,name:"TELEFONO",label:"Telefono",style:{width:"100%"}})),i.a.createElement("div",{className:"InputCont"},i.a.createElement(W.a,{onChange:l,value:r.DATOS.CORREO,name:"CORREO",label:"Correo",style:{width:"100%"}}))),i.a.createElement("div",{style:{marginTop:"20px",marginLeft:"15px"}},i.a.createElement(u.a,{variant:"contained",color:"primary",onClick:function(){ge.validardatos(r)?ge.crearusuario(r).then((function(t){t.err||e.OnFinish()})):console.log("mal")},style:{marginRight:"15px"}},"Crear"),i.a.createElement(u.a,{variant:"contained",color:"secondary",onClick:e.OnFinish},"Cancelar")))},we=function(){var e=Object(n.useState)({listo:!1,lista:[]}),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)({}),l=Object(o.a)(c,2),s=l[0],u=l[1],m=Object(n.useState)(0),d=Object(o.a)(m,2),f=d[0],E=d[1],v=function(){ge.CargarLista().then((function(e){r({listo:!0,lista:e})})),E(0)},h=[i.a.createElement(Ce,{OnCreate:function(){setTimeout((function(){E(2)}),250)},OnEdit:function(e){u(e),setTimeout((function(){E(1)}),250)},Lista:a}),i.a.createElement(Ne,{OnFinish:v,usuario:s}),i.a.createElement(pe,{OnFinish:v})];return Object(n.useEffect)((function(){return console.log("efecto"),ge.CargarLista().then((function(e){r({listo:!0,lista:e})})),function(){}}),[]),i.a.createElement("div",{id:"Usuarios"},h[f])},Ae=a(107),je=a.n(Ae),Ie=a(108),ye=a.n(Ie),Le=a(109),ke=a.n(Le),Se=a(110),Re=a.n(Se);var Te=function(e){return i.a.createElement("div",{className:"btn",onClick:function(){e.onClick(e.index)}},i.a.createElement(x.a,{"aria-label":"delete"},e.lab))},Pe=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),a=t[0],r=t[1],c=[i.a.createElement(U,null),i.a.createElement(we,null),i.a.createElement(te,null),i.a.createElement(ve,null)],l=function(e){r(e)};return Object(n.useEffect)((function(){return console.log("install pront"),function(){}}),[]),i.a.createElement("div",{id:"Home"},i.a.createElement("div",{className:"HomeCont1"},i.a.createElement(Te,{onClick:l,index:0,lab:i.a.createElement(je.a,{style:{color:"white"}})}),i.a.createElement(Te,{onClick:l,index:1,lab:i.a.createElement(ye.a,{style:{color:"white"}})}),i.a.createElement(Te,{onClick:l,index:2,lab:i.a.createElement(ke.a,{style:{color:"white"}})}),i.a.createElement(Te,{onClick:l,index:3,lab:i.a.createElement(Re.a,{style:{color:"white"}})})),i.a.createElement("div",{className:"HomeCont2"},c[a]))},Fe=Object(b.a)({palette:{primary:{main:"#014461"},secondary:{main:"#c63d2d"}}});var xe=function(){var e,t=Object(n.useState)({listo:!1,activo:!1}),a=Object(o.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){return O.IsLogin().then((function(e){c({listo:!0,activo:e.activo})})),function(){}}),[]),e=r.listo?r.activo?i.a.createElement(Pe,null):i.a.createElement(g,{OnLogin:function(){c({listo:!0,activo:!0})}}):"cargando",i.a.createElement(C.a,{theme:Fe},i.a.createElement("div",{className:"App"},e))},Be=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Me(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(xe,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");Be?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Me(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Me(t,e)}))}}()},98:function(e,t,a){e.exports=a.p+"static/media/logomedicaltec.b89e164d.svg"}},[[118,1,2]]]);
//# sourceMappingURL=main.4609e842.chunk.js.map