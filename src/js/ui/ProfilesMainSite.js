// Import 
    // Tools 
        // Clear Element 
            import {clearElement} from '../tools/element'
        // Change Title 
            import {ChangeTitle} from '../tools/element'
        // Change Meta Tage 
            import {SetMetaTag} from '../tools/meta'
    // Storeage 
        // Load 
            import {load} from '../storage/load'
        // Save 
            import {save} from '../storage/save'
    // Templet 
        // Render 
            // Render Profile Main 
                import {TempletProfilesHeader} from '../templet/profiles/profilesheader'
            // Render Profile Lists 
                import {renderProfilesList} from '../templet/Render/RenderProfiles'
            // Render Profiles Bids
                import {renderProfilesbBid} from '../templet/Render/RenderProfiles'
            

export const usersPage = () => {
    // Local Storage 
        // Profiles Info 
            const ProfilesInfo = load('ProfilesInfo')
            
        // Profiles Listings 
            const ProfilesListing = load('ProfilesListing')
            
        // Profiles Bid 
            const ProfilesBid = load('ProfilesBid')
            
    // Select Element 
        // Header 
            const header = document.querySelector('header')
        // Main 
            const main =  document.querySelector('main')
            
    // Clear Element 
        // Clear Header
            clearElement(header)
        // Clear Main 
            clearElement(main)
            
    // Change Title 
        ChangeTitle(`Herodotus | ${ProfilesInfo.name}`)
    
    // Change Meta Tage 
        SetMetaTag('user profile', `${ProfilesInfo.name}`)  
       
    // Create Element 
        // content Profiles Header 
            const contentPh = document.createElement('div')
        // content Profiles List 
            const contenPl = document.createElement('div')
        // content Profiles bid
            const contentPb = document.createElement('div')
            
    // Set Attribute 
        // content Profiles Header => ID => profiles--header
            contentPh.setAttribute('id', 'profiles--header')
        // content Profiles List => ID => profiles--list
            contenPl.setAttribute('id', 'profiles--list')
        // content Profiles bid => id => 
            contentPb.setAttribute('id', 'profiles--bids')
            
    // Apply Element 
        // Main => content Profiles Header 
        main.appendChild(contentPh)
        main.appendChild(contenPl)
        main.appendChild(contentPb)

    
       
    // Templet   
       TempletProfilesHeader(ProfilesInfo)
       renderProfilesList(ProfilesListing)
       renderProfilesbBid(ProfilesBid)
       
       
} 
