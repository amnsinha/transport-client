import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowseHeaderComponent} from "./browse-header.component";


@NgModule({
  declarations: [BrowseHeaderComponent],
  imports: [CommonModule],
  exports: [BrowseHeaderComponent]
})
export class BrowserHeaderModule {
}
