import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const e={email:"",message:""},a=document.querySelector(".feedback-form"),l="feedback-form-state",s=localStorage.getItem(l);s&&(Object.assign(e,JSON.parse(s)),a.email.value=e.email||"",a.message.value=e.message||"");a.addEventListener("input",t=>{e[t.target.name]=t.target.value.trim(),localStorage.setItem(l,JSON.stringify(e))});a.addEventListener("submit",t=>{if(e.email===""||e.message===""){alert("Fill please all fields");return}t.preventDefault(),console.log(e),localStorage.removeItem(l),a.reset()});
//# sourceMappingURL=2-form.js.map
