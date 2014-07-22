app.models.Fruit = Backbone.Model.extend({

    initialize:function () {
        this.fruits = new app.models.FruitCollection();
    },

    sync: function(method, model, options) {
        debugger; //why is it executed?
    }

});

app.models.FruitCollection = Backbone.Collection.extend({

    model: app.models.Fruit,

    sync: function(method, model, options) { //executed when collection.fetch is called
        //this should do an ajax request to the server to retrieve an array of objects, then call options.success with the results:
        options.success([
            {id: 1, name: 'banana', color: 'yellow'},
            {id: 2, name: 'apple', color: 'green'}
        ]);
    }

});
