// Import 
    import {templetHomeMain} from '../home/templetHomeList'

export function renderhomelist(data) {
    // Select element 
    let section = document.querySelector('#home--listing');
    // IF No data Alart
    if (!data) {
        alert('fail to connect');
        // Map
    } else {
        section.append(...data.map(list => {
            return templetHomeMain(list);
        }));
    }
}
