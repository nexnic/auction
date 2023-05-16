/**
 * Form 
 */

// Import List

import {validatorUser, validatorEmail, validatorPWD } from '../tools/validator';
import {AddClass} from '../tools/addclass';
import {APIRegisterUser} from '../api/register';
import {APILoginUser} from '../api/login';


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
    //  

/**
 * 
 * @param {*} event 
 */
export const RegUserForm = (event) => {
    event.preventDefault();
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
        APIRegisterUser(userData)
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
    let userData = {
        email: `${LoginUser.value}`,
        password: `${LoginPWD.value}`
    }

    let CheckEmail = validatorEmail(userData.email)
    let CheckPWD = validatorPWD(userData.password);
    if(CheckEmail && CheckPWD) {
        AddClass(regUserDom, 'is-valid')
        LoginUser.classList.add('is-valid')
        LoginPWD.classList.add('is-valid')
        APILoginUser(userData)
    }
    if(!CheckEmail){
        LoginUser.classList.add('is-invalid')
        console.log('email', 'faile')
    }
    if(!CheckPWD){
        LoginPWD.classList.add('is-invalid')
        console.log('password', 'faile')
    }
}

