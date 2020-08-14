import React from 'react';
import api from '../utils/api';
import Card from './Card';


function Main(props) {
    const [userName, setUserName] = React.useState('unknown');
    const [userDescription, setUserDescription] = React.useState('not found');
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([userData, initialCards]) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
                setCards(initialCards);
            })
            .catch(err => console.log(err));
    }, [])


    return (
        <main className="content">
            <section className="profile">
                <div className="profile__content">
                    <div className="profile__avatar-pics">
                        <img src={userAvatar} className="profile__avatar" alt="Жак-Ив Кусто" />
                        <button className="profile__edit" onClick={props.onEditAvatar}></button>
                    </div>

                    <div className="profile__info">
                        <div className="profile__author">
                            <h2 className="profile__author-name">{userName}</h2>
                            <button className="profile__button-edit" onClick={props.onEditProfile} aria-label="Редактировать"></button>
                        </div>
                        <p className="profile__about">{userDescription}</p>
                    </div>
                </div>
                <button className="profile__button-add" onClick={props.onAddPlace}></button>
            </section>

            <section className="elements">
                {cards.map(item => <Card key={item._id} card={item} onClick={props.onCardClick} />)}
            </section>
        </main>
    )
}

export default Main