// Import 
    // Load
        import {load} from '../../storage/load'
    // Save 
        import {save} from '../../storage/save'


export async function GetProfilesBid(UserName){
    try{
        const token = load('user')
        const response = await fetch(`https://nf-api.onrender.com/api/v1/auction/profiles/${UserName}/bids`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token.accessToken}`,
                'Content-type': 'application/json; charset=UFT-8',
            }
        })
        if(response.ok){
            let data = await response.json()
            save(`ProfilesBid`, data)
        }
    }catch(error){

    }
}