import React from 'react';
import { Link } from 'react-router-dom';

const BtnNav = (props) => {
    const {titre, icone,lien} = props

    
    return (
        <div className=''>
            <div className="d-grid gap-2">
                <Link to={lien}>
                    <button class="btn text-start btn-link w-100 pb-0 mt-2" type="button">
                    {icone} {titre}
                    </button>
                </Link>
            </div>
        </div>

        // **************************************************************************************//

        // <div className=''>
        //     <div className="d-grid gap-2">
        //         <button class="btn text-start btn-link w-100 pb-0 mt-2" type="button" data-bs-toggle="collapse" data-bs-target={"#"+id} aria-expanded="false" aria-controls={id}>
        //         {icone} {titre}
        //         </button>
        //         <div class="collapse text-start BtnNavSous " id={id}>
        //             <div>
        //                 <Link to={lienForm}>
        //                     <button className='btn py-0 btn-link '>Ajouter</button>
        //                 </Link>
        //             </div>
        //             <div>
        //                 <Link to={lienList}>
        //                     <button className='btn py-0 btn-link'>Liste</button>
        //                 </Link>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        
    );
}

export default BtnNav;
