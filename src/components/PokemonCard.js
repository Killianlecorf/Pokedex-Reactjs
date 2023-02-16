import React from 'react';
import { NavLink } from 'react-router-dom';

const PokemonCard = ({name, img, id}) => {
    return (
        <div className='FlexCard'>
            <NavLink to={'/' + id}>
                <div className='BackCard'>
                    <div className='TitleCard'>
                        {name}
                    </div>
                    <div className='ImgContentCard'>
                        <img src={img}></img>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

export default PokemonCard;