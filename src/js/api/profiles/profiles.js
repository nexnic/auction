// import 
    // storage 
        // Load 
            import {load} from '../../storage/load';
        // Save
            import {save} from '../../storage/save'

    // 
        // 
        import {ChangesiteProfiles} from '../../ui/profilesSite'


export async function profilesAPI(){
    try {
        const data = load('user')
        const response = await fetch(`https://nf-api.onrender.com/api/v1/auction/profiles`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${data.accessToken}`,
                'Content-type': 'application/json; charset=UFT-8',
            }
        })
        if(response.ok){
            let data = await response.json()
            save('profiles', data)
            ChangesiteProfiles()
        }

    } catch (error) {
        
    }
}