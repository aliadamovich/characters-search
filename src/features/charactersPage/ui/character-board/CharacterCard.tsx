import { transformDateFromISO } from '../../lib/transformDateFromIso'
import s from './character-board.module.scss'
import { Character } from 'features/charactersPage/api/apiTypes'

type Props = {
	character: Character
}

export const CharacterCard = ({ character } : Props) => {
	return (
		<a href={character.url} className={s.card} target='_blank'>
			<h2 className={s.characterName}>{character.name} - {character.species}</h2> 
			<div className={s.infoWrapper}>
				<p className={s.status}>Status: <span>{character.status}</span></p>
				<p className={s.date}>Created: {transformDateFromISO(character.created)}</p>
			</div>
		</a>
	)
}

