import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ResultadosService {
  

  constructor(private http: HttpClient) { }

  private api_key = 'gqnB2daMdZs7xA1bqKYBcjZFylnktC55';
  
  private API_URL="https://api.giphy.com/v1/gifs/search";
   

  getResultados(pesquisa: any) {
    let url = this.API_URL + "?api_key=" + this.api_key + "&limit=24&q=" + pesquisa; 
    console.log(url);
  
    return this.http.get(url);
  }
}
