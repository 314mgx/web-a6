import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.css']
})
export class LatestPostsComponent implements OnInit {

  posts: Array<BlogPost>;


  constructor(private post: PostService) { }

  ngOnInit(): void {
    this.post.getPosts(1, null, null).subscribe(res => {
      this.posts = res.slice(0, 3);
    });
  }

}
