import React from 'react';


function NavHeader() {
    return (
        <>
            <nav  className="navSection">
                <div class="header">
                    <a class="active" href="#home">Favoritos</a>
                    <a class="active" href="#home">Agregar</a>
                </div>
            </nav>
        </>
    )
}

export default NavHeader;