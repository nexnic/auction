// Import 
    // Tools 
    import {clearElement} from '../tools/element'
    import {ChangeTitle} from '../tools/element'

    import {SetMetaTag} from '../tools/meta'
// Templet 
    // Header 
    // Main
    // Render 
        import {RenderAllProfilesList} from '../templet/Render/RenderProfiles'
// Storage
    // Load
        import {load} from '../storage/load'
    // Save 
        import {save} from '../storage/save'
    // Remove 
        import {remove} from '../storage/remove'

export const ChangesiteProfiles = () => {
    // API 
        // Profiles
    // Local Storage
        // SITE
            save('site','profiles')
        // Profiles
            const UsersData = load('profiles')
            
    // Create Element
        // Profiles List 
            
    // Select Element 
        // Header 
            const header = document.querySelector('header')
        // main
            const main =  document.querySelector('main')
    
    // Clear Element 
        // Header 
            clearElement(header)
        // Main 
            clearElement(main)
    
    // Change Title 
        ChangeTitle('Herodotus | Profiles')
    
    // Change Meta Tage 
        SetMetaTag('user profile', 'test')  
    
        const profilesList = document.createElement('div') 
        
        
    // Set 
        profilesList.classList.add('list-group')
        profilesList.setAttribute('id', 'profile-all-list')
    // Set Class
        
        main.appendChild(profilesList)
    
    // Add Element 
        // Header 
            
            RenderAllProfilesList(UsersData)
    
    
            
}