
export * from "./auth";
export const resetApp = payload => ({
    type: "RESET_APP",
    payload
});