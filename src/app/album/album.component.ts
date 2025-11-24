import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Album } from '../modelo/album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  @Input() albums: Album[] = [];
  @Output() albumSeleccionado = new EventEmitter<Album>();

  seleccionarAlbum(album: Album) {
    this.albumSeleccionado.emit(album);
  }
}
