import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddnewPageRoutingModule } from './addnew-routing.module';

import { AddnewPage } from './addnew.page';
import {HttpClientModule} from '@angular/common/http';
import {ImageuploaderComponent} from '../imageuploader/imageuploader.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    AddnewPageRoutingModule,
],
  entryComponents: [ImageuploaderComponent],
  declarations: [AddnewPage, ImageuploaderComponent]
})
export class AddnewPageModule {}
