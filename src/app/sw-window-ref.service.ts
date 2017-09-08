import { Injectable } from '@angular/core';

function _window(): any {
  return window;
}

@Injectable()
export class SwWindowRefService {
    get nativeWindow(): any {
        return _window();
    }
}
