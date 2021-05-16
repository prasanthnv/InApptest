import { SectionResponse } from './../../models/section-response.model';
import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArticleResponse } from '../../models/article-response.model';
import { Section } from '../../models/section.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticles(section?: string): Observable<ArticleResponse> {
    if (section) {
      return this.http.get<ArticleResponse>(
        environment.apiBaseUrl + '/all/' + section + '.json'
      );
    }
    return this.http.get<ArticleResponse>(
      environment.apiBaseUrl + '/all/all.json'
    );
  }

  getSections(): Observable<SectionResponse> {
    return this.http.get<SectionResponse>(
      environment.apiBaseUrl + '/section-list.json'
    );
  }
}
