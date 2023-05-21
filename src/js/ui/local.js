// Import 
    // Storage 
        import{load} from '../storage/load'
        import{save} from '../storage/save'
    // UI
        // Profile Site
            import{ChangesiteProfile} from './profileSite'
    // Templet 
        import {TempletNav} from '../templet/nav'
        import {btnListener} from '../ui/btn'
        import {btnListenerTwo} from '../ui/btn'
        import {ChangesiteProfiles} from './profilesSite'
        import {homePage} from './home'

    // API 
        // GET ALL Listing 
            

export const CheckLocal = () => {
    // Local Storage 
        // Site
            const site = load('site')
        // User
            const user = load('user')
    // Default Start
        TempletNav(user)
    if(site === 'home'){
        homePage()
        
    }if(site === 'profile'){
        ChangesiteProfile()
        
    }if(site === 'profiles'){
        ChangesiteProfiles()
        btnListener()
        btnListenerTwo()
    }
    else{
        save('site', 'home')
    }
}