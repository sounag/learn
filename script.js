var app = angular.module("myModule",[ ]);
app.controller("recordsController", function($scope, $http){
	var url = "learn/data.json";
	$http.get(url).success(funciton (data,status,headers,config){
		$scope.records=data;
	}).error(function(data,status,headers,config){
		
	
	});
//	$scope.records=[{"ProbeID":"203192_at","EntrezID":10058,"Symbol":"ABCB6","GeneName":"ATP-binding cassette, sub-family B (MDR\/TAP), member 6","Ratio":0.645359386,"P.Value":3.44e-12,"adj.P.Val":1.02e-7},{"ProbeID":"223572_at","EntrezID":57467,"Symbol":"HHATL","GeneName":"hedgehog acyltransferase-like","Ratio":0.388328422,"P.Value":1.86e-8,"adj.P.Val":0.000109785},{"ProbeID":"206535_at","EntrezID":6514,"Symbol":"SLC2A2","GeneName":"solute carrier family 2 (facilitated glucose transporter), member 2","Ratio":0.272505791,"P.Value":3.93e-8,"adj.P.Val":0.000165678}]
});
