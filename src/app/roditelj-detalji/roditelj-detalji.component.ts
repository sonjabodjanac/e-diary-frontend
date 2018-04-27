import { Component, OnInit, Input } from '@angular/core';
import { Roditelj } from '../roditelj';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RoditeljService } from '../roditelj.service';


@Component({
  selector: 'app-roditelj-detalji',
  templateUrl: './roditelj-detalji.component.html',
  styleUrls: ['./roditelj-detalji.component.css']
})
export class RoditeljDetaljiComponent implements OnInit {
  roditelj: Roditelj;
  constructor(private route: ActivatedRoute, private roditeljService: RoditeljService, private location: Location) { }

  ngOnInit() {
    this.getRoditelj();
  }

  getRoditelj(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.roditeljService.getRoditelj(id)
    .subscribe(roditelj => this.roditelj = roditelj);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
   this.roditeljService.updateRoditelj(this.roditelj)
     .subscribe(() => this.goBack());
 }
}
