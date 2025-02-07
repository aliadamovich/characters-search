import { Pagination } from "@mui/material"
import s from './pagination.module.scss'
import { ChangeEvent } from "react"

type Props = {
	pagesNumber: number
	page: number
	changePageNumber: (page: number) => void
}

export const CustomPagination = ({ pagesNumber, page, changePageNumber }: Props) => {

	const changePageHandler = (_: ChangeEvent<unknown>, page: number) => {
		changePageNumber(page)
	}
	return (
		<div className={s.pagination}>
			<Pagination
				count={pagesNumber}
				page={page}
				onChange={changePageHandler}
				shape="rounded" variant="outlined"
				color="primary"
				size="small"
				/>
		</div>
	)
}

