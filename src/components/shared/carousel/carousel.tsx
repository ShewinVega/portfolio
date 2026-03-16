import { ArrowLeftSquareFill, ArrowRightSquareFill } from 'react-bootstrap-icons';
import { useKeenSlider } from 'keen-slider/react';
import { useRef, useState, type ReactNode } from 'react';
import { CONFIG } from '@constants/config';
import { cn } from '@utils/tailwindMerge';
import 'keen-slider/keen-slider.min.css';

import { mediaQueryBreakpoints } from './helpers';

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

interface ArrowInterface {
	custom?: boolean;
	visible?: boolean;
	hideOnMobile?: boolean;
	defaultPrevArrowClass?: string;
	defaultNextArrowClass?: string;
}

interface DotsInterface {
	class?: string;
	dotClass?: string;
	visible?: boolean;
	hideOnDesktop?: boolean;
}

interface Props {
	children: ReactNode;
	initial?: number;
	loop?: boolean;
	arrows?: ArrowInterface;
	dots?: DotsInterface;
	breakpoints?: ResponsiveBreakpoints;
	autoplay?: boolean;
	slides: {
		perView?: number;
		spacing?: number;
		origin?: "center" | "auto";
	};
	prevArrow?: ReactNode;
	nextArrow?: ReactNode;
}


export const KCarousel = ({
	children,
	breakpoints,
	slides,
	loop,
	initial,
	arrows,
	dots,
	prevArrow,
	autoplay,
	nextArrow }: Props) => {
	const [currentSlide, setCurrentSlide] = useState<number>(0);
	const [loaded, setLoaded] = useState<boolean>(false);

	const mouseOver = useRef<boolean>(false);
	const animation = { duration: 10000, easing: (t: any) => t };

	const [sliderRef, instanceRef] = useKeenSlider({
		initial: initial || 0,
		loop: loop || false,
		breakpoints: mediaQueryBreakpoints(breakpoints),
		slides: {
			perView: slides?.perView || 1,
			spacing: slides?.spacing || 10,
			origin: slides?.origin || "auto"
		},
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel);
		},
		created(s) {

			s.container.addEventListener("mouseenter", () => {
				mouseOver.current = true;
			});
			s.container.addEventListener("mouseleave", () => {
				mouseOver.current = false;
				if (autoplay && !mouseOver.current) {
					s.moveToIdx(s.track.details.abs + 5, true, animation)
				}
			});

			if (autoplay) {
				s.moveToIdx(5, true, animation);
			}
			setLoaded(true);
		},
		animationEnded(s) {
			if (autoplay && !mouseOver.current) {
				s.moveToIdx(s.track.details.abs + 5, true, animation)
			}
		},
	});

	return (
		<>
			<div className="relative customCarousel">
				<div ref={sliderRef} className="keen-slider">
					{children}
				</div>
				{loaded && instanceRef.current && arrows?.visible && (
					<>
						<div
							onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
							className={`${arrows?.hideOnMobile && 'hidden md:block'}`}
						>
							{arrows?.custom ? (
								prevArrow
							) : (
								<ArrowLeftSquareFill
									className={cn("text-primary w-6 h-6 absolute top-1/2 -translate-y-1/2 cursor-pointer z-10 -left-8 -translate-x-1/2", arrows?.defaultPrevArrowClass)}
								/>
							)}
						</div>

						<div
							onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
							className={`${arrows?.hideOnMobile && 'hidden md:block'}`}
						>
							{arrows?.custom ? (
								nextArrow
							) : (
								<ArrowRightSquareFill
									className={cn("text-primary w-6 h-6 absolute top-1/2 -translate-y-1/2 cursor-pointer z-10 -right-8 translate-x-1/2", arrows?.defaultNextArrowClass)}
								/>
							)}
						</div>
					</>
				)}
			</div>
			{loaded && instanceRef.current && dots?.visible && (
				<div className={cn("flex justify-center mt-12", dots?.hideOnDesktop && 'lg:hidden', dots?.class)}>
					{[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => {
						return (
							<button
								key={idx}
								onClick={() => {
									instanceRef.current?.moveToIdx(idx);
								}}
								className={
									cn("border-none w-2.5 h-2.5 rounded-full bg-gray-300 mx-1 p-1 cursor-pointer",
										currentSlide === idx ? 'bg-primary' : '',
										dots?.dotClass
									)}
							></button>
						);
					})}
				</div>
			)}
		</>
	);
};