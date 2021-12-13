import { TYPES } from "./actions";

export const initialState = {
    listFavoritos: [{
        id: 0,
        name: "",
        species: "",
        gender: "",
        house: "",
        dateOfBirth: "",
        yearOfBirth: "",
        ancestry: "",
        eyeColour: "",
        hairColour: "",
        wand: {
            wood: "",
            core: "",
            length: ""
        },
        patronus: "",
        hogwartsStudent: false,
        hogwartsStaff: false,
        actor: "",
        alive: false,
        image: ""
    }],
    listFav: [],
    modalType: null
};

export function admReducers(state = initialState, action) {

    switch (action.type) {
        case TYPES.ADD_ITEM_FAVORITE:

            let newItem = state.listFavoritos.find(
                (item) => item.id === action.payload
            );

            let itemFav = state.listFav.find((item) => item.id === newItem.id);

            return itemFav
                ? {
                    ...state,
                    listFav: state.listFav.map((item) =>
                        item.id === newItem.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                }
                : {
                    ...state,
                    listFav: [...state.listFav, { ...newItem, quantity: 1 }],
                };

            break;
        case TYPES.REMOVE_ITEM_FAVORITE:
            let itemDeleteFav = state.listFav.find((item) => item.id === action.payload);

            return itemDeleteFav.quantity > 1
                ? {
                    ...state,
                    listFav: state.listFav.map((item) =>
                        item.id === action.payload
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    ),
                }
                : {
                    ...state,
                    listFav: state.listFav.filter((item) => item.id !== action.payload),
                };

            break;
        case TYPES.SHOW_MODAL:
            break;
        case TYPES.HIDE_MODAL:
            break;
        default:
            return state;
    }
};