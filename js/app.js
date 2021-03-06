var app = {
    views: {},
    models: {},
    routers: {},
    utils: {},
    adapters: {}
};

$(document).on("ready", function () {
    app.router = new app.routers.AppRouter();
    app.utils.templates.load(["HomeView", "EmployeeView", "EmployeeListItemView", "ReportsView", "MapView", "FruitView", "DrinkView"],
        function () {
            app.router = new app.routers.AppRouter();
            Backbone.history.start();
        });
});


$(function(){
    $(window).resize(function() {
        window.location.reload();
    });
});
