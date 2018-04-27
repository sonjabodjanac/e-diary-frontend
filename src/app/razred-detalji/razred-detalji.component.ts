import { Component, OnInit } from '@angular/core';
import { Razred } from '../razred';
import { RazredService } from '../razred.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-razred-detalji',
  templateUrl: './razred-detalji.component.html',
  styleUrls: ['./razred-detalji.component.css']
})
export class RazredDetaljiComponent implements OnInit {

  razred: Razred;

  constructor(private razredService: RazredService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.getRazred();
  }

  getRazred(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.razredService.getRazred(id)
     .subscribe(razred => this.razred = razred);
  }
  goBack(): void {
    this.location.back();
  }


  save(): void {
   this.razredService.updateRazred(this.razred)
     .subscribe(() => this.goBack());
 }

}
