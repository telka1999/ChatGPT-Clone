import{u as n,o as l,c as a,a as e,b as c}from"./index-83dc066c.js";const i="/assets/5559852-aeaf4aec.jpg",r={class:"flex h-screen"},u=e("div",{class:"absolute top-12 flex items-center gap-1"},[e("h1",{class:"font-semibold text-xl"},[c("Chat"),e("span",{class:"text-blue-600"},"GPT")])],-1),d=e("div",{class:"flex justify-center"},[e("h1",{class:"mt-6 text-4xl font-bold tracking-tight text-gray-900"},"Get Started")],-1),f=e("div",{class:"relative hidden w-0 flex-1 lg:block"},[e("img",{class:"absolute inset-0 h-full w-full object-cover",src:i,alt:""})],-1),m={__name:"AuthView",setup(x){const{loginWithRedirect:t}=n(),s=()=>{t()},o=()=>{t({authorizationParams:{screen_hint:"signup"}})};return(b,p)=>(l(),a("div",r,[e("div",{class:"relative flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24"},[u,e("div",{class:"mx-auto w-full max-w-sm lg:w-96"},[d,e("div",{class:"mt-8"},[e("div",{class:"mt-6 flex gap-4"},[e("button",{onClick:s,type:"button",class:"inline-flex items-center rounded-md border border-transparent bg-blue-600 px-16 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"},"Log in"),e("button",{onClick:o,type:"button",class:"inline-flex items-center rounded-md border border-transparent bg-blue-600 px-16 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"},"Sign up")])])])]),f]))}};export{m as default};