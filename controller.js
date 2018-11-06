"use strict";

function TodoController() {
    const vm = this;

    vm.todoObject = [
        {
        task: "Do dishes.",
        completed: false
        },
       { 
        task: "Walk dog.",
        completed: false
       },
       {
        task: "Get groceries.",
        completed: true
       },
       {
        task: "Water plants.",
        completed: false
        }
    ];

    vm.addTask = (newTask) => {
        // console.log(newTask);
        newTask.completed = false;
        vm.todoObject.push(angular.copy(newTask));
    };

    vm.removeTask = (index) => {
        // console.log(index);
        vm.todoObject.splice(index, 1);
    };

    vm.completeTask = (todo) => {
        todo.completed = true;
       
    };
}


angular
    .module("todoApp")
    .controller("TodoController", TodoController)