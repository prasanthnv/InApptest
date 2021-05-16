import { Article } from "./article.model";

export interface ArticleResponse{
    status: string;
    copyright: string;
    num_results: string;
    results: Array<Article>
}