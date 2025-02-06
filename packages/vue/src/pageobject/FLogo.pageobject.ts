import { type DefaultCypressChainable, type BasePageObject } from "./common";

/**
 * @public
 */
export class FLogoPageObject implements BasePageObject {
    public selector: string;

    /**
     * @param selector - root element selector for `FLogo`.
     */
    public constructor(selector: string = ".logo") {
        this.selector = selector;
    }

    /**
     * Get root element.
     */
    public el(): DefaultCypressChainable {
        return cy.get(this.selector);
    }
}
