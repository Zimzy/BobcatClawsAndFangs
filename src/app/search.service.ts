import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  search(query: string): void {
    if (!query.trim()) {
      // if not search term, return empty array.
      this.searchResultsSource.next([]);
    } else {
      const filteredResults = this.data.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );
      this.searchResultsSource.next(filteredResults);
    }
  }
}
