(function () {
    'use strict';

    angular
        .module('shootProofExercise')
        .service('shootProofThumbnailService', shootProofThumbnailService);

    shootProofThumbnailService.$inject = ['$q', '$http', 'dataTransformService'];

    function shootProofThumbnailService($q, $http, dataTransformService) {
        this.getThumbnailData = function() {
            var deferred = $q.defer();
            $http.get('https://raw.githubusercontent.com/ShootProof/recruiting-front-end/master/testdata.json')
                .then(handleTestData, handleError);

            function handleTestData(resp) {
                let data = dataTransformService.uniteFamilyData(resp.data);
                deferred.resolve(data);
            }

            function handleError() {
                deferred.reject();
            }

            return deferred.promise;
        };
    }
})();