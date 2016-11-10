angular.module("kid_stories.controllers", [])



// TODO: indexCtrl --|-- 
.controller("indexCtrl", function($scope,$rootScope,$state,$location,$ionicScrollDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64){
	
	$rootScope.headerExists = true;
	$rootScope.page_id = "index" ;
	$rootScope.last_edit = "-" ;
	// TODO: indexCtrl --|-- $scope.scrollTop
	$scope.scrollTop = function(){
		$ionicScrollDelegate.$getByHandle("top").scrollTop();
	};
	// TODO: indexCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: indexCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: indexCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		window.open($url,"_self");
	};
	
	// TODO: indexCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: indexCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("error: page index => custom controller");
			console.log(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: side_menusCtrl --|-- 
.controller("side_menusCtrl", function($scope,$rootScope,$state,$location,$ionicScrollDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64){
	
	$rootScope.headerExists = true;
	$rootScope.page_id = "side_menus" ;
	$rootScope.last_edit = "-" ;
	// TODO: side_menusCtrl --|-- $scope.scrollTop
	$scope.scrollTop = function(){
		$ionicScrollDelegate.$getByHandle("top").scrollTop();
	};
	// TODO: side_menusCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: side_menusCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: side_menusCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		window.open($url,"_self");
	};
	
	// TODO: side_menusCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 
	
	var popover_template = "";
	popover_template += "<ion-popover-view class=\"fit\">";
	popover_template += "	<ion-header-bar>";
	popover_template += "		<h1  class=\"title\">Help</h1>";
	popover_template += "	</ion-header-bar>";
	popover_template += "	<ion-content>";
	popover_template += "		<ion-list>";
	popover_template += "			<a  class=\"item dark-ink\" ng-href=\"#/kid_stories/form_contact_us\" ng-click=\"popover.hide()\">";
	popover_template += "			Contact Us";
	popover_template += "			</a>";
	popover_template += "			<a  class=\"item dark-ink\" ng-href=\"#/kid_stories/form_your_story\" ng-click=\"popover.hide()\">";
	popover_template += "			Your Story";
	popover_template += "			</a>";
	popover_template += "			<a  class=\"item dark-ink\" ng-href=\"#/kid_stories/form_question\" ng-click=\"popover.hide()\">";
	popover_template += "			Question";
	popover_template += "			</a>";
	popover_template += "			<a  class=\"item dark-ink\" ng-click=\"openURL('market://details?id=com.imabuilder.anaski.kidstories')\">";
	popover_template += "			Rate my App";
	popover_template += "			</a>";
	popover_template += "		</ion-list>";
	popover_template += "	</ion-content>";
	popover_template += "</ion-popover-view>";
	
	
	$scope.popover = $ionicPopover.fromTemplate(popover_template,{
		scope: $scope
	});
	
	$scope.closePopover = function(){
		$scope.popover.hide();
	};
	
	$scope.$on("$destroy", function(){
		$scope.popover.remove();
	});

	// TODO: side_menusCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("error: page side_menus => custom controller");
			console.log(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: aboutCtrl --|-- 
.controller("aboutCtrl", function($scope,$rootScope,$state,$location,$ionicScrollDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64){
	
	$rootScope.headerExists = true;
	$rootScope.page_id = "about" ;
	$rootScope.last_edit = "menu" ;
	// TODO: aboutCtrl --|-- $scope.scrollTop
	$scope.scrollTop = function(){
		$ionicScrollDelegate.$getByHandle("top").scrollTop();
	};
	// TODO: aboutCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: aboutCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: aboutCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		window.open($url,"_self");
	};
	
	// TODO: aboutCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: aboutCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("error: page about => custom controller");
			console.log(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: about_usCtrl --|-- 
.controller("about_usCtrl", function($scope,$rootScope,$state,$location,$ionicScrollDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64){
	
	$rootScope.headerExists = true;
	$rootScope.page_id = "about_us" ;
	$rootScope.last_edit = "menu" ;
	// TODO: about_usCtrl --|-- $scope.scrollTop
	$scope.scrollTop = function(){
		$ionicScrollDelegate.$getByHandle("top").scrollTop();
	};
	// TODO: about_usCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: about_usCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: about_usCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		window.open($url,"_self");
	};
	
	// TODO: about_usCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: about_usCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("error: page about_us => custom controller");
			console.log(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: categoriesCtrl --|-- 
.controller("categoriesCtrl", function($scope,$rootScope,$state,$location,$ionicScrollDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64){
	
	$rootScope.headerExists = true;
	$rootScope.page_id = "categories" ;
	$rootScope.last_edit = "table (categorie)" ;
	// TODO: categoriesCtrl --|-- $scope.scrollTop
	$scope.scrollTop = function(){
		$ionicScrollDelegate.$getByHandle("top").scrollTop();
	};
	// TODO: categoriesCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: categoriesCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: categoriesCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		window.open($url,"_self");
	};
	
	// TODO: categoriesCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// TODO: categoriesCtrl --|-- $scope.showAuthentication
	$scope.showAuthentication  = function(){
		var authPopup = $ionicPopup.show({
			template: ' ',
			title: "Authorization",
			subTitle: "Authorization is required",
			scope: $scope,
			buttons: [
				{text:"Cancel",onTap: function(e){
					$state.go("kid_stories.about");
				}},
			],
		}).then(function(form){
		},function(err){
		},function(msg){
		});
	};
	
	// set default parameter http
	var http_params = {};
	
	// set HTTP Header 
	var http_header = {
		headers: {
		},
		params: http_params
	};
	var targetQuery = ""; //default param
	var raplaceWithQuery = "";
	//fix url Categories
	targetQuery = "json=categorie"; //default param
	raplaceWithQuery = "json=categorie";
	
	$scope.gmapOptions = {options: { scrollwheel: false }};
	
	var fetch_per_scroll = 1;
	// animation loading 
	$ionicLoading.show({
		template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
	});
	
	
	$scope.noMoreItemsAvailable = false; //readmore status
	var lastPush = 0;
	var data_categories = [];
	
	if(window.localStorage.getItem("data_categories") !== "undefined"){
		data_categories = JSON.parse(window.localStorage.getItem("data_categories"));
		$scope.data_categories = JSON.parse(window.localStorage.getItem("data_categories"));
			if (data_categories !== null){
			$scope.categories = [];
			for(lastPush = 0; lastPush < 10; lastPush++) {
				if (angular.isObject(data_categories[lastPush])){
					$scope.categories.push(data_categories[lastPush]);
				};
			}
			$timeout(function() {
				$ionicLoading.hide();
				controller_by_user();
			}, 500);
		}
	}
	if(!angular.isObject(data_categories)){
		$timeout(function() {
			var url_request = "http://demo.ihsana.net/backend-generator/rest-api.php?json=categorie".replace(targetQuery,raplaceWithQuery);
			// overwrite HTTP Header 
			http_header = {
				headers: {
				},
				params: http_params
			};
			// TODO: categoriesCtrl --|-- $http.get
			$http.get(url_request,http_header).then(function(response) {
				data_categories = response.data;
				$scope.data_categories = response.data;
				if(typeof(Storage) != "undefined"){
					try {
						// TODO: categoriesCtrl --|---------- set:localstorage
						window.localStorage.setItem("data_categories",JSON.stringify(data_categories));
					} catch(e) {
						// TODO: categoriesCtrl --|---------- clear:localstorage
						window.localStorage.clear();
						window.localStorage.setItem("data_categories",JSON.stringify(data_categories));
						$ionicHistory.clearCache();
						$ionicHistory.clearHistory();
						$state.reload();
						$scope.$state = $state;
					}
				}
				$scope.categories = [];
				for(lastPush = 0; lastPush < 100; lastPush++) {
					if (angular.isObject(data_categories[lastPush])){
						$scope.categories.push(data_categories[lastPush]);
					};
				}
			},function(response) {
			
				$timeout(function() {
					var url_request = "http://demo.ihsana.net/backend-generator/rest-api.php?json=categorie&callback=JSON_CALLBACK".replace(targetQuery,raplaceWithQuery);
					// overwrite HTTP Header 
					http_header = {
						headers: {
						},
						params: http_params
					};
					// TODO: categoriesCtrl --|------ $http.jsonp
					$http.jsonp(url_request,http_header).success(function(data){
						data_categories = data;
						$scope.data_categories = data;
						$ionicLoading.hide();
						if(typeof(Storage) != "undefined"){
							try {
								// TODO: categoriesCtrl --|---------------- set:localstorage
								window.localStorage.setItem("data_categories",JSON.stringify(data_categories));
							} catch(e) {
								// TODO: categoriesCtrl --|---------------- clear:localstorage
								window.localStorage.clear();
								window.localStorage.setItem("data_categories",JSON.stringify(data_categories));
								$ionicHistory.clearCache();
								$ionicHistory.clearHistory();
								$state.reload();
								$scope.$state = $state;
							}
						}
						controller_by_user();
						$scope.categories = [];
						for(lastPush = 0; lastPush < 100; lastPush++) {
							if (angular.isObject(data_categories[lastPush])){
								$scope.categories.push(data_categories[lastPush]);
							};
						}
					}).error(function(data){
					if(response.status ===401){
						// TODO: categoriesCtrl --|------------ error:Unauthorized
						$scope.showAuthentication();
					}else{
						// TODO: categoriesCtrl --|------------ error:Message
						var data = { statusText:response.statusText, status:response.status };
						var alertPopup = $ionicPopup.alert({
							title: "Error" + " (" + data.status + ")",
							template: "An error occurred while collecting data." + "<br/><br/><pre>code: " + data.status + "<br/>error: " + data.statusText + "<br/>source: " + $rootScope.last_edit + "</pre>",
						});
					}
					});
				}, 1000);
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				controller_by_user();
			}, 1000);
		});
	
		}, 1000);
	}
	
	
	// TODO: categoriesCtrl --|-- $scope.doRefresh
	$scope.doRefresh = function(){
		var url_request ="http://demo.ihsana.net/backend-generator/rest-api.php?json=categorie".replace(targetQuery,raplaceWithQuery);
		// retry retrieving data
		window.localStorage.clear();
		// overwrite http_header 
		http_header = {
			headers: {
			},
			params: http_params
		};
		// TODO: categoriesCtrl --|------ $http.get
		$http.get(url_request,http_header).then(function(response) {
			data_categories = response.data;
			$scope.data_categories = response.data;
			if(typeof(Storage) != "undefined"){
				try {
					// TODO: categoriesCtrl --|---------------- set:localstorage
					window.localStorage.setItem("data_categories",JSON.stringify(data_categories));
				} catch(e) {
					// TODO: categoriesCtrl --|---------------- clear:localstorage
					window.localStorage.clear();
					window.localStorage.setItem("data_categories",JSON.stringify(data_categories));
					$ionicHistory.clearCache();
					$ionicHistory.clearHistory();
					$state.reload();
					$scope.$state = $state;
				}
			}
			$scope.categories = [];
			for(lastPush = 0; lastPush < 100; lastPush++) {
				if (angular.isObject(data_categories[lastPush])){
					$scope.categories.push(data_categories[lastPush]);
				};
			}
		},function(response){
			
		// retrieving data with jsonp
			$timeout(function() {
			var url_request ="http://demo.ihsana.net/backend-generator/rest-api.php?json=categorie&callback=JSON_CALLBACK".replace(targetQuery,raplaceWithQuery);
				// overwrite http_header 
				http_header = {
					headers: {
					},
					params: http_params
				};
				// TODO: categoriesCtrl --|---------- $http.jsonp
				$http.jsonp(url_request,http_header).success(function(data){
					data_categories = data;
					$scope.data_categories = data;
					$ionicLoading.hide();
					controller_by_user();
					if(typeof(Storage) != "undefined"){
						try {
							// TODO: categoriesCtrl --|---------------- set:localstorage
							window.localStorage.setItem("data_categories",JSON.stringify(data_categories));
						} catch(e) {
							// TODO: categoriesCtrl --|---------------- clear:localstorage
							window.localStorage.clear();
							window.localStorage.setItem("data_categories",JSON.stringify(data_categories));
							$ionicHistory.clearCache();
							$ionicHistory.clearHistory();
							$state.reload();
							$scope.$state = $state;
						}
					}
					$scope.categories = [];
					for(lastPush = 0; lastPush < 100; lastPush++) {
						if (angular.isObject(data_categories[lastPush])){
							$scope.categories.push(data_categories[lastPush]);
						};
					}
				}).error(function(resp){
					if(response.status ===401){
					// TODO: categoriesCtrl --|------------ error:Unauthorized
					$scope.showAuthentication();
					}else{
						// TODO: categoriesCtrl --|------------ error:Message
						var data = { statusText:response.statusText, status:response.status };
						var alertPopup = $ionicPopup.alert({
							title: "Error" + " (" + data.status + ")",
							template: "An error occurred while collecting data." + "<br/><br/><pre>code: " + data.status + "<br/>error: " + data.statusText + "<br/>source: " + $rootScope.last_edit + "</pre>",
						});
					};
				});
			}, 1000);
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				controller_by_user();
			}, 500);
		});
	
	};
	if (data_categories === null){
		data_categories = [];
	};
	// animation readmore
	var fetchItems = function() {
		for(var z=0;z<fetch_per_scroll;z++){
			if (angular.isObject(data_categories[lastPush])){
				$scope.categories.push(data_categories[lastPush]);
				lastPush++;
			}else{;
				$scope.noMoreItemsAvailable = true;
			}
		}
		$scope.$broadcast("scroll.infiniteScrollComplete");
	};
	
	// event readmore
	$scope.onInfinite = function() {
		$timeout(fetchItems, 500);
	};
	
	// create animation fade slide in right (ionic-material)
	$scope.fireEvent = function(){
		ionicMaterialMotion.fadeSlideInRight();
		ionicMaterialInk.displayEffect();
	};
	// code 

	// TODO: categoriesCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("error: page categories => custom controller");
			console.log(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: faq_singlesCtrl --|-- 
.controller("faq_singlesCtrl", function($scope,$rootScope,$state,$location,$ionicScrollDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64){
	
	$rootScope.headerExists = true;
	$rootScope.page_id = "faq_singles" ;
	$rootScope.last_edit = "table (faq)" ;
	// TODO: faq_singlesCtrl --|-- $scope.scrollTop
	$scope.scrollTop = function(){
		$ionicScrollDelegate.$getByHandle("top").scrollTop();
	};
	// TODO: faq_singlesCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: faq_singlesCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: faq_singlesCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		window.open($url,"_self");
	};
	
	// TODO: faq_singlesCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// TODO: faq_singlesCtrl --|-- $scope.showAuthentication
	$scope.showAuthentication  = function(){
		var authPopup = $ionicPopup.show({
			template: ' ',
			title: "Authorization",
			subTitle: "Authorization is required",
			scope: $scope,
			buttons: [
				{text:"Cancel",onTap: function(e){
					$state.go("kid_stories.about");
				}},
			],
		}).then(function(form){
		},function(err){
		},function(msg){
		});
	};
	
	// set default parameter http
	var http_params = {};

	// set HTTP Header 
	var http_header = {
		headers: {
		},
		params: http_params
	};
	// animation loading 
	$ionicLoading.show({
		template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
	});
	
	// Retrieving data
	var itemID = $stateParams.id;
	var current_item = [];
	if(window.localStorage.getItem("data_faqs") !== "undefined"){
		var datas = JSON.parse(window.localStorage.getItem("data_faqs"));
		if(datas!==null){
			for (var i = 0; i < datas.length; i++) {
				if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
					current_item = datas[i] ;
				}
			}
		}
		// event done, hidden animation loading
		$timeout(function() {
			$ionicLoading.hide();
			$scope.faq = current_item ;
			controller_by_user();
		}, 500);
	};
	if(!angular.isObject(current_item)){
		var itemID = $stateParams.id;
		var current_item = [];
	
		// set HTTP Header 
		http_header = {
			headers: {
			},
			params: http_params
		};
		// TODO: faq_singlesCtrl --|-- $http.get
		$http.get("http://demo.ihsana.net//backend-generator/rest-api.php?json=faq",http_header).then(function(response) {
			// Get data single
			var datas = response.data;
			try {
				window.localStorage.setItem("data_faqs",JSON.stringify(datas));
			} catch(e) {
				window.localStorage.clear();
				window.localStorage.setItem("data_faqs",JSON.stringify(datas));
				$ionicHistory.clearCache();
				$ionicHistory.clearHistory();
				$state.reload();
				$scope.$state = $state;
			}
			for (var i = 0; i < datas.length; i++) {
				if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
					current_item = datas[i] ;
				}
			}
		},function(data) {
					// Error message
					var alertPopup = $ionicPopup.alert({
						title: "Error" + " (" + data.status + ")",
						template: "An error occurred while collecting data." + "<br/><br/><pre>code: " + data.status + "<br/>error: " + data.statusText + "<br/>source: " + $rootScope.last_edit + "</pre>",
					});
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				$scope.faq = current_item ;
				controller_by_user();
			}, 500);
		});
	}
	
	
		// TODO: faq_singlesCtrl --|-- $scope.doRefresh
	$scope.doRefresh = function(){
		// Retrieving data
		window.localStorage.clear();
		var itemID = $stateParams.id;
		var current_item = [];
		// overwrite http_header 
		http_header = {
			headers: {
			},
			params: http_params
		};
		// TODO: faq_singlesCtrl --|------ $http.get
		$http.get("http://demo.ihsana.net//backend-generator/rest-api.php?json=faq",http_header).then(function(response) {
			// Get data single
			var datas = response.data;
			window.localStorage.setItem("data_faqs",JSON.stringify(datas));
			for (var i = 0; i < datas.length; i++) {
				if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
					current_item = datas[i] ;
				}
			}
		},function(data) {
			// Error message
		// TODO: faq_singlesCtrl --|---------- $http.jsonp
				$http.jsonp("http://demo.ihsana.net//backend-generator/rest-api.php?json=faq&callback=JSON_CALLBACK",http_header).success(function(response){
					// Get data single
					var datas = response;
					window.localStorage.setItem("data_faqs",JSON.stringify(datas));
					for (var i = 0; i < datas.length; i++) {
						if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
							current_item = datas[i] ;
						}
					}
						$scope.$broadcast("scroll.refreshComplete");
						// event done, hidden animation loading
						$timeout(function() {
							$ionicLoading.hide();
							$scope.faq = current_item ;
							controller_by_user();
						}, 500);
					}).error(function(resp){
						var alertPopup = $ionicPopup.alert({
							title: "Error" + " (" + data.status + ")",
							template: "An error occurred while collecting data." + "<br/><br/><pre>code: " + data.status + "<br/>error: " + data.statusText + "<br/>source: " + $rootScope.last_edit + "</pre>",
						});
					});
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				$scope.faq = current_item ;
				controller_by_user();
			}, 500);
		});
	};
	// code 

	// TODO: faq_singlesCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("error: page faq_singles => custom controller");
			console.log(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: faqsCtrl --|-- 
.controller("faqsCtrl", function($scope,$rootScope,$state,$location,$ionicScrollDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64){
	
	$rootScope.headerExists = true;
	$rootScope.page_id = "faqs" ;
	$rootScope.last_edit = "table (faq)" ;
	// TODO: faqsCtrl --|-- $scope.scrollTop
	$scope.scrollTop = function(){
		$ionicScrollDelegate.$getByHandle("top").scrollTop();
	};
	// TODO: faqsCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: faqsCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: faqsCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		window.open($url,"_self");
	};
	
	// TODO: faqsCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// TODO: faqsCtrl --|-- $scope.showAuthentication
	$scope.showAuthentication  = function(){
		var authPopup = $ionicPopup.show({
			template: ' ',
			title: "Authorization",
			subTitle: "Authorization is required",
			scope: $scope,
			buttons: [
				{text:"Cancel",onTap: function(e){
					$state.go("kid_stories.about");
				}},
			],
		}).then(function(form){
		},function(err){
		},function(msg){
		});
	};
	
	// set default parameter http
	var http_params = {};
	
	// set HTTP Header 
	var http_header = {
		headers: {
		},
		params: http_params
	};
	var targetQuery = ""; //default param
	var raplaceWithQuery = "";
	//fix url Faqs
	targetQuery = "json=faq"; //default param
	raplaceWithQuery = "json=faq";
	
	$scope.gmapOptions = {options: { scrollwheel: false }};
	
	var fetch_per_scroll = 1;
	// animation loading 
	$ionicLoading.show({
		template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
	});
	
	
	$scope.noMoreItemsAvailable = false; //readmore status
	var lastPush = 0;
	var data_faqs = [];
	
	if(window.localStorage.getItem("data_faqs") !== "undefined"){
		data_faqs = JSON.parse(window.localStorage.getItem("data_faqs"));
		$scope.data_faqs = JSON.parse(window.localStorage.getItem("data_faqs"));
			if (data_faqs !== null){
			$scope.faqs = [];
			for(lastPush = 0; lastPush < 10; lastPush++) {
				if (angular.isObject(data_faqs[lastPush])){
					$scope.faqs.push(data_faqs[lastPush]);
				};
			}
			$timeout(function() {
				$ionicLoading.hide();
				controller_by_user();
			}, 500);
		}
	}
	if(!angular.isObject(data_faqs)){
		$timeout(function() {
			var url_request = "http://demo.ihsana.net//backend-generator/rest-api.php?json=faq".replace(targetQuery,raplaceWithQuery);
			// overwrite HTTP Header 
			http_header = {
				headers: {
				},
				params: http_params
			};
			// TODO: faqsCtrl --|-- $http.get
			$http.get(url_request,http_header).then(function(response) {
				data_faqs = response.data;
				$scope.data_faqs = response.data;
				if(typeof(Storage) != "undefined"){
					try {
						// TODO: faqsCtrl --|---------- set:localstorage
						window.localStorage.setItem("data_faqs",JSON.stringify(data_faqs));
					} catch(e) {
						// TODO: faqsCtrl --|---------- clear:localstorage
						window.localStorage.clear();
						window.localStorage.setItem("data_faqs",JSON.stringify(data_faqs));
						$ionicHistory.clearCache();
						$ionicHistory.clearHistory();
						$state.reload();
						$scope.$state = $state;
					}
				}
				$scope.faqs = [];
				for(lastPush = 0; lastPush < 100; lastPush++) {
					if (angular.isObject(data_faqs[lastPush])){
						$scope.faqs.push(data_faqs[lastPush]);
					};
				}
			},function(response) {
			
				$timeout(function() {
					var url_request = "http://demo.ihsana.net//backend-generator/rest-api.php?json=faq&callback=JSON_CALLBACK".replace(targetQuery,raplaceWithQuery);
					// overwrite HTTP Header 
					http_header = {
						headers: {
						},
						params: http_params
					};
					// TODO: faqsCtrl --|------ $http.jsonp
					$http.jsonp(url_request,http_header).success(function(data){
						data_faqs = data;
						$scope.data_faqs = data;
						$ionicLoading.hide();
						if(typeof(Storage) != "undefined"){
							try {
								// TODO: faqsCtrl --|---------------- set:localstorage
								window.localStorage.setItem("data_faqs",JSON.stringify(data_faqs));
							} catch(e) {
								// TODO: faqsCtrl --|---------------- clear:localstorage
								window.localStorage.clear();
								window.localStorage.setItem("data_faqs",JSON.stringify(data_faqs));
								$ionicHistory.clearCache();
								$ionicHistory.clearHistory();
								$state.reload();
								$scope.$state = $state;
							}
						}
						controller_by_user();
						$scope.faqs = [];
						for(lastPush = 0; lastPush < 100; lastPush++) {
							if (angular.isObject(data_faqs[lastPush])){
								$scope.faqs.push(data_faqs[lastPush]);
							};
						}
					}).error(function(data){
					if(response.status ===401){
						// TODO: faqsCtrl --|------------ error:Unauthorized
						$scope.showAuthentication();
					}else{
						// TODO: faqsCtrl --|------------ error:Message
						var data = { statusText:response.statusText, status:response.status };
						var alertPopup = $ionicPopup.alert({
							title: "Error" + " (" + data.status + ")",
							template: "An error occurred while collecting data." + "<br/><br/><pre>code: " + data.status + "<br/>error: " + data.statusText + "<br/>source: " + $rootScope.last_edit + "</pre>",
						});
					}
					});
				}, 1000);
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				controller_by_user();
			}, 1000);
		});
	
		}, 1000);
	}
	
	
	// TODO: faqsCtrl --|-- $scope.doRefresh
	$scope.doRefresh = function(){
		var url_request ="http://demo.ihsana.net//backend-generator/rest-api.php?json=faq".replace(targetQuery,raplaceWithQuery);
		// retry retrieving data
		window.localStorage.clear();
		// overwrite http_header 
		http_header = {
			headers: {
			},
			params: http_params
		};
		// TODO: faqsCtrl --|------ $http.get
		$http.get(url_request,http_header).then(function(response) {
			data_faqs = response.data;
			$scope.data_faqs = response.data;
			if(typeof(Storage) != "undefined"){
				try {
					// TODO: faqsCtrl --|---------------- set:localstorage
					window.localStorage.setItem("data_faqs",JSON.stringify(data_faqs));
				} catch(e) {
					// TODO: faqsCtrl --|---------------- clear:localstorage
					window.localStorage.clear();
					window.localStorage.setItem("data_faqs",JSON.stringify(data_faqs));
					$ionicHistory.clearCache();
					$ionicHistory.clearHistory();
					$state.reload();
					$scope.$state = $state;
				}
			}
			$scope.faqs = [];
			for(lastPush = 0; lastPush < 100; lastPush++) {
				if (angular.isObject(data_faqs[lastPush])){
					$scope.faqs.push(data_faqs[lastPush]);
				};
			}
		},function(response){
			
		// retrieving data with jsonp
			$timeout(function() {
			var url_request ="http://demo.ihsana.net//backend-generator/rest-api.php?json=faq&callback=JSON_CALLBACK".replace(targetQuery,raplaceWithQuery);
				// overwrite http_header 
				http_header = {
					headers: {
					},
					params: http_params
				};
				// TODO: faqsCtrl --|---------- $http.jsonp
				$http.jsonp(url_request,http_header).success(function(data){
					data_faqs = data;
					$scope.data_faqs = data;
					$ionicLoading.hide();
					controller_by_user();
					if(typeof(Storage) != "undefined"){
						try {
							// TODO: faqsCtrl --|---------------- set:localstorage
							window.localStorage.setItem("data_faqs",JSON.stringify(data_faqs));
						} catch(e) {
							// TODO: faqsCtrl --|---------------- clear:localstorage
							window.localStorage.clear();
							window.localStorage.setItem("data_faqs",JSON.stringify(data_faqs));
							$ionicHistory.clearCache();
							$ionicHistory.clearHistory();
							$state.reload();
							$scope.$state = $state;
						}
					}
					$scope.faqs = [];
					for(lastPush = 0; lastPush < 100; lastPush++) {
						if (angular.isObject(data_faqs[lastPush])){
							$scope.faqs.push(data_faqs[lastPush]);
						};
					}
				}).error(function(resp){
					if(response.status ===401){
					// TODO: faqsCtrl --|------------ error:Unauthorized
					$scope.showAuthentication();
					}else{
						// TODO: faqsCtrl --|------------ error:Message
						var data = { statusText:response.statusText, status:response.status };
						var alertPopup = $ionicPopup.alert({
							title: "Error" + " (" + data.status + ")",
							template: "An error occurred while collecting data." + "<br/><br/><pre>code: " + data.status + "<br/>error: " + data.statusText + "<br/>source: " + $rootScope.last_edit + "</pre>",
						});
					};
				});
			}, 1000);
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				controller_by_user();
			}, 500);
		});
	
	};
	if (data_faqs === null){
		data_faqs = [];
	};
	// animation readmore
	var fetchItems = function() {
		for(var z=0;z<fetch_per_scroll;z++){
			if (angular.isObject(data_faqs[lastPush])){
				$scope.faqs.push(data_faqs[lastPush]);
				lastPush++;
			}else{;
				$scope.noMoreItemsAvailable = true;
			}
		}
		$scope.$broadcast("scroll.infiniteScrollComplete");
	};
	
	// event readmore
	$scope.onInfinite = function() {
		$timeout(fetchItems, 500);
	};
	
	// create animation fade slide in right (ionic-material)
	$scope.fireEvent = function(){
		ionicMaterialMotion.fadeSlideInRight();
		ionicMaterialInk.displayEffect();
	};
	// code 

	// TODO: faqsCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("error: page faqs => custom controller");
			console.log(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: form_contact_usCtrl --|-- 
.controller("form_contact_usCtrl", function($scope,$rootScope,$state,$location,$ionicScrollDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64){
	
	$rootScope.headerExists = true;
	$rootScope.page_id = "form_contact_us" ;
	$rootScope.last_edit = "forms" ;
	// TODO: form_contact_usCtrl --|-- $scope.scrollTop
	$scope.scrollTop = function(){
		$ionicScrollDelegate.$getByHandle("top").scrollTop();
	};
	// TODO: form_contact_usCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: form_contact_usCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: form_contact_usCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		window.open($url,"_self");
	};
	
	// TODO: form_contact_usCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	
	// Form Request
	//contact_us
	$scope.form_contact_us= {};
	// TODO: form_contact_usCtrl --|-- $scope.submitContact_us
	$scope.submitContact_us = function(){
		// animation loading 
		$ionicLoading.show({
			template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
		});
	
		var $messages, $title = null;
		$http({
				method:"POST",
				url: "http://demo.ihsana.net/backend-generator/rest-api.php?form=contact&json=submit",
				data: $httpParamSerializer($scope.form_contact_us),  // pass in data as strings
				headers: {"Content-Type":"application/x-www-form-urlencoded"}  // set the headers so angular passing info as form data (not request payload)
			})
			.then(function(response) {
				$messages = response.data.message;
				$title = response.data.title;
			},function(response){
				$messages = response.statusText;
				$title = response.status;
			}).finally(function(){
				// event done, hidden animation loading
				$timeout(function() {
					$ionicLoading.hide();
					if($messages !== null){
						// message
					var alertPopup = $ionicPopup.alert({
						title: $title,
						template: $messages,
					});
						// clear input
						$scope.form_contact_us.subject = "";
						$scope.form_contact_us.message = "";
					}
			}, 500);
		});
	};
	// code 

	// TODO: form_contact_usCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("error: page form_contact_us => custom controller");
			console.log(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: form_questionCtrl --|-- 
.controller("form_questionCtrl", function($scope,$rootScope,$state,$location,$ionicScrollDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64){
	
	$rootScope.headerExists = true;
	$rootScope.page_id = "form_question" ;
	$rootScope.last_edit = "forms" ;
	// TODO: form_questionCtrl --|-- $scope.scrollTop
	$scope.scrollTop = function(){
		$ionicScrollDelegate.$getByHandle("top").scrollTop();
	};
	// TODO: form_questionCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: form_questionCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: form_questionCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		window.open($url,"_self");
	};
	
	// TODO: form_questionCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	
	// Form Request
	//question
	$scope.form_question= {};
	// TODO: form_questionCtrl --|-- $scope.submitQuestion
	$scope.submitQuestion = function(){
		// animation loading 
		$ionicLoading.show({
			template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
		});
	
		var $messages, $title = null;
		$http({
				method:"POST",
				url: "http://demo.ihsana.net/backend-generator/rest-api.php?form=faq&json=submit",
				data: $httpParamSerializer($scope.form_question),  // pass in data as strings
				headers: {"Content-Type":"application/x-www-form-urlencoded"}  // set the headers so angular passing info as form data (not request payload)
			})
			.then(function(response) {
				$messages = response.data.message;
				$title = response.data.title;
			},function(response){
				$messages = response.statusText;
				$title = response.status;
			}).finally(function(){
				// event done, hidden animation loading
				$timeout(function() {
					$ionicLoading.hide();
					if($messages !== null){
						// message
					var alertPopup = $ionicPopup.alert({
						title: $title,
						template: $messages,
					});
						// clear input
						$scope.form_question.question = "";
					}
			}, 500);
		});
	};
	// code 

	// TODO: form_questionCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("error: page form_question => custom controller");
			console.log(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: form_your_storyCtrl --|-- 
.controller("form_your_storyCtrl", function($scope,$rootScope,$state,$location,$ionicScrollDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64){
	
	$rootScope.headerExists = true;
	$rootScope.page_id = "form_your_story" ;
	$rootScope.last_edit = "forms" ;
	// TODO: form_your_storyCtrl --|-- $scope.scrollTop
	$scope.scrollTop = function(){
		$ionicScrollDelegate.$getByHandle("top").scrollTop();
	};
	// TODO: form_your_storyCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: form_your_storyCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: form_your_storyCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		window.open($url,"_self");
	};
	
	// TODO: form_your_storyCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	
	// Form Request
	//your_story
	$scope.form_your_story= {};
	// TODO: form_your_storyCtrl --|-- $scope.submitYour_story
	$scope.submitYour_story = function(){
		// animation loading 
		$ionicLoading.show({
			template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
		});
	
		var $messages, $title = null;
		$http({
				method:"POST",
				url: "http://demo.ihsana.net/backend-generator/rest-api.php?form=storie&json=submit",
				data: $httpParamSerializer($scope.form_your_story),  // pass in data as strings
				headers: {"Content-Type":"application/x-www-form-urlencoded"}  // set the headers so angular passing info as form data (not request payload)
			})
			.then(function(response) {
				$messages = response.data.message;
				$title = response.data.title;
			},function(response){
				$messages = response.statusText;
				$title = response.status;
			}).finally(function(){
				// event done, hidden animation loading
				$timeout(function() {
					$ionicLoading.hide();
					if($messages !== null){
						// message
					var alertPopup = $ionicPopup.alert({
						title: $title,
						template: $messages,
					});
						// clear input
						$scope.form_your_story.author = "";
						$scope.form_your_story.title = "";
						$scope.form_your_story.content = "";
						$scope.form_your_story.category = "";
					}
			}, 500);
		});
	};
	// code 

	// TODO: form_your_storyCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("error: page form_your_story => custom controller");
			console.log(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: homepageCtrl --|-- 
.controller("homepageCtrl", function($scope,$rootScope,$state,$location,$ionicScrollDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64){
	
	$rootScope.headerExists = true;
	$rootScope.page_id = "homepage" ;
	$rootScope.last_edit = "table (page)" ;
	// TODO: homepageCtrl --|-- $scope.scrollTop
	$scope.scrollTop = function(){
		$ionicScrollDelegate.$getByHandle("top").scrollTop();
	};
	// TODO: homepageCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: homepageCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: homepageCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		window.open($url,"_self");
	};
	
	// TODO: homepageCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// TODO: homepageCtrl --|-- $scope.showAuthentication
	$scope.showAuthentication  = function(){
		var authPopup = $ionicPopup.show({
			template: ' ',
			title: "Authorization",
			subTitle: "Authorization is required",
			scope: $scope,
			buttons: [
				{text:"Cancel",onTap: function(e){
					$state.go("kid_stories.about");
				}},
			],
		}).then(function(form){
		},function(err){
		},function(msg){
		});
	};
	
	// set default parameter http
	var http_params = {};
	
	// set HTTP Header 
	var http_header = {
		headers: {
		},
		params: http_params
	};
	var targetQuery = ""; //default param
	var raplaceWithQuery = "";
	//fix url Home
	targetQuery = "json=page"; //default param
	raplaceWithQuery = "json=page";
	
	$scope.gmapOptions = {options: { scrollwheel: false }};
	
	var fetch_per_scroll = 1;
	// animation loading 
	$ionicLoading.show({
		template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
	});
	
	
	$scope.noMoreItemsAvailable = false; //readmore status
	var lastPush = 0;
	var data_pages = [];
	
	if(window.localStorage.getItem("data_pages") !== "undefined"){
		data_pages = JSON.parse(window.localStorage.getItem("data_pages"));
		$scope.data_pages = JSON.parse(window.localStorage.getItem("data_pages"));
			if (data_pages !== null){
			$scope.pages = [];
			for(lastPush = 0; lastPush < 10; lastPush++) {
				if (angular.isObject(data_pages[lastPush])){
					$scope.pages.push(data_pages[lastPush]);
				};
			}
			$timeout(function() {
				$ionicLoading.hide();
				controller_by_user();
			}, 500);
		}
	}
	if(!angular.isObject(data_pages)){
		$timeout(function() {
			var url_request = "http://demo.ihsana.net/backend-generator/rest-api.php?json=page&title=homepage".replace(targetQuery,raplaceWithQuery);
			// overwrite HTTP Header 
			http_header = {
				headers: {
				},
				params: http_params
			};
			// TODO: homepageCtrl --|-- $http.get
			$http.get(url_request,http_header).then(function(response) {
				data_pages = response.data;
				$scope.data_pages = response.data;
				if(typeof(Storage) != "undefined"){
					try {
						// TODO: homepageCtrl --|---------- set:localstorage
						window.localStorage.setItem("data_pages",JSON.stringify(data_pages));
					} catch(e) {
						// TODO: homepageCtrl --|---------- clear:localstorage
						window.localStorage.clear();
						window.localStorage.setItem("data_pages",JSON.stringify(data_pages));
						$ionicHistory.clearCache();
						$ionicHistory.clearHistory();
						$state.reload();
						$scope.$state = $state;
					}
				}
				$scope.pages = [];
				for(lastPush = 0; lastPush < 100; lastPush++) {
					if (angular.isObject(data_pages[lastPush])){
						$scope.pages.push(data_pages[lastPush]);
					};
				}
			},function(response) {
			
				$timeout(function() {
					var url_request = "http://demo.ihsana.net/backend-generator/rest-api.php?json=page&title=homepage&callback=JSON_CALLBACK".replace(targetQuery,raplaceWithQuery);
					// overwrite HTTP Header 
					http_header = {
						headers: {
						},
						params: http_params
					};
					// TODO: homepageCtrl --|------ $http.jsonp
					$http.jsonp(url_request,http_header).success(function(data){
						data_pages = data;
						$scope.data_pages = data;
						$ionicLoading.hide();
						if(typeof(Storage) != "undefined"){
							try {
								// TODO: homepageCtrl --|---------------- set:localstorage
								window.localStorage.setItem("data_pages",JSON.stringify(data_pages));
							} catch(e) {
								// TODO: homepageCtrl --|---------------- clear:localstorage
								window.localStorage.clear();
								window.localStorage.setItem("data_pages",JSON.stringify(data_pages));
								$ionicHistory.clearCache();
								$ionicHistory.clearHistory();
								$state.reload();
								$scope.$state = $state;
							}
						}
						controller_by_user();
						$scope.pages = [];
						for(lastPush = 0; lastPush < 100; lastPush++) {
							if (angular.isObject(data_pages[lastPush])){
								$scope.pages.push(data_pages[lastPush]);
							};
						}
					}).error(function(data){
					if(response.status ===401){
						// TODO: homepageCtrl --|------------ error:Unauthorized
						$scope.showAuthentication();
					}else{
						// TODO: homepageCtrl --|------------ error:Message
						var data = { statusText:response.statusText, status:response.status };
						var alertPopup = $ionicPopup.alert({
							title: "Error" + " (" + data.status + ")",
							template: "An error occurred while collecting data." + "<br/><br/><pre>code: " + data.status + "<br/>error: " + data.statusText + "<br/>source: " + $rootScope.last_edit + "</pre>",
						});
					}
					});
				}, 1000);
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				controller_by_user();
			}, 1000);
		});
	
		}, 1000);
	}
	
	
	// TODO: homepageCtrl --|-- $scope.doRefresh
	$scope.doRefresh = function(){
		var url_request ="http://demo.ihsana.net/backend-generator/rest-api.php?json=page&title=homepage".replace(targetQuery,raplaceWithQuery);
		// retry retrieving data
		window.localStorage.clear();
		// overwrite http_header 
		http_header = {
			headers: {
			},
			params: http_params
		};
		// TODO: homepageCtrl --|------ $http.get
		$http.get(url_request,http_header).then(function(response) {
			data_pages = response.data;
			$scope.data_pages = response.data;
			if(typeof(Storage) != "undefined"){
				try {
					// TODO: homepageCtrl --|---------------- set:localstorage
					window.localStorage.setItem("data_pages",JSON.stringify(data_pages));
				} catch(e) {
					// TODO: homepageCtrl --|---------------- clear:localstorage
					window.localStorage.clear();
					window.localStorage.setItem("data_pages",JSON.stringify(data_pages));
					$ionicHistory.clearCache();
					$ionicHistory.clearHistory();
					$state.reload();
					$scope.$state = $state;
				}
			}
			$scope.pages = [];
			for(lastPush = 0; lastPush < 100; lastPush++) {
				if (angular.isObject(data_pages[lastPush])){
					$scope.pages.push(data_pages[lastPush]);
				};
			}
		},function(response){
			
		// retrieving data with jsonp
			$timeout(function() {
			var url_request ="http://demo.ihsana.net/backend-generator/rest-api.php?json=page&title=homepage&callback=JSON_CALLBACK".replace(targetQuery,raplaceWithQuery);
				// overwrite http_header 
				http_header = {
					headers: {
					},
					params: http_params
				};
				// TODO: homepageCtrl --|---------- $http.jsonp
				$http.jsonp(url_request,http_header).success(function(data){
					data_pages = data;
					$scope.data_pages = data;
					$ionicLoading.hide();
					controller_by_user();
					if(typeof(Storage) != "undefined"){
						try {
							// TODO: homepageCtrl --|---------------- set:localstorage
							window.localStorage.setItem("data_pages",JSON.stringify(data_pages));
						} catch(e) {
							// TODO: homepageCtrl --|---------------- clear:localstorage
							window.localStorage.clear();
							window.localStorage.setItem("data_pages",JSON.stringify(data_pages));
							$ionicHistory.clearCache();
							$ionicHistory.clearHistory();
							$state.reload();
							$scope.$state = $state;
						}
					}
					$scope.pages = [];
					for(lastPush = 0; lastPush < 100; lastPush++) {
						if (angular.isObject(data_pages[lastPush])){
							$scope.pages.push(data_pages[lastPush]);
						};
					}
				}).error(function(resp){
					if(response.status ===401){
					// TODO: homepageCtrl --|------------ error:Unauthorized
					$scope.showAuthentication();
					}else{
						// TODO: homepageCtrl --|------------ error:Message
						var data = { statusText:response.statusText, status:response.status };
						var alertPopup = $ionicPopup.alert({
							title: "Error" + " (" + data.status + ")",
							template: "An error occurred while collecting data." + "<br/><br/><pre>code: " + data.status + "<br/>error: " + data.statusText + "<br/>source: " + $rootScope.last_edit + "</pre>",
						});
					};
				});
			}, 1000);
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				controller_by_user();
			}, 500);
		});
	
	};
	if (data_pages === null){
		data_pages = [];
	};
	// animation readmore
	var fetchItems = function() {
		for(var z=0;z<fetch_per_scroll;z++){
			if (angular.isObject(data_pages[lastPush])){
				$scope.pages.push(data_pages[lastPush]);
				lastPush++;
			}else{;
				$scope.noMoreItemsAvailable = true;
			}
		}
		$scope.$broadcast("scroll.infiniteScrollComplete");
	};
	
	// event readmore
	$scope.onInfinite = function() {
		$timeout(fetchItems, 500);
	};
	
	// code 

	// TODO: homepageCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("error: page homepage => custom controller");
			console.log(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	controller_by_user();
})

// TODO: storie_singlesCtrl --|-- 
.controller("storie_singlesCtrl", function($scope,$rootScope,$state,$location,$ionicScrollDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64){
	
	$rootScope.headerExists = true;
	$rootScope.page_id = "storie_singles" ;
	$rootScope.last_edit = "table (storie)" ;
	// TODO: storie_singlesCtrl --|-- $scope.scrollTop
	$scope.scrollTop = function(){
		$ionicScrollDelegate.$getByHandle("top").scrollTop();
	};
	// TODO: storie_singlesCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: storie_singlesCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: storie_singlesCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		window.open($url,"_self");
	};
	
	// TODO: storie_singlesCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// TODO: storie_singlesCtrl --|-- $scope.showAuthentication
	$scope.showAuthentication  = function(){
		var authPopup = $ionicPopup.show({
			template: ' ',
			title: "Authorization",
			subTitle: "Authorization is required",
			scope: $scope,
			buttons: [
				{text:"Cancel",onTap: function(e){
					$state.go("kid_stories.about");
				}},
			],
		}).then(function(form){
		},function(err){
		},function(msg){
		});
	};
	
	// set default parameter http
	var http_params = {};

	// set HTTP Header 
	var http_header = {
		headers: {
		},
		params: http_params
	};
	// animation loading 
	$ionicLoading.show({
		template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
	});
	
	// Retrieving data
	var itemID = $stateParams.id;
	var current_item = [];
	if(window.localStorage.getItem("data_stories") !== "undefined"){
		var datas = JSON.parse(window.localStorage.getItem("data_stories"));
		if(datas!==null){
			for (var i = 0; i < datas.length; i++) {
				if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
					current_item = datas[i] ;
				}
			}
		}
		// event done, hidden animation loading
		$timeout(function() {
			$ionicLoading.hide();
			$scope.storie = current_item ;
			controller_by_user();
		}, 500);
	};
	if(!angular.isObject(current_item)){
		var itemID = $stateParams.id;
		var current_item = [];
	
		// set HTTP Header 
		http_header = {
			headers: {
			},
			params: http_params
		};
		// TODO: storie_singlesCtrl --|-- $http.get
		$http.get("http://demo.ihsana.net/backend-generator/rest-api.php?category=&json=storie",http_header).then(function(response) {
			// Get data single
			var datas = response.data;
			try {
				window.localStorage.setItem("data_stories",JSON.stringify(datas));
			} catch(e) {
				window.localStorage.clear();
				window.localStorage.setItem("data_stories",JSON.stringify(datas));
				$ionicHistory.clearCache();
				$ionicHistory.clearHistory();
				$state.reload();
				$scope.$state = $state;
			}
			for (var i = 0; i < datas.length; i++) {
				if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
					current_item = datas[i] ;
				}
			}
		},function(data) {
					// Error message
					var alertPopup = $ionicPopup.alert({
						title: "Error" + " (" + data.status + ")",
						template: "An error occurred while collecting data." + "<br/><br/><pre>code: " + data.status + "<br/>error: " + data.statusText + "<br/>source: " + $rootScope.last_edit + "</pre>",
					});
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				$scope.storie = current_item ;
				controller_by_user();
			}, 500);
		});
	}
	
	
		// TODO: storie_singlesCtrl --|-- $scope.doRefresh
	$scope.doRefresh = function(){
		// Retrieving data
		window.localStorage.clear();
		var itemID = $stateParams.id;
		var current_item = [];
		// overwrite http_header 
		http_header = {
			headers: {
			},
			params: http_params
		};
		// TODO: storie_singlesCtrl --|------ $http.get
		$http.get("http://demo.ihsana.net/backend-generator/rest-api.php?category=&json=storie",http_header).then(function(response) {
			// Get data single
			var datas = response.data;
			window.localStorage.setItem("data_stories",JSON.stringify(datas));
			for (var i = 0; i < datas.length; i++) {
				if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
					current_item = datas[i] ;
				}
			}
		},function(data) {
			// Error message
		// TODO: storie_singlesCtrl --|---------- $http.jsonp
				$http.jsonp("http://demo.ihsana.net/backend-generator/rest-api.php?category=&json=storie&callback=JSON_CALLBACK",http_header).success(function(response){
					// Get data single
					var datas = response;
					window.localStorage.setItem("data_stories",JSON.stringify(datas));
					for (var i = 0; i < datas.length; i++) {
						if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
							current_item = datas[i] ;
						}
					}
						$scope.$broadcast("scroll.refreshComplete");
						// event done, hidden animation loading
						$timeout(function() {
							$ionicLoading.hide();
							$scope.storie = current_item ;
							controller_by_user();
						}, 500);
					}).error(function(resp){
						var alertPopup = $ionicPopup.alert({
							title: "Error" + " (" + data.status + ")",
							template: "An error occurred while collecting data." + "<br/><br/><pre>code: " + data.status + "<br/>error: " + data.statusText + "<br/>source: " + $rootScope.last_edit + "</pre>",
						});
					});
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				$scope.storie = current_item ;
				controller_by_user();
			}, 500);
		});
	};
	// code 

	// TODO: storie_singlesCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("error: page storie_singles => custom controller");
			console.log(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: storiesCtrl --|-- 
.controller("storiesCtrl", function($scope,$rootScope,$state,$location,$ionicScrollDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64){
	
	$rootScope.headerExists = true;
	$rootScope.page_id = "stories" ;
	$rootScope.last_edit = "table (storie)" ;
	// TODO: storiesCtrl --|-- $scope.scrollTop
	$scope.scrollTop = function(){
		$ionicScrollDelegate.$getByHandle("top").scrollTop();
	};
	// TODO: storiesCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: storiesCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: storiesCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		window.open($url,"_self");
	};
	
	// TODO: storiesCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// TODO: storiesCtrl --|-- $scope.showAuthentication
	$scope.showAuthentication  = function(){
		var authPopup = $ionicPopup.show({
			template: ' ',
			title: "Authorization",
			subTitle: "Authorization is required",
			scope: $scope,
			buttons: [
				{text:"Cancel",onTap: function(e){
					$state.go("kid_stories.about");
				}},
			],
		}).then(function(form){
		},function(err){
		},function(msg){
		});
	};
	
	// set default parameter http
	var http_params = {};
	
	// set HTTP Header 
	var http_header = {
		headers: {
		},
		params: http_params
	};
	var targetQuery = ""; //default param
	var raplaceWithQuery = "";
	//fix url Stories
	targetQuery = "category="; //default param
	raplaceWithQuery = "category=";
	if($stateParams.category!==''){window.localStorage.clear();raplaceWithQuery = "category=" + $stateParams.category;}

	$scope.gmapOptions = {options: { scrollwheel: false }};
	
	var fetch_per_scroll = 1;
	// animation loading 
	$ionicLoading.show({
		template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
	});
	
	
	$scope.noMoreItemsAvailable = false; //readmore status
	var lastPush = 0;
	var data_stories = [];
	
	if(window.localStorage.getItem("data_stories") !== "undefined"){
		data_stories = JSON.parse(window.localStorage.getItem("data_stories"));
		$scope.data_stories = JSON.parse(window.localStorage.getItem("data_stories"));
			if (data_stories !== null){
			$scope.stories = [];
			for(lastPush = 0; lastPush < 10; lastPush++) {
				if (angular.isObject(data_stories[lastPush])){
					$scope.stories.push(data_stories[lastPush]);
				};
			}
			$timeout(function() {
				$ionicLoading.hide();
				controller_by_user();
			}, 500);
		}
	}
	if(!angular.isObject(data_stories)){
		$timeout(function() {
			var url_request = "http://demo.ihsana.net/backend-generator/rest-api.php?category=&json=storie".replace(targetQuery,raplaceWithQuery);
			// overwrite HTTP Header 
			http_header = {
				headers: {
				},
				params: http_params
			};
			// TODO: storiesCtrl --|-- $http.get
			$http.get(url_request,http_header).then(function(response) {
				data_stories = response.data;
				$scope.data_stories = response.data;
				if(typeof(Storage) != "undefined"){
					try {
						// TODO: storiesCtrl --|---------- set:localstorage
						window.localStorage.setItem("data_stories",JSON.stringify(data_stories));
					} catch(e) {
						// TODO: storiesCtrl --|---------- clear:localstorage
						window.localStorage.clear();
						window.localStorage.setItem("data_stories",JSON.stringify(data_stories));
						$ionicHistory.clearCache();
						$ionicHistory.clearHistory();
						$state.reload();
						$scope.$state = $state;
					}
				}
				$scope.stories = [];
				for(lastPush = 0; lastPush < 100; lastPush++) {
					if (angular.isObject(data_stories[lastPush])){
						$scope.stories.push(data_stories[lastPush]);
					};
				}
			},function(response) {
			
				$timeout(function() {
					var url_request = "http://demo.ihsana.net/backend-generator/rest-api.php?category=&json=storie&callback=JSON_CALLBACK".replace(targetQuery,raplaceWithQuery);
					// overwrite HTTP Header 
					http_header = {
						headers: {
						},
						params: http_params
					};
					// TODO: storiesCtrl --|------ $http.jsonp
					$http.jsonp(url_request,http_header).success(function(data){
						data_stories = data;
						$scope.data_stories = data;
						$ionicLoading.hide();
						if(typeof(Storage) != "undefined"){
							try {
								// TODO: storiesCtrl --|---------------- set:localstorage
								window.localStorage.setItem("data_stories",JSON.stringify(data_stories));
							} catch(e) {
								// TODO: storiesCtrl --|---------------- clear:localstorage
								window.localStorage.clear();
								window.localStorage.setItem("data_stories",JSON.stringify(data_stories));
								$ionicHistory.clearCache();
								$ionicHistory.clearHistory();
								$state.reload();
								$scope.$state = $state;
							}
						}
						controller_by_user();
						$scope.stories = [];
						for(lastPush = 0; lastPush < 100; lastPush++) {
							if (angular.isObject(data_stories[lastPush])){
								$scope.stories.push(data_stories[lastPush]);
							};
						}
					}).error(function(data){
					if(response.status ===401){
						// TODO: storiesCtrl --|------------ error:Unauthorized
						$scope.showAuthentication();
					}else{
						// TODO: storiesCtrl --|------------ error:Message
						var data = { statusText:response.statusText, status:response.status };
						var alertPopup = $ionicPopup.alert({
							title: "Error" + " (" + data.status + ")",
							template: "An error occurred while collecting data." + "<br/><br/><pre>code: " + data.status + "<br/>error: " + data.statusText + "<br/>source: " + $rootScope.last_edit + "</pre>",
						});
					}
					});
				}, 1000);
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				controller_by_user();
			}, 1000);
		});
	
		}, 1000);
	}
	
	
	// TODO: storiesCtrl --|-- $scope.doRefresh
	$scope.doRefresh = function(){
		var url_request ="http://demo.ihsana.net/backend-generator/rest-api.php?category=&json=storie".replace(targetQuery,raplaceWithQuery);
		// retry retrieving data
		window.localStorage.clear();
		// overwrite http_header 
		http_header = {
			headers: {
			},
			params: http_params
		};
		// TODO: storiesCtrl --|------ $http.get
		$http.get(url_request,http_header).then(function(response) {
			data_stories = response.data;
			$scope.data_stories = response.data;
			if(typeof(Storage) != "undefined"){
				try {
					// TODO: storiesCtrl --|---------------- set:localstorage
					window.localStorage.setItem("data_stories",JSON.stringify(data_stories));
				} catch(e) {
					// TODO: storiesCtrl --|---------------- clear:localstorage
					window.localStorage.clear();
					window.localStorage.setItem("data_stories",JSON.stringify(data_stories));
					$ionicHistory.clearCache();
					$ionicHistory.clearHistory();
					$state.reload();
					$scope.$state = $state;
				}
			}
			$scope.stories = [];
			for(lastPush = 0; lastPush < 100; lastPush++) {
				if (angular.isObject(data_stories[lastPush])){
					$scope.stories.push(data_stories[lastPush]);
				};
			}
		},function(response){
			
		// retrieving data with jsonp
			$timeout(function() {
			var url_request ="http://demo.ihsana.net/backend-generator/rest-api.php?category=&json=storie&callback=JSON_CALLBACK".replace(targetQuery,raplaceWithQuery);
				// overwrite http_header 
				http_header = {
					headers: {
					},
					params: http_params
				};
				// TODO: storiesCtrl --|---------- $http.jsonp
				$http.jsonp(url_request,http_header).success(function(data){
					data_stories = data;
					$scope.data_stories = data;
					$ionicLoading.hide();
					controller_by_user();
					if(typeof(Storage) != "undefined"){
						try {
							// TODO: storiesCtrl --|---------------- set:localstorage
							window.localStorage.setItem("data_stories",JSON.stringify(data_stories));
						} catch(e) {
							// TODO: storiesCtrl --|---------------- clear:localstorage
							window.localStorage.clear();
							window.localStorage.setItem("data_stories",JSON.stringify(data_stories));
							$ionicHistory.clearCache();
							$ionicHistory.clearHistory();
							$state.reload();
							$scope.$state = $state;
						}
					}
					$scope.stories = [];
					for(lastPush = 0; lastPush < 100; lastPush++) {
						if (angular.isObject(data_stories[lastPush])){
							$scope.stories.push(data_stories[lastPush]);
						};
					}
				}).error(function(resp){
					if(response.status ===401){
					// TODO: storiesCtrl --|------------ error:Unauthorized
					$scope.showAuthentication();
					}else{
						// TODO: storiesCtrl --|------------ error:Message
						var data = { statusText:response.statusText, status:response.status };
						var alertPopup = $ionicPopup.alert({
							title: "Error" + " (" + data.status + ")",
							template: "An error occurred while collecting data." + "<br/><br/><pre>code: " + data.status + "<br/>error: " + data.statusText + "<br/>source: " + $rootScope.last_edit + "</pre>",
						});
					};
				});
			}, 1000);
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				controller_by_user();
			}, 500);
		});
	
	};
	if (data_stories === null){
		data_stories = [];
	};
	// animation readmore
	var fetchItems = function() {
		for(var z=0;z<fetch_per_scroll;z++){
			if (angular.isObject(data_stories[lastPush])){
				$scope.stories.push(data_stories[lastPush]);
				lastPush++;
			}else{;
				$scope.noMoreItemsAvailable = true;
			}
		}
		$scope.$broadcast("scroll.infiniteScrollComplete");
	};
	
	// event readmore
	$scope.onInfinite = function() {
		$timeout(fetchItems, 500);
	};
	
	// create animation fade slide in right (ionic-material)
	$scope.fireEvent = function(){
		ionicMaterialMotion.fadeSlideInRight();
		ionicMaterialInk.displayEffect();
	};
	// code 

	// TODO: storiesCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("error: page stories => custom controller");
			console.log(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: winnerCtrl --|-- 
.controller("winnerCtrl", function($scope,$rootScope,$state,$location,$ionicScrollDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64){
	
	$rootScope.headerExists = true;
	$rootScope.page_id = "winner" ;
	$rootScope.last_edit = "table (winner)" ;
	// TODO: winnerCtrl --|-- $scope.scrollTop
	$scope.scrollTop = function(){
		$ionicScrollDelegate.$getByHandle("top").scrollTop();
	};
	// TODO: winnerCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: winnerCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: winnerCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		window.open($url,"_self");
	};
	
	// TODO: winnerCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// TODO: winnerCtrl --|-- $scope.showAuthentication
	$scope.showAuthentication  = function(){
		var authPopup = $ionicPopup.show({
			template: ' ',
			title: "Authorization",
			subTitle: "Authorization is required",
			scope: $scope,
			buttons: [
				{text:"Cancel",onTap: function(e){
					$state.go("kid_stories.about");
				}},
			],
		}).then(function(form){
		},function(err){
		},function(msg){
		});
	};
	
	// set default parameter http
	var http_params = {};
	
	// set HTTP Header 
	var http_header = {
		headers: {
		},
		params: http_params
	};
	var targetQuery = ""; //default param
	var raplaceWithQuery = "";
	//fix url Winner #10
	targetQuery = "json=winner"; //default param
	raplaceWithQuery = "json=winner";
	
	$scope.gmapOptions = {options: { scrollwheel: false }};
	
	var fetch_per_scroll = 1;
	// animation loading 
	$ionicLoading.show({
		template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
	});
	
	
	$scope.noMoreItemsAvailable = false; //readmore status
	var lastPush = 0;
	var data_winners = [];
	
	if(window.localStorage.getItem("data_winners") !== "undefined"){
		data_winners = JSON.parse(window.localStorage.getItem("data_winners"));
		$scope.data_winners = JSON.parse(window.localStorage.getItem("data_winners"));
			if (data_winners !== null){
			$scope.winners = [];
			for(lastPush = 0; lastPush < 10; lastPush++) {
				if (angular.isObject(data_winners[lastPush])){
					$scope.winners.push(data_winners[lastPush]);
				};
			}
			$timeout(function() {
				$ionicLoading.hide();
				controller_by_user();
			}, 500);
		}
	}
	if(!angular.isObject(data_winners)){
		$timeout(function() {
			var url_request = "http://demo.ihsana.net/backend-generator/rest-api.php?json=winner".replace(targetQuery,raplaceWithQuery);
			// overwrite HTTP Header 
			http_header = {
				headers: {
				},
				params: http_params
			};
			// TODO: winnerCtrl --|-- $http.get
			$http.get(url_request,http_header).then(function(response) {
				data_winners = response.data;
				$scope.data_winners = response.data;
				if(typeof(Storage) != "undefined"){
					try {
						// TODO: winnerCtrl --|---------- set:localstorage
						window.localStorage.setItem("data_winners",JSON.stringify(data_winners));
					} catch(e) {
						// TODO: winnerCtrl --|---------- clear:localstorage
						window.localStorage.clear();
						window.localStorage.setItem("data_winners",JSON.stringify(data_winners));
						$ionicHistory.clearCache();
						$ionicHistory.clearHistory();
						$state.reload();
						$scope.$state = $state;
					}
				}
				$scope.winners = [];
				for(lastPush = 0; lastPush < 100; lastPush++) {
					if (angular.isObject(data_winners[lastPush])){
						$scope.winners.push(data_winners[lastPush]);
					};
				}
			},function(response) {
			
				$timeout(function() {
					var url_request = "http://demo.ihsana.net/backend-generator/rest-api.php?json=winner&callback=JSON_CALLBACK".replace(targetQuery,raplaceWithQuery);
					// overwrite HTTP Header 
					http_header = {
						headers: {
						},
						params: http_params
					};
					// TODO: winnerCtrl --|------ $http.jsonp
					$http.jsonp(url_request,http_header).success(function(data){
						data_winners = data;
						$scope.data_winners = data;
						$ionicLoading.hide();
						if(typeof(Storage) != "undefined"){
							try {
								// TODO: winnerCtrl --|---------------- set:localstorage
								window.localStorage.setItem("data_winners",JSON.stringify(data_winners));
							} catch(e) {
								// TODO: winnerCtrl --|---------------- clear:localstorage
								window.localStorage.clear();
								window.localStorage.setItem("data_winners",JSON.stringify(data_winners));
								$ionicHistory.clearCache();
								$ionicHistory.clearHistory();
								$state.reload();
								$scope.$state = $state;
							}
						}
						controller_by_user();
						$scope.winners = [];
						for(lastPush = 0; lastPush < 100; lastPush++) {
							if (angular.isObject(data_winners[lastPush])){
								$scope.winners.push(data_winners[lastPush]);
							};
						}
					}).error(function(data){
					if(response.status ===401){
						// TODO: winnerCtrl --|------------ error:Unauthorized
						$scope.showAuthentication();
					}else{
						// TODO: winnerCtrl --|------------ error:Message
						var data = { statusText:response.statusText, status:response.status };
						var alertPopup = $ionicPopup.alert({
							title: "Error" + " (" + data.status + ")",
							template: "An error occurred while collecting data." + "<br/><br/><pre>code: " + data.status + "<br/>error: " + data.statusText + "<br/>source: " + $rootScope.last_edit + "</pre>",
						});
					}
					});
				}, 1000);
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				controller_by_user();
			}, 1000);
		});
	
		}, 1000);
	}
	
	
	// TODO: winnerCtrl --|-- $scope.doRefresh
	$scope.doRefresh = function(){
		var url_request ="http://demo.ihsana.net/backend-generator/rest-api.php?json=winner".replace(targetQuery,raplaceWithQuery);
		// retry retrieving data
		window.localStorage.clear();
		// overwrite http_header 
		http_header = {
			headers: {
			},
			params: http_params
		};
		// TODO: winnerCtrl --|------ $http.get
		$http.get(url_request,http_header).then(function(response) {
			data_winners = response.data;
			$scope.data_winners = response.data;
			if(typeof(Storage) != "undefined"){
				try {
					// TODO: winnerCtrl --|---------------- set:localstorage
					window.localStorage.setItem("data_winners",JSON.stringify(data_winners));
				} catch(e) {
					// TODO: winnerCtrl --|---------------- clear:localstorage
					window.localStorage.clear();
					window.localStorage.setItem("data_winners",JSON.stringify(data_winners));
					$ionicHistory.clearCache();
					$ionicHistory.clearHistory();
					$state.reload();
					$scope.$state = $state;
				}
			}
			$scope.winners = [];
			for(lastPush = 0; lastPush < 100; lastPush++) {
				if (angular.isObject(data_winners[lastPush])){
					$scope.winners.push(data_winners[lastPush]);
				};
			}
		},function(response){
			
		// retrieving data with jsonp
			$timeout(function() {
			var url_request ="http://demo.ihsana.net/backend-generator/rest-api.php?json=winner&callback=JSON_CALLBACK".replace(targetQuery,raplaceWithQuery);
				// overwrite http_header 
				http_header = {
					headers: {
					},
					params: http_params
				};
				// TODO: winnerCtrl --|---------- $http.jsonp
				$http.jsonp(url_request,http_header).success(function(data){
					data_winners = data;
					$scope.data_winners = data;
					$ionicLoading.hide();
					controller_by_user();
					if(typeof(Storage) != "undefined"){
						try {
							// TODO: winnerCtrl --|---------------- set:localstorage
							window.localStorage.setItem("data_winners",JSON.stringify(data_winners));
						} catch(e) {
							// TODO: winnerCtrl --|---------------- clear:localstorage
							window.localStorage.clear();
							window.localStorage.setItem("data_winners",JSON.stringify(data_winners));
							$ionicHistory.clearCache();
							$ionicHistory.clearHistory();
							$state.reload();
							$scope.$state = $state;
						}
					}
					$scope.winners = [];
					for(lastPush = 0; lastPush < 100; lastPush++) {
						if (angular.isObject(data_winners[lastPush])){
							$scope.winners.push(data_winners[lastPush]);
						};
					}
				}).error(function(resp){
					if(response.status ===401){
					// TODO: winnerCtrl --|------------ error:Unauthorized
					$scope.showAuthentication();
					}else{
						// TODO: winnerCtrl --|------------ error:Message
						var data = { statusText:response.statusText, status:response.status };
						var alertPopup = $ionicPopup.alert({
							title: "Error" + " (" + data.status + ")",
							template: "An error occurred while collecting data." + "<br/><br/><pre>code: " + data.status + "<br/>error: " + data.statusText + "<br/>source: " + $rootScope.last_edit + "</pre>",
						});
					};
				});
			}, 1000);
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				controller_by_user();
			}, 500);
		});
	
	};
	if (data_winners === null){
		data_winners = [];
	};
	// animation readmore
	var fetchItems = function() {
		for(var z=0;z<fetch_per_scroll;z++){
			if (angular.isObject(data_winners[lastPush])){
				$scope.winners.push(data_winners[lastPush]);
				lastPush++;
			}else{;
				$scope.noMoreItemsAvailable = true;
			}
		}
		$scope.$broadcast("scroll.infiniteScrollComplete");
	};
	
	// event readmore
	$scope.onInfinite = function() {
		$timeout(fetchItems, 500);
	};
	
	// create animation fade slide in right (ionic-material)
	$scope.fireEvent = function(){
		ionicMaterialMotion.fadeSlideInRight();
		ionicMaterialInk.displayEffect();
	};
	// code 

	// TODO: winnerCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("error: page winner => custom controller");
			console.log(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: winner_singlesCtrl --|-- 
.controller("winner_singlesCtrl", function($scope,$rootScope,$state,$location,$ionicScrollDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$ionicLoading,$ionicPopup,$ionicPopover,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64){
	
	$rootScope.headerExists = true;
	$rootScope.page_id = "winner_singles" ;
	$rootScope.last_edit = "table (winner)" ;
	// TODO: winner_singlesCtrl --|-- $scope.scrollTop
	$scope.scrollTop = function(){
		$ionicScrollDelegate.$getByHandle("top").scrollTop();
	};
	// TODO: winner_singlesCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: winner_singlesCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		window.open($url,"_blank","hardwareback=Done");
	};
	// TODO: winner_singlesCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		window.open($url,"_self");
	};
	
	// TODO: winner_singlesCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// TODO: winner_singlesCtrl --|-- $scope.showAuthentication
	$scope.showAuthentication  = function(){
		var authPopup = $ionicPopup.show({
			template: ' ',
			title: "Authorization",
			subTitle: "Authorization is required",
			scope: $scope,
			buttons: [
				{text:"Cancel",onTap: function(e){
					$state.go("kid_stories.about");
				}},
			],
		}).then(function(form){
		},function(err){
		},function(msg){
		});
	};
	
	// set default parameter http
	var http_params = {};

	// set HTTP Header 
	var http_header = {
		headers: {
		},
		params: http_params
	};
	// animation loading 
	$ionicLoading.show({
		template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
	});
	
	// Retrieving data
	var itemID = $stateParams.id;
	var current_item = [];
	if(window.localStorage.getItem("data_winners") !== "undefined"){
		var datas = JSON.parse(window.localStorage.getItem("data_winners"));
		if(datas!==null){
			for (var i = 0; i < datas.length; i++) {
				if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
					current_item = datas[i] ;
				}
			}
		}
		// event done, hidden animation loading
		$timeout(function() {
			$ionicLoading.hide();
			$scope.winner = current_item ;
			controller_by_user();
		}, 500);
	};
	if(!angular.isObject(current_item)){
		var itemID = $stateParams.id;
		var current_item = [];
	
		// set HTTP Header 
		http_header = {
			headers: {
			},
			params: http_params
		};
		// TODO: winner_singlesCtrl --|-- $http.get
		$http.get("http://demo.ihsana.net/backend-generator/rest-api.php?json=winner",http_header).then(function(response) {
			// Get data single
			var datas = response.data;
			try {
				window.localStorage.setItem("data_winners",JSON.stringify(datas));
			} catch(e) {
				window.localStorage.clear();
				window.localStorage.setItem("data_winners",JSON.stringify(datas));
				$ionicHistory.clearCache();
				$ionicHistory.clearHistory();
				$state.reload();
				$scope.$state = $state;
			}
			for (var i = 0; i < datas.length; i++) {
				if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
					current_item = datas[i] ;
				}
			}
		},function(data) {
					// Error message
					var alertPopup = $ionicPopup.alert({
						title: "Error" + " (" + data.status + ")",
						template: "An error occurred while collecting data." + "<br/><br/><pre>code: " + data.status + "<br/>error: " + data.statusText + "<br/>source: " + $rootScope.last_edit + "</pre>",
					});
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				$scope.winner = current_item ;
				controller_by_user();
			}, 500);
		});
	}
	
	
		// TODO: winner_singlesCtrl --|-- $scope.doRefresh
	$scope.doRefresh = function(){
		// Retrieving data
		window.localStorage.clear();
		var itemID = $stateParams.id;
		var current_item = [];
		// overwrite http_header 
		http_header = {
			headers: {
			},
			params: http_params
		};
		// TODO: winner_singlesCtrl --|------ $http.get
		$http.get("http://demo.ihsana.net/backend-generator/rest-api.php?json=winner",http_header).then(function(response) {
			// Get data single
			var datas = response.data;
			window.localStorage.setItem("data_winners",JSON.stringify(datas));
			for (var i = 0; i < datas.length; i++) {
				if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
					current_item = datas[i] ;
				}
			}
		},function(data) {
			// Error message
		// TODO: winner_singlesCtrl --|---------- $http.jsonp
				$http.jsonp("http://demo.ihsana.net/backend-generator/rest-api.php?json=winner&callback=JSON_CALLBACK",http_header).success(function(response){
					// Get data single
					var datas = response;
					window.localStorage.setItem("data_winners",JSON.stringify(datas));
					for (var i = 0; i < datas.length; i++) {
						if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
							current_item = datas[i] ;
						}
					}
						$scope.$broadcast("scroll.refreshComplete");
						// event done, hidden animation loading
						$timeout(function() {
							$ionicLoading.hide();
							$scope.winner = current_item ;
							controller_by_user();
						}, 500);
					}).error(function(resp){
						var alertPopup = $ionicPopup.alert({
							title: "Error" + " (" + data.status + ")",
							template: "An error occurred while collecting data." + "<br/><br/><pre>code: " + data.status + "<br/>error: " + data.statusText + "<br/>source: " + $rootScope.last_edit + "</pre>",
						});
					});
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				$scope.winner = current_item ;
				controller_by_user();
			}, 500);
		});
	};
	// code 

	// TODO: winner_singlesCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("error: page winner_singles => custom controller");
			console.log(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})
