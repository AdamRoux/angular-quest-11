import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CocktailService } from '../shared/services/cocktail.service';
import { Cocktail } from '../shared/models/cocktail.model';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  cocktails: Observable<Cocktail[]> | undefined;
    constructor(private cocktailService: CocktailService) {
      this.cocktails = this.cocktailService.getCocktails();
    }
   

  ngOnInit(): void {
    
  }

}
