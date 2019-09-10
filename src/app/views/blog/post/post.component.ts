import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPostsService } from 'src/app/services/blog-post/blog-posts.service';
import { BlogPost } from '../../../services/blog-post/blog-post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: BlogPost;
  constructor(private route: ActivatedRoute, private blogPostsService: BlogPostsService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.blogPostsService.getPost(id)
      .subscribe(post => this.post = post);
  }

}
