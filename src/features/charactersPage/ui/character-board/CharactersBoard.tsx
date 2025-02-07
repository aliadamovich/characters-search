import { CharacterCard } from './CharacterCard'
import s from './character-board.module.scss'
import { Character } from 'features/charactersPage/api/apiTypes'

type Props = {
	characters: Character[] | undefined
}

export const CharactersBoard = ({characters}: Props) => {

	return (
		<div className={s.board}>
			{characters?.map(c => <CharacterCard character={c} key={c.id} />)}
		</div>
	)
}
