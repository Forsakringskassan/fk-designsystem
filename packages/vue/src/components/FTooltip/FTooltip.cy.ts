import {
    DensityWrapper,
    densityWrapperHeight,
    densityWrapperWidth,
} from "@fkui/test-utils/vue";
import { defineComponent } from "vue";
import { FTooltipPageObject } from "../../pageobject";
import FTextField from "../FTextField/FTextField.vue";
import FTooltip from "./FTooltip.vue";

describe("FTooltip", () => {
    it("Should have a page object that can access any necessary elements", () => {
        cy.mount(FTooltip, {
            slots: {
                header: `Rubrik`,
                body: /* HTML */ ` <p>Lorem ipsum</p> `,
            },
            props: {
                closeButtonText: "Stäng",
                screenReaderText: "Screen reader text",
            },
        });
        const tooltip = new FTooltipPageObject(".tooltip");
        tooltip.iButton().click();
        tooltip.header().should("contain", "Rubrik");
        tooltip.body().should("contain", "Lorem ipsum");
        tooltip.closeButton().should("have.trimmedText", "Stäng");
        tooltip.closeButton().click();
    });

    it("should appear visually correct with label and tooltip", () => {
        const TestComponent = defineComponent({
            components: { FTooltip },
            template: /* HTML */ `
                <div v-for="v in variants">
                    <div class="tooltip-before">
                        <label class="label tooltip-before__label">
                            Etikett
                        </label>
                    </div>
                    <f-tooltip
                        :id="v.id"
                        v-model="v.model"
                        screen-reader-text="Läs mer"
                    >
                        <template #header> Rubrik </template>
                        <template #body> Lorem ipsum dolor sit amet. </template>
                    </f-tooltip>
                </div>
            `,
            data() {
                return {
                    variants: [
                        { id: "collapsed", model: false },
                        { id: "expanded", model: true },
                    ],
                };
            },
        });
        cy.viewport(800, 600);
        cy.mount(TestComponent);
        cy.get("#collapsed .tooltip__content").should("not.exist");
        cy.get("#expanded .tooltip__content").should("exist");
        cy.toMatchScreenshot();
    });

    it("should appear visually correct with heading and tooltip", () => {
        const TestComponent = defineComponent({
            components: { FTooltip },
            template: /* HTML */ `
                <div v-for="v in variants">
                    <div class="tooltip-before">
                        <h3 class="label tooltip-before__label">Rubrik</h3>
                    </div>
                    <f-tooltip
                        :id="v.id"
                        v-model="v.model"
                        screen-reader-text="Läs mer"
                    >
                        <template #header> Rubrik </template>
                        <template #body> Lorem ipsum dolor sit amet. </template>
                    </f-tooltip>
                </div>
            `,
            data() {
                return {
                    variants: [
                        { id: "collapsed", model: false },
                        { id: "expanded", model: true },
                    ],
                };
            },
        });
        cy.viewport(800, 600);
        cy.mount(TestComponent);
        cy.get("#collapsed .tooltip__content").should("not.exist");
        cy.get("#expanded .tooltip__content").should("exist");
        cy.toMatchScreenshot();
    });

    it("should appear visually correct with input field and tooltip", () => {
        const TestComponent = defineComponent({
            components: { FTextField, FTooltip },
            template: /* HTML */ `
                <f-text-field v-for="v in variants">
                    <template #default> Etikett </template>
                    <template #tooltip>
                        <f-tooltip
                            :id="v.id"
                            v-model="v.model"
                            screen-reader-text="Läs mer"
                        >
                            <template #header> Rubrik </template>
                            <template #body>
                                Lorem ipsum dolor sit amet.
                            </template>
                        </f-tooltip>
                    </template>
                </f-text-field>
            `,
            data() {
                return {
                    variants: [
                        { id: "collapsed", model: false },
                        { id: "expanded", model: true },
                    ],
                };
            },
        });
        cy.viewport(800, 600);
        cy.mount(TestComponent);
        cy.get("#collapsed .tooltip__content").should("not.exist");
        cy.get("#expanded .tooltip__content").should("exist");
        cy.toMatchScreenshot();
    });

    describe("density", () => {
        const DensityComponent = defineComponent({
            template: /* HTML */ `
                <density-wrapper>
                    <div class="tooltip-before">
                        <label class="label tooltip-before__label">
                            Tooltip
                        </label>
                    </div>
                    <f-tooltip screen-reader-text="Skärmläsartext">
                        <template #header> Rubrik </template>
                        <template #body> Brödtext </template>
                    </f-tooltip>
                </density-wrapper>
            `,
            components: {
                DensityWrapper,
                FTooltip,
            },
        });

        it(`should be densified`, () => {
            cy.viewport(densityWrapperWidth, densityWrapperHeight);
            cy.mount(DensityComponent);
            const tooltip1 = new FTooltipPageObject(
                ".density-default .tooltip",
            );
            tooltip1.iButton().click({ multiple: true });
            const tooltip2 = new FTooltipPageObject(".density-dense .tooltip");
            tooltip2.iButton().click({ multiple: true });
            const tooltip3 = new FTooltipPageObject(
                ".density-densest .tooltip",
            );
            tooltip3.iButton().click({ multiple: true });
            cy.toMatchScreenshot();
        });
    });
});
