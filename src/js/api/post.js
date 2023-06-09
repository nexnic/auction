import { baseURL, endPoint_listings } from '../data/base';
import { save } from '../storage/save'



export async function feedpost(){
    const response = await fetch(baseURL+endPoint_listings+'?_active=true&_bids=true',  {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    if(response.ok){
        const data = await response.json()
        console.log(data)
        save('feed' ,data)
    }
}
 