import { createSlice } from "@reduxjs/toolkit";
const person={memebres:[]}

const randomPersonSlice=createSlice({
    name:'PersonRandom',
    initialState:person,
    reducers:{
        Ajouter:function(state,action){
            state.memebres.push(action.payload)
         },
         
         Supremier: function (state, action) {
            const personEnToRemove = action.payload;
            state.memebres = state.memebres.filter((membre) => membre.personEn !== personEnToRemove);
          }
          
      
    }
})
export default randomPersonSlice.reducer;
export const{Ajouter,Supremier}=randomPersonSlice.actions;