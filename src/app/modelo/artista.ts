import { Albums } from './album';


export class Artista {
    id: number;
    spotify_id: string;
    name: string;
    imagen: string;
    album: Albums[]=[];


    constructor(id: number,spotify_id: string,  nombre: string, imagen: string) {
        this.id = id;
        this.spotify_id = spotify_id;
        this.name = nombre;
        this.imagen = imagen;
    }
}