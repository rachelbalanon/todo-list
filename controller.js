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
        vm.task.push(angular.copy(newTask));
    }
}


angular
    .module("todoApp")
    .controller("TodoController", TodoController)