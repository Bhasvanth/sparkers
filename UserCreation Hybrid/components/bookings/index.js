'use strict';

app.bookings = kendo.observable({
    onShow: function(e) {
        //alert( e.view.params.selectedLocation);
        $("#selectedLocation").val(e.view.params.selectedLocation);
    },
    afterShow: function() {}
});

// START_CUSTOM_CODE_search
// END_CUSTOM_CODE_search
(function(parent) {
    var bookingsModel = kendo.observable({
        fields: {
            start_time: '',
            date: '',
            search1: '',
            end_time: '',
            selectedLocation: '',
        },
        submit: function(e) {
            var selectedLocation = this.bookingsModel.fields.selectedLocation;
            var date = this.bookingsModel.fields.date;
            var start_time = this.bookingsModel.fields.start_time;
            var end_time = this.bookingsModel.fields.end_time;
            var queryString = "location="+selectedLocation+"&date="+date+"&start_time="+start_time+"&end_time="+end_time;
            //alert(queryString);
            
            this.navigator.notification.alert(
    "Your parking reservation has been confirmed.",             // the message
    function() {},                      // a callback
    "Confirmation", // a title
    "OK"                                // the button text
);
            //app.mobileApp.navigate('components/orders/view.html?'+queryString);
            //alert(this.bookingsModel.fields.time);
        },
        cancel: function() {
            app.mobileApp.navigate("#:back");
        },
 
    
    });

    parent.set('bookingsModel', bookingsModel);
})(app.bookings);

// START_CUSTOM_CODE_searchModel
// END_CUSTOM_CODE_searchModel