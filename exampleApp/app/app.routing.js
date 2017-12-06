"use strict";
var router_1 = require("@angular/router");
var table_component_1 = require("./core/table.component");
var form_component_1 = require("./core/form.component");
var notFound_component_1 = require("./core/notFound.component");
var routes = [
    { path: "form/:mode/:id", component: form_component_1.FormComponent },
    { path: "form/:mode", component: form_component_1.FormComponent },
    { path: "", component: table_component_1.TableComponent },
    { path: "**", component: notFound_component_1.NotFoundComponent }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map