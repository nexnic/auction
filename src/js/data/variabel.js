// ICON 


/**
 * Icon 
 * This is easy way for adding icon to element
 */
export const Icon = {
    User: '<i class="fa-solid fa-user"></i>',
    UserAdd: '<i class="fa-solid fa-user-plus"></i>',
    users: '<i class="fa-solid fa-user-group"></i>',
    setting: '<i class="fa-solid fa-gear"></i>',
    login: '<i class="fa-solid fa-right-to-bracket"></i>',
    logout: '<i class="fa-solid fa-right-from-bracket"></i>',
    hamburger: '<span class="navbar-toggler-icon"></span>',
    search: '<i class="fa-solid fa-magnifying-glass"></i>',
    add: '<i class="fa-solid fa-plus"></i>',
    filter: '<i class="fa-solid fa-filter"></i>',
    spiner: '<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>',
}

/**
 * IconText 
 * This is element and text 
 */
export const IconText = {
    User: '<i class="fa-solid fa-user"></i> Profile',
    setting: '<i class="fa-solid fa-gear"></i> Setting', 
    logout: '<i class="fa-solid fa-right-from-bracket"></i> Logout',
}

// API 

    // BASE URL 
        const baseurl = 'https://nf-api.onrender.com/api/v1'
    // End Point 
        // Register User 
            const end_point_Register = '/auction/auth/register'
        // Login User 
            const  end_point_Login = '/auction/auth/login' 
        // Listings 
            const  end_point_listings = '/auction/listings'
        // Profiles 
            const  end_point_profile = '/auction/profiles'