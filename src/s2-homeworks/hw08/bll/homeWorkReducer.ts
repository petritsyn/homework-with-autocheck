import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            // sort() создаёт новый массив? или нужно в ручную?...
            return [...state.sort((a: UserType, b: UserType) => {
                if (action.payload === 'up') {
                    if (a.name < b.name) {return -1}
                    if (a.name > b.name) {return 1}
                } else if (action.payload === 'down') {
                    if (a.name > b.name) {return -1}
                    if (a.name < b.name) {return 1}
                }
                return 0
            })]
        }
        case 'check': {
            // filter() создаёт новый массив? или нужно в ручную?...
            return state.filter((el: UserType) => el.age > 17).reverse()
        }
        default:
            return state
    }
}
