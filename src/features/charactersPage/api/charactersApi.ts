import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { CharactersResponse } from "./apiTypes"


export const charactersApi = createApi({
	reducerPath: "charactersApi",
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_API_URL,
	}),
	endpoints: (build) => ({
		getCharactersByName: build.query<CharactersResponse, {name: string, page: number}>({
			query: (args) => ({
				url: "character",
				params: {...args},
			}),
		}),
	}),
})

export const { useLazyGetCharactersByNameQuery } = charactersApi
