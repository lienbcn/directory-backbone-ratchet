app.routers.AppRouter = Backbone.Router.extend({

    routes: {
        "":                         "fruits",
        "employees/:id":            "employeeDetails",
        "employees/:id/reports":    "reports",
        "employees/:id/map":        "map",

        "fruits": "fruits",
        "drinks": "drinks"
    },

    initialize: function () {
        app.slider = new PageSlider($('body'));
    },

    home: function () {
        // Since the home view never changes, we instantiate it and render it only once
        if (!app.homeView) {
            app.homeView = new app.views.HomeView();
            app.homeView.render();
        } else {
            console.log('reusing home view');
            app.homeView.delegateEvents(); // delegate events when the view is recycled
        }
        app.slider.slidePage(app.homeView.$el);
    },

    employeeDetails: function (id) {
        var employee = new app.models.Employee({id: id});
        employee.fetch({
            success: function (data) {
                // Note that we could also 'recycle' the same instance of EmployeeFullView
                // instead of creating new instances
                app.slider.slidePage(new app.views.EmployeeView({model: data}).render().$el);
            }
        });
    },

    reports: function (id) {
        var employee = new app.models.Employee({id: id});
        employee.fetch({
            success: function (data) {
                // Note that we could also 'recycle' the same instance of EmployeeFullView
                // instead of creating new instances
                app.slider.slidePage(new app.views.ReportsView({model: data}).render().$el);
            }
        });
    },

    map: function (id) {
        app.slider.slidePage(new app.views.MapView().render().$el);
    },

    fruits: function(){
        //First render the main template Lists:
        $.get('tpl/Fruits.html', function(sTemplateLists) {
            var fnCompileLists = _.template(sTemplateLists);
            var sHtmlLists = fnCompileLists({title: 'Fruits'});
            $('body').html(sHtmlLists);

            //Now, fetch the list of fruits and print in inside div.body
            var cFruits = new app.models.FruitCollection(); //create the collection for fruits
            cFruits.fetch(); //get all list of fruits from the server, it will call sync method
            app.fruitListView = new app.views.FruitListView({model: cFruits}); //create the view and assign the collection to it, so it will be able to print the date properly
            app.fruitListView.render(); //print the template to the dom, it will print it inside the div.body

            //app.slider.slidePage(app.fruitListView.$el); //cool transition

        }, 'html');

/*
        app.listView = new app.view.ListView();
        app.listView.render();
        app.slider.slidePage(app.listView.$el); //cool transition
        */
    },

    drinks: function(){
        
        //First render the main template Lists:
        $.get('tpl/Drinks.html', function(sTemplateLists) {
            var fnCompileLists = _.template(sTemplateLists);
            var sHtmlLists = fnCompileLists();
            $('body').html(sHtmlLists);

            //Now, fetch the list of drinks and print in inside div.body
            var cDrinks = new app.models.DrinkCollection(); //create the collection for drinks
            cDrinks.fetch(); //get all list of drink from the server, it will call sync method
            app.drinkListView = new app.views.DrinkListView({model: cDrinks}); //create the view and assign the collection to it, so it will be able to print the date properly
            app.drinkListView.render(); //print the template to the dom, it will print it inside the div.body

            //app.slider.slidePage(app.drinkListView.$el); //cool transition

        }, 'html');

/*
        app.listView = new app.view.ListView();
        app.listView.render();
        app.slider.slidePage(app.listView.$el); //cool transition
        */
    }

});

