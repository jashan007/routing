import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css'],
})
export class GithubFollowersComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {});
    //or
    this.route.snapshot.paramMap.get('id');

    this.route.queryParamMap.subscribe((params) => {});
    //or
    let page = this.route.snapshot.queryParamMap.get('page');
    console.log(page);
    //here we use subsribe as in this scenerio, we are very likely to move back and forward on same component..So,to save paramaters we need to subscribe

    //Now,we need to capture both simple parameters and query paramters...therefore subscribing to multiple observables

    //So,instead of having two separate observables, we are going to combine these two observables into one single observable and subscribe to this single observables using combineLatestwith method from rxjs

    //======================================
    //combineLatest================

    //Create an observable that combines the latest values from all passed observables and the source into arrays and emits them.Combinelatest operator joins multiple observable to create an observable.

    let obs = combineLatest([this.route.paramMap, this.route.queryParamMap]);

    obs
      .map((combined) => {})
      .subscribe((combined) => {
        let id = combined[0].get('id');
        let page = combined[1].get('page');
      });
  }
  followers = [
    { id: 1, name: 'jashan' },
    { id: 2, name: 'demo' },
  ];

  //from now consider obsevablez as collection
}
