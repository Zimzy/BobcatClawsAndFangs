import { Component } from '@angular/core';
//import { SearchService } from '../search.service'; // Adjust the path as necessary

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
 //constructor(private searchService: SearchService, ){}
  searchQuery: string = '';

  onSearch(query: string) {
    this.searchQuery = query;
    console.log('Search query:', this.searchQuery);
    // You can add more search logic here
  }

  submitSearch() {
    console.log('Submit search for:', this.searchQuery);
    // Add your search submission logic here
    //return this.searchService.search(this.searchQuery);
  }
}