import { Libro } from "./Libro";

export interface Autor{
    id?: number,
    nombre: string,
    resumen: string,
    fechNacimiento: Date,
    libros: Libro[]
}
