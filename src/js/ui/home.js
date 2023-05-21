// Import 
    // Tools 

    import {clearElement} from '../tools/element'
    import {ChangeTitle} from '../tools/element'

    import {SetMetaTag} from '../tools/meta'
// Templet 
    // Header 
       import {TempletHeader} from '../templet/header'
    // Reander 
        // Listing 
            import {renderhomelist} from '../templet/Render/renderhomelist'
            
// Storage  
    // Load
        import {load} from '../storage/load'
    // Save 
        import {save} from '../storage/save'
    // Remove 
        import {remove} from '../storage/remove'
    
// API
    import {getalllisting} from '../api/postListing/getalllisting.1'

export const homePage = () => {
    // API 
        getalllisting()

    // Local Storege 
        // Site 
            save('site', 'home')
        // 
   // Select Elements 
        // Header 
        const header = document.querySelector('header')
        // Main 
            const main = document.querySelector('main')
    // Clear Element 
        // Header 
            clearElement(header)
        // Main 
            clearElement(main)
    // Change Title 
    ChangeTitle(`Herodotus | home `)

    SetMetaTag('Herodotus', 'our auction website, where you can buy and sell a wide range of products and services through a transparent and competitive bidding process.')
    
    // Create Element 
        // container
            const container = document.createElement('div')
    // Set Attribut
        // container 
            container.setAttribute('id', 'home--listing')

    // Apply Element 
        main.appendChild(container)
    // Load Data
    const data = load('listings')
    const user = load('user')

    // Render List 
        renderhomelist(data,user)
    // Header 
        TempletHeader(user)
}