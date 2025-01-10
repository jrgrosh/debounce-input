import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ApiService, SearchSuggestion } from '../api.service';

@Component({
  selector: 'app-debounce-input',
  templateUrl: './debounce-input.component.html',
  styleUrls: ['./debounce-input.component.css']
})
export class DebounceInputComponent {

  public formControlInput = new FormControl('');
  public searchSuggestions : SearchSuggestion[] = []

  constructor(
    private apiService : ApiService
  ) {

    this.formControlInput.valueChanges.subscribe((query) => {
      if(!query){
        return;
      }
      this.searchSuggestions = [apiService.getDefaultSearchSuggestion(query)];
    })

    this.formControlInput.valueChanges
      .pipe(
        debounceTime(300), 
        distinctUntilChanged(),
        switchMap(query => this.apiService.search(query) ),
      ).subscribe((suggestions : SearchSuggestion[]) => {

        this.searchSuggestions = suggestions;
      })
  }
}
