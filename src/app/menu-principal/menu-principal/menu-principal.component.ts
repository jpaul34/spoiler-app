import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {
  enlace_musica = '';
  enlace_audio_latino = '';
  enlace_ver_los_simpsons = '';
  enlace_facebook = '';
  enlace_twitter = '';
  enlace_ingresar = '';

  constructor() { }

  ngOnInit() {
  }

}
