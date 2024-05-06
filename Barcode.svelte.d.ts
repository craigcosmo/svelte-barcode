import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        value: any;
        elementTag?: string | undefined;
        options: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type BarcodeProps = typeof __propDef.props;
export type BarcodeEvents = typeof __propDef.events;
export type BarcodeSlots = typeof __propDef.slots;
export default class Barcode extends SvelteComponent<BarcodeProps, BarcodeEvents, BarcodeSlots> {
}
export {};
