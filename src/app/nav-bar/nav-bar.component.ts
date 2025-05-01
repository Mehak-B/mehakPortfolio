import { Component, signal } from '@angular/core';
import { IntroductionComponent } from "../introduction/introduction.component";

@Component({
  selector: 'app-nav-bar',
  imports: [IntroductionComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  navBarItems = [{
    label:"Home", id:"home"},
    {label: "About", id:"about"},
    {label:"Projects", id:"projects"}, 
    {label:"Contact", id:"contact"},
  {label:"Experience",id:"experience"}]

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

  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
