import { NgModule, Optional, SkipSelf} from '@angular/core';
import { StorageService } from './services/storage.service';
import { AuthorizatedGuard } from './guards/authorizated.guard';
import { fakeBackendProvinder } from './helper/fake-backend';
//import { Backend } from '@angular/http/testing';
import { HttpRequest } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [],
  providers:[
    StorageService,
    AuthorizatedGuard,
    fakeBackendProvinder,
    //MockBackend,
    HttpRequest
  ],
  bootstrap:[]
})
export class CoreModule { 
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}