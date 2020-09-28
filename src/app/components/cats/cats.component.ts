import { Component, OnInit } from '@angular/core';

import { ImageManagerService } from '../../services/image-manager.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {
  animal = 'cats';
  cats: string[];

  constructor( private imageManagerService: ImageManagerService)  { }

  ngOnInit(): void {
    this.getImages();
  }

  getImages(): void {
    this.imageManagerService
    .getImages(this.animal)
    .subscribe((response: any) => {
      this.cats = response.map((el) => el.url);
    });
  }

}
