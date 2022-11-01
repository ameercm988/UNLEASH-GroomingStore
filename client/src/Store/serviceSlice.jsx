import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


const initialState = {
  // isSubmitting : false,
  // isSubmitted : false,
  isFetching : false,
  isFetched : false,
  isError : false,
  erroMessage : "",
  services : []
}



 export const getServices = createAsyncThunk(
  "service/getservices",
   async (arg, thunkApi) => {
     try {
    const res = await fetch('/api/admin/services')
    const response = await res.json(res)
    // return response.services
    return thunkApi.fulfillWithValue(response.services)
    // setService(response.services)
  } catch (error) {
    return thunkApi.rejectWithValue(error.message)
  }
}
)

const serviceSlice = createSlice({
  name : 'service',
  initialState,
  reducers : {
    reset : (state) => {
      state.isError =  false
      state.erroMessage = ""
    }
  },

  extraReducers : (arg) => {
    arg
    .addCase(getServices.pending, (state) => {
      state.isFetching = true
    })

    .addCase(getServices.fulfilled, (state, action) => {
      console.log(action, 'form service reducer')
      state.isFetching = false
      state.services = action.payload
      state.isFetched = true
      state.isError = false
    })

    .addCase(getServices.rejected, (state, action) => {
      state.isFetching = false
      state.services = []
      state.isError = true
      state.isFetched =false
      state.erroMessage = action.payload
    })

  }
})


export const {reset} = serviceSlice.actions
export default serviceSlice.reducer

