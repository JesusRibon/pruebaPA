import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  baseUrl = 'http://localhost:8081/chat'

 constructor(private httpClient : HttpClient) { }


 public getContent(promt: string): Observable<any>{
  return this.httpClient.post<any>(this.baseUrl, promt)
 }
}
