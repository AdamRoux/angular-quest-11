import { HttpClient } from '@angular/common/http';
import { Injectable } from  '@angular/core';
import { Cocktail } from '../models/cocktail.model';

@Injectable({
        providedIn:  'root'
})

export  class  CocktailService {

   
    
      constructor(private http: HttpClient) { 
         
      }
    
      public getCocktails() {
        return this.http.get<Cocktail[]>('assets/cocktails.json');
      }


}