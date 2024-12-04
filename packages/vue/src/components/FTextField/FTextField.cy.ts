import { parsePersonnummer } from "@fkui/logic";
import { defineComponent } from "vue";
import {
    DensityWrapper,
    SizeWrapper,
    densityWrapperHeight,
    densityWrapperWidth,
    sizeWrapperHeight,
    sizeWrapperWidth,
} from "@fkui/test-utils/vue";
import { FIcon } from "../FIcon";
import { FTextFieldPageObject } from "../../pageobject";
import FTextFieldGridExample from "./examples/FTextFieldGrid.vue";
import FTextField from "./FTextField.vue";

const ValidationComponent = defineComponent({
    template: /* HTML */ `
        <f-text-field
            v-model="field"
            v-validation.required.maxLength="{ maxLength: { length: 10 } }"
        >
            label
        </f-text-field>
    `,
    components: {
        FTextField,
    },
    data() {
        return {
            field: "",
        };
    },
});

const AppendInnerContentComponent = defineComponent({
    template: /* HTML */ `
        <f-text-field v-model="field" v-validation.required>
            label
            <template #append-inner> kr </template>
        </f-text-field>
    `,
    components: {
        FTextField,
    },
    data() {
        return {
            field: "",
        };
    },
});

const SizesComponent = defineComponent({
    template: /* HTML */ `
        <size-wrapper>
            <f-text-field v-model="field"> label </f-text-field>
        </size-wrapper>
    `,
    components: {
        SizeWrapper,
        FTextField,
    },
    data() {
        return {
            field: "",
        };
    },
});

const SizesButtonsComponent = defineComponent({
    template: /* HTML */ `
        <size-wrapper>
            <f-text-field v-model="field">
                label
                <template #input-left>
                    <button
                        type="button"
                        aria-label="left"
                        :style="buttonStyle"
                    >
                        <f-icon name="calendar" :style="iconStyle"></f-icon>
                    </button>
                </template>
                <template #input-right>
                    <button
                        type="button"
                        aria-label="right"
                        :style="buttonStyle"
                    >
                        <f-icon name="calendar" :style="iconStyle"></f-icon>
                    </button>
                </template>
            </f-text-field>
        </size-wrapper>
    `,
    components: {
        SizeWrapper,
        FTextField,
        FIcon,
    },
    data() {
        return {
            field: "",
            buttonStyle:
                "background: transparent; border: 0; flex: 0 0 auto; padding: 0;",
            iconStyle:
                "color: hotpink; width: 2rem; height: 2rem; verticalAlign: middle;",
        };
    },
});

const PersonnummerComponent = defineComponent({
    template: /* HTML */ `
        <div id="personnummer">
            <f-text-field
                v-model="personnummerModel"
                v-validation.personnummer=""
                :formatter="parsePersonnummer"
            >
                Personnummer
            </f-text-field>
        </div>
    `,
    components: {
        FTextField,
    },
    data() {
        return {
            personnummerModel: "",
            parsePersonnummer,
        };
    },
});

it(`should contain input field with label`, () => {
    cy.viewport(sizeWrapperWidth, sizeWrapperHeight);
    cy.mount(SizesComponent);
    cy.toMatchScreenshot();
});

it(`should display icons before and after input field`, () => {
    cy.viewport(sizeWrapperWidth, sizeWrapperHeight);
    cy.mount(SizesButtonsComponent);
    cy.toMatchScreenshot();
});

describe("required validation", () => {
    const textField = new FTextFieldPageObject(".text-field");

    beforeEach(() => {
        cy.viewport(640, 200);
    });

    // afterEach(() => {
    //     cy.toMatchScreenshot();
    // });

    it(`valid`, () => {
        cy.mount(ValidationComponent);
        textField.input().type("foo").blur();
    });

    it(`invalid`, () => {
        cy.mount(ValidationComponent);
        textField.input().type("Exceeds maxlength").focus().blur();
    });
});

it("should expose error label with hidden text when emitting componentValidity event", () => {
    const onComponentValidity = cy.spy().as("onComponentValidity");
    cy.mount(
        {
            template: /* HTML */ `
                <div @component-validity="onComponentValidity">
                    <f-text-field v-validation.required>
                        <span class="sr-only"> lorem ipsum </span>
                    </f-text-field>
                </div>
            `,
            components: { FTextField },
            emits: ["componentValidity"],
            methods: {
                onComponentValidity(event: CustomEvent) {
                    this.$emit("componentValidity", event.detail);
                },
            },
        },
        {
            props: {
                onComponentValidity,
            },
        },
    );
    cy.get("input").focus();
    cy.get("input").blur();
    cy.get("@onComponentValidity").should("have.been.calledWithMatch", {
        isValid: false,
        errorMessage: "lorem ipsum",
    });
});

