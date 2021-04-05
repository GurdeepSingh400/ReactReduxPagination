import {Add_To_Cart} from '../Constants'
// import {action} from '../Actions/Actions';


const initialState ={
    cardData:[]
   
}
// console.log(initialState,"carddata")
export default function carditems(state = initialState,action){
    console.log(action.payload,"hello")
    switch(action.type){
        case Add_To_Cart:{
            console.log("actions",action);
            console.warn('Reducers',action.type)
            return{
                ...state,
                cardData: action.payload
            }
        }
        
        default:
            return {
                ...state,
            }
    }

}