'use strict';

app.result = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_result
// END_CUSTOM_CODE_result
(function(parent) {
    
      var resultModel = kendo.observable({
        fields: {
            time: '',
            date: '',
            search1: '',
            slots: '',
            selectedLocation: '',
        },
        
    });
        

    parent.set('resultModel', resultModel);
})(app.result);

// START_CUSTOM_CODE_resultModel
// END_CUSTOM_CODE_resultModel