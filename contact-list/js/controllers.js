angular.module("contactsList",["ngMessages"])
		.controller("contactsListCtrl", function ($scope){
			$scope.app = "My Contacts List";
			$scope.contacts = [
				{name: "Pedro", phone: "99998888", color: "blue"},
				{name: "Ana", phone: "99998877", color: "yellow"},
				{name: "Maria", phone: "99998866", color: "red"}
			];
			$scope.networks = [
				{name: "Oi", codigo: 14, category: "Celular"},
				{name: "Vivo", codigo: 15, category: "Celular"},
				{name: "Tim", codigo: 41, category: "Celular"},
				{name: "GVT", codigo: 25, category: "Fixo"},
				{name: "Embratel", codigo: 21, category: "Fixo"}
			];
			$scope.addContact = function(contact){
				$scope.contacts.push(angular.copy(contact));
				$scope.contactForm.$setPristine();
			};
			$scope.deleteContacts = function (contacts) {
				$scope.contacts = contacts.filter(function (contact) {
					if (!contact.isSelected) return contact;
				});
			};
			$scope.isContactSelected = function (contacts) {
				return contacts.some(function (contact) {
					return contact.isSelected;
				});
			};

		});