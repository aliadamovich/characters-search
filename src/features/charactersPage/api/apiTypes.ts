
type Info = {
	count: number
	pages: number
	next: string | null
	prev: string | null
}

type Location = {
	name: string
	url: string
}

export type Character = {
	id: number
	name: string
	status: "Alive" | "Dead" | "unknown" 
	species: string
	type: string
	gender: "Male" | "Female" | "unknown"
	origin: Location
	location: Location
	image: string
	episode: string[] 
	url: string
	created: string 
}

export type CharactersResponse = {
	info: Info
	results: Character[]
}