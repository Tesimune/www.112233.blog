import{W as c,r as p,j as e,a as f,d as g}from"./app-qZ_Nk01U.js";import{G as x}from"./GuestLayout-JfcFEfoP.js";import{T as o,I as i}from"./TextInput-gxJ71uhY.js";import{I as n}from"./InputLabel-vAjFhox2.js";import{P as w}from"./PrimaryButton-5iubqwSx.js";import{F as j}from"./index-FXArapoh.js";function _(){const{data:a,setData:r,post:m,processing:l,errors:t,reset:d}=c({name:"",email:"",password:"",password_confirmation:""});p.useEffect(()=>()=>{d("password","password_confirmation")},[]);const u=s=>{s.preventDefault(),m(route("register"))};return e.jsxs(x,{children:[e.jsx(f,{title:"Register"}),e.jsxs("form",{onSubmit:u,children:[e.jsxs("div",{children:[e.jsx(n,{htmlFor:"name",value:"Name"}),e.jsx(o,{id:"name",name:"name",value:a.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,onChange:s=>r("name",s.target.value),required:!0}),e.jsx(i,{message:t.name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(n,{htmlFor:"email",value:"Email"}),e.jsx(o,{id:"email",type:"email",name:"email",value:a.email,className:"mt-1 block w-full",autoComplete:"username",onChange:s=>r("email",s.target.value),required:!0}),e.jsx(i,{message:t.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(n,{htmlFor:"password",value:"Password"}),e.jsx(o,{id:"password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full",autoComplete:"new-password",onChange:s=>r("password",s.target.value),required:!0}),e.jsx(i,{message:t.password,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(n,{htmlFor:"password_confirmation",value:"Confirm Password"}),e.jsx(o,{id:"password_confirmation",type:"password",name:"password_confirmation",value:a.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:s=>r("password_confirmation",s.target.value),required:!0}),e.jsx(i,{message:t.password_confirmation,className:"mt-2"})]}),e.jsxs("div",{className:"flex items-center justify-end mt-4",children:[e.jsx(g,{href:route("login"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Already registered?"}),e.jsx(w,{className:"ms-4",disabled:l,children:"Register"}),e.jsxs("a",{href:route("oauth.redirect"),className:"inline-flex items-center gap-2 ms-4 px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150",children:[e.jsx("span",{children:"Continue with"}),e.jsx(j,{className:"h-5 w-5 p-1 border rounded-full"})]})]})]})]})}export{_ as default};
