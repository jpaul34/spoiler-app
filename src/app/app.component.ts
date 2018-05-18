import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  mostrarhola = true;
  arregloNumeros = [1, 2, 3, 4, 5, 6];
  arregloPeliculas = [
    {
      nombre: 'Tomb Raider',
      descripcion: 'Alicia Vikander, Waiton Goggins',
      esEstreno: false,
      urlImagen: 'https://3.bp.blogspot.com/-k7zDFVoIjlQ/WtbqqkqyiJI/AAAAAAABIaA/jMagN1tbSRktvxQg3GCm5p9W51gIT1Y3QCLcBGAs/s640/21.jpg'
    },
    {
      nombre: 'Ready Player One',
      descripcion: 'Tye Sheridan, olivia Cooke, Ben Mendelsohn, Lena Waithe, T.J. Miller ',
      esEstreno: false,
      urlImagen: 'https://4.bp.blogspot.com/-qBM29u2l2RQ/Wtbr6Kf_O_I/AAAAAAABIaM/O8Pvb-8FkPYL1cCjl9Iuv0PrCa5Y0PwNACLcBGAs/s640/21.jpg'
    }
  ];


  alerta(evento) {
    console.log('Evento: ', evento); // true
    alert('DIO CLICK EN ES ESTRENO!!!!!!!!!');
  }


  // tituloPelicula1 = 'Tomb Raider';
  // urlImagen1 = 'https://3.bp.blogspot.com/-k7zDFVoIjlQ/WtbqqkqyiJI/AAAAAAABIaA/jMagN1tbSRktvxQg3GCm5p9W51gIT1Y3QCLcBGAs/s640/21.jpg';
  // esEstreno1 = true;
  //
  // tituloPelicula2 = 'Ready Player One';
  // urlImagen2 = 'https://4.bp.blogspot.com/-qBM29u2l2RQ/Wtbr6Kf_O_I/AAAAAAABIaM/O8Pvb-8FkPYL1cCjl9Iuv0PrCa5Y0PwNACLcBGAs/s640/21.jpg';
  // esEstreno2 = true;
  //
  // tituloPelicula3 = 'Black Panther';
  // urlImagen3 = 'https://3.bp.blogspot.com/-cer-MDx0pjI/Wule4fPRBBI/AAAAAAABIxk/w-bvH1NYm2Usluj5XOvG9iKVf42riOIZACLcBGAs/s640/21.jpg';
  // tituloPelicula4 = 'Maze Runner. The Death Cure';
  // esEstreno3 = false;
  //
  // urlImagen4 = 'https://2.bp.blogspot.com/-9cqXBbRWCo0/Wszm1D3qG1I/AAAAAAABIOE/Ctruh8J5oIUbxQkwVgtvKqYgXLjMJS38wCLcBGAs/s640/21.jpg';
  // tituloPelicula5 = 'Star Wars: Episode VIII - The Last Jedi';
  // esEstreno4 = false;
  //
  // urlImagen5 = 'https://2.bp.blogspot.com/-yqJSNm11448/WqQRmB8hAMI/AAAAAAABHiE/NisVeejgFTcdioxsELm6J_j6vTprjZ7uACLcBGAs/s640/21.jpg';
  // esEstreno5 = false;
  //
  // tituloPelicula6 = 'Justice League';
  // urlImagen6 = 'https://2.bp.blogspot.com/-CUuJRcK3LNU/Wn9VDn2LGoI/AAAAAAABG1w/C6Rg8fJnPIE_1aVuLk0J3YTOmZJaMadhQCLcBGAs/s640/21.jpg';
  // esEstreno6 = false;
  //
  // tituloPelicula7 = '';
  // urlImagen7 = 'https://4.bp.blogspot.com/-aixDyGmBH3A/Wv6HBkNJM4I/AAAAAAABJE0/LBm7AXxzgog4bzRHl_H6tI2stBXk2quuQCLcBGAs/s640/21.jpg';
  // esEstreno0 = null;
  //
  // tituloPelicula8 = '';
  // urlImagen8 = 'https://4.bp.blogspot.com/-PWpyC8cR2ho/Wv6Ekl8slfI/AAAAAAABJEo/H4IZYKoRDB8GxU9xfbp32O3GLNPV99CqACLcBGAs/s640/21.jpg';
  // esEstreno0 = null;
  //
  // tituloPelicula9 = '';
  // urlImagen9 = 'https://4.bp.blogspot.com/-DhqDORi352Q/Wv6BSErBxsI/AAAAAAABJEc/0nBM4Zv4olkQkHGGhEKRFzneN_xVcy6MACLcBGAs/s640/21.jpg';
  // esEstreno0 = null;
  //
  // tituloPelicula10 = '';
  // urlImagen10 = 'https://2.bp.blogspot.com/-AIXZuRj7ZS0/Wv5-tK6tMvI/AAAAAAABJEQ/_B6-kjk6W-8y_ZLTJQ3GbpGnFyBquh9dQCLcBGAs/s640/21.jpg';
  // esEstreno0 = null;
  //
  // tituloPelicula11 = '';
  // urlImagen11 = 'https://4.bp.blogspot.com/-qHQC3f5ig5o/Wv58gkxj3WI/AAAAAAABJEE/qeONOnOcG5UPvNN7zyFvE3a2gcf8_mH1ACLcBGAs/s640/21.jpg';
  // esEstreno0 = null;
  //
  // tituloPelicula12 = '';
  // urlImagen12  = 'https://3.bp.blogspot.com/-9m47QXrJhnY/Wv55x170TkI/AAAAAAABJD4/xlAv3PbxYIIULNe96Ag7QlagfzF5DaBrgCLcBGAs/s640/21.jpg';
  // esEstreno0 = null;
  //
  // tituloPelicula13 = '';
  // urlImagen13  = 'https://4.bp.blogspot.com/-82sSVE9Bkt8/Wv52qqrHLEI/AAAAAAABJDs/1FCjdDNJJTYKgG7p38snEd81n-crZTU5gCLcBGAs/s320/21.jpg';
  // esEstreno0 = null;
  //
  // tituloPelicula14 = '';
  // urlImagen14  = 'https://2.bp.blogspot.com/-mSLkU_AKSJ0/Wv5xyQUe7pI/AAAAAAABJDg/RPQjEfEJIE8Qzn9GJWV3y1eocPwCjYKqgCLcBGAs/s320/21.jpg';
  // esEstreno0 = null;

}
