import { FProgressbarPageObject } from "@fkui/vue/pageobject";
import Example from "./FProgressbarPageObject.vue";

it("el() should select correct element", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const progressbar = new FProgressbarPageObject(
        "[data-test=progressbar-test]",
    );
    progressbar.el().should("exist");
    /* --- cut below --- */
});
