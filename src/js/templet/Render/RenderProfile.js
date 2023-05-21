import {templetProfileList} from '../profile/profilelistings'
import {templetprofilebid} from '../profile/profilebis'


export function RenderProfilelist(data){
    console.log(typeof(data))
    console.log(data)
    // Select Dom
    let section =  document.querySelector('#profile--list')
    // Map Array
    if(!data){
        console.log('null')
    }else {
        section.append(...data.map(list => {
            return templetProfileList(list)
        })) 
    }
}

export function renderprofilebid(data) {
    let section = document.querySelector('#profile--bids')
    
    if(!data){
        
    }else{
        section.append(...data.map(bid => {
            return templetprofilebid(bid)
        }))
    }
}
