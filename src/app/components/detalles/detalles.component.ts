import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styles: [
  ]
})
export class DetallesComponent implements OnInit {

  heroes: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroeService: HeroesService
  ) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.heroes = this._heroeService.buscarHeroe(params['busqueda']);
    });
  }

}
