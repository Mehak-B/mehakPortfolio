import { Component, signal } from '@angular/core';
import { IntroductionComponent } from "../introduction/introduction.component";

@Component({
  selector: 'app-nav-bar',
  imports: [IntroductionComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  navBarItems = ["Home", "About", "Projects", "Contact"]

  // count = signal(0);
 
  ngOnInit(){ 
  // this.count.set(6)
  // console.log('The count is: ' + this.count());
  // console.log(this.countSet())
  // }

  // countSet(){
  //  this.count.set(10)
  //  return this.count()

  }

}
