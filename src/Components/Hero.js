import React, { useEffect, useRef } from "react";
import { TweenMax, Expo } from 'gsap';
import Parallax from 'parallax-js';
import waffle from "../Images/waffle.png";
import logo from "../Images/logo.png";
import layer1 from "../Images/star-fill.png";
import layer2 from "../Images/star-stroke.png";
import layer3 from "../Images/stars-color.png";
import layer4 from "../Images/air2.png";
import layer5 from "../Images/one.png";
import layer6 from "../Images/hot.png";
import layer7 from "../Images/air.png";

const Hero = () => {
    const logoRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const listRef = useRef(null);
    const waffleRef = useRef(null);
    const animeRef = useRef(null);
    const layer1Ref = useRef(null);
    const layer2Ref = useRef(null);
    const layer3Ref = useRef(null);
    const layer4Ref = useRef(null);
    const layer5Ref = useRef(null);
    const layer6Ref = useRef(null);
    const layer7Ref = useRef(null);
    const slidesRef = useRef(null);
    const callToRef = useRef(null);

    useEffect(() => {
        //for mouse hovering parallax
        const scene = document.getElementById('scene');
        const parallax = new Parallax(scene);

        const onLoad = () => {
            //for animation on page refresh
            TweenMax.from(logoRef.current, 1, {
                opacity: 0,
                x: -20,
                ease: Expo.easeInOut
            })

            TweenMax.staggerFrom(listRef.current.childNodes, 1, {
                opacity: 0,
                x: -20,
                ease: Expo.easeInOut
            }, 0.08)

            TweenMax.from(waffleRef.current, 1, {
                delay: 0.25,
                opacity: 0,
                y: -800,
                ease: Expo.easeInOut
            })

            TweenMax.from(animeRef.current, 1, {
                delay: 2,
                opacity: 0,
                y: -400,
                ease: Expo.easeInOut
            })

            TweenMax.from(layer1Ref.current, 2, {
                delay: 0.25,
                opacity: 0,
                y: -800,
                ease: Expo.easeInOut
            })

            TweenMax.from(layer2Ref.current, 2, {
                delay: 0.35,
                opacity: 0,
                y: -800,
                ease: Expo.easeInOut
            })

            TweenMax.from(layer3Ref.current, 2, {
                delay: 0.45,
                opacity: 0,
                y: -800,
                ease: Expo.easeInOut
            })

            TweenMax.from(layer4Ref.current, 2, {
                delay: 0.50,
                opacity: 0,
                y: -800,
                ease: Expo.easeInOut
            })

            TweenMax.from(layer5Ref.current, 2, {
                delay: 0.65,
                opacity: 0,
                y: -800,
                ease: Expo.easeInOut
            })

            TweenMax.from(layer6Ref.current, 2, {
                delay: 0.75,
                opacity: 0,
                y: -800,
                ease: Expo.easeInOut
            })

            TweenMax.from(layer7Ref.current, 2, {
                delay: 0.5,
                opacity: 0,
                y: -800,
                ease: Expo.easeInOut
            })

            TweenMax.from(titleRef.current, 1, {
                delay: 1.5,
                opacity: 0,
                y: 20,
                ease: Expo.easeInOut
            })

            TweenMax.from(subtitleRef.current, 1, {
                delay: 1.3,
                opacity: 0,
                y: 20,
                ease: Expo.easeInOut
            })

            TweenMax.staggerFrom(callToRef.current, 1, {
                delay: 1.5,
                opacity: 0,
                y: 20,
                ease: Expo.easeInOut
            })

            TweenMax.from(slidesRef.current.childNodes, 1, {
                delay: 1.3,
                opacity: 0,
                y: 20,
                ease: Expo.easeInOut
            })
        };

        window.addEventListener("load", onLoad);
        
        return () => {
            window.removeEventListener("load", onLoad);
        };
    }, [])

    const handleReload = () => {
      window.location.reload();
    };
    
    return (
        <>
            <main id="main" className="main">
                <header className="header" id="header">
                    <div className="container">
                    <div className="header__wrap">
                        <img src={logo} alt="logo" width="200" height="auto" onClick={handleReload} ref={logoRef}/>
                        <ul ref={listRef}>
                            <li>
                                <button className="main-btn"><a href="https://www.facebook.com/profile.php?id=61573893096320" target="_blank" rel="noreferrer">Visit Us</a></button>
                            </li>
                        </ul>
                    </div>
                    </div>
                </header>

                <section className="hero">
                    <div className="hero__text">
                        <h1 className="title" ref={titleRef}>CHOCO-ALERT!</h1>
                        <div className="hero__text__callTo">
                            <p ref={subtitleRef}>Awwbhaynagars first dedicated waffle spot.</p>
                        </div>
                    </div>
                    <div className="hero__can">
                        <img src={waffle} alt="waffle" width="1074" height="716" ref={waffleRef}/>
                    </div>
                    <div className="hero__anime" ref={animeRef}>
                        <div className="hero__anime__wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="33.41999816894531 107.08999633789062 932.5800170898438 786.0001220703125" preserveAspectRatio="xMidYMid meet" role="img">
                                <defs></defs>
                                <polygon className="cls-3" points="496.86 744.52 496.86 893.09 525.95 893.09 496.86 744.52"></polygon>
                                <polygon className="cls-1" points="730.39 832.05 759.07 805.45 656.62 704.27 730.39 832.05"></polygon>
                                <polygon className="cls-2" points="133.33 155.17 94.47 196.12 223.59 264.1 133.33 155.17"></polygon>
                                <polygon className="cls-4" points="919.88 211.05 902.11 191.19 777.78 262.98 919.88 211.05"></polygon>
                                <polygon className="cls-1" points="931.01 429.65 966 437.52 966 423.96 931.01 429.65"></polygon>
                                <polygon className="cls-2" points="870.62 637.67 893.06 671.46 904.95 657.49 870.62 637.67"></polygon>
                                <polygon className="cls-3" points="515.4 107.09 496.86 107.1 496.86 190.81 496.86 190.81 515.4 107.09"></polygon>
                                <polygon className="cls-1" points="364.08 149.29 337.87 152.18 378.69 222.88 364.08 149.29"></polygon>
                                <polygon className="cls-1" points="634.04 160.74 615.88 160.74 587.9 209.19 634.04 160.74"></polygon>
                                <polygon className="cls-1" points="33.42 400.5 33.42 429.65 131.21 423.96 33.42 400.5"></polygon>
                                <polygon className="cls-4" points="83.22 646.24 97.31 662.41 152.41 624.03 83.22 646.24"></polygon>
                                <polygon className="cls-1" points="264.1 829.2 287.81 832.05 322.25 728.48 264.1 829.2"></polygon>
                            </svg>
                        </div>
                    </div>
                    <div className="hero__fruits">
                        <ul id="scene">
                            <li className="layer" data-depth="-.1">
                                <img src={layer1} className="layer1" alt="layer1" width="80" height="auto" ref={layer1Ref}/>
                            </li>
                            <li className="layer" data-depth="-.3">
                                <img src={layer2} className="layer2" alt="layer2" width="50" height="auto" ref={layer2Ref}/>
                            </li>
                            <li className="layer" data-depth="-0.75">
                                <img src={layer3} className="layer3" alt="layer3" width="130" height="auto" ref={layer3Ref}/>
                            </li>
                            <li className="layer" data-depth=".1"> 
                                <img src={layer4} className="layer4" alt="layer4" width="100" height="auto" ref={layer4Ref}/>
                            </li>
                            <li className="layer" data-depth=".3">
                                <img src={layer5} className="layer5" alt="layer5" width="120" height="auto" ref={layer5Ref}/>
                            </li>
                            <li className="layer" data-depth="-0.25">
                                <img src={layer6} className="layer6" alt="layer6" width="115" height="auto" ref={layer6Ref}/>
                            </li>
                            <li className="layer" data-depth="0.2">
                                <img src={layer7} className="layer7" alt="layer7" width="80" height="auto" ref={layer7Ref}/>
                            </li>
                        </ul>
                    </div>
                    <div className="hero__sides" ref={slidesRef}>
                        <span className="hero__sides__left">AWW-SOME!</span>
                        <span className="hero__sides__right">AWW-MAZING!</span>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Hero;