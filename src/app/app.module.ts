import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UceniciComponent } from './ucenici/ucenici.component';
import { UcenikDetaljiComponent } from './ucenik-detalji/ucenik-detalji.component';
import { RoditeljiComponent } from './roditelji/roditelji.component';
import { RoditeljDetaljiComponent } from './roditelj-detalji/roditelj-detalji.component';
import { OdeljenjaComponent } from './odeljenja/odeljenja.component';
import { RazredComponent } from './razred/razred.component';
import { NastavniciComponent } from './nastavnici/nastavnici.component';
import { PredmetiComponent } from './predmeti/predmeti.component';
import { OdeljenjeDetaljiComponent } from './odeljenje-detalji/odeljenje-detalji.component';
import { NastavnikDetaljiComponent } from './nastavnik-detalji/nastavnik-detalji.component';
import { PredmetDetaljiComponent } from './predmet-detalji/predmet-detalji.component';
import { UcenikService } from './ucenik.service';
import { PorukeComponent } from './poruke/poruke.component';
import { PorukeService } from './poruke.service';
import { AppRoutingModule } from './/app-routing.module';
import { PredmetService } from './predmet.service';
import { NastavnikService } from './nastavnik.service';
import { RoditeljService } from './roditelj.service';
import { OdeljenjeService } from './odeljenje.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { UcenikPretragaComponent } from './ucenik-pretraga/ucenik-pretraga.component';
import { PredmetOceneComponent } from './predmet-ocene/predmet-ocene.component';
import { OcenaComponent } from './ocena/ocena.component';
import { OcenaDetaljiComponent } from './ocena-detalji/ocena-detalji.component';
import { OcenaService } from './ocena.service';
import { NastavnikPretragaComponent } from './nastavnik-pretraga/nastavnik-pretraga.component';
import { NastavnikComponent } from './nastavnik/nastavnik.component';
import { NastavnikOdeljenjaComponent } from './nastavnik-odeljenja/nastavnik-odeljenja.component';
import { NastavnikUcenikComponent } from './nastavnik-ucenik/nastavnik-ucenik.component';
import { NastavnikOcenaComponent } from './nastavnik-ocena/nastavnik-ocena.component';
import { UcenikComponent } from './ucenik/ucenik.component';
import { RoditeljComponent } from './roditelj/roditelj.component';
import { UcenikPredmetComponent } from './ucenik-predmet/ucenik-predmet.component';
import { RoditeljPretragaComponent } from './roditelj-pretraga/roditelj-pretraga.component';
import { RoditeljUcenikComponent } from './roditelj-ucenik/roditelj-ucenik.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDetaljiComponent } from './admin-detalji/admin-detalji.component';
import { AdminPretragaComponent } from './admin-pretraga/admin-pretraga.component';
import { AdminServiceService } from './admin-service.service';
import { OcenaIzmenaComponent } from './ocena-izmena/ocena-izmena.component';
import { RazredService } from './razred.service';
import { RazredDetaljiComponent } from './razred-detalji/razred-detalji.component';
import { UcenikDodavanjeComponent } from './ucenik-dodavanje/ucenik-dodavanje.component';
import { UcenikOcenaComponent } from './ucenik-ocena/ucenik-ocena.component';
import { OcenaPretragaComponent } from './ocena-pretraga/ocena-pretraga.component';
import { AdminOcenaComponent } from './admin-ocena/admin-ocena.component';
import { AdminOcenaOdeljenjeComponent } from './admin-ocena-odeljenje/admin-ocena-odeljenje.component';
import { AdminOcenaUcenikComponent } from './admin-ocena-ucenik/admin-ocena-ucenik.component';
import { NastavnikPredajeComponent } from './nastavnik-predaje/nastavnik-predaje.component';
import { NastavnikPredajeDetaljComponent } from './nastavnik-predaje-detalj/nastavnik-predaje-detalj.component';




@NgModule({
  declarations: [
    AppComponent,
    UceniciComponent,
    UcenikDetaljiComponent,
    RoditeljiComponent,
    RoditeljDetaljiComponent,
    OdeljenjaComponent,
    RazredComponent,
    NastavniciComponent,
    PredmetiComponent,
    OdeljenjeDetaljiComponent,
    NastavnikDetaljiComponent,
    PredmetDetaljiComponent,
    PorukeComponent,
    DashboardComponent,
    UcenikPretragaComponent,
    PredmetOceneComponent,
    OcenaComponent,
    OcenaDetaljiComponent,
    NastavnikPretragaComponent,
    NastavnikComponent,
    NastavnikOdeljenjaComponent,
    NastavnikUcenikComponent,
    NastavnikOcenaComponent,
    UcenikComponent,
    RoditeljComponent,
    UcenikPredmetComponent,
    RoditeljPretragaComponent,
    RoditeljUcenikComponent,
    AdminComponent,
    AdminDetaljiComponent,
    AdminPretragaComponent,
    OcenaIzmenaComponent,
    RazredDetaljiComponent,
    UcenikDodavanjeComponent,
    UcenikOcenaComponent,
    OcenaPretragaComponent,
    AdminOcenaComponent,
    AdminOcenaOdeljenjeComponent,
    AdminOcenaUcenikComponent,
    NastavnikPredajeComponent,
    NastavnikPredajeDetaljComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UcenikService,
    PorukeService,
    PredmetService,
     NastavnikService,
      RoditeljService,
      OdeljenjeService,
       OcenaService,
        AdminServiceService,
        RazredService],
  bootstrap: [AppComponent]
})
export class AppModule { }
