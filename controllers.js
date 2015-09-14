angular.module("myApp",[])
	.controller("ListController", function  () {
		var list = this;
		list.people = [
            {name:"Ana", age:"20"},
            {name:"Maria", age:"30"},
            {name:"David", age:"40"},
            {name:"Peter", age:"50"},
            {name:"Patrick", age:"60"}
            ];

        list.add = function(person){
            list.people.push(angular.copy(person));
          };

          list.remove = function(index){
            list.people.splice(index,1);
          };
	});




