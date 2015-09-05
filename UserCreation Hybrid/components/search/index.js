'use strict';

app.search = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_search
// END_CUSTOM_CODE_search
(function(parent) {
    var searchModel = kendo.observable({
        fields: {
            time: '',
            date: '',
            dropdownlist: '',
            quote: '',
        },
        submit: function() {},
        cancel: function() {}
    });

    parent.set('searchModel', searchModel);
})(app.search);

// START_CUSTOM_CODE_searchModel
// END_CUSTOM_CODE_searchModel