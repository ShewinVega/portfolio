import { CONFIG } from '@constants/config';

import type { BreakpointConfigInterface, BreakpointKey, ResponsiveBreakpoints } from "./interfaces";

// Function to generate the responsive media query breakpoints for the carousel component
export const mediaQueryBreakpoints = (breakpoints: ResponsiveBreakpoints | undefined) => {

    if (!breakpoints) return undefined;

    return Object.entries(breakpoints || {})
        .reduce((acc, [key, value]) => {
            // Generate the media query getting the size of the breakpoint from the tailwindBreakpoints configuration
            const query = `(min-width: ${CONFIG.BREAKPOINTS[key as BreakpointKey]})`;
            // We make our new ResponsiveBreakpoints object with the media query as the key
            acc[query] = value;

            return acc;

        }, {} as Record<string, BreakpointConfigInterface>);
    // We have to cast the accumulator to the correct type for compatibility with the breakpoint
    // object in the useKeenSlider hook
}