import { baseURL } from "./base";

export async function feedpost(){
    const response = await fetch(baseURL, {
        method: 'get',
        
    })
    if(response.ok){
        console.log(await response.json())
    }
}