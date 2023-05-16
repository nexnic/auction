/**
 * Templet Nav Bar 
 */

export const NavNotLoginTop = `
        <ul class="list-unstyled components">
            <li class="active">
                <a href="#" class="" data-toggle="collapse" aria-expanded="false" data-target="#nav__mobil--profile" class="dropdown-toggle btn btn-small">
                    <button type="button" class="btn btn small">Login/register</button>
                </a>
                <ul class="collapse dropdown-menu list-unstyled" id="nav__mobil--profile">
                    <li class="nav-item">
                        <button type="button" class="btn" data-toggle="modal" data-target="#modal__register">
                            Register user
                        </button>
                        <hr>
                    </li>
                    <li class="nav-item">
                        <button type="button" class="btn" data-toggle="modal" data-target="#modal__Login">
                            Login
                        </button> 
                    </li>
                </ul>
            </li>
        </ul>
        <div>
            <a href="#">
                <img src="./public/image/Herodotus-logo-white.png" alt="Image of logo" style="width: 70px;">
            </a>
        </div>
`;

export const NavNotLoginBot = `
    <button class="navbar-toggler" type="button" data-toggle="colapse" data-target=""> 
            <span class="navbar-toggler-icon"></span>
    </button>
    <button class="navbar-toggler" type="button" data-toggle="colapse" data-target="">
        <i class="fa-solid fa-house"></i>
    </button>
    <button class="navbar-toggler" type="button" data-toggle="colapse" data-target="">
        <i class="fa-solid fa-magnifying-glass"></i>
    </button>
    <button class="navbar-toggler" type="button" data-toggle="colapse" data-target="">
        <i class="fa-solid fa-filter"></i>
    </button>
`;

export const NavLoginTop = `

<ul class="list-unstyled components">
    <li class="active">
        <a href="#" class="" data-toggle="collapse" aria-expanded="false" data-target="#nav__mobil--profile" class="dropdown-toggle btn btn-small">
            <img src="./public/image/Default_profile.svg"  alt="See image of user" style="height: 30px;">
        </a>
        <ul class="collapse dropdown-menu list-unstyled" id="nav__mobil--profile">
            <li class="nav-item">
                <a href="#" class="btn" id="btn__user">
                    <i class="fa-solid fa-user"></i> Profile
                </a>
                <hr>
            </li>
            <li class="nav-item">
                <a href="#" class="btn  ">
                    <i class="fa-solid fa-gear"></i> Settings 
                </a>
                <hr>
            </li>
            <li class="nav-item">
                <a href="#" class="btn ">
                    <i class="fa-solid fa-right-from-bracket"></i> Logout
                </a>
            </li>
        </ul>
    </li>
</ul>
<div>
    <a href="#">
        <img src="./public/image/Herodotus-logo-white.png" alt="Image of logo" style="width: 70px;">
    </a>
</div>
`;

export const NavLoginBot = `
<button class="navbar-toggler" type="button" data-toggle="colapse" data-target=""> 
<span class="navbar-toggler-icon"></span>
</button>
<button class="navbar-toggler" type="button" data-toggle="colapse" data-target="">
<i class="fa-solid fa-house"></i>
</button>
<button class="navbar-toggler" type="button" data-toggle="colapse" data-target="">
<i class="fa-solid fa-magnifying-glass"></i>
</button>
<button class="navbar-toggler" type="button" data-toggle="colapse" data-target="">
<i class="fa-solid fa-filter"></i>
</button>

`