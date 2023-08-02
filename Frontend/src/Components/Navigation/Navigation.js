import React from 'react';
import BtnNav from './BtnNav';

const Navigation = () => {
    return (
        <>
            
            <BtnNav
            titre='Elèves' 
            icone= {<i class="fa-solid fa-graduation-cap"></i>} 
            lien='student'
            />
            <BtnNav 
            titre='Professeurs' 
            icone= {<i class="fa-solid fa-person-chalkboard"></i>} 
            lien='teacher'
            />
            <BtnNav 
            titre='Notes' 
            icone= {<i class="fa-solid fa-pen-to-square"></i>} 
            lien='note'
            
            />
            <BtnNav 
            titre='Filières' 
            icone= {<i class="fa-solid fa-building-columns"></i>} 
            lien='filiere'
            />
            <BtnNav 
            titre='Matières' 
            icone= {<i class="fa-solid fa-book-bookmark"></i>} 
            lien='matiere'
            />
            <BtnNav 
            titre='Coefficients' 
            icone= {<i class="fa-solid fa-calculator"></i>} 
            lien='coefficient'
            />
        </>
    );
}

export default Navigation;
