import { save } from '../../storage/save';




export async function getalllisting() {
    try {
        const response = await fetch('https://nf-api.onrender.com/api/v1/auction/listings?_active=true&_bids=true&_seller=true', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            save('listings', data);
        }
    } catch (error) {
    }
}
