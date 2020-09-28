import { Component, OnInit } from '@angular/core';
import { ImageManagerService } from '../../services/image-manager.service';

@Component({
  selector: 'app-birds',
  templateUrl: './birds.component.html',
  styleUrls: ['./birds.component.css']
})
export class BirdsComponent implements OnInit {
  animal = 'fox';
  fox: string[];

  constructor( private imageManagerService: ImageManagerService)  { }

  ngOnInit(): void {
    this.getImages();
  }

  getImages(): void {
    this.imageManagerService
    .getImages(this.animal)
    .subscribe((response: any) => {
      this.fox = response.image;
      console.log(response.image);
    });
  }
}
