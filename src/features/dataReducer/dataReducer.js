import { createSlice } from "@reduxjs/toolkit";

export const dataReducer = createSlice({
  name: "counter",
  initialState: {
    dataUserPets: [],
    file: "",
    value: {},
    dataUser: "",
    counterPetSelected: "",
    counterDataForm: {},
    lostPets: {},
    refreshThisSelector: false,
    isOpened: false, // Initialize isOpened to a default value (e.g., false)
    newMarkerValue: [],
  },
  reducers: {
    positionValue: (state, action) => {
      console.log('state,action',state,action)
      state.value = action.payload;
    },
    imageValue: (state, action) => {
      state.file = action.payload.base64String;
    },
    newMarkerValue: (state, action) => {
      console.log('newMarker',state,action)
      state.newMarkerValue = [
        action.payload.latitude,
        action.payload.longitude,
      ];
    },
    userPets: (state, action) => {
      state.dataUserPets = {
        userPets: action.payload,
      };
    },
    userData: (state, action) => {
      state.dataUser = {
        userData: action.payload,
      };
    },
    petLost: (state, action) => {
      state.lostPets = {
        petLost: action.payload,
      };
    },
    petSelected: (state, action) => {
      state.counterPetSelected = {
        petSelected: action.payload,
      };
    },
    formValue: (state, action) => {
      state.counterDataForm = {
        formValue: action.payload,
      };
    },
    refreshThis: (state, action) => {
      console.log("state,action", state, action);
      state.refreshThisSelector = {
        refreshThis: action.payload,
      };
    },
    isOpen: (state, action) => {
      state.isOpened = {
        isOpen: action.payload,
      };
    },
  },
});

export const { userPets } = dataReducer.actions;
export const { userData } = dataReducer.actions;
export const { petSelected } = dataReducer.actions;
export const { formValue } = dataReducer.actions;
export const { petLost } = dataReducer.actions;
export const { refreshThis } = dataReducer.actions;
export const { isOpen } = dataReducer.actions;
export const { imageValue, positionValue, newMarkerValue } =
  dataReducer.actions;

export const userPet = (state) => state.counter.dataUserPets;
export const usersData = (state) => state.counter.dataUser;
export const counterPetSelected = (state) => state.counter.counterPetSelected;
export const counterDataForm = (state) => state.counter.counterDataForm;
export const lostPets = (state) => state.counter.lostPets;
export const refresh = (state) => state.counter.refreshThisSelector;
export const openModal = (state) => state.counter.isOpened;
export const selectCount = (state) => state.counter.file;
export const position = (state) => state.counter.value;
export const markerValue = (state) => state.counter.newMarkerValue;

export default dataReducer.reducer;
