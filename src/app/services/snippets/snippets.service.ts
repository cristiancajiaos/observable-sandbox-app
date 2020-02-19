import { Snippet } from './../../interfaces/snippet';
import { SNIPPETS } from './../../constants/snippets-data';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnippetsService {
  getSnippets(): Observable<Snippet[]> {
    const snippets = SNIPPETS;
    return of(snippets);
  }
}
