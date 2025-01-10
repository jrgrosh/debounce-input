import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

export const EXAMPLE_DOMAIN = "https://example.com"

export interface SearchSuggestion {
  text : string,
  href : string,
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
    search(query : string | null) : Observable<SearchSuggestion[]>{
      if(!query){
        return of([])
      }

      const randomSize = Math.floor(Math.random()*5 + 1);        

      const searchSuggestions : SearchSuggestion[] = [this.getDefaultSearchSuggestion(query)]

      for(let i=0; i<randomSize; i++){
        searchSuggestions.push({
          "text" : query + " - suggestion " + (i + 1),
          "href" : EXAMPLE_DOMAIN + "/q=" + query + " " + (i + 1) 
        })
      }

      console.log(searchSuggestions)

      return of(searchSuggestions).pipe(delay(1000))
    }

    public getDefaultSearchSuggestion(query:  string) : SearchSuggestion{
      return {
        "text" : query + " - search",
        "href" : EXAMPLE_DOMAIN + "/q=" + query
      }
    }
}
