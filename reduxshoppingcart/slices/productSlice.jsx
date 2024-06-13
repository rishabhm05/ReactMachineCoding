import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

const URL ='https://fakestoreapi.com/products'
const initialState={
    products:[],
    loading:false,
    error:false
}
const fetchproductsfromapi = async()=>{
   let res = await fetch(URL);
   res = await res.json();
   return res;
}
export const fetchproducts = createAsyncThunk('products/fetchproducts',fetchproductsfromapi);
const porductSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
       
    },
    extraReducers(builder){
        builder.addCase(fetchproducts.pending,(state,action)=>{
           state.loading=true;
        })
        builder.addCase(fetchproducts.fulfilled,(state,action)=>{
            state.loading=false;
            state.products =action.payload;
        })
        builder.addCase(fetchproducts.rejected,(state,action)=>{
            state.error =true;
        })
    }
})
export default porductSlice.reducer;
