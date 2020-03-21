import moment from 'moment'

export const printRelativeDate = (date: any) => `${moment(date).fromNow()}`
export const printDate = (date: any) => `${moment(date).calendar()}`