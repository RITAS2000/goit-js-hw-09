import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const e={email:"",message:""},a=document.querySelector(".feedback-form"),s="feedback-form-state",l=localStorage.getItem(s);l&&(Object.assign(e,JSON.parse(l)),a.email.value=e.email||"",a.message.value=e.message||"");a.addEventListener("input",t=>{e[t.target.name]=t.target.value.trim(),localStorage.setItem(s,JSON.stringify(e))});a.addEventListener("submit",t=>{if(e.email===""||e.message===""){alert("Fill please all fields");return}t.preventDefault(),console.log(e),e={email:"",message:""},localStorage.removeItem(s),a.reset()});
//# sourceMappingURL=2-form.js.map
