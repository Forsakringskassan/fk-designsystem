import { FProgressbarPageObject } from "@fkui/vue/pageobject";
import Example from "./FProgressbarPageObject-progress-status.vue";

it("progressStatus() should give us the correct classname pending/inprogress/finished", () => {
    cy.mount(Example);

    /* --- cut above --- */
    const progressbarPending = new FProgressbarPageObject(
        "[data-test=progressbar-pending]",
    );
    progressbarPending.progressStatus().should("have.string", "pending");

    const progressbarInprogress = new FProgressbarPageObject(
        "[data-test=progressbar-inprogress]",
    );
    progressbarInprogress.progressStatus().should("have.string", "inprogress");

    const progressbarFinished = new FProgressbarPageObject(
        "[data-test=progressbar-finished]",
    );
    progressbarFinished.progressStatus().should("have.string", "finished");
    /* --- cut below --- */
});
