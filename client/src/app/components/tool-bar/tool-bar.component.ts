import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent {
  @Output() newOpenSideBarEvent = new EventEmitter<string>();
  panelOpenState = false;
  showFiller = false;
  toggle() {
    this.newOpenSideBarEvent.emit('heh')
  }
}
