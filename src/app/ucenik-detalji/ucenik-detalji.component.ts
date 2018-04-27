import { Component, OnInit, Input} from '@angular/core';
import { Ucenik } from '../ucenik';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UcenikService } from '../ucenik.service';

@Component({
  selector: 'app-ucenik-detalji',
  templateUrl: './ucenik-detalji.component.html',
  styleUrls: ['./ucenik-detalji.component.css']
})
export class UcenikDetaljiComponent implements OnInit {
    @Input() ucenik: Ucenik;

  constructor(private route: ActivatedRoute, private ucenikService: UcenikService, private location: Location) { }

  ngOnInit() {
    this.getUcenika();
  }

getUcenika(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.ucenikService.getUcenik(id)
  .subscribe(ucenik => this.ucenik = ucenik);
}

goBack(): void {
  this.location.back();
}

save(): void {
 this.ucenikService.updateUcenik(this.ucenik)
   .subscribe(() => this.goBack());
}

}
