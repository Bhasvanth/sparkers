'use strict';

app.onbookingFailure = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_onbookingFailure
// END_CUSTOM_CODE_onbookingFailure
(function(parent) {
    var onbookingFailureModel = kendo.observable({
        fields: {
            nearBy: '',
            group: '',
        },
        submit: function() {},
        cancel: function() {}
    });

    parent.set('onbookingFailureModel', onbookingFailureModel);
})(app.onbookingFailure);

// START_CUSTOM_CODE_onbookingFailureModel
// END_CUSTOM_CODE_onbookingFailureModel