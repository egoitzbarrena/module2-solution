(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var tobuy = this;
  tobuy.items = ShoppingListCheckOffService.getItems();
  tobuy.removeItem = function (itemIndex) {
      ShoppingListCheckOffService.removeItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadybought = this;
  alreadybought.boughtitems = ShoppingListCheckOffService.getboughtitems();
}

function ShoppingListCheckOffService() {
  var service = this;

  var items = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    },
    {
      name: "Chocolate",
      quantity: "15"
    }
  ];

  var boughtitems = [];

  service.removeItem = function (itemIdex) {
        boughtitems.push(items[itemIdex]);
        items.splice(itemIdex, 1);
  };

  service.getItems = function () {
    return items;
  };

  service.getboughtitems = function () {
      return boughtitems;
  };
}

})();
