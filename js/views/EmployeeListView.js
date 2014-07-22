app.views.EmployeeListView = Backbone.View.extend({

    tagName:'ul',

    className:'table-view',

    initialize:function () {
        var self = this;
        this.model.on("reset", this.render, this);
        this.model.on("add", function (employee) {
            debugger;
            self.$el.append(new app.views.EmployeeListItemView({model:employee}).render().el);
        });
    },

    render:function () {
        this.$el.empty();
        _.each(this.model.models, function (employee) {
            this.$el.append(new app.views.EmployeeListItemView({model:employee}).render().el);
        }, this);
        return this;
    }
});

app.views.EmployeeListItemView = Backbone.View.extend({

    tagName:"li",

    className: "table-view-cell",

    initialize:function () {
        this.model.on("change", this.render, this);
        this.model.on("destroy", this.close, this);
    },

    render:function () {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }

});