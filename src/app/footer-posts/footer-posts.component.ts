import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-footer-posts',
  templateUrl: './footer-posts.component.html',
  styleUrls: ['./footer-posts.component.css']
})
export class FooterPostsComponent implements OnInit {
  posts: Array<BlogPost>;
  
  constructor(private post: PostService) { }

  ngOnInit(): void {
    this.post.getPosts(1, null, null).subscribe(res => {
      this.posts = res.slice(0, 3);
    });
  }

}


