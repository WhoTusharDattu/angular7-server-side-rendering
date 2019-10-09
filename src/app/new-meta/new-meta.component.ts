import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-new-meta',
  templateUrl: './new-meta.component.html',
  styleUrls: ['./new-meta.component.css']
})
export class NewMetaComponent implements OnInit {

  constructor( private meta: Meta,
              private title: Title) { }

  ngOnInit() {
    this.meta.updateTag({ name: 'title', content: 'new meta tag test page!'});
    this.title.setTitle('First Component');
    const metaItems = [{
       name: 'description', content: ` ${Math.round(Math.random() * 10)}First component description.${Math.round(Math.random() * 10)}`}, ];
       this.meta.addTags(metaItems, true);
  }
}
