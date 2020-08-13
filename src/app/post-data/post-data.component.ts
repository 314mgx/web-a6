import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit {

  post: BlogPost;
  querySub: any;
  commentName: string;
  commentText: string;

  constructor(private route: ActivatedRoute, private post2: PostService) { }

  onSubmit() {
    this.post.comments.push({
      author: this.commentName,
      comment: this.commentText,
      date: new Date().toLocaleDateString()
    });
    this.post2.updatePostById(this.post._id, this.post).subscribe(data => {
      this.commentName = "";
      this.commentText = "";
    });
  }

  ngOnInit(): void {
    this.querySub = this.route.params.subscribe(params => this.post2.getPostbyId(params['id']).subscribe(data => {
      this.post = data;
      this.post.views++;
      this.post2.updatePostById(this.post._id, this.post).subscribe();
    }));
    console.log("post-data init");


  }
  ngOnDestroy() {
    if (this.querySub) this.querySub.unsubscribe();
  }

}
