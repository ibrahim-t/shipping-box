import { createSlice } from '@reduxjs/toolkit'

const shippingBoxSlice = createSlice({
  name: 'shippingList',
  initialState: [ {
        "id": 1,
        "recieverName": "John Doe",
        "weight": 5,
        "color": "#ff5733",
        "destinationCountry": "Sweden",
        "calculatedCost": "36.75"
    },
    {
        "id": 2,
        "recieverName": "Jane Smith",
        "weight": 10,
        "color": "#33ff57",
        "destinationCountry": "China",
        "calculatedCost": "115.30"
    }],
  reducers: { 
    onAddBox(state, action) {
     state.push({
        id: state.length+1,
        recieverName: action.payload.recieverName,
        weight: action.payload.weight,
        color: action.payload.color,
        destinationCountry: action.payload.destinationCountry,
        calculatedCost: action.payload.calculatedCost
      });
    },
  }
})

export const { onAddBox } = shippingBoxSlice.actions
export default shippingBoxSlice.reducer;