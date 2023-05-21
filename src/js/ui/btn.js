//Import 
    // 

    // Tools 
        // Reload
            import {Reload} from '../tools/reloadpage'
import {profilesAPI} from '../api/profiles/profiles'
import {GetProfilesAllAPI} from '../api/profiles/getProfilesAll'
import {GetProfilesList} from '../api/profiles/getListingAll'
import {GetProfilesBid} from '../api/profiles/getprofilesbid'
import {RegUserForm, LoginUserForm, AddNewItemForm} from '../listeners/form';
import {load} from '../storage/load'
import {clean} from '../storage/remove'


import {ChangesiteProfile} from '../ui/profileSite'
import {usersPage} from './ProfilesMainSite'
import {Icon} from '../data/variabel'




/*
 * FormListener 
 * Register Form 
 * Login Form 
 * Create Post 
 *    
 */

export const formListener = (event) =>{
    document.querySelector('form#form__register').addEventListener('submit', RegUserForm);
    document.querySelector('form#form__login').addEventListener('submit', LoginUserForm);
    document.querySelector('form#form__add').addEventListener('submit', AddNewItemForm);
}



/**
 * BtnListenere 
 * 
 * This will Listener for card--profile--btn
 */

export const btnListener = () =>{
    const cardprofilesbtn = document.querySelectorAll('.card--profiles--btn')?.forEach( e => e.addEventListener('click', (e) => {
        let userId = e.srcElement.id
        GetProfilesList(userId)
        GetProfilesBid(userId)
        GetProfilesAllAPI(userId)
    }))
}

export const btnListenerTwo = () => {
    const btn = document.querySelectorAll('.card--profiles--btn')

    for(let i = 0; i < btn.length; i++){
        btn[i].addEventListener('click', (event) =>{
            event.preventDefault();
        })
    }

}




/**
 * Profile Button 
 *  This wil load user data 
 * Ande ChangeSite to Profile 
 */
export const profileBtn = () => {
    const user = load('user')
    ChangesiteProfile(user)
}


export const settingsBtn = () => {
    
    $("#modal__setting").modal("toggle");
    
}

export const UsersBtn = () => {
    profilesAPI()
}


export const logoutBtn = () => {
    clean()
    Reload()
}

export const AddNewBtn = () => {
    $("#modal__Add").modal("toggle");
}