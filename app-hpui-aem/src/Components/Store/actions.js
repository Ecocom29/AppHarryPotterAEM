/* //Accion para agrega un item a la lista favoritos
const addLista = () => {
    return {
        type: "ADD_ITEM_FAVORITE",
        payload: 1
    };
};

//Accion para eliminar un item de la lista favoritos
const delLista = () => {
    return {
        type: "DEL_ITEM_FAVORITE",
        payload: -1
    };
};

const showModal = () =>{
    return {
        type: 'SHOW_MODAL',
        payload: true
    }
}

const hideModal = () =>{
    return {
        type: 'HIDE_MODAL',
        payload: false
    }
}

export { addLista, delLista, showModal, hideModal } */

export const TYPES = {
    ADD_ITEM_FAVORITE: "ADD_ITEM_FAVORITE",
    REMOVE_ITEM_FAVORITE: "REMOVE_ITEM_FAVORITE",
    SHOW_MODAL: "SHOW_MODAL",
    HIDE_MODAL: "HIDE_MODAL",
};