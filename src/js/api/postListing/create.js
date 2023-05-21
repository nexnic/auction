
// Import List  
    // Import 
        import {load} from '../../storage'

/**
 * 
 * @param {*} id 
 */
export async function CreateListing(data){
    const token = load('user')
    console.log(data)
    try{
        const response = await fetch('https://nf-api.onrender.com/api/v1/auction/listings',{
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token.accessToken}`,
                'Content-type': 'application/json; charset=UFT-8',
            },
            body:JSON.stringify(data)
        })
        console.log(response)
        if(response.ok){
            let data = await response.json()
            console.log(data)
        }
        else {
            console.log(await response.json())
            alert('Fail')
        }
    }catch(error){
        console.log(error)
    } 
}



