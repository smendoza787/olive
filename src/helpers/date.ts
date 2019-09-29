import moment from 'moment'

export const prettyPrintDate = (date: any) => `${moment(date).fromNow()}`
