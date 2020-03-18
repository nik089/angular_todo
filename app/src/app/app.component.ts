import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public newitem = "";
  public items = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'];

  addItem() {
    this.items.push(this.newitem)
  }

  delItem(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }

}
