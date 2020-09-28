import { Component, OnInit } from '@angular/core';

import { ImageManagerService } from '../../services/image-manager.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  animal = 'dogs';
  dogs: string[];

  constructor( private imageManagerService: ImageManagerService)  { }

  ngOnInit(): void {
    this.getImages();
  }

  getImages(): void {
    this.imageManagerService
    .getImages(this.animal)
    .subscribe((response: any) => {
      this.dogs = response.message;
      console.log(response);
    });
  }

}
