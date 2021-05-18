import React from 'react';

function UserItem(props) {
    const {name, email, img, isGoldClient} = props;
    return(
        <div >
            <p >{name}</p>
            <p>{email}</p>
            <img src={img} alt="user"/>
            { isGoldClient 
                ? <p>Client GOLD</p> 
                : null
            }
        </div>
    )
}

export default UserItem;