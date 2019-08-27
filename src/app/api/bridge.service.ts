import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BridgeService {

  constructor(private httpClient: HttpClient) { }
   getNews(){
    return this.httpClient.get (`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e17975352c014af29f083ffd168d356e`);
  }
}
