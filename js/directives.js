angular.module('starter.directives', [])

.directive('sliderChange', function($document) {
  return {
	restrict: 'A',
	link: function ($scope, $element, $attr) {
		var red, green, blue, hex, body;

		$scope.color = {
			red: 127,
			green:127,
			blue:127
		}

		$element.on('change', function(event){
			if ($attr.ngModel === 'red'){
				$scope.color.red = $element.val();
			} else if ($attr.ngModel ==='green'){
				$scope.color.green = $element.val();
			} else if($attr.ngModel === 'blue'){
				$scope.color.blue = $element.val();
			}

			body = angular.element(document).find('view');
			body.css("background", 'rgb('+$scope.color.red+', '+$scope.color.green+', '+$scope.color.blue+')');
		});
	}
  };
});
