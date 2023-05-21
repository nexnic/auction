// Import 
    // Tools 

        import {clearElement} from '../tools/element'
        import {ChangeTitle} from '../tools/element'

        import {SetMetaTag} from '../tools/meta'
    // Templet 
        // Header 
           import {TempletProfileHeader} from '../templet/profile/profileheader'
        // Reander 
            // Listing 
                import {RenderProfilelist} from '../templet/Render/RenderProfile'
                import {renderprofilebid} from '../templet/Render/RenderProfile'
    // Storage  
        // Load
            import {load} from '../storage/load'
        // Save 
            import {save} from '../storage/save'
        // Remove 
            import {remove} from '../storage/remove'
            
        

export function ChangesiteProfile(){
    // Local Storege
        // site 
            save('site','profile')
        // Listing
            const listing = load('userListing')
        // bids
            const bids = load('userBids')
        // user 
            const user = load('user')
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
        ChangeTitle(`Herodotus | Profile | ${user.name}`)

    // Change Meta Tage        
        
        SetMetaTag('user profile', user.name)

    // Create Element 
        // container
            const container = document.createElement('div')
            const containerlist = document.createElement('div')
            const containerbids = document.createElement('div')

            
    // Class 
        // Container
            container.classList.add('d-flex', 'justify-content-center', 'align-items-center')

    // Set Attribute 
        // Container 
            container.setAttribute('id', 'profile--header')
            containerlist.setAttribute('id', 'profile--list')
            containerbids.setAttribute('id','profile--bids')

    // Apply Element 
        // Main 
            main.appendChild(container)
            main.appendChild(containerlist)
            main.appendChild(containerbids)
        
            console.log('test add profiles ')
    // Add Element 
        // Header 
            TempletProfileHeader(user)
        // Render
            // Render List 
            RenderProfilelist(listing)
            // Render Bids     
            renderprofilebid(bids)
                
        


}