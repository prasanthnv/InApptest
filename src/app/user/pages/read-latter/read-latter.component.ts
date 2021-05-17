import { ArticleService } from './../../services/article/article.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-latter',
  templateUrl: './read-latter.component.html',
  styleUrls: ['./read-latter.component.scss']
})
export class ReadLatterComponent implements OnInit {
articles = {}
  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articles =  this.articleService.getSaved();
  }

  removeArticle(slug: string){
    this.articles =  this.articleService.removeSaved(slug)
  }

}
