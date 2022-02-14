"use strict";
// ozgaruvchi
let hide = document.getElementById("hide")
let show = document.getElementById("show")
let inputName = document.getElementById("name")
let password = document.getElementById("password")
let username = document.getElementById("username")
let sendBtn = document.getElementById("submit")
let form = document.querySelector(".form")
let infoDelete = document.getElementById('malumot')
// 2-form
let form1 = document.querySelector(".form1")
let password1 = document.getElementById("password1")
let username1 = document.getElementById("username1")
let send2 = document.getElementById("submit1")
// user Data
let dataName = document.getElementById("userDataName")
let dataPass = document.getElementById("userdataPass")
let dataUsername = document.getElementById("userDataUSernaName") 
let userIfoDiv = document.querySelector(".userInformation")
// sanoq uchun o`zgaruvchi
let sanoq = document.getElementById("sanoq")
// Functions



const information = {}
sendBtn.addEventListener("click", ()=>  {
    form.classList.add("hideForm")
    form1.classList.add("hideLogin")
    //local storage
    information.name =inputName.value,
    information.username = username.value,
    information.pass =password.value
    console.log(information)
    const info = JSON.stringify(information);
    localStorage.setItem('userData', info)

    inputName.value = ""
    password.value = ""
    username.value = ""
    // sanoqni ishlatamiz
    let sanash1 = setInterval(sanoq1, 1000)
    let num = 61
    function sanoq1() {
        num --
        sanoq.innerHTML = num
        console.log(num);
        if(num == 0) {
            clearInterval(sanash1)
        }
        if(num == 0 && password1.value == false && username1.value == false) {
            console.log('malumot kiritimladi');
            form.classList.remove("hideForm")
            form1.classList.remove("hideLogin");
            localStorage.clear('userData')
            infoDelete.style.display = 'block'
        }
    } 
})

// show user information
send2.addEventListener("click", ()=> {
    let userDataInformation = localStorage.getItem('userData');
    let objUserData = JSON.parse(userDataInformation);
    // See All data
    if(username1.value == objUserData.username && password1.value == objUserData.pass){
        form1.classList.add("hideForm2")
        form1.classList.remove("hideLogin")
        const infoShow = 'ShowInfo';
        userIfoDiv.classList.add(infoShow)

        // cardga ma'lumot chiqaramiz
        dataName.innerHTML = objUserData.name;
        dataPass.innerHTML = objUserData.pass;
        dataUsername.innerHTML = objUserData.username;
    } else {
        alert("Kiritilgan Ma'lumotlar topilmadi")
    }
})


