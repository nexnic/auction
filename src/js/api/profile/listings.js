import {load} from '../../storage/load'
import {save} from '../../storage/save'

export async function listingProfile(UserName){
    try {
        const data = load('user')
        const response = await fetch(`https://nf-api.onrender.com/api/v1/auction/profiles/${UserName}/listings`, {
            method: 'GET',
            headers:{
                Authorization: `Bearer ${data.accessToken}`,
                'Content-type': 'application/json; charset=UFT-8',
            }
        })
        if(response.ok){
            let data = await response.json()
            console.log(data)
            save('userListing', data)
        }
    } catch(error){
        console.log(error)
    }
}