import { useState } from "react";
import Circle from "./Circle";

function Main() {

    function handleMouseMove(e) {
        //console.log("mouseMove",e.clientX,e.clientY);// client is basically the current window position when mouse moves 

        const circle = document.querySelector(".circle");
        console.log("circle", circle);
        setTimeout(() => {
            circle.style.top = `${e.clientY}px`;
            circle.style.left = `${e.clientX}px`;
        }, 200)

    }

    return (
        <>

            <div className="main-container" onMouseMove={handleMouseMove}>Inside Mouse

                <div>
                    <Circle ></Circle>
                </div>
            </div>

        </>
    );
}
export default Main;
