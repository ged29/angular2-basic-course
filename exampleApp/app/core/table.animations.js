"use strict";
var core_1 = require("@angular/core");
exports.HighlightTrigger = core_1.trigger("rowHighlight", [
    core_1.state("selected", core_1.style({
        backgroundColor: "lightgreen",
        fontSize: "20px"
    })),
    core_1.state("notselected", core_1.style({
        backgroundColor: "lightsalmon",
        fontSize: "12px"
    })),
    core_1.state("*", core_1.style({
        border: "solid black 2px"
    })),
    core_1.state("void", core_1.style({
        transform: "translateX(50%)"
    })),
    core_1.transition("* => notselected", core_1.animate("200ms")),
    // transition("* => selected",
    //     [animate("400ms 200ms ease-in", style({
    //         backgroundColor: "lightblue", fontSize: "25px"
    //     })),
    //     animate("250ms", style({
    //         backgroundColor: "lightcoral", fontSize: "30px"
    //     })),
    //     animate("200ms")]
    // ),
    core_1.transition("* => selected", [core_1.animate("400ms 200ms ease-in", core_1.style({
            backgroundColor: "lightblue",
            fontSize: "25px"
        })),
        core_1.group([
            core_1.animate("250ms", core_1.style({ backgroundColor: "lightcoral" })),
            core_1.animate("450ms", core_1.style({ fontSize: "30px" })),
        ]),
        core_1.animate("200ms")]),
    core_1.transition("void => *", core_1.animate("500ms")) // :enter
]);
//# sourceMappingURL=table.animations.js.map