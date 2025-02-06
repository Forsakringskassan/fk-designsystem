import { FProgressbarPageObject } from "@fkui/vue/pageobject";
import Example from "./FProgressbarPageObject-aria-valuenow.vue";

it("ariaValueNow() should give us the correct value of progressbar class", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const progressbarPending = new FProgressbarPageObject(
        "[data-test=progressbar-pending]",
    );
    progressbarPending.ariaValueNow().should("have.string", "0");

    const progressbarInprogress = new FProgressbarPageObject(
        "[data-test=progressbar-inprogress]",
    );
    progressbarInprogress.ariaValueNow().should("have.string", "40");

    const progressbarFinished = new FProgressbarPageObject(
        "[data-test=progressbar-finished]",
    );
    progressbarFinished.ariaValueNow().should("have.string", "100");
    /* --- cut below --- */
});
