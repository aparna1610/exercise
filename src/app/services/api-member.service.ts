import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class ApiMemberService implements InMemoryDbService{

  constructor() { }
  createDb(){

   let  members =  [
    {  id:  0,  member:  'Alice' },
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

   return {members};

  }
}