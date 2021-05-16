import { ArticleService } from './../../services/article/article.service';
import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {
  @Input() article: Article | undefined;
  @Input() isSaved: boolean = false;
  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {

  }

  saveForLatter(){
    this.isSaved = true;
    this.articleService.saveForLatter(this.article);
  }

}
