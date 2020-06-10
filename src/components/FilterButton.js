import React from 'react';

export default props => {
    return (
        <button className={`filters__item ${props.nameSelected === props.name ? 'is-selected' : '' }`} onClick={() => props.handleClick(props.name)}>
            {props.item} <i className="fas fa-sort-down" />
        </button>
    )
}