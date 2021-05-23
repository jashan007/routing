import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css'],
})
export class GithubProfileComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log('github');
    //why route parameters are obervables?
    //answer related to lifcycle

    // this.route.paramMap.subscribe((params) => {
    //   let id = +params.get('id');
    //   console.log(id);
    // });

    //So,obersvales are used for receving object(response) from like api call but here observable is also used for doing Async task like storing the extracted parameters from url even when url is changing when navigating back and forth in same compoenent

    //==================================================
    //---------OR---------------------------------
    //==================================================

    //if we dont allow user to stay to same page and navigate back and forward on same page then we can use snapshot

    console.log(this.route.snapshot.paramMap.get('id'));

    //now assusing there is no next button, we have to go back to github follower and select second profile .therefore githubprofile component gets reinitialised
  }
}
