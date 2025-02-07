import { ChangeEvent } from 'react'
import s from './search.module.scss'

type Props = {
	inputValue: string
	setInputValue: (value: string) => void
}

export const SearchInput = ({ inputValue, setInputValue }: Props) => {

	const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.currentTarget.value)
	}
	return (
		<div className={s.search}>
			<input
				type="text"
				placeholder='Search characters...'
				onChange={onChangeCallback}
				value={inputValue}
				className={s.input}
				autoFocus
			/>
		</div>
	)
}

