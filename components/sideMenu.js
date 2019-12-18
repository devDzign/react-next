import React from 'react';

const SideMenu = ({nameApp, categories}) => {

    const renderCategories =  (categories) => {
        return categories.map(category => {
            return   <a href="#" className="list-group-item" key={category.id}> { category.name} </a>
        })
    }
    return (
        <>
            <h1 className="my-4">{nameApp}</h1>
            <div className="list-group">
                {renderCategories(categories)}
            </div>
        </>
    );
};

export default SideMenu;