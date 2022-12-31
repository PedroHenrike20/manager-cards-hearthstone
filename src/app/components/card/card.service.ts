import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { Card } from './card.model';


@Injectable({
  providedIn: 'root'
})
export class CardService {

  baseUrl = "http://localhost:3001/cards"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  create(card: Card): Observable<Card> {
    return this.http.post<Card>(this.baseUrl, card);
  }

  read(): Observable<Card[]> {
    return this.http.get<Card[]>(this.baseUrl)
  }

  readByFilter(typeFilter: string, filterValue: string): Observable<Card[]> {
    const url = `${this.baseUrl}?${typeFilter}=${filterValue}`
    return this.http.get<Card[]>(url);
  }

  readById(id: string): Observable<Card> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Card>(url)
  }

  update(card: Card): Observable<Card> {
    const url = `${this.baseUrl}/${card.id}`
    return this.http.put<Card>(url, card)
  }

  delete(id: string): Observable<Card> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Card>(url)
  }
}
