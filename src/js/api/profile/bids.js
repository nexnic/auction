// Import 
    // Load
        import {load} from '../../storage/load'
    // Save 
        import {save} from '../../storage/save'

export async function bidsProfile(Username){
    try{
        const data = load('user')
        const response = await fetch(`https://nf-api.onrender.com/api/v1/auction/profiles/${data.name}/bids`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${data.accessToken}`,
                'Content-type': 'application/json; charset=UFT-8',
            }
        })
        if(response.ok){
            let data = await response.json()
            console.log(data)
            save('userBids', data)
        }
    }catch(error){
        console.log(error)
    }
}