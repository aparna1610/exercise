import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authentication/auth.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  members: Array<any>;
  team: Array<any>;
  team1: Array<any>;
  people: Array<any>;
  member_name: string;
  member_name1: string;
  array1: Array<any>;
  array2: Array<any>;
  people1: Array<any>;
  people2: Array<any>;
  team3: Array<any>;
  memberList: Array<any>;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.member_name = null;
    this.member_name1 = null;
    this.array1 = [];
    this.array2 = [];
    this.people1 = [];
    this.people2 = [];
    this.memberList = [];
    this.members = [
      { id: 0, member: 'Alice' },
      { id: 1, member: 'Bob' },
      { id: 2, member: 'Carlos' },
      { id: 3, member: 'Carol' },
      { id: 4, member: 'Charlie' },
      { id: 5, member: 'Chuck' },
      { id: 6, member: 'Dave' },
      { id: 7, member: 'Eve' },
      { id: 8, member: 'Mallory' },
      { id: 9, member: 'Peggy' },
      { id: 10, member: 'Trent' },
      { id: 11, member: 'Victor' },
      { id: 12, member: 'Walter' }
    ];

    this.team = [
      { id: 90, name: 'a_team', displayname: 'The A-Team', members: ['alice', 'bob', 'carlos'] },
      { id: 91, name: 'b_team', displayname: 'The B-Team', members: ['peggy', 'trent', 'victor', 'bob'] },
      { id: 92, name: 'c_team', displayname: 'The C-Team', members: ['charlie', 'eve', 'alice', 'bob'] }
    ];

    this.team1 = [
      { id: 90, name: 'a_team', displayname: 'The A-Team', members: ['alice', 'bob', 'carlos'] },
      { id: 91, name: 'b_team', displayname: 'The B-Team', members: ['peggy', 'trent', 'victor', 'bob'] },
      { id: 92, name: 'c_team', displayname: 'The C-Team', members: ['charlie', 'eve', 'a_team'] }
    ];

    this.people = ['alice', 'bob', 'carlos', 'carol', 'charlie', 'chuck', 'dave', 'eve', 'mallory',
      'peggy', 'trent', 'victor', 'walter', 'a_team', 'b_team', 'c_team'];

  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  exercise1(member) {
    let result, result1;
    let teamList;
    if (member != null) {
      for (let i = 0; i < this.members.length; i++) {
        for (let j = 0; j < this.people.length; j++) {
          if (member.toLowerCase() === this.members[i].member.toLowerCase() && member.toLowerCase() === this.people[j].toLowerCase()) {
            result = this.people[j];
            console.log("member :0" + result);
            for (let i = 0; i < this.team.length; i++) {
              // teamList.push(this.team[i].name);
              if (this.team[i].members.indexOf(result) > -1) {
                result1 = this.team[i].name;

                this.array1.push(this.team[i].displayname);
                console.log("Final Result :" + this.array1);
              }
              if (this.team[i].members.indexOf(result1) > -1) {
                this.array1.push(this.team[i].displayname);
              }
            }
          }
        }
      }
    } else {
      console.log("Please enter the value");
    }
  }

  exercise2(member) {
    let result, result1;
    let teamList;
    if (member != null) {
      for (let i = 0; i < this.members.length; i++) {
        for (let j = 0; j < this.people.length; j++) {
          if (member.toLowerCase() === this.members[i].member.toLowerCase() && member.toLowerCase() === this.people[j].toLowerCase()) {
            result = this.people[j];
            console.log("member :0" + result);
            for (let i = 0; i < this.team1.length; i++) {
              // teamList.push(this.team[i].name);
              if (this.team1[i].members.indexOf(result) > -1) {
                result1 = this.team1[i].name;

                this.array2.push(this.team1[i].displayname);
                console.log("Final Result :" + this.array2);
              }
              if (this.team1[i].members.indexOf(result1) > -1) {
                this.array2.push(this.team1[i].displayname);
              }
            }
          }
        }
      }
    } else {
      console.log("Please enter the value");
    }
  }

  get_people() {
    let input = this.team1;
    let array;
    let names, array1, people;

    for (let i = 0; i < this.team1.length; i++) {
      for (let j = 0; j < this.team1.length; j++) {
        names = this.team1[i].name;
        people = this.team1[i].members;
        array1 = this.team1[j].members;
        if (array1.includes(names)) {
          array1.splice(j, 1);
          console.log(people + "," + array1);
          this.people1 = people.concat(array1);
          this.people1 = this.compare(this.people1);
          console.log(this.people1);

        }

      }
    }

  }

  compare(arr1){
  
    const objMap={};
    
    arr1.forEach((e1)=>this.members.forEach((e2)=> {if(e1 === e2.member.toLowerCase()){
        this.memberList.push(e2.member);
      }
    }
  ));
  return this.memberList;
  }

  get_people1() {
    
    this.team3 = [
      { id: 90, name: 'a_team', displayname: 'The A-Team', members: ['alice', 'bob', 'carlos'] },
      { id: 91, name: 'b_team', displayname: 'The B-Team', members: ['peggy', 'trent', 'victor', 'bob'] },
      { id: 92, name: 'c_team', displayname: 'The C-Team', members: ['charlie', 'eve', 'a_team'] }
    ];
    let sample = this.team3[0].members.concat(this.team3[1].members);
    let sample2 = this.team3[1].members.concat(this.team3[2].members);
  
    this.team3[0].members = sample;
    this.team3[1].members = sample2;
    let input = this.team3;
    let array;
    let names, array1, people;

    for (let i = 0; i < this.team3.length; i++) {
      for (let j = 0; j < this.team3.length; j++) {
        names = this.team3[i].name;
        people = this.team3[i].members;
        array1 = this.team3[j].members;
        if (array1.includes(names)) {
          array1.splice(j, 1);
          console.log(people + "," + array1);
          this.people2 = people.concat(array1);
          this.people2 = this.compare(this.people2);
          this.people2 = this.people2.filter((el, i, a) => i === a.indexOf(el))
          console.log(this.people2);
        }

      }
    }

  }

}
