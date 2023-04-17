import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'udemyAngular';
  name: string = 'John Doe';
  username: string = 'oldmanjohn';
  newusername: string = '';
  setnewname: boolean = false;

  changeUsername() {
    console.log('changeUsername() called');
    this.newusername = this.newusername;
    this.username = this.newusername;
    console.log(this.newusername);
  }
}
