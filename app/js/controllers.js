'use strict';
/* App Controllers */

function PhoneListCtrl($scope, Phone) {
  $scope.orderProp = 'age';
  $scope.phones = Phone.query();
}
//function PhoneListCtrl($scope,$http){
//	$http.get('phones/phones.json').success(function(data){
//		$scope.phones = data.splice(0,5);
//	});
//	$scope.orderProp = 'age';
//}

//PhoneListCtrl.$inject = ['$scope', 'Phone'];


function PhoneDetailCtrl($scope, $routeParams,Phone) {//$http
  $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
    $scope.mainImageUrl = phone.images[0];
  });

  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
//$http.get('phones/'+$routeParams.phoneId+'.json').success(function(data){
//	$scope.phone = data;
//});
}

//PhoneDetailCtrl.$inject = ['$scope', 'Phone', '$routeParams'];
