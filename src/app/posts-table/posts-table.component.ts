import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { BlogPost } from '../BlogPost';

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.css']
})
export class PostsTableComponent implements OnInit {

  @Output() rClick = new EventEmitter();
  blogPosts: Array<BlogPost> = [];
  constructor(private route: Router, private post: PostService) { }

  rowClicked(id){
    this.route.navigate(['/admin/post', id]);
  }

  ngOnInit(): void {
    this.post.getAllPosts().subscribe(data => {
      this.blogPosts = data
    });
  }
}
