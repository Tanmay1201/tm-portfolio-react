import { useEffect, useRef, useState } from "react";
const Typewriter = props => {
    const  timerRef = useRef(null);
    const [tempString, settempString] = useState(props.string)
    var i = 0;
    var speed = 35;
    useEffect(() => {
        console.log('Useeffect called')
        console.log(props.string)
        console.log(timerRef)
        clearTimeout(timerRef.current);
        console.log(timerRef)
        document.getElementById("demo").innerHTML = '';
        i=0;
        settempString(props.string)
        typeWriter();
    }, [props.string])

    console.log(tempString)
    function typeWriter() {
        if(tempString !== null && document.getElementById("demo") !== null) 
        {
            if(props.onCompleted != null)
            {
                if(i === tempString.length)
                {
                    setTimeout(function(){ props.onCompleted(true) }, 3000);
                    
                }
            }
            
    
            if (i < tempString.length) {
            
              if(tempString.charAt(i) === '<' && tempString.charAt(i+1) === 'b' && tempString.charAt(i+2) === 'r')
              {
                  i += 4;
                  document.getElementById("demo").innerHTML += '<br>'
              }
              document.getElementById("demo").innerHTML += tempString.charAt(i);
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