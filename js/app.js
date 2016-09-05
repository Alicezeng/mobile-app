var myapp=angular.module("myapp",["ionic"]);
myapp.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
    $ionicConfigProvider.backButton.text("");
    $ionicConfigProvider.backButton.previousTitleText("");
    $stateProvider.state("tour",{
        url:"/tour",
        templateUrl:"views/tour/tour.html",
    });
    $stateProvider.state("tabs", {
        url:"/tabs",
        abstract:true,
        templateUrl:"views/tabs/tabs.html"
    });
    $stateProvider.state("tabs.home",{
        url:"/home",
        views:{"tab-home":
        {templateUrl:"views/home/home.html",
            controller:"homeCtrl"}
        }
    });
    $stateProvider.state("tabs.detail", {
        url:"/detail",
        views:{"tab-home":
        {templateUrl:"views/detail/detail.html",
            controller:"detailCtrl"}
        }
    });
    $stateProvider.state("tabs.dress", {
        url:"/dress",
        views:{"tab-home":
        {templateUrl:"views/dress/dress.html",
            controller:"dressCtrl"}
        }
    });
    $stateProvider.state("tabs.classify",{
        url:"/classify",
        views:{"tab-classify":
        {templateUrl:"views/classify/classify.html"}
        }
    });
    $stateProvider.state("tabs.jacket", {
        url:"/jacket",
        views:{"tab-classify":
        {templateUrl:"views/jacket/jacket.html",
            controller:"jacketCtrl"}
        }
    });
    $stateProvider.state("tabs.pant", {
        url:"/pant",
        views:{"tab-classify":
        {templateUrl:"views/pant/pant.html",
            controller:"pantCtrl"}
        }
    });
    $stateProvider.state("tabs.shoe", {
        url:"/shoe",
        views:{"tab-classify":
        {templateUrl:"views/shoe/shoe.html",
            controller:"shoeCtrl"}
        }
    });
    $stateProvider.state("tabs.skirt", {
        url:"/skirt",
        views:{"tab-classify":
        {templateUrl:"views/skirt/skirt.html",
            controller:"skirtCtrl"}
        }
    });
    $stateProvider.state("tabs.shopping",{
        url:"/shopping"
        ,views:{"tab-shopping":
        {templateUrl:"views/shopping/shopping.html"}
        }
    });
    $stateProvider.state("tabs.user",{
        url:"/user",
        views:{"tab-user":
        {templateUrl:"views/user/user.html"}
        }
    });
    $stateProvider.state("tabs.login",{
        url:"/login",
        views:{"tab-shopping":
        {templateUrl:"views/login/login.html"}
        }
    });
    $urlRouterProvider.otherwise("/tour")
});