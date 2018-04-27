import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UceniciComponent } from './ucenici/ucenici.component';
import { NastavniciComponent } from './nastavnici/nastavnici.component';
import { RoditeljiComponent } from './roditelji/roditelji.component';
import { OdeljenjaComponent } from './odeljenja/odeljenja.component';
import { PredmetiComponent } from './predmeti/predmeti.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UcenikDetaljiComponent } from './ucenik-detalji/ucenik-detalji.component';
import { NastavnikDetaljiComponent } from './nastavnik-detalji/nastavnik-detalji.component';
import { RoditeljDetaljiComponent } from './roditelj-detalji/roditelj-detalji.component';
import { PredmetDetaljiComponent } from './predmet-detalji/predmet-detalji.component';
import { OdeljenjeDetaljiComponent } from './odeljenje-detalji/odeljenje-detalji.component';
import { OcenaDetaljiComponent } from './ocena-detalji/ocena-detalji.component';
import { NastavnikComponent } from './nastavnik/nastavnik.component';
import { NastavnikOdeljenjaComponent } from './nastavnik-odeljenja/nastavnik-odeljenja.component';
import { NastavnikUcenikComponent } from './nastavnik-ucenik/nastavnik-ucenik.component';
import { NastavnikOcenaComponent } from './nastavnik-ocena/nastavnik-ocena.component';
import { UcenikComponent } from './ucenik/ucenik.component';
import { RoditeljComponent } from './roditelj/roditelj.component';
import { UcenikPredmetComponent } from './ucenik-predmet/ucenik-predmet.component';
import { RoditeljUcenikComponent } from './roditelj-ucenik/roditelj-ucenik.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDetaljiComponent } from './admin-detalji/admin-detalji.component';
import { OcenaIzmenaComponent } from './ocena-izmena/ocena-izmena.component';
import { RazredDetaljiComponent } from './razred-detalji/razred-detalji.component';
import { UcenikDodavanjeComponent } from './ucenik-dodavanje/ucenik-dodavanje.component';
import { RazredComponent } from './razred/razred.component';
import { UcenikOcenaComponent } from './ucenik-ocena/ucenik-ocena.component';
import { OcenaComponent } from './ocena/ocena.component';
import { AdminOcenaComponent } from './admin-ocena/admin-ocena.component';
import { AdminOcenaOdeljenjeComponent } from './admin-ocena-odeljenje/admin-ocena-odeljenje.component';
import { AdminOcenaUcenikComponent } from './admin-ocena-ucenik/admin-ocena-ucenik.component';
import { NastavnikPredajeComponent } from './nastavnik-predaje/nastavnik-predaje.component';
import { NastavnikPredajeDetaljComponent } from './nastavnik-predaje-detalj/nastavnik-predaje-detalj.component';





const routes: Routes = [
  { path: 'ucenici', component: UceniciComponent },
  { path: 'roditelji', component: RoditeljiComponent },
  { path: 'nastavnici', component: NastavniciComponent },
  { path: 'odeljenja', component: OdeljenjaComponent },
  { path: 'predmeti', component: PredmetiComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'ucenik-detalji/:id', component: UcenikDetaljiComponent },
  { path: 'roditelj-detalji/:id', component: RoditeljDetaljiComponent },
  { path: 'nastavnik-detalji/:id', component: NastavnikDetaljiComponent },
  { path: 'predmet-detalji/:id', component: PredmetDetaljiComponent },
  { path: 'odeljenje-detalji/:id', component: OdeljenjeDetaljiComponent },
  { path: 'ocena-detalji', component: OcenaDetaljiComponent},
  { path: 'nastavnik', component: NastavnikComponent },
  { path: 'nastavnik/:id', component: NastavnikOdeljenjaComponent },
  { path: 'nastavnik/:nId/:pId', component: NastavnikUcenikComponent },
  { path: 'nastavnik/:nId/:pId/:uId', component: NastavnikOcenaComponent },
  { path: 'ucenik', component: UcenikComponent },
  { path: 'roditelj', component: RoditeljComponent },
  { path: 'ucenik/:id', component: UcenikPredmetComponent },
  { path: 'roditelj/:id', component: RoditeljUcenikComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin-detalji/:id', component: AdminDetaljiComponent},
  { path: 'ocena/:id', component: OcenaIzmenaComponent },
  { path: 'razred/:id', component: RazredDetaljiComponent },
  { path: 'ucenik-dodavanje', component: UcenikDodavanjeComponent },
  { path: 'razredi', component: RazredComponent },
  { path: 'ucenik-ocena/:uId/:pId', component: UcenikOcenaComponent },
  { path: 'ocena', component: OcenaComponent },
  { path: 'admin-ocena/:id', component: AdminOcenaOdeljenjeComponent },
  { path: 'admin-ocena/:nId/:pId', component: AdminOcenaUcenikComponent },
  { path: 'admin-ocena/:nId/:pId/:uId', component: AdminOcenaComponent },
  { path: 'nastavnik-predaje', component: NastavnikPredajeComponent },
  { path: 'nastavnik-predaje/:id', component: NastavnikPredajeDetaljComponent }




];



@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
