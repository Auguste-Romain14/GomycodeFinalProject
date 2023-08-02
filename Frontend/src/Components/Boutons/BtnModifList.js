import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

const BtnModifList = (props) => {
    const {lien} = props
    const dispatch = useDispatch()

    
    return (
        <>
        <Link to={lien}>
            <button className='btn btn-warning mx-2 shadow text-white'><i className="fa-solid fa-pen"></i></button>
        </Link>
        <Outlet/>
        </>
    );
}

export default BtnModifList;
