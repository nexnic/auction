/**
 * 
 */

export const TempletHeader = (data) => {
    
    const header = document.querySelector('header')

    const container = document.createElement('div')
    const textBOX = document.createElement('div')
    const btnBOX = document.createElement('div')
    const imgBox = document.createElement('div')

    const h1 = document.createElement('h1')
    const headerMain = document.createElement('span')
    const br = document.createElement('br')
    const headerSub = document.createElement('span')

    const img = document.createElement('img')

    const btn = document.createElement('button')

    // Class 
        // Container 
            container.classList.add('d-flex', 'flex-column','justify-content-center', 'align-items-center', 'align-self-center', 'text-white')
        // Text Box 
            textBOX.classList.add('p-2','w-75', 'text-center')
        //  Button box 
            btnBOX.classList.add('p-2')

        // Image Box 
            imgBox.classList.add('d-flex', 'justify-content-center')
        // Button 
            btn.classList.add('btn', 'btn-lg', 'btn-secondary')    
    
    // Attribute 
        // Image 
            img.setAttribute('style', 'width: 50%;')
        // Button 
            btn.setAttribute('type', 'button')
            btn.setAttribute('data-toggle', 'modal')
            btn.setAttribute('data-target', '#modal__register')

    // Text 
        headerMain.innerText ='Herodotus'
        headerSub.innerText ='Welcome to our auction website, where you can buy and sell a wide range of products and services through a transparent and competitive bidding process.'
        btn.innerText = 'Register user',

    // IMG 
        img.src="./public/image/Herodotus.png"
        img.alt="See image of 2 woman make deal"

    if(data) {
        header.appendChild(container)
        container.appendChild(textBOX)
        container.appendChild(btnBOX)
        container.appendChild(imgBox)
        textBOX.appendChild(h1)
        h1.appendChild(headerMain)
        h1.appendChild(br)
        h1.appendChild(headerSub)
        imgBox.appendChild(img)
        
    }else{
        header.appendChild(container)
        container.appendChild(textBOX)
        container.appendChild(btnBOX)
        container.appendChild(imgBox)
        textBOX.appendChild(h1)
        h1.appendChild(headerMain)
        h1.appendChild(br)
        h1.appendChild(headerSub)
        btnBOX.appendChild(btn)
        imgBox.appendChild(img)
    }
}