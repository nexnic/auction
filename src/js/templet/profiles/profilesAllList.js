// Import 

export const templetAllProfilesList = (key) => {
    
    // Create Element 
        const container = document.createElement('div')
        const textBox = document.createElement('div')
        const contentinfo = document.createElement('div')
        const content = document.createElement('div')
        
        
        const h5 = document.createElement('h5')
        const small = document.createElement('small')
        const smalltwo = document.createElement('small')

        const img = document.createElement('div')

        const btn = document.createElement('button')


        
    // Set Class 
        container.classList.add('d-flex', 'flex-row', 'list-group-item', 'm-3', 'bg-gray', 'w-100', 'align-items-center')
        textBox.classList.add('d-flex', 'flex-column','w-100')
        content.classList.add('d-flex', 'justify-content-between', 'w-100','p-2')
        contentinfo.classList.add('d-flex','justify-content-between', 'w-100', 'p-2')
        img.classList.add('rounded-circle')
        btn.classList.add('btn', 'btn-small', 'btn-secondary', 'card--profiles--btn')
        

        img.style.backgroundSize ="cover"
        img.style.backgroundRepeat ="no-repeat"
        img.style.backgroundPosition = "center center"
        img.style.maxHeight = "25px";
        img.style.maxWidth = "25px";
        img.style.minHeight = "25px"
        img.style.minWidth = "25px"

    // Set Attribute 
        btn.setAttribute('type', 'button')
        btn.setAttribute('id', `${key.name}`)
        
        
    // inner Text 
        // H5
            h5.innerText = key.name
            small.innerText = key.credits
            smalltwo.innerText = key.email
            btn.innerText = 'Veiw Profile'

    if(key.avatar){
        img.style.backgroundImage = `url('${key.avatar}')`
        
    }else {
        
        img.style.backgroundImage = "url('https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
        
        
    }  
    // Apply 
        container.appendChild(img)
        container.appendChild(textBox)
        textBox.appendChild(content)
        textBox.appendChild(contentinfo)
        content.appendChild(h5)
        content.appendChild(small)
        contentinfo.appendChild(smalltwo)
        contentinfo.appendChild(btn)


    return container
}