import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../../services/blog-post/blog-post';
import { BlogPostsService } from 'src/app/services/blog-post/blog-posts.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  posts: BlogPost[];
  constructor(private blogPostsService: BlogPostsService) { }

  ngOnInit() {
    this.blogPostsService.getPosts()
      .subscribe(posts => this.posts = posts);
  }

}
