/**
 * Get Post
 * 
 * This script will only Get post With out Auth
 */

import { baseURL, endPoint_listings } from "../../data/base";


/**
 * fetchAllProduct
 * 
 * @returns 
 */
export async function fetchAllProduct(){
    const response = await fetch(baseURL+endPoint_listings, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UFT-8'
        } 
    })
    if(response.ok){
      const data = await response.json()
      return data    
    }
}

/**
 * 
 * @param {*} id 
 * @returns 
 */

export async function fetchSingelProduct(id){
    const respnse = await fetch(baseURL+endPoint_listings+`/${id}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; Charset=UFT-8'
        }
    })
    if(respnse.ok){
        const data = await respnse.json()
        return data 
    }
}

