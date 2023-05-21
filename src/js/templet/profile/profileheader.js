// Import 



/**
 * 
 * @param {*} data 
 */
export const TempletProfileHeader = (data) => {

    // Select Element 
        const container = document.querySelector('#profile--header')
    
    // Create Element 
        const UserInfo = document.createElement('div')
        const listingsInfo = document.createElement('div')
        const h1 = document.createElement('h1')
        const h2 = document.createElement('h2')
        const img = document.createElement('img')
        const textEmail = document.createElement('p')
        const textCreadit = document.createElement('p')

    // Class
        UserInfo.classList.add('d-flex','flex-column','p-3', 'bg-light', 'rounded', 'text-center', 'w-75', 'align-items-center', 'align-items-center' )
        textEmail.classList.add('text-muted')
        textCreadit.classList.add('text-muted')

    // Set Attribute 
        img.setAttribute('style', 'width: 50%;')

    // TEXT
        h2.innerText = data.name
        textEmail.innerText = `Email: ${data.email}`
        textCreadit.innerText =`Credites: ${data.credits}`


    // Media 
        if(data.media) {
            img.src = data.avatar
            img.alt = `Image of user ${data.name}`
        }
        else{
            img.src = './public/image/Default_profile.svg'
            img.alt = 'Image of default avatar'
        }
    
    // Apply data
        container.append(UserInfo)
        UserInfo.appendChild(img)
        UserInfo.appendChild(h2)
        UserInfo.appendChild(textEmail)
        UserInfo.appendChild(textCreadit)

}
