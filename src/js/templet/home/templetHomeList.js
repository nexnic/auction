// Import 
    import {load} from '../../storage/load'



export const templetHomeMain = (data) => {
    // User data 
    const user = load('user')
    // Create Element 
        // card 
            const card = document.createElement('div')
        // Card Body 
            const cardBody = document.createElement('div')
            const cardfooter = document.createElement('div')
            const title = document.createElement('h3')
            const p = document.createElement('p')
            const time = document.createElement('p')
            const tag = document.createElement('div')
        // button 
           
    
    // Class 
        card.classList.add('card')
        cardBody.classList.add('card-body')
        cardfooter.classList.add('card-footer')

    // Set Attribute
        card.setAttribute('style', 'width: 18rem;')
    
    // Inner text 
        title.innerText = data.title
        p.innerText = data.description
        time.innerText = data.endsAt
        if(data.media){
            const img = document.createElement('img')
            img.src = data.media 
            img.alt = data.title
    
            card.appendChild(img)
        } else {
    
        }
        if(data.tags){
            data.tags.forEach(t => {
                const tagbtn = document.createElement('button')
    
                tagbtn.classList.add('btn')
    
                tagbtn.innerText = t
                cardBody.appendChild(tagbtn)
            });
        }else {

        }
        if(data.seller.name == user.name){
            const editbtn = document.createElement('button')
            const removebtn = document.createElement('button')
            removebtn.setAttribute('id', 'edit--btn')
            removebtn.setAttribute('type', 'button')
            removebtn.classList.add('btn','btn-small', 'btn-secondary')
            removebtn.innerText = 'Remove'
            editbtn.innerText = 'edit'
            editbtn.setAttribute('id', 'edit--btn')
            editbtn.setAttribute('type', 'button')
            editbtn.classList.add('btn','btn-small', 'btn-secondary')
            editbtn.innerText = 'edit'
            cardfooter.appendChild(editbtn)
            cardfooter.appendChild(removebtn)
        } else{

        }

    // Child
    card.appendChild(cardBody)
    card.appendChild(cardfooter)
    cardBody.appendChild(tag)
    cardBody.appendChild(title)
    cardBody.appendChild(p)
    cardBody.appendChild(time)
    return card
}