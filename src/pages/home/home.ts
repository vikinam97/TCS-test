import { Component,Headers} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { ServiceProvider } from '../../providers/service/service';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  user: String,
  pass: String
})
export class HomePage {

  constructor(public navCtrl: NavController,private serviceProvider:ServiceProvider) {

  }
  login()
  {
  this.serviceProvider.getdate()
  .subscribe(res=>{console.log(res);});

  }
}
