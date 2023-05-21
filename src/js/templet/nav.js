/**
 * Templet Nav Bar 
 */

import { Dropdown } from "bootstrap"
import {Icon, IconText} from '../data/variabel'


/**
 * TempletNav
 * @param {*} data 
 */

export const TempletNav = (data) => {
    

    // Select Element 

        // Top Navigation
            const top = document.querySelector('#nav__topbar')
        // Bot Navigation 
            const bot = document.querySelector('#nav__botbar')
    
    // Create Element 
        // Top Nav
            // Profile Menu
                const menuPro = document.createElement('ul')
                const menuProitem = document.createElement('li')
                const menuProSub = document.createElement('ul')
                const menuProSubItem = document.createElement('li')
        
            // Button
                const menuBtn = document.createElement('button')
                const regBtn = document.createElement('button')
                const loginBtn = document.createElement('button')
                const menuProBtn= document.createElement('button')
                const profileBtn = document.createElement('button')

            // Image
                const logo = document.createElement('img')
                const img = document.createElement('img')
        
            // text
                const UserName = document.createElement('small')
                const credits = document.createElement('small')
                const br = document.createElement('br')

        // Bot NAV
            // Search Menu
                const menuSer = document.createElement('ul')
                const menuSerItem = document.createElement('li')
                const menuSerSub = document.createElement('ul')
                const menuSerSubitem = document.createElement('li')
            
            // Filter Menu
                const menuFil =document.createElement('ul')
                const menuFilItem = document.createElement('li')
                const menuFilSub = document.createElement('ul')
                const menuFilSubItem = document.createElement('li')

            // Button
                const usersBtn = document.createElement('button')
                const addBtn = document.createElement('button')
                const searchBtn = document.createElement('button')
                const filterBtn = document.createElement('button')
                const searchfieldBtn = document.createElement('button')
                const filterfieldBtn = document.createElement('button')
            
            // Input
                const searchinput = document.createElement('input')
                
            // Div
                const divInput = document.createElement('div')
                const divInputSub = document.createElement('div')

    // Class 
        // Top Nav
            // Profile menu
                menuPro.classList.add('list-unstyled', 'components')
                menuProitem.classList.add('active')
                menuProSub.classList.add('collapse', 'dropdown-menu', 'list-unstyled')
                menuProSubItem.classList.add('nav-item')

            // Button 
                menuProBtn.classList.add('btn', 'dropdown-toggle')
                menuBtn.classList.add('btn', 'dropdown-toggle')

                // Profile button
                    profileBtn.classList.add('btn', 'btn-secondary')

                regBtn.classList.add('btn', 'btn-lg', 'btn-secondary')
                loginBtn.classList.add('btn', 'btn-lg', 'btn-secondary')

            // Text 
                UserName.classList.add('text-white')
                credits.classList.add('text-white')

        // Bot Nav
            // search Menu 
                menuSer.classList.add('list-unstyled', 'components')
                menuSerItem.classList.add('active')
                menuSerSub.classList.add('collapse', 'btn-group','dropup', 'list-unstyled')
                menuSerSubitem.classList.add('active')

            // filter Menu
                menuFil.classList.add('list-unstyled', 'components')
                menuFilItem.classList.add('active')
            // Button
                // User Button 
                    usersBtn.classList.add('btn', 'btn-lg','btn-secondary')
                // Add Button
                    addBtn.classList.add('btn','btn-lg', 'btn-secondary')
                // Search Button
                    searchBtn.classList.add('btn', 'btn-lg','btn-secondary', 'dropdown-toggle')
                // Filter Button
                    filterBtn.classList.add('btn','btn-lg', 'btn-secondary', 'dropdown-toggle')
                // Input Search button
                    searchfieldBtn.classList.add('btn', 'btn-outline-secondary')
            // Input 
                // search Input 
                    searchinput.classList.add('form-control')
            // Div 
                // Input Grupp mb-3 
                    divInput.classList.add('input-group', 'mb-3')
                // Input group-append
                    divInputSub.classList.add('input-group-append')
    // Attribute
        // Top Nav
            // Menu 
                menuProSub.setAttribute('id','profilemenu')
            // Button 
                /// Menu Profile Button 
                    menuProBtn.setAttribute('data-toggle', 'collapse')
                    menuProBtn.setAttribute('aria-expanded', 'false')
                    menuProBtn.setAttribute('data-target', '#profilemenu')
                // Profile Button 
                    profileBtn.setAttribute('type', 'button')
                    profileBtn.setAttribute('id', 'Profile--btn')
                    
                    
                

            // Button
                // Menu Button 
                    menuBtn.setAttribute('data-toggle', 'collapse')
                    menuBtn.setAttribute('aria-expanded', 'false')
                    menuBtn.setAttribute('data-target', '#topmenu')
                // Register Button 
                    regBtn.setAttribute('type', 'button')
                    regBtn.setAttribute('data-toggle', 'modal')
                    regBtn.setAttribute('data-target', '#modal__register')
                // Login Button
                    loginBtn.setAttribute('type', 'button')
                    loginBtn.setAttribute('data-toggle', 'modal')
                    loginBtn.setAttribute('data-target', '#modal__Login')
                // Add New Button 
                    addBtn.setAttribute('id', 'addNewBTN')
            
            // Logo
                logo.setAttribute('style', 'width: 70px;')
            // img 
                img.setAttribute('style', 'height: 30px;')
                
        // Bot Nav
            // Menu
                // Search Menu
                    menuSerSub.setAttribute('id', 'menu__search')
            // Button
                // Profiles Button
                    usersBtn.setAttribute('type', 'button')
                    usersBtn.setAttribute('id', 'profiles--btn')

                // addBtn 
                    
                // Search Button
                    searchBtn.setAttribute('type', 'button')
                    searchBtn.setAttribute('data-toggle', 'collapse')
                    searchBtn.setAttribute('aria-expanded', 'false')
                    searchBtn.setAttribute('data-target', '#menu__search')
                // Filter Button
                    filterBtn.setAttribute('type', 'button')
                    filterBtn.setAttribute('data-toggle', 'collapse')
                    filterBtn.setAttribute('aria-expanded', 'false')
                    filterBtn.setAttribute('data-target', '#topmenu')
                // Search field button 
                    searchfieldBtn.setAttribute('type', 'button')
            // Input 
                // Search 
                    searchinput.setAttribute('type', 'text')
                    searchinput.setAttribute('placeholder', 'Search')
                    searchinput.setAttribute('aria-label', 'search field')

    // src
        // logo 
            logo.src = './public/image/Herodotus-logo-white.png',
    
    // alt 
        // logo 
            logo.alt = 'See logo of herodotus',
    
    


    
    // innerText
        // Top Nav
            // TEXT
           
            // Button 
                regBtn.innerHTML = Icon.UserAdd
                loginBtn.innerHTML = Icon.login
                profileBtn.innerHTML = IconText.User
                

        // Bot Nav

            // Button
                usersBtn.innerHTML = Icon.users
                addBtn.innerHTML = Icon.add
                searchBtn.innerHTML = Icon.search
                filterBtn.innerHTML = Icon.filter
                searchfieldBtn.innerText = 'Search'

    if(data){
        if(data.avatar){
            img.src = data.avatar
            img.alt = `Image of user ${data.name}`
        }
        else{
            img.src = './public/image/Default_profile.svg'
            img.alt = 'Image of Default User'
        }
        UserName.innerText = data.name
        credits.innerText = data.credits

        // TOP Menu
        top.appendChild(menuPro)
        menuPro.appendChild(menuProitem)
        menuProitem.appendChild(menuProBtn)
        menuProitem.appendChild(menuProSub)
        menuProBtn.appendChild(img)
        menuProBtn.appendChild(UserName)
        menuProSub.appendChild(createList('profile', 'profile--btn', IconText.User, 'nav-item'))
        menuProSub.appendChild(createList('setting', 'setting--btn', IconText.setting, 'nav-item'))
        menuProSub.appendChild(createList('logout', 'logout--btn', IconText.logout, 'nav-item'))
        
        

        // Bottom Menu
        bot.appendChild(usersBtn)
        bot.append(addBtn)
        bot.append(menuSer)
        menuSer.appendChild(menuSerItem)
        menuSerItem.appendChild(searchBtn)
        menuSerItem.appendChild(menuSerSub)
        menuSerSub.appendChild(menuSerSubitem)
        menuSerSubitem.appendChild(divInput)
        divInput.appendChild(searchinput)
        divInput.appendChild(divInputSub)
        divInputSub.appendChild(searchfieldBtn)
        bot.append(filterBtn)

    }else {
        // extra Setting 
        addBtn.classList.add('disabled')
        usersBtn.classList.add('disabled')

        top.append(regBtn)
        top.append(logo)
        top.append(loginBtn)
        bot.appendChild(usersBtn)
        bot.append(addBtn)
        bot.append(menuSer)
        menuSer.appendChild(menuSerItem)
        menuSerItem.appendChild(searchBtn)
        menuSerItem.appendChild(menuSerSub)
        menuSerSub.appendChild(menuSerSubitem)
        menuSerSubitem.appendChild(divInput)
        divInput.appendChild(searchinput)
        divInput.appendChild(divInputSub)
        divInputSub.appendChild(searchfieldBtn)
        bot.append(filterBtn)
    }
    
        
}       

function createList(btnName, id, icon, Class ) {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.setAttribute('type', 'button')
    btn.setAttribute('id', id)
    btn.innerHTML = icon
    const li = document.createElement('li')
    li.classList.add(Class)

    li.appendChild(btn)

    return li;
}


