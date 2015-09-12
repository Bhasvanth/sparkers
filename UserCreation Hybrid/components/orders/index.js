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
        orderDataSource : new kendo.data.DataSource({
          data :[{order_id:"ABVHYO", location : "PVR - Madhapur", start_time : "1 PM", end_time : "2 PM", date : "09-Sep-15"},
                 {order_id:"CFGHYS", location : "In Orbit ", start_time : "10:15 AM", end_time : "11:00 AM", date : "12-Sep-15"},
                 {order_id:"MLKLUI", location : "GVK One", start_time : "1 PM", end_time : "2 PM", date : "13-Sep-15"},
               ],
      }),
        
    });
        

    parent.set('resultModel', resultModel);
})(app.result);

// START_CUSTOM_CODE_resultModel
// END_CUSTOM_CODE_resultModel