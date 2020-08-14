import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  
  
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

    const [selectedCard, setSelectedCard] = React.useState({
        isOpen: false,
        link: '',
        name: ''
    });

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }


    function handleCardClick(props) {
        setSelectedCard({
            isOpen: true,
            name: props.name,
            link: props.link
        });
    }

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard(false);
    }


    return (
        <div className="App">
            <div className="page">
                <Header />
                <Main
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
                    onCardClick={handleCardClick} />


                <PopupWithForm title="Обновить аватар" name="avatar" buttonName="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}
                    children={
                        <>
                            <input className="popup-container__infoform popup-container__infoform_avatar" name="avatar" id="avatar-input" type="url"
                                placeholder="Ссылка на аватар" required />
                            <span className="popup__error" id="avatar-input-error"></span>
                        </>
                    }
                />

                <PopupWithForm title="Редактировать профиль" name="info" buttonName="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}
                    children={
                        <>
                            <input className="popup-container__infoform popup-container__infoform_author" name="author" id="author-input"
                            type="text" placeholder="Автор" required minLength="2" maxLength="40" pattern="[A-Za-zА-ЯЁа-яё -]{1,}"/>

                            <span className="popup__error" id="author-input-error"></span>

                            <input className="popup-container__infoform popup-container__infoform_about" name="about" id="about-input"
                            type="text" placeholder="О себе" required minLength="2" maxLength="200"/> 

                            <span className="popup__error" id="about-input-error"></span>      
                        </>
                    }
                />

                <PopupWithForm title="Новое место" name="add" buttonName="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}
                    children={
                        <>
                            
                            <input className="popup-container__infoform popup-container__infoform_place-name" name="place-name" id="place-input"
                            type="text" placeholder="Название" required minLength="1" maxLength="30" />

                            <span className="popup__error" id="place-input-error"></span>

                            <input className="popup-container__infoform popup-container__infoform_place-link" name="link" id="link-input"
                            type="url" placeholder="Ссылка на картинку" required />

                            <span className="popup__error" id="link-input-error"></span>
                        </>
                    }
                />

                <PopupWithForm title="Вы уверены?" name="delete" buttonName="Да" isOpen={false} onClose={closeAllPopups} />

                <ImagePopup card={selectedCard} onClose={closeAllPopups} />
                <Footer />
            </div>
        </div>
    );
}

export default App;
