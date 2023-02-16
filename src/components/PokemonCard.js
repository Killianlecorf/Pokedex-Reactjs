import React from 'react';

const PokemonCard = ({name, img}) => {
    return (
        <div className='FlexCard'>
            <div className='BackCard'>
                <div className='TitleCard'>
                    {name}
                </div>
                <div className='ImgContentCard'>
                    <img src={img}></img>
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;