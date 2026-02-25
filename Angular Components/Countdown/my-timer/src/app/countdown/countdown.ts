import { Component, Input } from '@angular/core';
import { BehaviorSubject, interval, NEVER } from 'rxjs';
import { switchMap, tap, map, takeWhile } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-countdown',
  imports: [CommonModule],
  templateUrl: './countdown.html',
  styleUrl: './countdown.css',
})
export class CountdownComponent {
  @Input() startValue: number = 60;

  public isRunning$ = new BehaviorSubject<boolean>(false);

  public count$ = this.isRunning$.pipe(
    switchMap((running) => (running ? interval(1000) : NEVER)),
    map((tick) => this.startValue - tick),
    tap((val) => {
      if (val <= 0) this.stop();
    }),
    takeWhile((val) => val >= 0),
  );

  toggle() {
    this.isRunning$.next(!this.isRunning$.value);
  }

  stop() {
    this.isRunning$.next(false);
  }

  ngOnDestroy() {
    this.isRunning$.complete();
  }
}
