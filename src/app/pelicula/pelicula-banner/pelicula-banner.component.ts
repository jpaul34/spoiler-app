import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pelicula-banner',
  templateUrl: './pelicula-banner.component.html',
  styleUrls: ['./pelicula-banner.component.css']
})
export class PeliculaBannerComponent implements OnInit {

  @Input() urlImagen: String;
    // 'https://3.bp.blogspot.com/-k7zDFVoIjlQ/WtbqqkqyiJI/AAAAAAABIaA/jMagN1tbSRktvxQg3GCm5p9W51gIT1Y3QCLcBGAs/s640/21.jpg';
  descripcionImagen = 'Imagen de la pelicula Tomb Raider';
  @Input() nombrePelicula = 'Tomb Raider';
  descripcionPelicula = 'Alicia vikander,Walton Googins';
  colorBoton = 'alert alert-primary';
  texto = '1';

  @Input() esEstreno: true;
  textoEstreno: string;
  claseEstreno: string;

  constructor() {
  }


  ngOnInit() {
    if (this.esEstreno === true) {
      this.textoEstreno = 'Estreno';
      this.claseEstreno = 'sa-color-estado-rosado';
    } else {
      this.textoEstreno = 'Proximamente';
      this.claseEstreno = 'sa-color-estado-amarillo';
      if (this.esEstreno === null){
        this.textoEstreno = '';
        this.claseEstreno = '';
      }
    }
  }

}
