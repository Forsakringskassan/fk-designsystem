import { mount } from "@vue/test-utils";
import FLogo from "./FLogo.vue";
import "html-validate/jest";

describe("size prop", () => {
    it("`small` size should set `small` class modifier", () => {
        const wrapper = mount(FLogo, {
            props: {
                size: "small",
                "aria-label": "foo",
            },
        });
        expect(wrapper.classes()).toContain(`logo--small`);
    });

    it("`large` size should set `large` class modifier", () => {
        const wrapper = mount(FLogo, {
            props: {
                size: "large",
                "aria-label": "foo",
            },
        });
        expect(wrapper.classes()).toContain(`logo--large`);
    });

    it("`responsive` size should set `responsive` class modifier", () => {
        const wrapper = mount(FLogo, {
            props: {
                size: "responsive",
                "aria-label": "foo",
            },
        });
        expect(wrapper.classes()).toContain(`logo--responsive`);
    });
});

describe("html-validate", () => {
    it("should allow setting correct size values", () => {
        expect(
            /* HTML */ `<f-logo size="small" aria-Label="foo"></f-logo>`,
        ).toHTMLValidate();
        expect(
            /* HTML */ `<f-logo size="large" aria-Label="foo"></f-logo>`,
        ).toHTMLValidate();
        expect(
            /* HTML */ `<f-logo size="responsive" aria-Label="foo"></f-logo>`,
        ).toHTMLValidate();
    });

    it("should report error when size value is invalid", () => {
        expect(
            /* HTML */ `<f-logo size="huge" aria-Label="foo"></f-logo>`,
        ).not.toHTMLValidate();
    });

    it("should require setting `aria-label`", () => {
        expect(/* HTML */ `<f-logo></f-logo>`).not.toHTMLValidate();
        expect(
            /* HTML */ `<f-logo aria-Label="foo"></f-logo>`,
        ).toHTMLValidate();
    });
});
