// Login User API Call
import { baseURL, endPoint_Login } from '../../data/base';
import {save} from '../../storage/save';

export async function LoginAPI(user){
    try {
        console.log(user)
        const response = await fetch('https://nf-api.onrender.com/api/v1/auction/auth/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UFT-8',
            },
            body: JSON.stringify(user),
        })
        console.log(response.json)
        if(response.ok){
            let data = await response.json()
            save('user',data)
            location.reload();
        }else {
            alert('test')
        }
        
    } catch (error) {
        console.log(error)
    }
}



// user Name 
// nexnic@noroff.no