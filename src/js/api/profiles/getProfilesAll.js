// Import 
    // Load
        import {load} from '../../storage/load'
    // Save 
        import {save} from '../../storage/save'
    // 
        // 
        import {usersPage} from '../../ui/ProfilesMainSite'


export async function GetProfilesAllAPI(UserName){
    try{
        const token = load('user')
        const response = await fetch(`https://nf-api.onrender.com/api/v1/auction/profiles/${UserName}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token.accessToken}`,
                'Content-type': 'application/json; charset=UFT-8',
            }
        })
        if(response.ok){
            let data = await response.json()
            save(`ProfilesInfo`, data)
            usersPage()
        }
    } catch (error){

    }
}