import { fromNullable, Option } from 'fp-ts/es6/Option'
import get from 'lodash.get'

export const optionGet = <T>(path: string) => (obj: T): Option<T> => fromNullable(get(obj, path))
