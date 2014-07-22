
app.views.DrinkListView = Backbone.View.extend({

    tagName:'ul',

    className:'drinks table-view',

    initialize:function () {
    	//debugger; //model has to be defined, in the call of the DrinkListView
        var self = this;
    },

    render:function () {
        this.$el.empty();
        //debugger; //check the name of the variables
        _.each(this.model.models, function (oDrink) {
            this.$el.append(new app.views.DrinkView({model: oDrink}).render().el);
        }, this);
        $('.body').append(this.el);
        return this;
    }
});

app.views.DrinkView = Backbone.View.extend({

    tagName:"li",

    className: "drink table-view-cell",

    initialize:function () {
    },

    render:function () {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }

});
