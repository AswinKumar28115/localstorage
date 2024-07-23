function fn(){
    let inp=document.getElementById("inp").value;
    localStorage.setItem("login",inp)
    location.reload()
    
}
window.addEventListener("load",()=>{
    const value = localStorage.getItem("login")
    const user = document.getElementById("user");
    user.innerText = value;
})

function fn2(){
    let mail = document.getElementById("email").value
  localStorage.setItem("email",mail)
}