
import { useState } from 'react'
const CreateGame = () => {
    const directionsText = "1. Enter your categories in the boxes from easiest to hardest (yellow to purple) and click the submit button\n2. Fill out each word box that appears underneath each category with the words for that category\n3. Click submit!";
    const [yellowCategory, setYellowCategory] = useState('')
    const [greenCategory, setGreenCategory] = useState('')
    const [blueCategory, setBlueCategory] = useState('')
    const [purpleCategory, setPurpleCategory] = useState('')

    return (
        <div className="Directions">
            <h2 className="directions-title">Directions</h2>
            <pre className="directions">{directionsText} </pre>
            <div className="input-container">
                <div className="input-group">
                    <label categoryName="yellowCategory">Yellow Category</label>
                    <input className='yellow-box'
                        type="text"
                        id="yellowCategory"
                        onChange={(e) => setYellowCategory(e.target.value)}
                        value={yellowCategory}
                    />
                </div>
                <div className="input-group">
                    <label categoryName="greenCategory">Green Category</label>
                    <input className='green-box'
                        type="text"
                        id="greenCategory"
                        onChange={(e) => setGreenCategory(e.target.value)}
                        value={greenCategory}
                    />
                </div>
                <div className="input-group">
                    <label categoryName="blueCategory">Blue Category</label>
                    <input className='blue-box'
                        type="text"
                        id="blueCategory"
                        onChange={(e) => setBlueCategory(e.target.value)}
                        value={blueCategory}
                    />
                </div>
                <div className="input-group">
                    <label categoryName="purpleCategory">Purple Category</label>
                    <input className='purple-box'
                        type="text"
                        id="purpleCategory"
                        onChange={(e) => setPurpleCategory(e.target.value)}
                        value={purpleCategory}
                    />
                </div>
            </div>
        </div>


    )
}

export default CreateGame