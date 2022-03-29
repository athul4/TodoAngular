import { Component, OnInit } from '@angular/core';
import { Todo } from './todos.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  public todos:Todo[]=[];
  public inputTodo:string='';

  constructor() { }

  ngOnInit(): void {
    this.todos=[{
      content:"first todo",
      completed:false
    },
    {
      content:"second todo",
      completed:true
    }
    ]
  }
  public toggleDone(todo: Todo){
    todo.completed = !todo.completed;
    // this.todos.map((v,i)=>{
    //   if(i==id) 
    //     v.completed=!v.completed;
    //   return v;
    // })
  }
  public deleteTodo(id:number){
    this.todos=this.todos.filter((v,i)=>i!==id);
  }
  public addTodo(){
    if(this.inputTodo){
      this.todos.push({
        content:this.inputTodo,
        completed:false
      });
      this.inputTodo='';
    }
    
  }

}
