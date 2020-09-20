import { greet } from './hello'
import { vizVersion } from './vizGraph'

export const greet2 = () => { return console.log(" Mark") }
export const greet4 = greet

greet2()
greet4()
console.log(vizVersion)