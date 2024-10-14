import {createSlice} from "@reduxjs/toolkit";


export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false,
    },
    reducers: {
        startLoadingPokemons: (state,) => {
           state.isLolading = true;
        },
        setPokemons: (state, action) => {
           state.isLolading = false;
           state.page = action.payload.page;
           state.pokemons = action.payload.pokemons;
        }
    }
})

export const {startLoadingPokemons, setPokemons} = pokemonSlice.actions;