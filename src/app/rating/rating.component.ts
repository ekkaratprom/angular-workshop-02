import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnChanges {
  // constructor() {}

  // ngOnInit(): void {}

  @Input() rating: number;

  starWidth: number;

  ngOnChanges(): void {
    console.log(this.rating);
    this.starWidth = (75 / 5) * this.rating;
  }

  // tslint:disable-next-line: member-ordering
  @Output() ratingClicked: EventEmitter<String> = new EventEmitter<string>();

  onClickRating(): void {
    console.log('Click on rating');
    this.ratingClicked.emit(`Rating ${this.rating} was clicked`);
  }
}
