import { useEffect, useState } from 'react'
import { useLazyGetCharactersByNameQuery } from '../api/charactersApi'
import s from './characters-page.module.scss'
import { Character } from '../api/apiTypes'
import { CharactersBoard } from 'features/charactersPage/ui/character-board/CharactersBoard'
import { CustomPagination } from 'common/components/pagination/CustomPagination'
import { SearchInput } from 'common/components/searchInput/SearchInput'

const START_PAGE = 1;
const SEARCH_DELAY = 500;

export const CharactersPage = () => {

	const [getCharacters, { data, isError, error: err, isFetching }] = useLazyGetCharactersByNameQuery()
	const [charactersList, setCharactersList] = useState<Character[]>([]);
	const charactersQuantity = data?.info?.count;
	const [page, setPage] = useState(START_PAGE);
	const [inputValue, setInputValue] = useState('');

	let errMsg;
	if (err) {
		if ('data' in err) {
			const errData = err.data as { error: string }
			if ('error' in errData) {
				errMsg = errData.error
			}
		}
	}

	useEffect(() => {
		if (data?.results) {
			setCharactersList(data.results);
		} else if (isError) {
			setCharactersList([]);
		}
	}, [data, isError]);

	useEffect(() => {
		if (inputValue.length >= 3) {
			const handler = setTimeout(() => {
				setPage(START_PAGE);
				getCharacters({ name: inputValue, page: START_PAGE });
			}, SEARCH_DELAY);

			return () => clearTimeout(handler);
		}
	}, [inputValue, getCharacters]);


	const changePageNumber = (currentPage: number) => {
		setPage(currentPage)
		getCharacters({name: inputValue, page: currentPage})
	}


	return (
		<div className={s.wrapper}>
			<SearchInput
				inputValue={inputValue}
				setInputValue={setInputValue}
			/>
			{
				charactersQuantity && !isFetching && !isError && <p className={s.count}>Found characters: {charactersQuantity}</p>
			}
			{
				isError
					? <div className={s.error}>{errMsg}</div>
				: (!isFetching && charactersList.length > 0 && 
						<>
						<CharactersBoard characters={charactersList} />
						<CustomPagination pagesNumber={data?.info.pages || 0} changePageNumber={changePageNumber} page={page}/>
						</>
					)
			}
		</div>
	)
}

