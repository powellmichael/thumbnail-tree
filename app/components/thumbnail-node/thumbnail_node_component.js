(function () {
    angular
        .module('shootProofExercise')
        .component("thumbnailNodes", {
            templateUrl: 'templates/thumbnail-node.html',
            controller: ThumbnailNodeCtrl,
            bindings: {
                data: '<'
            }
        });

    ThumbnailNodeCtrl.inject = [];
    function ThumbnailNodeCtrl() {
        var vm = this;
        vm.hasChildNodes = hasChildNodes;
        vm.toggleChildNode = toggleChildNode;

        function toggleChildNode(thumb){
            if (angular.isUndefined(thumb.child[0].isVisible))
            { thumb.child[0].isVisible = true;
            } else if (thumb.child[0].isVisible === true) {
                thumb.child[0].isVisible = false;
            } else if (thumb.child[0].isVisible === false) {
                thumb.child[0].isVisible = true;
            }
        }

        function hasChildNodes(node) {
            return node.child.length > 0;
        }
    }
})();