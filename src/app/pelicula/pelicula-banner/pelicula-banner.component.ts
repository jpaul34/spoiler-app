import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pelicula-banner',
  templateUrl: './pelicula-banner.component.html',
  styleUrls: ['./pelicula-banner.component.css']
})
export class PeliculaBannerComponent implements OnInit {

  // urlImagen = 'https://3.bp.blogspot.com/-k7zDFVoIjlQ/WtbqqkqyiJI/AAAAAAABIaA/jMagN1tbSRktvxQg3GCm5p9W51gIT1Y3QCLcBGAs/s640/21.jpg';
  // descripcionImagen = 'Imagen de la pelicula Tomb Raider';
  @Input() urlImagen: String;
  @Input() descripcionImagen: String;
  @Input() nombrePelicula: String;
  @Input() descripcionPelicula: String;
  @Input() esEstreno: boolean;
  textoEstreno: string;
  claseEstreno: string;
  @Output() dioClickEnEstado: EventEmitter<boolean> = new EventEmitter();

  constructor() {
    //Las variables serán undefined
    //Nunca meter la logica
    // Es solo apra la logica de los servicio y no para los componentes
  }

  ngOnInit () {
    console.log('Inicio y seteo color ', this.nombrePelicula);
    this.setearColoryClase();
  }

  ngOnChanges(propiedadesActualizadas) {
    console.log('Algo', propiedadesActualizadas);
    if (propiedadesActualizadas.esEstreno) {
      this.setearColoryClase();
    }
  }


  setearColoryClase() {
    if (this.esEstreno === true) {
      this.textoEstreno = 'Estreno';
      this.claseEstreno = 'sa-color-estado-rosado';
    } else {
      this.textoEstreno = 'Proximamente';
      this.claseEstreno = 'sa-color-estado-amarillo';
      if (this.esEstreno === null) {
        this.textoEstreno = '';
        this.claseEstreno = '';
      }
    }
  }


  hizoClickEnEstado() {
    this.dioClickEnEstado.emit(true);
  }


}
