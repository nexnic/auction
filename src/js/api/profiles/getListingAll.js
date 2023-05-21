// Import 
    // storage 
        // Load 
            import {load} from '../../storage/load';
        // save 
            import {save} from '../../storage/save'

export async function GetProfilesList(UserID){
    try {
        const token = load('user')
        const response = await fetch(`https://nf-api.onrender.com/api/v1/auction/profiles/${UserID}/listings`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token.accessToken}`,
                'Content-type': 'application/json; charset=UFT-8',
            }
        })
        if(response.ok) {
            let data = await response.json()
            save(`ProfilesListing`, data)
        }
    } catch (error) {
        
    }
}