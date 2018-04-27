import { Component, OnInit } from '@angular/core';
import { Ucenik } from '../ucenik';
import { Nastavnik } from '../nastavnik';
import { Roditelj } from '../roditelj';
import { Predmet } from '../predmet';
import { Odeljenje } from '../odeljenje';
import { UcenikService } from '../ucenik.service';
import { RoditeljService } from '../roditelj.service';
import { NastavnikService } from '../nastavnik.service';
import { OdeljenjeService } from '../odeljenje.service';
import { PredmetService } from '../predmet.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ucenici: Ucenik[] = [];
  nastavnici: Nastavnik[] = [];
  roditelji: Roditelj[] = [];
  odeljenja: Odeljenje[] = [];
  predmeti: Predmet[] = [];


  constructor(private ucenikService: UcenikService, private nastavnikService: NastavnikService,
  private roditeljService: RoditeljService, private odeljenjeService: OdeljenjeService,
  private predmetService: PredmetService) { }

  ngOnInit() {
  }

// naknadno dodati sadrzaj











}
