'use strict';

angular.module('booktradeBootstrapApp')
  .controller('MainCtrl', function ($scope, $http) {

    $scope.books = [];

    $http.get('/api/books').success(function (books) {
      $scope.books = books;
      console.log('Books: ', books);
    }).error(function (error) {
      console.log('There was a problem: ', error);
    })
  });

// TODO: fix custom dialog, fix console error that comes up when you click trade in `my-books`. ideally move route to a separate file
// TODO: Trades
// TODO: prevent user interacting with app if they are not logged in. always redirect to login
// TODO: can trades view be done in an alert with dropdowns?
// TODO: add material toast for UX when they add a book
// TODO: message if nothing returned from 'add' search
// tODO: loading spinner for 'add' search
// TODO: improve footer on every ng-repeat item in `my-books` and `all books`
// TODO: why is scss showing errors in the 'messages' pane every time you create a route
// TODO: delete trade-dialog route if unneeded, from VCS as well
