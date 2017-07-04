var app = angular.module('mainApp',[]);
app.controller('appctrl',function($scope,$http){
    $scope.simpan = function(){
        $http.post('/books',{deskripsisingkat:$scope.deskripsisingkat,namabuku:$scope.namabuku,penerbit:$scope.penerbit,penulis:$scope.penulis,tahunterbit:$scope.tahunterbit,stok:$scope.stok}).success(function(){
            alert("ok");
        })
    }
      $scope.getdata = function(){
        $http.get('/borrowbooks').success(function(data){
            $scope.datapinjam = data;
        })
    }
    $scope.getdata();
})