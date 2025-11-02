import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private data: any[] = [];
  private searchResultsSource = new BehaviorSubject<any[]>([]);
  searchResults$ = this.searchResultsSource.asObservable();

  constructor(private http: HttpClient) {
    this.loadData();
  }

  private loadData(): void {
    this.http.get<any[]>('assets/db_data.json').subscribe(data => {
      this.data = data;
    });
  }

  private cleanData(): void{
// this.data is a JSON string, so we must parse it

  }

  search(query: string): void {
    if (!query.trim()) {
      // if not search term, return empty array.
      this.searchResultsSource.next([]);
    } else {
      console.log("data array: ", JSON.parse(JSON.stringify(this.data)).search_results);
      const filteredResults = this.data.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );
      console.log("filtered results ", filteredResults);
      this.searchResultsSource.next(filteredResults);
      console.log("search results: ", this.searchResultsSource);
    }
  }
}
