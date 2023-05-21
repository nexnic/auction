/**
 * Template
 * 
 * Post
 */



export const Templetlisting = (key) => {
    
    // Create Element 
        // Card 
            const card = document.createElement('div')
        // Card Body 
            const cardBody = document.createElement('div')
            const title = document.createElement('h3')
            const p = document.createElement('p')
            const time = document.createElement('p')
            const tag = document.createElement('div')
            
        // Button
            const editbtn = document.createElement('button')
    // Class 
        card.classList.add('card')
        cardBody.classList.add('card-body')

    
    // 
        card.setAttribute('style', 'width: 18rem;')    
    // Inner Text 
    title.innerText = key.title
    p.innerText = key.description
    time.innerText = Time(key.endsAt)

    // 

    card.setAttribute('id', 'card')
    

    // if media add
    if(key.media){
        const img = document.createElement('img')
        img.src = key.media 

        card.appendChild(img)
    } else {

    }
    if(key.tags){
        key.tags.forEach(key1 => {
            const tagbtn = document.createElement('button')

            tagbtn.classList.add('btn')

            tagbtn.innerText = key1
            cardBody.appendChild(tagbtn)
        });
    }
    
    // Child
    card.appendChild(cardBody)
    cardBody.appendChild(tag)
    cardBody.appendChild(title)
    cardBody.appendChild(p)
    cardBody.appendChild(time)

    

    return card
}



const Time = (value) => {
    let a = new Date(value)
    let b = a.toLocaleDateString()
    let c = a.toLocaleTimeString()
    
    return b
    
}

