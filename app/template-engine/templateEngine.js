var templateEngine = (function () {

    var templateCache = {};
    $('[data-lodash-template]').each(function () {
        templateCache[this.id] = _.template(this.innerHTML);
    });

    return {
        render: function (templateName, data) {
            var context = {
                dateFormat: dateFormat,
                data: data
            };
            var compiledTemplate = templateCache[templateName];
            if (!compiledTemplate) {
                throw new Error("Template with name: " + templateName + " isn't exists");
            }
            return compiledTemplate(context);
        }
    };
})();