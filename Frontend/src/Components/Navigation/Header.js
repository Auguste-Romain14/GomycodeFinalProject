import React from 'react';

const Header = () => {
    return (
        <div className='d-flex justify-content-between px-4 pt-3'>
            <div className='search d-flex px-3 align-items-center'>
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" className='border-0 mx-2' placeholder='rechercher'/>
            </div>
            <div>
            <i class="fa-solid fa-user fs-3"></i>
            </div>
        </div>
    );
}

export default Header;
