import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'front-end-topics-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'front-end-topics';

  @ViewChild('scrollViewport', { static: false }) scrollViewport: ElementRef<HTMLDivElement>;
  onScroll() {
    const element = this.scrollViewport.nativeElement;
    const percent = element.scrollTop / (element.scrollHeight - element.offsetHeight);
    document.body.style.setProperty('--scroll', (element.offsetHeight * percent) + 'px');
  }
}
