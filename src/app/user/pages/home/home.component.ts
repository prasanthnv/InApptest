import { ArticleService } from './../../services/article/article.service';
import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';
import { Section } from '../../models/section.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  articles: Array<Article> = [];
  sections: Array<Section> = [];
  sectionName = '';
  hasError: boolean = false;
  savedArticles:  Array<Article> = [];
  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
   this.route.params.subscribe(params=>{
     this.sectionName = params.section;
     this.fetchArticles(this.sectionName);
   })
  
this.fetchSections();

  }

  fetchSections() {
    this.articleService.getSections().subscribe(res=>{
      this.sections = res.results;
    })
  }


  fetchArticles(section?: string) {
    this.articleService.getArticles(section).subscribe(res=>{
      this.hasError = false;
      this.articles = res.results;
      this.savedArticles = this.articleService.getSaved();
    }, err=>{
      this.hasError = true;
    })
  }

  selectSection(section: Section): void{
    console.log("selected => ", section);
    this.fetchArticles(section.section);
  }

  isSaved(article: Article){
    return article.slug_name in this.savedArticles;
  }
}
