import { Directive , OnChanges, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appAnimalImage]'
})
export class AnimalImageDirective implements OnChanges {

  constructor() { }
  @Input() animalName:string;
  @HostBinding('src')imageSource;

  ngOnChanges(){
    this.imageSource ='./assets/default.png';
    if(this.animalName.indexOf('dog')>-1)
    this.imageSource = './assets/dog.png'

    if(this.animalName.indexOf('cat')>-1)
    this.imageSource = './assets/cat.png'
  }

}
