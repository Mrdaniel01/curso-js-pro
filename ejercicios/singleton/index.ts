import Singleton from './Singleton.ts';

const a = Singleton.getInstance()
const b = Singleton.getInstance()

console.log('A es igal a B', a === b)