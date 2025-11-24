import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Artista } from '../modelo/artista';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {
  @Input() artistas: Artista[] = [];
  @Output() artistaSeleccionado = new EventEmitter<Artista>();

  seleccionarArtista(artista: Artista) {
    this.artistaSeleccionado.emit(artista);
  }
}
