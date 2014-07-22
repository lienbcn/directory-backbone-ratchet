app.models.Drink = Backbone.Model.extend({

    initialize:function () {
        this.drinks = new app.models.DrinkCollection();
    },

    sync: function(method, model, options) {
        debugger; //why is it executed?
    }

});

app.models.DrinkCollection = Backbone.Collection.extend({

    model: app.models.Drink,

    sync: function(method, model, options) { //executed when collection.fetch is called
        //this should do an ajax request to the server to retrieve an array of objects, then call options.success with the results:
        options.success([
            {id: 1, name: 'cocacola', price: 2.65},
            {id: 2, name: 'ice tea', price: 2.85}
        ]);
    }

});
