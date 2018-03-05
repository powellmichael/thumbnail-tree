(function () {
    'use strict';

    angular
        .module('shootProofExercise')
        .service('dataTransformService', dataTransformService);

    dataTransformService.$inject = [];

    function dataTransformService() {

        this.uniteFamilyData = function(testRawData) {
            _(testRawData).forEach(
                c => {c.child = _(testRawData).filter(p => p.parent === c.id).value();}
                )

            let testDataSorted = _(testRawData).filter(p => p.parent === null).value();
            return testDataSorted;
        };
    }
})();