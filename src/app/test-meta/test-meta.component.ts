import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-test-meta',
  templateUrl: './test-meta.component.html',
  styleUrls: ['./test-meta.component.css']
})
export class TestMetaComponent implements OnInit {

  constructor( private meta: Meta) { }

  ngOnInit() {
    this.meta.updateTag({ name: 'title', content: '1.this is title for test page!'});
    this.meta.updateTag({ name: 'description', content: '1.this is description for test page!' });
  }
}
