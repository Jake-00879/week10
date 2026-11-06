import React from 'react'
import Button from "./Button.jsx";

const Hero = () => {
    return (
        <div className={"min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4"}>
            <div className={"flex flex-col gap-4 text-lg"}>
                <p>It's time to get</p>
                <h1 className={"uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl"}>Swole<span className={"text-blue-400"}>normous</span></h1>
            </div>
            <div className={"text-sm md:text-base font-light text-left"}>
                <span className={`text-blue-400 hover:underline cursor-pointer tooltip`}>Warning!<span className={"text-sm tooltiptext"}>Did you think this was a link?</span></span> Side effects of using this app may include:<br/>
                <br/>
                <ul>
                    <li>1. Unexpected muscle growth.</li>
                    <li>2. Shirts mysteriously becoming too tight.</li>
                    <li>3. Random strangers asking you to open jars.</li>
                    <li>4. The urge to flex in every reflective surface.</li>
                </ul>
                <br/>Use at your own risk! We are <span className={"text-blue-400 hover:underline cursor-pointer tooltip"}>NOT<span className={"text-sm tooltiptext"}>Tricked again.</span></span> responsible for you becoming a walking tank, intimidating gym bro, or accidentally crushing your phone with your newfound grip strength. Proceed with gains responsibly!
            </div>

            <Button text={"Accept & Begin"} transfer={'sectionOne'}/>
        </div>
    )
}
export default Hero
