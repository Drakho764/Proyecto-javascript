import AddTodo from './components/add-todo.js';
import Modal from './components/modal.js';
import Filters from './components/filters.js';

export default class View {
  constructor() {
    this.model = null;
    this.table = document.getElementById('table');
    this.addTodoForm = new AddTodo();
    this.modal = new Modal();
    this.filters = new Filters();
 //   
//
    this.addTodoForm.onClick((title, description) => this.addTodo(title, description));
    
  }

  setModel(model) {
    this.model = model;
  }
//
  //
}
