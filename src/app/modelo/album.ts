import { Tracks } from './track';


export class Albums {

    id: number;
    spotify_id: string;
    name: string;
    year: number;
    imagen: string;
    loved: boolean;
    tracks: Tracks[]=[];
    constructor(id: number, spotify_id: string, name: string, year: number, imagen: string, loved: boolean, tracks: Tracks[]) {
        this.id = id;
        this.spotify_id = spotify_id;
        this.name = name;
        this.year = year;
        this.imagen = imagen;
        this.loved = loved;
        this.tracks = tracks;
    }
}