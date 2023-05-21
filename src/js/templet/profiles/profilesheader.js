// Import 


export const TempletProfilesHeader = (data) => {
    console.log('test', 'kent')
    // Select Element 
        // Select Container => 
            const container = document.querySelector('#profiles--header')
    // Create Element 
        // Div
            const UserInfo = document.createElement('div')
        
        // Text
            const h2 = document.createElement('h2')
            const textEmail = document.createElement('p')
            const textCreadit = document.createElement('p')

        // img 
            const img = document.createElement('img')
       
    // Set Class 
        UserInfo.classList.add('d-flex','flex-column','p-3', 'bg-light', 'rounded', 'text-center', 'w-75', 'align-items-center', 'align-items-center' )
        textEmail.classList.add('text-muted')
        textCreadit.classList.add('text-muted')
    
    // Set Attribute
        img.setAttribute('style', 'width: 50%;')
        console.log('test 2')
    // Set Text
        h2.innerText = data.name
        textEmail.innerText = `Email: ${data.email}`
        textCreadit.innerText =`Credites: ${data.credits}`
        console.log('test', 'kent')
    // Media
        if(data.media) {
            img.src = data.avatar
            img.alt = `Image of user ${data.name}`
        }
        else{
            img.src = './public/image/Default_profile.svg'
            img.alt = 'Image of default avatar'
        }
        console.log('test 3')
        console.log('test', 'kent')
    // Apply Data 
    container.append(UserInfo)
    UserInfo.appendChild(img)
    UserInfo.appendChild(h2)
    UserInfo.appendChild(textEmail)
    UserInfo.appendChild(textCreadit)

    console.log('test', 'kent')
     
    
}