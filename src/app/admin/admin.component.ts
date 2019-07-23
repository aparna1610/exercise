import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authentication/auth.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  members : Array<any>;
  teams : Array<any>;
  people : Array<any>;
  member_name : string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.member_name = null;
    this.members =  [
      {  id:  0,  member:  'Alice'},
      {  id:  1,  member:  'Bob' },
      {  id:  2,  member:  'Carlos' },
      {  id:  3,  member:  'Carol' },
      {  id:  4,  member:  'Charlie' },
      {  id:  5,  member:  'Chuck' },
      {  id:  6,  member:  'Dave' },
      {  id:  7,  member:  'Eve' },
      {  id:  8,  member:  'Mallory' },
      {  id:  9,  member:  'Peggy' },
      {  id:  10,  member:  'Trent' },
      {  id:  11,  member:  'Victor' },
      {  id:  12,  member:  'Walter' }
     ];

     this.teams = [
       { id : 90, displayname : 'The A-Team', members : ['alice', 'bob', 'carlos'] },
       { id : 91, displayname : 'The B-Team', members : ['peggy', 'trent', 'victor', 'bob'] },
       { id : 92, displayname : 'The C-Team', members : ['charlie', 'eve', 'alice', 'bob'] }
     ];

     this.people = ['alice', 'bob', 'carlos', 'carol', 'charlie', 'chuck', 'dave', 'eve', 'mallory',
      'peggy', 'trent', 'victor', 'walter', 'a_team', 'b_team', 'c_team'];

  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  addUser(): void {
    this.router.navigate(['add-user']);
  };
  

  exercise1(member){
    let result, result1;
      for(let i=0; i<this.members.length; i++){
        for(let j=0; j<this.people.length; j++){
        if(member.toLowerCase() === this.members[i].member.toLowerCase() && member.toLowerCase() === this.people[j].toLowerCase()){
          result = this.people[j];
          console.log("member :0" +result);
          for(let i=0; i<this.teams.length; i++){
            if(this.teams[i].members.indexOf(result) > -1){
                let array1 = [];
                array1.push(this.teams[i].displayname);
                console.log("Final Result :" +array1);
            }
          }
        }else{
          console.log("Not present");
        }
      }
      }
      
  }
}