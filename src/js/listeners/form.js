/**
 * Form 
 */

// Import List

import {validatorUser, validatorEmail, validatorPWD } from '../tools/validator';
import {AddClass} from '../tools/addclass';
import {RegisterAPI} from '../api/auth/register';
import {LoginAPI} from '../api/auth/login';
import {CreateListing} from '../api/postListing//create'


// DOM

    const RegUser = document.querySelector('#form__register--username')
    let regUserDom = '#form__register--username'
    let regUserFeedDom = '#form__register--usernamefeedback';
    const RegEmail = document.querySelector('#form__register--email')
    const Regemailcol = document.querySelector('#form_regEmail')
    let RegEmailDom = '#form__register--email';
    const RegPwd = document.querySelector('#form__register--password')
    let regPwdDom = '#form__register--password';
    
    // Login 

    let LoginUser = document.querySelector('#form__login--email');
    let LoginPWD = document.querySelector('#form__login--password');
    let logBtn = document.querySelector('#loginBtn')
    
    // Add New Item 

    const NewTitle = document.querySelector('#form__add--title')
    const NewDec = document.querySelector('#form__add--description')
    const NewTag = document.querySelector('#form__add--tags')
    const NewUrl = document.querySelector('#for__add--url')
    const NewData = document.querySelector('#form__add--data')

    const NewBtn = document.querySelector('#form__add--btn')



/**
 * 
 * @param {*} event 
 */
export const RegUserForm = (event) => {
    event.preventDefault();
    event.stopPropagation()
    let user =  validatorUser(RegUser.value);
    let email = validatorEmail(RegEmail.value);
    let password = validatorPWD(RegPwd.value);
    let userData = {
        'name': `${RegUser.value}`,
        'email': `${RegEmail.value}`,
        'password': `${RegPwd.value}`,
    }
    if(user && email && password){
        AddClass(regUserDom, 'is-valid')
        AddClass(RegEmailDom, 'is-valid')
        AddClass(regUserDom, 'is-valid')
        RegisterAPI(userData)
    }
    if(user) {
        AddClass(regUserDom, 'is-valid')
    }
    if(!user){
        AddClass(regUserDom, 'is-invalid')
    }
    if(email) {
        AddClass(RegEmailDom, 'is-valid')
    }
    if(!email){
        AddClass(RegEmailDom, 'is-invalid')
    }
    if(password) {
        AddClass(regPwdDom, 'is-valid')
    }
    if(!password){
        AddClass(regPwdDom, 'is-invalid')
    }    
}  

// testkent@noroff.no

export const LoginUserForm = (event) => {
    event.preventDefault();
    let user = LoginUser.value
    let PWD = LoginPWD.value
    const userdata = {
        "email": user,
        "password": PWD,
    }
    
    let CheckEmail = validatorEmail(user)
    let CheckPWD = validatorPWD(PWD)
    if(CheckEmail && CheckPWD){
        LoginUser.classList.add('is-valid')
        LoginUser.classList.remove('is-invalid')
        LoginPWD.classList.add('is-valid')
        LoginPWD.classList.remove('is-invalid')
        
        const data = LoginAPI(userdata)
        console.log(data)
    }if(!CheckEmail){
        LoginUser.classList.add('is-invalid')
        LoginUser.classList.remove('is-valid')
    }if(!CheckPWD) {
        LoginPWD.classList.add('is-invalid')
        LoginPWD.classList.remove('is-valid')
    }
}

export const AddNewItemForm = (event) => {
    event.preventDefault();
        
    
    let title = NewTitle.value;
    let description = NewDec.value;
    let tags = [NewTag.value];
    let mediaInput =  NewUrl.value;
    let endsAt = new Date(NewData.value).toISOString()

        
    let mediaUrls = mediaInput.split(",").map(url => url.trim());
    let validatedMedia = [];

    mediaUrls.forEach(url => {
        let  img = new Image();
        img.src = url;

        if (img.complete && img.naturalWidth !== 0) {
            validatedMedia.push(url);
        }
    });

// Create JSON object
var jsonData = {
  "title": title,
  "description": description,
  "tags": tags,
  "media": validatedMedia,
  "endsAt": endsAt
};

    CreateListing(jsonData)
}
