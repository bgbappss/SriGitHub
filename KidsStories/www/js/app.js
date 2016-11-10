angular.module("kid_stories", ["ngCordova","ionic","ionMdInput","ionic-material","ionic.rating","utf8-base64","kid_stories.controllers", "kid_stories.services"])
	.run(function($ionicPlatform) {
		$ionicPlatform.ready(function() {
			if(window.cordova && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
				cordova.plugins.Keyboard.disableScroll(true);
			}

			if(window.StatusBar) {
				StatusBar.styleDefault();
			}


		});
	})


	.filter("to_trusted", ["$sce", function($sce){
		return function(text) {
			return $sce.trustAsHtml(text);
		};
	}])

	.filter("trustUrl", function($sce) {
		return function(url) {
			return $sce.trustAsResourceUrl(url);
		};
	})

	.filter("strExplode", function() {
		return function($string,$delimiter) {
			if(!$string.length ) return;
			var $_delimiter = $delimiter || "|";
			return $string.split($_delimiter);
		};
	})

	.filter("strDate", function(){
		return function (input) {
			return new Date(input);
		}
	})
	.filter("strHTML", ["$sce", function($sce){
		return function(text) {
			return $sce.trustAsHtml(text);
		};
	}])
	.filter("strEscape",function(){
		return window.encodeURIComponent;
	})





.config(function($stateProvider, $urlRouterProvider,$sceDelegateProvider,$httpProvider){
	// Domain Whitelist
	$sceDelegateProvider.resourceUrlWhitelist([
		"self",
		new RegExp('^(http[s]?):\/\/(w{3}.)?youtube\.com/.+$'),
		new RegExp('^(http[s]?):\/\/(w{3}.)?w3schools\.com/.+$'),
		new RegExp('^(http[s]?):\/\/(w{3}.)?app\-backend\.com//.+$'),
	]);
	$stateProvider
	.state("kid_stories",{
		url: "/kid_stories",
			abstract: true,
			templateUrl: "templates/kid_stories-side_menus.html",
			controller: "side_menusCtrl",
	})

	.state("kid_stories.about", {
		url: "/about",
		views: {
			"kid_stories-side_menus" : {
						templateUrl:"templates/kid_stories-about.html",
						controller: "aboutCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("kid_stories.about_us", {
		url: "/about_us",
		views: {
			"kid_stories-side_menus" : {
						templateUrl:"templates/kid_stories-about_us.html",
						controller: "about_usCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("kid_stories.categories", {
		url: "/categories",
		cache:false,
		views: {
			"kid_stories-side_menus" : {
						templateUrl:"templates/kid_stories-categories.html",
						controller: "categoriesCtrl"
					},
			"fabButtonUp" : {
						template: '<button id="fab-up-button" ng-click="scrollTop()" class="button button-fab button-fab-bottom-right button-energized-900 spin"><i class="icon ion-arrow-up-a"></i></button>',
						controller: function ($timeout) {
							$timeout(function () {
								document.getElementById("fab-up-button").classList.toggle("on");
							}, 900);
						}
					},
		}
	})

	.state("kid_stories.faq_singles", {
		url: "/faq_singles/:id",
		cache:false,
		views: {
			"kid_stories-side_menus" : {
						templateUrl:"templates/kid_stories-faq_singles.html",
						controller: "faq_singlesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("kid_stories.faqs", {
		url: "/faqs",
		cache:false,
		views: {
			"kid_stories-side_menus" : {
						templateUrl:"templates/kid_stories-faqs.html",
						controller: "faqsCtrl"
					},
			"fabButtonUp" : {
						template: '<button id="fab-up-button" ng-click="scrollTop()" class="button button-fab button-fab-bottom-right button-energized-900 spin"><i class="icon ion-arrow-up-a"></i></button>',
						controller: function ($timeout) {
							$timeout(function () {
								document.getElementById("fab-up-button").classList.toggle("on");
							}, 900);
						}
					},
		}
	})

	.state("kid_stories.form_contact_us", {
		url: "/form_contact_us",
		views: {
			"kid_stories-side_menus" : {
						templateUrl:"templates/kid_stories-form_contact_us.html",
						controller: "form_contact_usCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("kid_stories.form_question", {
		url: "/form_question",
		views: {
			"kid_stories-side_menus" : {
						templateUrl:"templates/kid_stories-form_question.html",
						controller: "form_questionCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("kid_stories.form_your_story", {
		url: "/form_your_story",
		views: {
			"kid_stories-side_menus" : {
						templateUrl:"templates/kid_stories-form_your_story.html",
						controller: "form_your_storyCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("kid_stories.homepage", {
		url: "/homepage",
		cache:false,
		views: {
			"kid_stories-side_menus" : {
						templateUrl:"templates/kid_stories-homepage.html",
						controller: "homepageCtrl"
					},
			"fabButtonUp" : {
						template: '<button id="fab-up-button" ng-click="scrollTop()" class="button button-fab button-fab-bottom-right button-energized-900 spin"><i class="icon ion-arrow-up-a"></i></button>',
						controller: function ($timeout) {
							$timeout(function () {
								document.getElementById("fab-up-button").classList.toggle("on");
							}, 900);
						}
					},
		}
	})

	.state("kid_stories.storie_singles", {
		url: "/storie_singles/:id",
		cache:false,
		views: {
			"kid_stories-side_menus" : {
						templateUrl:"templates/kid_stories-storie_singles.html",
						controller: "storie_singlesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("kid_stories.stories", {
		url: "/stories/:category",
		cache:false,
		views: {
			"kid_stories-side_menus" : {
						templateUrl:"templates/kid_stories-stories.html",
						controller: "storiesCtrl"
					},
			"fabButtonUp" : {
						template: '<button id="fab-up-button" ng-click="scrollTop()" class="button button-fab button-fab-bottom-right button-energized-900 spin"><i class="icon ion-arrow-up-a"></i></button>',
						controller: function ($timeout) {
							$timeout(function () {
								document.getElementById("fab-up-button").classList.toggle("on");
							}, 900);
						}
					},
		}
	})

	.state("kid_stories.winner", {
		url: "/winner",
		cache:false,
		views: {
			"kid_stories-side_menus" : {
						templateUrl:"templates/kid_stories-winner.html",
						controller: "winnerCtrl"
					},
			"fabButtonUp" : {
						template: '<button id="fab-up-button" ng-click="scrollTop()" class="button button-fab button-fab-bottom-right button-energized-900 spin"><i class="icon ion-arrow-up-a"></i></button>',
						controller: function ($timeout) {
							$timeout(function () {
								document.getElementById("fab-up-button").classList.toggle("on");
							}, 900);
						}
					},
		}
	})

	.state("kid_stories.winner_singles", {
		url: "/winner_singles/:id",
		cache:false,
		views: {
			"kid_stories-side_menus" : {
						templateUrl:"templates/kid_stories-winner_singles.html",
						controller: "winner_singlesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	$urlRouterProvider.otherwise("/kid_stories/about");
});
