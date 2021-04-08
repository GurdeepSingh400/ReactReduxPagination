import {Add_To_Cart, Edit_Button} from '../Constants'
import {Delete_Button} from '../Constants'
// import {action} from '../Actions/Actions';


const initialState ={
    cardData:[],
    totalPages : ""
   
}
// console.log(initialState,"carddata")
export default function carditems(state = initialState,action){
    console.log(action.payload,"hello")
    switch(action.type){
        case Add_To_Cart:{
            console.log("actions",action);
            console.log('Reducers',action.payload.totalPages)
            
            return{
                ...state,
                cardData: action.payload,
                totalPages: action.payload.totalPages
            }
        }
  
        case Delete_Button: {
            console.log(state,"lllllllllllllllllllllllllllllll")
            const deletedata = state.cardData.data.filter((values)=>{return !(values._id.includes(action.payload))})
            console.log(deletedata,"deletedata")

            return{
                ...state,
                cardData: {
                    data: deletedata
                }
            }
        }

        case Edit_Button :{
            console.log(state,"Editbtn")
            console.log(' action.payload', action.payload)
            debugger
            const editdata = state.cardData.data.filter((editvalues) => {return (editvalues._id.includes(action.payload))} )

            // if(id = pad.){
                
            // }
            console.log(editdata,"editdata")
            // console.log(editvalues,"editvalues")
            
            //  editdata[0].name = action.payload.name;

            // editdata[0].name = action.payload.name;
        }
        return({

            ...state,
        })
        
        default:
            return {
                ...state,
            }
    }

}


