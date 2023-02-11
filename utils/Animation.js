import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';

export default function Animation(props) {
    const ref = useRef(null);
    const onScreen = useOnScreen(ref);

    // Set defaults
    const type = props.type ?? 'fadeIn';
    const timing = props.timing ?? 'ease-out';
    const duration = props.duration ?? 1500;
    const delay = props.delay ?? 0;
    const count = props.iterationCount ?? 1;
    const fillMode = props.fillMode ?? 'forwards';

    return (
        <div
            ref={ref}
            className={props.className}
            style={
                onScreen
                    ? {
                        ...props.style,
                        animationName: `${type}`,
                        animationTimingFunction: `${timing}`,
                        animationDuration: `${duration}ms`,
                        animationDelay: `${delay}ms`,
                        animationIterationCount: `${count}`,
                        animationFillMode: `${fillMode}`,
                    }
                    : { ...props.style, opacity: 0 }
            }
        >
            {props.children}
        </div>
    );
}
