// Import 
    // Button 
        import {profileBtn} from './ui/btn'
        import {settingsBtn} from './ui/btn'
        import {logoutBtn} from './ui/btn'
        import {AddNewBtn} from './ui/btn'
        import {UsersBtn} from './ui/btn'

import {CheckLocal} from './ui/local'

import ui from "./ui/index.js";



ui()




const element = document.querySelector('#profile--btn');
const setting = document.querySelector('#setting--btn');
const logoutbtn = document.querySelector('#logout--btn');
const profilesbtn = document.querySelector('#profiles--btn')
const Postbotbtn = document.querySelector('#addNewBTN')

element?.addEventListener('click', profileBtn)
setting?.addEventListener('click', settingsBtn)
logoutbtn?.addEventListener('click', logoutBtn)
Postbotbtn?.addEventListener('click', AddNewBtn)
profilesbtn?.addEventListener('click', UsersBtn)








