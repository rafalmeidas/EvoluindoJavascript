import { Imprimivel, Igualavel } from './index';

export interface MeuObjeto<T> extends Imprimivel, Igualavel<T>  { }