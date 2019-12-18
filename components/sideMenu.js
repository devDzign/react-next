import React from 'react';
import Modal from './modal'
import MovieCreateForm from './movieCreateForm'

const SideMenu = ({nameApp, categories}) => {

    const renderCategories =  (categories) => {
        return categories.map(category => {
            return   <a href="#" className="list-group-item" key={category.id}> { category.name} </a>
        })
    }
    return (
        <>
            <Modal>
                <MovieCreateForm />
            </Modal>
            <h1 className="my-4">{nameApp}</h1>
            <div className="list-group">
                {renderCategories(categories)}
            </div>
        </>
    );
};

export default SideMenu;