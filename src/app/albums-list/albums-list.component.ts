import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { IAlbum } from '../models/album';

@Component({
    selector: 'app-albums-list',
    templateUrl: './albums-list.component.html',
    styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnInit {
   
    arrayDiOggettiAlbums: IAlbum[] = [];

    caricamentoPhotos: boolean = true;


    constructor(private albumService: AlbumService, private location: Location ) {


    };//! funzione CREATA constructor



    ngOnInit(): void {

       this.getAlbums();

      
    };//! funzione CREATA ngOnInit



    getAlbums() {
        this.caricamentoPhotos = true;//! esso lo scrivo per sicurezza


        this.albumService.prendereAlbums().subscribe((response) => {
            console.log(response);//! esso mi ritorna un UNICO array di oggetti
            // ! let response = [{},{},{},{},{},{},{},{},{},{}]

            this.arrayDiOggettiAlbums = response;

            this.caricamentoPhotos = false;

        })



    };//! funzione CREATA getAlbums


    tornaIndietro(voce: string) {
        this.location.back();
        this.albumService.coloreSfondoSelezionato(voce);



    }; //!funzione CREATA tornaIndietro



};//! classe(componente) AlbumsListComponent
