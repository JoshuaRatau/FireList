import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  name;
  items=[];
  cuisine={
    name:''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private afDB: AngularFireDatabase) {
    //this.items = afDB.list('cuisines').valueChanges();
//console.log(this.items);

//Retrieve The List
firebase.database().ref('/cuisine/').on("value",(snapshot)=> {
  snapshot.forEach((snap)=>{

    console.log(snap.val())

    //Append To Item List
    this.items.push(snap.val());

    return false;
  })
})
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

//Write to Database
  writeCuisine(){
    
    console.log(this.name);
    this.cuisine.name = this.name;
    var database = firebase.database();
        database.ref('/cuisine/').push(this.cuisine);
  }
}
