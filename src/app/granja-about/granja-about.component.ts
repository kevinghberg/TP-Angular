import { Component, OnInit } from '@angular/core';
import { About } from './About';

@Component({
  selector: 'app-granja-about',
  templateUrl: './granja-about.component.html',
  styleUrls: ['./granja-about.component.scss']
})
export class GranjaAboutComponent implements OnInit {


  about: About = 
    {
    name: 'Granja Avicola',
    adress: 'Necochea - Ruta 86, KM 3',
    telefono: 2262590909,
    email: 'GranjaAvicola@gmail.com',
    instagram: 'GranjaAvicola.ok',
    };
  


  constructor() { }

  ngOnInit(): void {
  }

}
