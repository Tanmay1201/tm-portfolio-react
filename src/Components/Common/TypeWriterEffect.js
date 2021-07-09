import { useEffect, useRef, useState } from "react";
const Typewriter = props => {
    const  timerRef = useRef(null);
    var i = 0;
    var speed = 35;
    useEffect(() => {
        console.log('Useeffect called')
        console.log(props.string)
        clearTimeout(timerRef.current);
        document.getElementById("demo").innerHTML = '';
        i=0;
        typeWriter();
    }, [props.string])

    function typeWriter() {
        if(props.string !== null && document.getElementById("demo") !== null) 
        {
            if(props.onCompleted != null)
            {
                if(i === props.string.length)
                {
                    setTimeout(function(){ props.onCompleted(true) }, 3000);
                    
                }
            }
            
    
            if (i < props.string.length) {
            
              if(props.string.charAt(i) === '<' && props.string.charAt(i+1) === 'b' && props.string.charAt(i+2) === 'r')
              {
                  i += 4;
                  document.getElementById("demo").innerHTML += '<br>'
              }
              document.getElementById("demo").innerHTML += props.string.charAt(i);
              i++;
              timerRef.current = setTimeout(typeWriter, speed);
            }
        }
        
      }
    return (
        <>
            <p id="demo" style={{fontSize: "20px", lineHeight:"40px", wordSpacing:"5px", fontFamily:"fangsong"}}></p>
        </>
    )
}

export default Typewriter