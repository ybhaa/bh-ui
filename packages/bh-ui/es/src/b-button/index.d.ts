import type { Plugin } from "vue";
declare type SFCWithInstall<T> = T & Plugin;
export declare const Button: SFCWithInstall<import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        required: false;
    };
    size: {
        type: StringConstructor;
        required: false;
    };
    plain: {
        type: StringConstructor;
        required: false;
    };
    round: {
        type: StringConstructor;
        required: false;
    };
    disabled: {
        type: StringConstructor;
        required: false;
    };
    circle: {
        type: StringConstructor;
        required: false;
    };
    loading: {
        type: BooleanConstructor;
        required: false;
    };
    icon: {
        type: StringConstructor;
        required: false;
    };
}, {
    buttonProps: any;
    ns: {
        namespace: import("vue").ComputedRef<string>;
        b: (blockSuffix?: string) => string;
        e: (element?: string | undefined) => string;
        m: (modifier?: string | undefined) => string;
        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
        em: (element?: string | undefined, modifier?: string | undefined) => string;
        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
        is: {
            (name: string, state: boolean | undefined): string;
            (name: string): string;
        };
        cssVar: (object: Record<string, string>) => Record<string, string>;
        cssVarName: (name: string) => string;
        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
        cssVarBlockName: (name: string) => string;
    };
    buttonStyle: import("vue").ComputedRef<string[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        required: false;
    };
    size: {
        type: StringConstructor;
        required: false;
    };
    plain: {
        type: StringConstructor;
        required: false;
    };
    round: {
        type: StringConstructor;
        required: false;
    };
    disabled: {
        type: StringConstructor;
        required: false;
    };
    circle: {
        type: StringConstructor;
        required: false;
    };
    loading: {
        type: BooleanConstructor;
        required: false;
    };
    icon: {
        type: StringConstructor;
        required: false;
    };
}>>, {
    loading: boolean;
}, {}>>;
export default Button;
