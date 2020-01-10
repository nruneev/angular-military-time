import {Component, ChangeDetectionStrategy, OnInit, OnDestroy, Input} from '@angular/core';


@Component({
    selector: 'nr-military-time',
    templateUrl: './stopwatch.component.html',
    styleUrls: ['./stopwatch.component.scss'],
    changeDetection: ChangeDetectionStrategy.Default
})
export class StopwatchComponent implements OnInit, OnDestroy{
  @Input() isSecond: true | false = false;

  hours: string;
  minutes: string;
  seconds: string;
  private timerId = null;

  ngOnInit() {
    this.setCurrentTime();
    this.timerId = this.updateTime();
  }

  ngOnDestroy() {
    clearInterval(this.timerId);
  }

  private setCurrentTime() {
    const time = new Date(Date.now());
    this.hours = this.leftPadZero(time.getHours());
    this.minutes = this.leftPadZero(time.getMinutes());
    this.seconds = this.leftPadZero(time.getSeconds());
  }

  private updateTime() {
    setInterval(() => {
      this.setCurrentTime();
    }, 1000);
  }

  private leftPadZero(value: number) {
    return value < 10 ? `0${value}` : value.toString();
  }
}
