import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../model/book';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  allBooks: Book[] = []

  constructor(private http: HttpClient) { }

  getAllBooks(): void{
    this.http.get<any>('https://gutendex.com/books/').pipe(
      tap(data => console.log(data)),
      map(data => data.results),
      tap(books => console.log(books)))
      // .subscribe(characters => this.allCharacters.next(characters));
  }


}
