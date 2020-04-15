import { Component } from '@angular/core';
import { Person } from './person';

const lastnames = ["Smith","Johnson","Williams","Jones","Brown","Davis","Miller","Wilson","Moore","Taylor","Anderson","Thomas","Jackson","White","Harris","Martin","Thompson","Garcia","Martinez","Robinson","Clark","Rodriguez","Lewis","Lee","Walker","Hall","Allen","Young","Hernandez","King","Wright","Lopez","Hill","Scott","Green","Adams","Baker","Gonzalez","Nelson","Carter","Mitchell","Perez","Roberts","Turner","Phillips","Campbell","Parker","Evans","Edwards","Collins","Stewart","Sanchez","Morris","Rogers","Reed","Cook","Morgan","Bell","Murphy","Bailey","Rivera","Cooper","Richardson","Cox","Howard","Ward","Torres","Peterson","Gray","Ramirez","James","Watson","Brooks","Kelly","Sanders","Price","Bennett","Wood","Barnes","Ross","Henderson","Coleman","Jenkins","Perry","Powell","Long","Patterson","Hughes","Flores","Washington","Butler","Simmons","Foster","Gonzales","Bryant","Alexander","Russell","Griffin","Diaz","Hayes"];
const firstnames = ["James","Mary","John","Patricia","Robert","Jennifer","Michael","Linda","William","Elizabeth","David","Barbara","Richard","Susan","Joseph","Jessica","Thomas","Sarah","Charles","Karen","Christopher","Nancy","Daniel","Margaret","Matthew","Lisa","Anthony","Betty","Donald","Dorothy","Mark","Sandra","Paul","Ashley","Steven","Kimberly","Andrew","Donna","Kenneth","Emily","Joshua","Michelle","George","Carol","Kevin","Amanda","Brian","Melissa","Edward","Deborah","Ronald","Stephanie","Timothy","Rebecca","Jason","Laura","Jeffrey","Sharon","Ryan","Cynthia","Jacob","Kathleen","Gary","Helen","Nicholas","Amy","Eric","Shirley","Stephen","Angela","Jonathan","Anna","Larry","Brenda","Justin","Pamela","Scott","Nicole","Brandon","Ruth","Frank","Katherine","Benjamin","Samantha","Gregory","Christine","Samuel","Emma","Raymond","Catherine","Patrick","Debra","Alexander","Virginia","Jack","Rachel","Dennis","Carolyn","Jerry","Janet"];
let IdCounter = 1;

const randomNum = (max: number) => {
  return Math.round(Math.random() * max);
}

const randomDate = () => {
  return new Date(2020 - randomNum(70), randomNum(11), randomNum(28))
}

const generateList = (length: number) => {
  let array: Person[] = [];
  for(let i=0; i<length; i++){
    array.push({
      id: IdCounter++,
      firstname: firstnames[randomNum(firstnames.length-1)],
      lastname: lastnames[randomNum(lastnames.length-1)],
      birthdate: randomDate()
    });
  }
  return array;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
  people: Person[] = [];

  constructor() {}

  objectId(index: number, object: Person) {
    return object.id;
  }

  initList(length: number) {
    this.people = generateList(length);
  }

  clear() {
    this.people = [];
  }

  remove(object: Person) {
    this.people.splice(this.people.findIndex(person => person.id === object.id), 1);
  }

  update() {
    this.people = this.people.map(element => ({
      ...element,
      firstname: firstnames[randomNum(firstnames.length-1)],
      lastname: lastnames[randomNum(lastnames.length-1)]
    }));
  }

  append(amount: number) {
    this.people = this.people.concat(generateList(amount));
  }

  put(amount: number) {
    this.people = generateList(amount).concat(this.people);
  }

  add(steps: number) {
    for(let i=this.people.length-1; i>=0; i=i-steps) {
      this.people.splice(i, 0, {
        id: IdCounter++,
        firstname: firstnames[randomNum(firstnames.length-1)],
        lastname: lastnames[randomNum(lastnames.length-1)],
        birthdate: randomDate()
      })
    }
  }

  sort() {
    this.people.sort((a, b) => {
      let x = a.firstname.toLowerCase();
      let y = b.firstname.toLowerCase();
      if (x < y) { return -1; }
      if (x > y) { return 1; }
      return 0;
    })
  }
}
