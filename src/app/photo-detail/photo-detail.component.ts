import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../album.service';
import { IPhoto } from '../models/photo';

@Component({
    selector: 'app-photo-detail',
    templateUrl: './photo-detail.component.html',
    styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit {
   

    arrayDiOggettiPhotos: IPhoto[] = [];

    caricamentoPhotos: boolean = true;

    messagioDiErrore?: string;




    constructor(private route: ActivatedRoute, private albumService: AlbumService, private location: Location) {


    };//!funzione CREATA constructor


    ngOnInit(): void {

        const valoreDInomeDiVariabileIdPresoDaURLBrowser = this.route.snapshot.paramMap.get("id");

        if(valoreDInomeDiVariabileIdPresoDaURLBrowser != null) {

            this.albumService.prenderePhotos(valoreDInomeDiVariabileIdPresoDaURLBrowser).subscribe((response) => {
                console.log(response);//! esso mi ritorna un array di oggetti.Esso lo vedo in Postman

                this.arrayDiOggettiPhotos = response;

                this.caricamentoPhotos = false;

            })


            this.messagioDiErrore = undefined;//!in questo modo pulisco il messaggio




        }
        else if(valoreDInomeDiVariabileIdPresoDaURLBrowser == null) {//! entro in in questo caso quando al posto di get("id") scrivo get("pippo") dove "pippo" non esiste come valore di path dentro il file "app-routing.module.ts"
            this.messagioDiErrore = "Variabile id NON trovato";




        }
      
      
    };//! funzione CREATA ngOnInit


    tornaIndietro() {
        this.location.back();



    }; //!funzione CREATA tornaIndietro


  







};//! classe(componente) PhotoDetailComponent
