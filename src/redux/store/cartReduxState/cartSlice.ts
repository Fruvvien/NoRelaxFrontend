import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Icart } from "../../../models/stateCart"

const initialState: Icart[] = [
    {
        id: 0,
        productName: "",
        unit: "",
        price: 0,
        quantity: 0
    }
];

export const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {
        addProduct: (state, action: PayloadAction<Icart>) => {
            state.push({
                id: action.payload.id,
                productName: action.payload.productName,
                unit: action.payload.unit,
                price: action.payload.price,
                quantity: action.payload.quantity
            });
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

    }

})

export const { addProduct,quantityPlus, quantityMinus } = cartSlice.actions;
export default cartSlice.reducer