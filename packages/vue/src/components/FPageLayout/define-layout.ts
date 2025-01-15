import { setLayout } from "./layout-register";

export type LayoutAreaAttach = "none" | "left" | "right";

export type LayoutAreaDirection = "column" | "row";

/**
 * @public
 */
export interface LayoutAreaDefinition {
    /** Where panels will attach to */
    attach: LayoutAreaAttach;

    /** What direction content of the area will appear (mapped to `flex-direction`) */
    direction: LayoutAreaDirection;
}

/**
 * A definition of a layout for {@link FPageLayout}.
 *
 * @public
 */
export interface LayoutDefinition {
    name: string;
    areas: Record<string, LayoutAreaDefinition>;
}

/**
 * A definition of a layout for {@link FPageLayout}.
 *
 * @internal
 */
export interface NormalizedLayoutDefinition {
    name: string;
    areas: Record<string, LayoutAreaDefinition>;
}

/**
 * Defines a new layout for usage with {@link FPageLayout}.
 *
 * @internal
 */
export function defineLayout<T extends LayoutDefinition>(definition: T): T {
    return definition;
}

/**
 * Register a new layout for usage with {@link FPageLayout}.
 *
 * @public
 */
export function registerLayout<T extends LayoutDefinition>(
    definition: T,
): void {
    setLayout(definition.name, definition);
}
