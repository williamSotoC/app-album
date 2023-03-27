import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { routes } from './app-routing.module';
import { IAlbum } from './models/album';
import { IPhoto } from './models/photo';

@Injectable({
    providedIn: 'root'
})
export class AlbumService {

    coloreSfondo: string = 'red';

    constructor(private http: HttpClient) { }




    prendereAlbums(): Observable<IAlbum[]>{
       




        return this.http.get<IAlbum[]>("https://jsonplaceholder.typicode.com/albums");


    };//! funzione CREATA prendereAlbums


    prenderePhotos(valoreDInomeDiVariabileIdPresoDaURLBrowserr: string) : Observable<IPhoto[]>{

        return this.http.get<IPhoto[]>("https://jsonplaceholder.typicode.com/photos?albumId=" + valoreDInomeDiVariabileIdPresoDaURLBrowserr);



    };//!funzione CREATA prenderePhotos

    coloreSfondoSelezionato(voce: string) {
        if (routes[2].path == voce) {
            this.coloreSfondo = "red";


            
        }
        else if (routes[1].path == voce) {
            this.coloreSfondo = "yellow";

        }



    };//!funzione CREATA coloreSfondoSelezionato

    




};//! servizio AlbumService
