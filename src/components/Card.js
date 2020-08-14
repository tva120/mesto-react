import React from 'react';


function Card(props) {
    function handleClick() {
        props.onClick(props.card);
    }

    return (
        <div className="element" key={props.card._id}>
            <img className="element__image" alt="" src={props.card.link} onClick={handleClick} />


            <div class="element__places">
                <h2 className="element__place">{props.card.name}</h2>
                <div className="element__likeblock">
                    <button className="element__button"></button>
                    <p className="element__likecount">{props.card.likes.length}</p>
                </div>
            </div>
            <button className="element__trash" type="button"></button>


            
        </div>
    )
}

export default Card