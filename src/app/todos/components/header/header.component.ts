import { TodosService } from './../../services/todos.service';
import { Component } from "@angular/core";

@Component({
  selector: 'app-todos-header',
  templateUrl: './header.component.html',

})

export class HeaderComponent {
  text: string = '';

  constructor(private todoService: TodosService) {

  }

  changeText(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.text = target.value;
    //console.log(target.value);
  }

  addTodo(): void {
    console.log('addTodo', this.text);
    this.todoService.addTodo(this.text);
    this.text = '';
  }
}
