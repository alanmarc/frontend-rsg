import React from 'react';
import CardSkillArt from '../../styles/cardSkill-art';

export const CardSkill = ( props ) => {
  return (
    <CardSkillArt>
        <div className='card-skill'>
            <img src={props.url}/>
            <h4>{props.name}</h4>
        </div>
    </CardSkillArt>
  )
}
