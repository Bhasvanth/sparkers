'use strict';

app.home = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});


window.home= {
    models:{
        locations:{
            title:"Location",
            searchLocation: "",
            //selectedLocation: "",
            locationDataSource : new kendo.data.DataSource({
                       data: [],
  
            }),
           loadLocationData: function(e){
                //alert(this.searchLocation);
                var dataSource = this.get("locationDataSource");
                if (this.searchLocation == "In-Orbit"){
                    dataSource.add({name:"In-Orbit Mall", location: "Madhapur"});
                }else if (this.searchLocation == "PVR"){
                    dataSource.add({name: "PVR - Panjagutta"});
                    dataSource.add({name: "PVR - Madhapur"});
                    
                }
            },
            navigateToBooking : function(e){
                //app.bookings.bookingsModel.fields.quote  = e.data.name;
                //alert(app.bookings.bookingsModel.fields.quote);
                //e.view.params = {selectedLocation : e.data.name};
                app.mobileApp.navigate('components/bookings/view.html?selectedLocation='+e.data.name);
            }
        }
        
    }
}