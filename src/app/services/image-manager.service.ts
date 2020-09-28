import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageManagerService {
  constructor(private http: HttpClient) {}

  getImages(animal: string): Observable<any> {
    if (animal === 'cats') {
      return this.http.get<any>(`https://api.thecatapi.com/v1/images/search?limit=9`);
    } else if (animal === 'dogs') {
      return this.http.get<any>(`https://dog.ceo/api/breeds/image/random/9`);
    } else {
      return this.http.get<any>(`https://randomfox.ca/floof/`);
    }
  }
}
