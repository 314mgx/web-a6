import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost } from '../BlogPost';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  blogPost: BlogPost;
  tags: string;
  constructor(private route: ActivatedRoute, private post: PostService, private router: Router) { }

  formSubmit() {
    this.blogPost.tags = this.tags.split(",").map(tag => tag.trim());
    let id = this.route.snapshot.params['id'];

    this.post.updatePostById(id, this.blogPost).subscribe(data => this.router.navigate(['admin']));
  }

  deletePost() {
    let id = this.route.snapshot.params['id'];
    this.post.deletePostById(id).subscribe(data => this.router.navigate(['admin']));
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.post.getPostbyId(id).subscribe(data => {
      this.blogPost = data;
      this.tags = this.blogPost.tags.join();
    })


  }

}
