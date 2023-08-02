import React from 'react';
import Navigation from './Navigation';

const Sidebar = () => {
    return (
        <>
            <div className='enteteNav bg-primary d-flex justify-content-center align-items-center'>
                <p className='logo fw-bold display-4 text-white'><span className=''>Digi</span>kool</p> 
            </div>
            <div className='d-flex justify-content-center '>
                <div className='px-3 py-1 navigation '>
                    <p className='px-3 mb-0 mt-3'>Main menu</p>
                    <Navigation/>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