describe("FTextField legacy personnummer validation compability", () => {
    it("should use personnummerFormat for validation", () => {
        cy.mount(PersonnummerComponent);
        const textField = new FTextFieldPageObject("#personnummer");
        textField.input().type("123456").blur();
        textField.label
            .errorMessage()
            .should("contain.text", "Skriv personnumret med 10 siffror.");
    });

    it("should validate and format ok", () => {
        cy.mount(PersonnummerComponent);
        const textField = new FTextFieldPageObject("#personnummer");
        textField
            .input()
            .type("191202119150")
            .blur()
            .should("have.value", "19120211-9150");
    });
});

describe("FTextFieldGrid example", () => {
    it("should set grid classes", () => {
        cy.mount(FTextFieldGridExample);
        cy.get(".i-width-md-9 label").should("exist");
        cy.get(".i-width-md-6 input").should("exist");
    });
});

describe("Append inner content", () => {
    it(`should show content`, () => {
        cy.mount(AppendInnerContentComponent);
        cy.get(".text-field__append-inner").should("contain.text", "kr");
        cy.toMatchScreenshot();
    });

    it(`should handle input padding for long input-text`, () => {
        cy.mount(AppendInnerContentComponent);
        const textField = new FTextFieldPageObject(".text-field");
        textField.enter(
            "a long text to see if the padding for the append inner content works as we will",
        );
        cy.toMatchScreenshot();
    });
});

describe("density", () => {
    it(`should be densified`, () => {
        const DensityComponent = defineComponent({
            template: /* HTML */ `
                <density-wrapper>
                    <f-text-field>
                        <template #default> Inmatningsfält </template>
                        <template #append-inner>\\o/</template>
                    </f-text-field>
                </density-wrapper>
            `,
            components: {
                DensityWrapper,
                FTextField,
            },
        });

        cy.viewport(densityWrapperWidth, densityWrapperHeight);
        cy.mount(DensityComponent);
        cy.toMatchScreenshot();
    });

    it(`inline should be densified`, () => {
        const DensityComponent = defineComponent({
            template: /* HTML */ `
                <density-wrapper>
                    <f-text-field inline> Inmatningsfält </f-text-field>
                </density-wrapper>
            `,
            components: {
                DensityWrapper,
                FTextField,
            },
        });

        cy.viewport(densityWrapperWidth, densityWrapperHeight);
        cy.mount(DensityComponent);
        cy.toMatchScreenshot();
    });
});

describe("toggle existence", () => {
    it("should retain correct error message", () => {
        // Given
        const textField = new FTextFieldPageObject(`[data-test="textField"]`);
        const toggleButtonSelector = `[data-test="toggleButton"]`;

        const TestComponent = defineComponent({
            template: /* HTML */ `
                <button
                    data-test="toggleButton"
                    type="button"
                    class="button"
                    @click="onClickToggleShowTextField"
                >
                    Toggle showing text field
                </button>
                <f-text-field
                    v-if="show"
                    v-model="value"
                    v-test="'textField'"
                    v-validation.required.minLength.maxLength="{
                minLength: { length: 3 },
                maxLength: { length: 5 }
            }"
                >
                    Test
                </f-text-field>
            `,
            components: { FTextField },
            data() {
                return {
                    show: true,
                    value: "",
                };
            },
            methods: {
                onClickToggleShowTextField(): void {
                    this.show = !this.show;
                },
            },
        });

        cy.mount(TestComponent);

        textField.enter("Too many characters");
        textField.label.errorMessage().should("be.visible");
        textField.label
            .errorMessage()
            .invoke("text")
            .invoke("trim")
            .then((expectedErrorMessage) => {
                // When
                cy.get(toggleButtonSelector).click();
                textField.el().should("not.exist");
                cy.get(toggleButtonSelector).click();
                textField.el().should("be.visible");

                // Then
                textField.label.errorMessage().should("be.visible");
                textField.label
                    .errorMessage()
                    .invoke("text")
                    .invoke("trim")
                    .should("equal", expectedErrorMessage);
            });
    });
});
