myapp.controller("jacketCtrl",function($scope,$http,$ionicScrollDelegate){
    $http.get("views/jacket/jacket.json").success(function(data){
        $scope.jackets=data;
    });
    // 无限滚动
    $scope.loadMore = function(){
        // 向服务器端请求一页新的数据，追加到现有数据之后
        $http.get("views/jacket/jacket.json").success(function(data){
            // 使用Array的原型方法push; 等价于  $scope.products.push(data)
            Array.prototype.push.apply($scope.jackets, data);
        }).finally(function(){
            // 通知框架，加载结束，停止显示图标
            $scope.$broadcast("scroll.infiniteScrollComplete");
        });
    };

    $scope.toTop = function(){
        // 将窗口滚动到顶部
        $ionicScrollDelegate.scrollTop(true);
    };
});