import { Directive, ElementRef, OnInit } from '@angular/core';
import { SwWindowRefService } from './sw-window-ref.service';

@Directive({
  selector: '[sw-fade-scroll]'
})
export class SwFadeScrollDirective implements OnInit {
  _window: any;

  constructor(private el: ElementRef, windowRef: SwWindowRefService) {
    this._window = windowRef.nativeWindow;
  }

  ngOnInit() {
    this._window.addEventListener('scroll', () => {
      const opacity = this._window.pageYOffset / this._window.innerHeight;
      this.el.nativeElement.style.opacity = opacity;
    });
  }

}
