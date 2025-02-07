import { configureStore } from "@reduxjs/toolkit"
import { charactersApi } from "../features/charactersPage/api/charactersApi"
import { setupListeners } from "@reduxjs/toolkit/query"

export const store = configureStore({
	reducer: {
		[charactersApi.reducerPath]: charactersApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(charactersApi.middleware),
})

setupListeners(store.dispatch)
