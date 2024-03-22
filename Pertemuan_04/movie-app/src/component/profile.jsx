import { useState } from 'react'

function Profile(props) {
    return (
        <div>   
            <h2>Nama Saya {props.name}</h2>
            <h3>I am {props.role} @Tiktopedia</h3>
        </div>
    );
}

export default Profile