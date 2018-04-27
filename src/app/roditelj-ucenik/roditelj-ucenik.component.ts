import { Component, OnInit } from '@angular/core';
import { UcenikService } from '../ucenik.service';
import { Ucenik } from '../ucenik';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-roditelj-ucenik',
  templateUrl: './roditelj-ucenik.component.html',
  styleUrls: ['./roditelj-ucenik.component.css']
})
export class RoditeljUcenikComponent implements OnInit {
ucenik: Ucenik;
ucenici: Ucenik[];
roditeljId: number;
  constructor(private ucenikService: UcenikService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getUcenikeByRoditelj();
  }

  getUcenikeByRoditelj(): void {
    this.roditeljId = +this.route.snapshot.paramMap.get('id');
    this.ucenikService.getUcenikeByRoditelj(this.roditeljId).subscribe(ucenici => this.ucenici  = ucenici);
  }

}
