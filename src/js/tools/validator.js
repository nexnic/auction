

/**
 * {}
 */

export const validatorEmail = (email) => {
    const regKey = /^[a-z0-9._%+-]+@(noroff.no|stud.noroff.no)$/;

    try {
        console.log('test');
    }catch {
        return false
    }

}  

export const validatorPWD = (Pwd) => {
    let regKey = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    try {
        console.log('pass')
    } catch {
        return false 
    }
}

export const validatorUser = (user) => {
    let regKey = /^[a-zA-Z0-9_]+$/;

    try {
        console.log('test');
    }catch {
        return false 
    }
}