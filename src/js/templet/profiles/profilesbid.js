
export const templetprofilesbid = (data) => {
    console.log('List', data)

    const TimeEnd = new Date(data.endsAt);

    const formatted = TimeEnd.toLocaleString('nb-no', {
        year:'numeric', 
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit', 
        minute: "2-digit",
        hour12: true,
    });

   // Select Element 
        // Header 
            const list = document.querySelector('#profiles--list')
            console.log('test', '45')
            
        // Create Element 
            const container = document.createElement('div')
            const item = document.createElement('div')
            const item2 = document.createElement('div')  
            

            const h5 = document.createElement('h5')
            const smallMain = document.createElement('small')
            const p = document.createElement('p')
            const smallsub = document.createElement('small')
            

        // Set Class 
            // Container 
                container.classList.add('list-group', 'p-3')
            // item 
                item.classList.add('list-group-item', 'list-group-item-action', 'flex-column', 'align-items-start')
            // Item2 
                item2.classList.add('d-flex', 'justify-content-between')
            // h5
                h5.classList.add('mb-5')
            // SmallMain 
                smallMain.classList.add('text-muted')
            // SmallSub
                smallsub.classList.add('text-muted')
            // p
                p.classList.add('mb-1')
                
            
        // text
            h5.innerText = data.title
            
            smallMain.innerText = formatted
            
            smallsub.innerText = `bides ${data._count.bids}`
            
            p.innerText = data.description
            
            
            list.append(container)
            container.appendChild(item)
            item.appendChild(item2)
            item2.appendChild(h5)
            item2.appendChild(smallMain)
            item.appendChild(p)
            item.appendChild(smallsub)
            
            return list
} 


