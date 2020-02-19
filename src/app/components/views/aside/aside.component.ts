import { Snippet } from './../../../interfaces/snippet';
import { SnippetsService } from './../../../services/snippets/snippets.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  route: string;
  snippets: Snippet[];

  constructor(public location: Location, public router: Router, public ss: SnippetsService) {
    router.events.subscribe(val => {
      if (location.path() !== '') {
        this.route = location.path();
      } else {
        this.route = 'home';
      }
    });

    this.ss.getSnippets().subscribe(snippets => this.snippets = snippets);
  }

  ngOnInit(): void {
  }

}
