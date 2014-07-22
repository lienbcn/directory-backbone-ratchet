
app.views.FruitListView = Backbone.View.extend({

    tagName:'ul',

    className:'fruits table-view',

    initialize:function () {
    	//debugger; //model has to be defined, in the call of the FruitListView
        var self = this;
    },

    render:function () {
        this.$el.empty();
        //debugger; //check the name of the variables
        _.each(this.model.models, function (oFruit) {
            this.$el.append(new app.views.FruitView({model: oFruit}).render().el);
        }, this);
        $('.body').append(this.el);
        return this;
    }
});

app.views.FruitView = Backbone.View.extend({

    tagName:"li",

    className: "fruit table-view-cell",

    initialize:function () {
    },

    render:function () {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }

});
