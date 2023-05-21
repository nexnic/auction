// Import 
    // Tool
        // time 
            import {ConverTime} from '../../tools/time'

export const templetProfilesList = (data) =>{
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
            console.log('test', '45')

            const h5 = document.createElement('h5')
            const smallMain = document.createElement('small')
            const p = document.createElement('p')
            const smallsub = document.createElement('small')
            console.log('test', '45')

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
                console.log('test', '45')
            
        // text
            h5.innerText = data.title
            console.log('test', '45')
            smallMain.innerText = formatted
            console.log('test', '45')
            smallsub.innerText = `bides ${data._count.bids}`
            console.log('test', '45')
            p.innerText = data.description
            console.log('test', '45')
            
            list.append(container)
            container.appendChild(item)
            item.appendChild(item2)
            item2.appendChild(h5)
            item2.appendChild(smallMain)
            item.appendChild(p)
            item.appendChild(smallsub)
            
            return list
}