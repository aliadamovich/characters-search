import dayjs from "dayjs"

export const transformDateFromISO = (date: string): string => {
	return dayjs(date).format("DD.MM.YYYY")
}
