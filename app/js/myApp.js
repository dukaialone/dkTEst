/**
 * Created by dukai on 14-10-22.
 */
function MyController($scope, $timeout) {
    var updateClock = function() {
        $scope.clock = new Date();
        $timeout(function() {
            updateClock();
        }, 1000);
    };
    updateClock();
};
