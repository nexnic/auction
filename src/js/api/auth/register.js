// Register User API Call
import { baseURL, endPoint_Register } from '../../data/base';
import { save } from '../../storage/save';

export async function RegisterAPI(user){
    console.log(user);
    try {
        const response = await fetch('https://nf-api.onrender.com/api/v1/auction/auth/register', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UFT-8',
                
            },
            body: JSON.stringify(user),
        })
        console.log(response.json())
        if(response.ok){
           
        }
    } catch (error) {
        console.log(error)
    }
}