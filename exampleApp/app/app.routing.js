"use strict";
var router_1 = require("@angular/router");
var table_component_1 = require("./core/table.component");
var form_component_1 = require("./core/form.component");
var routes = [
    { path: "form/edit", component: form_component_1.FormComponent },
    { path: "form/create", component: form_component_1.FormComponent },
    { path: "", component: table_component_1.TableComponent } // http://localhost:3000/ => TableComponent
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map