import { FLogo } from "../components";
import { FLogoPageObject } from "./FLogo.pageobject";

const logo = new FLogoPageObject();

it("`el()` should get root element", () => {
    cy.mount(FLogo, {
        props: {
            "aria-label": "foo",
        },
    });
    logo.el().should("exist");
});
