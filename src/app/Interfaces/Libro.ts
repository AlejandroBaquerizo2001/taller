import { Autor } from "./Autor";
import { Genero } from "./Genero";

export interface Libro{
    id?: number,
    nombre: string,
    generoId: number,
    genero?: Genero,
    estado: number,
    autorId: number,
    autor?: Autor
}

