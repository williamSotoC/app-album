import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsListComponent } from './albums-list/albums-list.component';
import { HomeComponent } from './home/home.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';

export const routes: Routes = [

    {
        path: "albums/:id",
        component: PhotoDetailComponent

    },

    {
       path: "albums", 
       component: AlbumsListComponent
    },


    {
        path: "home",
        component: HomeComponent
    },


    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"//!tecnicamente dopo il valore del path c'è uno spazio e "pathMatch: "full"" fa si che dopo il valore di questo path in specifico ci sia appunto un unico spazio
        // * esso si legge cosi: quando il path è una stringa VUOTA allora PORTAMI(RIDIREZIONAME) al path "/home"(ATTENZIONE SCRIVERE SEMPRE ALL'INIZIO LO SLESH) in questo modo il componente che comparira al posto del tag "<router-outlet" sara il componente "HomeComponent"

    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
