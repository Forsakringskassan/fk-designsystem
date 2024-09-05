/**
 * @public
 */
export enum FValidationFormAction {
    CONTINUE = 0,
    CANCEL = 1,
}

/**
 * @public
 */
export type FValidationFormCallback = () =>
    | void // eslint-disable-line @typescript-eslint/no-invalid-void-type -- allow implicit undefined return value
    | FValidationFormAction
    | Promise<FValidationFormAction>
    | Promise<void>;
