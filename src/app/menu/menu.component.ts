import { Component } from '@angular/core';
import { AlbumService } from '../album.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent {

    constructor(public albumService: AlbumService) {



    };//!funzione CREATA constructor

  

};//! funzione(classe) MenuComponent
