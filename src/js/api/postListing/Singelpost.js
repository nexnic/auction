
import { baseURL } from "../../data/base"

export async function GetSingelPOST(id){

    const response = await fetch(baseURL+`/auction/listings/<${id}>`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UFT-8'
        }
    })
    if(response.ok){
        const data =  await response.json()
        console.log('singelapi',data)
    }

}