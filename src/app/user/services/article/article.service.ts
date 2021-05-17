import { SectionResponse } from './../../models/section-response.model';
import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArticleResponse } from '../../models/article-response.model';
import { Section } from '../../models/section.model';
import { Article } from '../../models/article.model';

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


  saveForLatter(article?: Article){
    if(article){
      let items = JSON.parse(localStorage.getItem('articles') || '{}');
      if(article.slug_name in items){
        return;
      }else{
        items[article.slug_name] = {
          title: article.title,
          abstract: article.abstract,
          section: article.section,
          slug_name: article.slug_name,
          url: article.url
        };
        localStorage.setItem('articles', JSON.stringify(items));
      }
    }
  }

  getSaved(){
    let items = JSON.parse(localStorage.getItem('articles') || '{}');
   return items;
  }

  removeSaved(slug: string){
    let saved = this.getSaved();
    console.log(slug)
    if(slug in saved){
      console.log(slug)
      delete saved[slug];
    }
    localStorage.setItem('articles', JSON.stringify(saved));
    return saved;
  }
}
