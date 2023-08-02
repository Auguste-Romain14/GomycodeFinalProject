import React from 'react';

const BtnAddNew = ({enableForm}) => {
    return (
        <>
        <button className='btn btn-primary shadow mb-5' onClick={() => enableForm()}>Ajouter <span className=''><i className="fa-solid fa-user-plus"></i></span></button>
        </>
    );
}

export default BtnAddNew;
