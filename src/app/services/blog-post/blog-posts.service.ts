import { Injectable } from "@angular/core";
import { BlogPost } from "./blog-post";
import { of, Observable } from "rxjs";
import { tap, map, find, filter, flatMap, mergeMap } from "rxjs/operators";
import * as yaml from "js-yaml";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BlogPostsService {
  blogPosts: BlogPost[];
  constructor(private http: HttpClient) {}
  getPost(title: string): Observable<BlogPost> {
    return this.getPosts().pipe(
      flatMap(posts => posts),
      filter(posts => posts.title === title),
      mergeMap(post => {
        return this.http
          .get(`assets/posts/${post.handle}`, { responseType: "text" })
          .pipe(
            map(p => {
              post.content = p;
              return post;
            })
          );
      })
    );
  }

  getPosts(): Observable<BlogPost[]> {
    if (!this.blogPosts) {
      return this.http
        .get("assets/posts/meta.yaml", { responseType: "text" })
        .pipe(
          map(request => {
            this.blogPosts = yaml.safeLoad(request) as BlogPost[];
            return this.blogPosts;
          })
        );
    }
    return of(this.blogPosts);
  }
}
