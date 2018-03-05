(function () {
    angular
        .module('shootProofExercise')
        .component("thumbnailData", {
            templateUrl: 'templates/thumbnail-data.html',
            controller: ThumbnailDataCtrl,
            controllerAs: 'tn',
            bindings: {}
        });

    ThumbnailDataCtrl.inject = ['shootProofThumbnailService'];
    function ThumbnailDataCtrl(shootProofThumbnailService) {
        var vm = this;

        vm.$onInit = function() {
            getThumbnailData();

            function getThumbnailData() {
                shootProofThumbnailService.getThumbnailData()
                    .then(_handleSuccess, _handleError)
            }

            function _handleSuccess(resp) {
                vm.thumbnailData = resp;
            }

            function _handleError(err) {
                console.log('getThumbnailData Error', err);
            }
        };
    }
})();