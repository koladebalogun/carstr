import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import bmw from '../image/bmw.jpg';
import bmw2 from '../image/bmw.jpg';


const Banner = () => {
    const bannerTl = gsap.timeline()

    useEffect(()=>{
        gsap.to('body', 0, {css: {visibility: "visible"}});

        bannerTl.from(['#banner-Bg-Add, #banner-Bg-Addition, #banner-bg'],{
            duration:1.2,
            width:0,
            skewX:4,
            ease:'power3.inOut',
            stagger:{
                amount:0.2
            }
        })
        .from('.line, span',{
            delay:-0.4,
            opacity:0,
            y: 80,
            duration: .8,
            ease: "Power3.out",
            stagger:{
              amount:0.2
            }
        })

        .from('.overlay, img',{
            delay:-0.4,
            opacity:0,
            y: -80,
            duration: .8,
            ease: "Power3.out",
            stagger:{
              amount:0.7
            }
        })

        .to('.link',{
            delay:-0.4,
            opacity:1,
            x: 80,
            duration: .8,
            ease: "Power3.out",
            stagger:{
              amount:0.7
            }
        })

        .to('.Link1, .Link2',{
            delay:-0.4,
            opacity:1,
            y: -30,
            duration: .8,
            ease: "Power3.out",
        })
    })
    return (
        <div className="container">
            <div className="bannerBgAdd" id='banner-Bg-Add'></div>
            <div className="bannerAdditionBg" id="banner-Bg-Addition"></div>
            <div className="bannerBg" id="banner-bg"></div>
            <div className="banner-content">
                <div className="banner-inner" id="bannerInner">
                    <div className="banner-inner-content">
                        <h1>
                            <div className="line">
                                <span>NOTHING</span>
                            </div>
                            <div className="line">
                                <span>BEATS</span>
                            </div>
                            <div className="line">
                                <span>A REALLY</span>
                            </div>
                            <div className="line">
                                <span>COOL CAR</span>
                            </div>
                        </h1>
                        <div className="overlay"></div>
                    </div>
                </div>
                <div className="link">
                    <h3> VISIT OUR GARAGES </h3>
                </div>
                <div className="Link1">
                    <Link to='/bmwm1'>Check out the BMW M1</Link>
                </div>
                <div className="Link2">
                    <Link to='/bmwm2'>Check out the BMW M2</Link>
                </div>
                <div className="banner-image">
                    <img src={bmw} alt="" />
                </div>
                <div className="banner-img">
                    <img src={bmw2} alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default Banner;