
import {templetAllProfilesList} from '../profiles/profilesAllList'
import {templetProfilesList} from '../profiles/ProfilesList'
import {templetprofilesbid} from '../profiles/profilesbid'



export function renderProfilesList(data){
    console.log(typeof(data))
    console.log(data)
    // Select Dom
        let section = document.querySelector('#profiles--header')
    // Map Array
        section.append(...data.map(list => {
            return templetProfilesList(list)
        }))
}

export function RenderAllProfilesList(data){    
    // Select Dom 
        let section = document.querySelector('#profile-all-list')
    // Map arry
     section.append(...data.map(list => {
        return templetAllProfilesList(list)
     }))
}

// All Profiles Bid
export function renderProfilesbBid(data){

    // Select Dom
        let section = document.querySelector('#profiles--bids')
    // Map Array 
        section.append(...data.map(list => {
            return templetprofilesbid(list)
        }))
}