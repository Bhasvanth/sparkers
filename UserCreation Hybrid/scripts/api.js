//(function() {
    
    window.APP={
        models:{
            users:{
                username : "",
                password : "",
                isLoggedIn : "",
                authenticate: function(){
                    var dataSource = new kendo.data.DataSource({
                        autoSync: false,
                        transport: {
                            read:  {
                                url: "http://demos.telerik.com/kendo-ui/service/products",
                                dataType: "jsonp" // "jsonp" is required for cross-domain requests; use "json" for same-domain requests
                                data : {"username" : username, "password" : password}
                            }
                        },
                        schema: {
                            data: function(response) {
                                return response.statuses; // twitter's response is { "statuses": [ /* results */ ] }
                            }
                        }
                    });
                   dataSource.fetch(function(){
                       var data = this.data();
                       console.log(data.length);
                   });
                },
                login : function(){alert("test");
                    this.set("isLoggedIn", true);
                    app.mobileApp.navigate('components/search/view.html');
                }
            }
        }
    };
//})