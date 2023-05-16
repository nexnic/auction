

/**
 * {}
 */

export const validatorEmail = (email) => {
    const regKey = /^[a-z0-9._%+-]+@(noroff.no|stud.noroff.no)$/;
    let Check = regKey.test(email)
    if(Check){
        return true 
    }
    else {
        return false
    }
}  

export const validatorPWD = (Pwd) => {
    let regKey = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    let Check = regKey.test(Pwd)
    if(Check){
        return true 
    }
    else {
        return false
    }
}

export const validatorUser = (user) => {
    let regKey = /^[a-zA-Z0-9_]+$/;
    let Check = regKey.test(user)
    if(Check){
        return true
    }
    else {
        return false
    }
}

