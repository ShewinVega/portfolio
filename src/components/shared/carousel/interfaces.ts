import type { CONFIG } from "@src/constants/config";

// Breakpoiints configuration
export type BreakpointKey = keyof typeof CONFIG.BREAKPOINTS;
export interface BreakpointConfigInterface {
    slides: {
        perView?: number;
        spacing?: number;
        origin?: "center" | "auto";
    }
}
export type ResponsiveBreakpoints = {
    [key in BreakpointKey]?: BreakpointConfigInterface;
}

export interface ArrowInterface {
    custom?: boolean;
    visible?: boolean;
    hideOnMobile?: boolean;
    defaultPrevArrowClass?: string;
    defaultNextArrowClass?: string;
}

export interface DotsInterface {
    class?: string;
    dotClass?: string;
    visible?: boolean;
    hideOnDesktop?: boolean;
}