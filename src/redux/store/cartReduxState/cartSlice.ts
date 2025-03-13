import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Icart } from "../../../models/stateCart"

const initialState: Icart[] = [
    {
        id: 0,
        productName: "",
        unit: "",
        price: 0,
        quantity: 0,
        fullPrice: 0
    }
];

export const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {
        addProduct: (state, action: PayloadAction<Icart>) => {
            const existingItem = state.find((item) => item.id === action.payload.id);
            if(existingItem){
                existingItem.quantity++;
                
            }
            else{
                state.push({
                    id: action.payload.id,
                    productName: action.payload.productName,
                    unit: action.payload.unit,
                    price: action.payload.price,
                    quantity: action.payload.quantity,
                    fullPrice: action.payload.price
                });
            }
            
        },
        quantityPlus: (state, action: PayloadAction<number>) => {
            const item = state.find((item) => item.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },
        quantityMinus: (state, action: PayloadAction<number>) => {
            const item = state.find((item) => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            const index = state.findIndex((item) => item.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        }

    }

})

export const { addProduct,quantityPlus, quantityMinus,removeFromCart } = cartSlice.actions;
export default cartSlice.reducer