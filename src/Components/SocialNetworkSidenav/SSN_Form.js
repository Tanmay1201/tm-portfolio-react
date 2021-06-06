import {
    useHistory
  } from "react-router-dom";
import axios from 'axios'

const SSN_Form = () => {
    const [url, setUrl] = useState('')
    const [iconName, seticonName] = useState('')
    const [colorName, setcolorName] = useState('')

    const submitValues = () => {
        const data = {
            url: url,
            iconName: iconName,
            colorName: colorName
        }
        console.log(data)
        axios.post('http://localhost:5000/ssn', data)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
        history.push('/home')
    }

    return (
        <>  
            <form>
                        <input type='text' placeholder="Enter SSN Url" onChange={(e) => setUrl(e.target.value)} value={url}/>
                        <input type='text' placeholder="Enter SSN Icon Name" onChange={(e) => seticonName(e.target.value)} value={iconName}/>
                        <input type="text" placeholder="Enter Backgeround Color" onChange={(e) => setcolorName(e.target.value)} value={colorName} />
                        <button onClick={submitValues}>Submit</button>
                    </form>
        </>
    )
}

export default SSN_Form