(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2],{8230:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/administrar",function(){return i(3118)}])},2371:function(e,n,i){"use strict";i.d(n,{Z:function(){return d}});var r=i(5893),s=i(9008),t=i.n(s),a=i(6154),l=i(7294),c=i(9004);function o(e){let{pagina:n}=e,[i,s]=(0,l.useState)(!1),[t,o]=(0,l.useState)(""),[d,h]=(0,l.useState)("");function u(e){sessionStorage.clear(),e&&(window.location.href="/")}return(0,l.useEffect)(()=>{document.onkeydown=function(e){"Enter"===e.key&&document.activeElement.click()};let e=sessionStorage.getItem("token");null==e?u():a.Z.get("https://palabras-encadenadas.lemonsky-242d790f.westeurope.azurecontainerapps.io/usuario",{headers:{Authorization:"Bearer ".concat(e)}}).then(e=>{h(e.data.apodo),o(sessionStorage.getItem("rol"))}).catch(e=>{u(!0)})},[]),(0,r.jsxs)(c.wp,{color:"primary",active:i,children:[(0,r.jsxs)(c.wp.Brand,{alignItems:"center",children:[(0,r.jsxs)(c.wp.Item,{className:"title is-5",mb:"0",renderAs:"a",href:"/",textAlign:"center",touch:{textAlign:"left"},children:["palabras con 漢字 ",(0,r.jsx)("br",{}),"encadenadas"]}),(0,r.jsx)(c.wp.Burger,{onClick:()=>s(!i)})]}),(0,r.jsxs)(c.wp.Menu,{alignItems:"stretch",children:[(0,r.jsxs)(c.wp.Container,{children:[(0,r.jsx)(c.wp.Item,{href:"/",children:"Inicio"}),d&&(0,r.jsx)(c.wp.Item,{active:"jugar"==n,href:"/jugar",children:"Jugar"}),"ADMINISTRADOR"==t&&(0,r.jsx)(c.wp.Item,{active:"administrar"==n,href:"/administrar",children:"Administrar"})]}),!d&&(0,r.jsx)(c.wp.Container,{align:"right",children:(0,r.jsxs)(c.wp.Item,{arrowless:!0,href:"#",hoverable:!0,children:[(0,r.jsx)(c.wp.Link,{arrowless:!0,children:"Identif\xedcate"}),(0,r.jsxs)(c.wp.Dropdown,{right:!0,children:[(0,r.jsx)(c.wp.Item,{href:"/cuenta/registro",textColor:"primary",children:(0,r.jsx)("strong",{children:"Registrarse"})}),(0,r.jsx)(c.wp.Divider,{}),(0,r.jsx)(c.wp.Item,{href:"/cuenta/inicio-sesi\xf3n",textColor:"primary",children:"Iniciar sesi\xf3n"})]})]})}),d&&(0,r.jsx)(c.wp.Container,{align:"right",children:(0,r.jsxs)(c.wp.Item,{arrowless:!0,href:"#",hoverable:!0,children:[(0,r.jsx)(c.wp.Link,{arrowless:!0,children:(0,r.jsxs)(c.JO.Text,{children:[(0,r.jsx)(c.JO,{children:(0,r.jsx)("i",{className:"material-symbols-outlined",children:"account_circle"})}),(0,r.jsx)("span",{children:d})]})}),(0,r.jsxs)(c.wp.Dropdown,{right:!0,children:[(0,r.jsx)(c.wp.Item,{href:"/cuenta/configuraci\xf3n",textColor:"primary",children:(0,r.jsxs)(c.JO.Text,{flexWrap:"nowrap",children:[(0,r.jsx)(c.JO,{children:(0,r.jsx)("i",{className:"material-symbols-outlined",children:"manage_accounts"})}),(0,r.jsx)("span",{children:"Configuraci\xf3n"})]})}),(0,r.jsx)(c.wp.Divider,{}),(0,r.jsx)(c.wp.Item,{href:"#",onClick:u,textColor:"primary",children:(0,r.jsx)("strong",{children:"Cerrar sesi\xf3n"})})]})]})})]})]})}function d(e){let{children:n,pagina:i}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t(),{children:(0,r.jsx)("title",{children:"palabras con 漢字 encadenadas"})}),(0,r.jsx)(o,{pagina:i}),(0,r.jsx)("main",{children:n})]})}},7082:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return t}});var r=i(5893),s=i(9004);function t(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.X6,{children:"Error"}),(0,r.jsx)(s.v0,{color:"danger",children:(0,r.jsx)(s.v0.Body,{children:"Acceso denegado."})})]})}},3118:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return o}});var r=i(5893),s=i(6154),t=i(7294),a=i(9004),l=i(2371),c=i(7082);function o(){let[e,n]=(0,t.useState)(403),[i,o]=(0,t.useState)(!1),[h,u]=(0,t.useState)(null),[j,p]=(0,t.useState)(!1),[f,m]=(0,t.useState)("");function g(e,i){{let r=sessionStorage.getItem("token");s.Z.get("https://palabras-encadenadas.lemonsky-242d790f.westeurope.azurecontainerapps.io/listas/usuario/".concat(e),{headers:{Authorization:"Bearer ".concat(r)}}).then(e=>{u(e.data),i&&p(!0)}).catch(e=>{401==e.response.status?(sessionStorage.clear(),window.location.href="/cuenta/inicio-sesi\xf3n"):403==e.response.status&&n(403)})}}function w(e){{let r=sessionStorage.getItem("token");s.Z.delete("https://palabras-encadenadas.lemonsky-242d790f.westeurope.azurecontainerapps.io/usuario/".concat(e),{headers:{Authorization:"Bearer ".concat(r)}}).then(function(){o(!i)}).catch(function(e){401==e.response.status?(sessionStorage.clear(),window.location.href="/cuenta/inicio-sesi\xf3n"):403==e.response.status&&n(403)})}}return(0,t.useEffect)(()=>{let e=sessionStorage.getItem("token");null==e&&(sessionStorage.clear(),window.location.href="/cuenta/inicio-sesi\xf3n"),s.Z.get("https://palabras-encadenadas.lemonsky-242d790f.westeurope.azurecontainerapps.io/usuario/todos",{headers:{Authorization:"Bearer ".concat(e)}}).then(e=>{n(e.data)}).catch(e=>{401==e.response.status?(sessionStorage.clear(),window.location.href="/cuenta/inicio-sesi\xf3n"):403==e.response.status&&n(403)})},[i]),(0,r.jsx)(l.Z,{pagina:"administrar",children:(0,r.jsx)(a.W2,{children:(0,r.jsxs)(a.$0,{children:[403==e&&(0,r.jsx)(c.default,{}),403!=e&&(0,r.jsxs)(t.Fragment,{children:[(0,r.jsx)(a.X6,{children:"Administrar"}),(0,r.jsxs)(a.aC,{children:[(0,r.jsx)(a.aC.Side,{align:"left",children:(0,r.jsx)(a.aC.Item,{children:(0,r.jsxs)(a.aG,{children:[(0,r.jsx)(a.aG.Item,{active:!h,children:(0,r.jsx)("a",{onClick:function(){u(null),p(!1),o(!i)},children:"Usuarios"})}),h&&(0,r.jsx)(a.aG.Item,{active:!j,children:(0,r.jsx)("a",{onClick:function(){p(!1)},children:h.usuario.apodo})}),h&&(0,r.jsx)(a.aG.Item,{active:j,children:(0,r.jsx)("a",{onClick:function(){p(!0)},children:"Listas"})})]})})}),(0,r.jsxs)(a.aC.Side,{align:"right",children:[(0,r.jsx)(a.aC.Item,{children:(0,r.jsx)("form",{onSubmit:function(e){!function(e){e.preventDefault();{let e=sessionStorage.getItem("token");s.Z.get("https://palabras-encadenadas.lemonsky-242d790f.westeurope.azurecontainerapps.io/usuario/".concat(f),{headers:{Authorization:"Bearer ".concat(e)}}).then(e=>{g(e.data.correo),m(""),p(!1)}).catch(e=>{alert(e.response.data.message)})}}(e)},children:(0,r.jsxs)(a.l0.Field,{children:[(0,r.jsx)(a.l0.Label,{children:"Buscar usuario"}),(0,r.jsxs)(a.l0.Field,{kind:"addons",children:[(0,r.jsx)(a.l0.Control,{fullwidth:!0,children:(0,r.jsx)(a.l0.Input,{type:"search",placeholder:"Correo electr\xf3nico",value:f,onChange:function(e){m(e.target.value)},pattern:"\\w+@\\w+",required:!0})}),(0,r.jsx)(a.l0.Control,{children:(0,r.jsx)(a.zx,{children:(0,r.jsx)(a.JO,{children:(0,r.jsx)("i",{className:"material-symbols-outlined",children:"search"})})})})]}),(0,r.jsx)(a.l0.Help,{children:"Introduce el correo electr\xf3nico del usuario a buscar."})]})})}),(0,r.jsx)(a.aC.Item,{children:(0,r.jsx)(a.zx,{onClick:function(){o(!i),h&&g(h.usuario.correo)},children:(0,r.jsxs)(a.JO.Text,{children:[(0,r.jsx)("span",{children:"Actualizar"}),(0,r.jsx)(a.JO,{children:(0,r.jsx)("i",{className:"material-symbols-outlined",children:"refresh"})})]})})})]})]})]}),403!=e&&!h&&(0,r.jsx)(a.xu,{children:(0,r.jsx)(a.iA.Container,{children:(0,r.jsxs)(a.iA,{size:"fullwidth",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Correo electr\xf3nico"}),(0,r.jsx)("th",{children:"Apodo"}),(0,r.jsx)("th",{children:"Fecha de nacimiento"}),(0,r.jsx)("th",{children:"Ver listas"}),(0,r.jsx)("th",{children:"Eliminar usuario"})]})}),e&&(0,r.jsx)(x,{usuarios:e,eliminarUsuario:w,determinarUsuario:g})]})})}),h&&!j&&(0,r.jsx)(a.xu,{children:(0,r.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[(0,r.jsxs)(a.l0.Field,{horizontal:!0,children:[(0,r.jsx)(a.l0.Field.Label,{children:(0,r.jsx)(a.l0.Label,{children:"Apodo"})}),(0,r.jsx)(a.l0.Field.Body,{children:(0,r.jsx)(a.l0.Field,{children:(0,r.jsx)(a.l0.Control,{children:(0,r.jsx)(a.l0.Input,{type:"text",disabled:!0,value:h.usuario.apodo})})})})]}),(0,r.jsxs)(a.l0.Field,{horizontal:!0,children:[(0,r.jsx)(a.l0.Field.Label,{children:(0,r.jsx)(a.l0.Label,{children:"Correo electr\xf3nico"})}),(0,r.jsx)(a.l0.Field.Body,{children:(0,r.jsx)(a.l0.Field,{children:(0,r.jsx)(a.l0.Control,{children:(0,r.jsx)(a.l0.Input,{type:"text",disabled:!0,value:h.usuario.correo})})})})]}),(0,r.jsxs)(a.l0.Field,{horizontal:!0,children:[(0,r.jsx)(a.l0.Field.Label,{children:(0,r.jsx)(a.l0.Label,{children:"Fecha de nacimiento"})}),(0,r.jsx)(a.l0.Field.Body,{children:(0,r.jsx)(a.l0.Field,{children:(0,r.jsx)(a.l0.Control,{children:(0,r.jsx)(a.l0.Input,{type:"date",disabled:!0,value:h.usuario.fechaNacimiento})})})})]}),(0,r.jsxs)(a.l0.Field,{horizontal:!0,children:[(0,r.jsx)(a.l0.Field.Label,{}),(0,r.jsx)(a.l0.Field.Body,{children:(0,r.jsx)(a.l0.Control,{children:(0,r.jsx)(a.zx,{type:"button",color:"danger",outlined:!0,onClick:function(){w(h.usuario.correo),u(null),p(!1)},children:(0,r.jsxs)(a.JO.Text,{children:[(0,r.jsx)(a.JO,{children:(0,r.jsx)("i",{className:"material-symbols-outlined",children:"delete"})}),(0,r.jsx)("span",{children:"Eliminar usuario"})]})})})})]})]})}),h&&j&&(0,r.jsxs)(a.xu,{children:[h.listas.length>0&&(0,r.jsx)(a.iA,{size:"fullwidth",children:(0,r.jsx)(d,{listas:h.listas,eliminarLista:function(e){{let n=sessionStorage.getItem("token");s.Z.delete("https://palabras-encadenadas.lemonsky-242d790f.westeurope.azurecontainerapps.io/listas/".concat(e),{headers:{Authorization:"Bearer ".concat(n)}}).then(function(e){g(h.usuario.correo,!0)}).catch(function(e){})}}})}),0==h.listas.length&&(0,r.jsx)(a.v0,{color:"warning",children:(0,r.jsx)(a.v0.Body,{children:"Este usuario no tiene listas."})})]})]})})})}function d(e){let{listas:n,eliminarLista:i}=e,s=[];return n.forEach(e=>{s.push((0,r.jsx)(h,{id:e.id,palabras:e.palabras,eliminarLista:i},e.id))}),(0,r.jsx)("tbody",{children:s})}function h(e){let{id:n,palabras:i,eliminarLista:s}=e,t=[];return i.forEach((e,n)=>{t.push((0,r.jsx)(u,{index:n,palabra:e,longitudLista:i.length},n))}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[t,0==t.length&&(0,r.jsx)(a.Vp,{color:"warning",children:"Lista vac\xeda"})]}),(0,r.jsx)("td",{children:(0,r.jsx)("a",{onClick:function(){s(n)},children:(0,r.jsx)(a.JO,{pull:"right",children:(0,r.jsx)("i",{className:"material-symbols-outlined",children:"delete"})})})})]})}function u(e){let{index:n,palabra:i,longitudLista:s}=e;return(0,r.jsxs)(r.Fragment,{children:[i,n!=s-1&&"・"]})}function x(e){let{usuarios:n,eliminarUsuario:i,determinarUsuario:s}=e,t=[];return n.forEach(e=>{t.push((0,r.jsx)(j,{usuario:e,eliminarUsuario:i,determinarUsuario:s},e.correo))}),(0,r.jsx)("tbody",{children:t})}function j(e){let{usuario:n,eliminarUsuario:i,determinarUsuario:s}=e,t=n.fechaNacimiento.slice(0,4),l=n.fechaNacimiento.slice(5,7),c=n.fechaNacimiento.slice(8);return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{title:"Ver usuario",onClick:function(){s(n.correo)},children:n.correo})}),(0,r.jsx)("td",{children:(0,r.jsx)("a",{title:"Ver usuario",onClick:function(){s(n.correo)},children:n.apodo})}),(0,r.jsx)("td",{children:(0,r.jsx)("a",{title:"Ver usuario",onClick:function(){s(n.correo)},children:c+"/"+l+"/"+t})}),(0,r.jsx)("td",{children:(0,r.jsx)("a",{title:"Ver listas",onClick:function(){s(n.correo,!0)},children:(0,r.jsxs)(a.JO.Text,{children:[(0,r.jsx)(a.JO,{children:(0,r.jsx)("i",{className:"material-symbols-outlined",children:"visibility"})}),(0,r.jsx)("span",{children:"Listas"})]})})}),(0,r.jsx)("td",{children:(0,r.jsx)("a",{title:"Eliminar usuario",onClick:function(){i(n.correo)},children:(0,r.jsx)(a.JO,{color:"danger",children:(0,r.jsx)("i",{className:"material-symbols-outlined",children:"delete"})})})})]})}}},function(e){e.O(0,[4,237,774,888,179],function(){return e(e.s=8230)}),_N_E=e.O()}]);