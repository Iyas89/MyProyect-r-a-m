import { ADD_FAV, ORDER, REMOVE_FAV, FILTER } from "./action-types.js"
const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAV :
            return { ...state, myFavorites: action.payload,};
            case REMOVE_FAV :
                return { ...state, myFavorites: action.payload, allCharacters: action.payload };
            case FILTER:
                if(action.payload === "todos"){
                    return {
                        ...state,
                        myFavorites: [...state.myFavorites]
                    }
                } else{
                return {
                 ...state,
                   myFavorites: state.allCharacters.filter(
                  (character) => character.gender === action.payload),
              }};

              case ORDER:
                return {
                    ...state,
                    myFavorites: action.payload === 'A' ? [...state.myFavorites.sort((a, b) => a.id - b.id)] : [...state.myFavorites.sort((a, b) => b.id - a.id)]
                }


        default :
         return {...state}
    }
}

export default reducer;