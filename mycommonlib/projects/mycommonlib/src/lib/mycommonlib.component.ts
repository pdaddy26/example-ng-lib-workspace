import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-mycommonlib',
  template: `
    <p>
      mycommonlib works!
    </p>
  `,
  styles: []
})
export class MycommonlibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
