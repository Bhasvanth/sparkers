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
            time: '',
            date: '',
            search1: '',
            slots: '',
            selectedLocation: '',
        },
        submit: function(e) {
            var selectedLocation = this.bookingsModel.fields.selectedLocation;
            var date = this.bookingsModel.fields.date;
            var time = this.bookingsModel.fields.time;
            var slots = this.bookingsModel.fields.slots;
            var queryString = "location="+selectedLocation+"&date="+date+"&time="+time+"&slots="+slots;
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