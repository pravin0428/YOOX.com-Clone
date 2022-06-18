document.querySelector("#facebook-button").addEventListener("click",toFacebook);
function toFacebook(){
    window.open("https://www.facebook.com/login.php?skip_api_login=1&api_key=225447960817285&kid_directed_site=0&app_id=225447960817285&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv5.0%2Fdialog%2Foauth%3Fclient_id%3D225447960817285%26scope%3Dpublic_profile%252Cemail%252Cuser_birthday%252Cuser_age_range%26redirect_uri%3Dhttps%253A%252F%252Fwww.yoox.com%252Fmyoox%252Flogin%252FExternalLoginCallback%26state%3D__provider__%253Dfacebook%2526__sid__%253D3ebbc19255094cd7ae86bae48bf30b06%26display%3Dpopup%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Ddb739e6e-046e-4cb3-96b7-f09c874a1068%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.yoox.com%2Fmyoox%2Flogin%2FExternalLoginCallback%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D__provider__%253Dfacebook%2526__sid__%253D3ebbc19255094cd7ae86bae48bf30b06%23_%3D_&display=popup&locale=en_GB&pl_dbl=0");
}

document.querySelector("#google-button").addEventListener("click",toGoogle);
function toGoogle(){
    window.open("https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?response_type=code&client_id=892880188578-vsebmgf7bat13cgbmk5rv1tn517srbfh.apps.googleusercontent.com&scope=profile%20openid%20email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuser.birthday.read&redirect_uri=https%3A%2F%2Fwww.yoox.com%2Fmyoox%2Flogin%2FExternalLoginCallback&state=__provider__%3Dgoogle%26__sid__%3D8bd8f7985ded45c5817603c797314714&flowName=GeneralOAuthFlow");
}


let form=document.querySelector("form");
form.addEventListener("submit",registerData);
function Data(fn,ln,e,p,dob,t){
    this.firstName=fn;
    this.lastName=ln;
    this.email=e;
    this.password=p;
    this.dateoOfBirth=dob;
    this.terms=t;
}

function registerData(){
    event.preventDefault();
    let first_name=form.firstName.value;
    let last_name=form.lastName.value;
    let email=form.email.value;
    let password=form.password.value;
    let dob=form.dob.value;
    let terms=form.terms.value;

    let u1=new Data(first_name,last_name,email,password,dob,terms);
    console.log(u1);
    localStorage.setItem("userData",JSON.stringify(u1));
    window.location.href="./index.html";
}

let temp=true;
document.querySelector("#benefits").addEventListener("click",function(){
    let container=document.querySelector("#image-container")
    if(temp==true){
        let image=document.createElement("img")
        image.src="https://www.yoox.com/images/yoox80/banners/5498_2_Registration_US.png?634485886869569819"
        container.append(image);
        temp=false;
    }
    
    else{
        container.innerHTML=""
        temp=true;
    }
    console.log(temp);
})

import {navbar} from "./navbar.js";

document.querySelector("#navbar").innerHTML=navbar();

import login from "./login.js"

document.querySelector("#login").innerHTML=login();

document.querySelector("#button").addEventListener("click",function(){
    document.querySelector(".bg-model").style.display="flex";
})

document.querySelector(".close").addEventListener("click",function(){
    document.querySelector(".bg-model").style.display="none";
})

document.querySelector("#login-facebook-button").addEventListener("click",loginFacebook);
function loginFacebook(){
    window.open("https://www.facebook.com/login.php?skip_api_login=1&api_key=225447960817285&kid_directed_site=0&app_id=225447960817285&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv5.0%2Fdialog%2Foauth%3Fclient_id%3D225447960817285%26scope%3Dpublic_profile%252Cemail%252Cuser_birthday%252Cuser_age_range%26redirect_uri%3Dhttps%253A%252F%252Fwww.yoox.com%252Fmyoox%252Flogin%252FExternalLoginCallback%26state%3D__provider__%253Dfacebook%2526__sid__%253D3ebbc19255094cd7ae86bae48bf30b06%26display%3Dpopup%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Ddb739e6e-046e-4cb3-96b7-f09c874a1068%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.yoox.com%2Fmyoox%2Flogin%2FExternalLoginCallback%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D__provider__%253Dfacebook%2526__sid__%253D3ebbc19255094cd7ae86bae48bf30b06%23_%3D_&display=popup&locale=en_GB&pl_dbl=0");
}

document.querySelector("#login-google-button").addEventListener("click",loginGoogle);
function loginGoogle(){
    window.open("https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?response_type=code&client_id=892880188578-vsebmgf7bat13cgbmk5rv1tn517srbfh.apps.googleusercontent.com&scope=profile%20openid%20email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuser.birthday.read&redirect_uri=https%3A%2F%2Fwww.yoox.com%2Fmyoox%2Flogin%2FExternalLoginCallback&state=__provider__%3Dgoogle%26__sid__%3D8bd8f7985ded45c5817603c797314714&flowName=GeneralOAuthFlow");
}


let loginForm=document.querySelector("#form");

loginForm.addEventListener("submit",function(){
    let email=loginForm.loginEmail.value;
    let password=loginForm.loginPass.value;

    let data=JSON.parse(localStorage.getItem("userData"));
    if(data.email==email && data.password==password){
        alert("Login Successfull");
    }
    else{
        alert("Wrong Details");
    }
})