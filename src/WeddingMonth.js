import { useState } from "react";
const WeddingMonth = ()=>{
    const [clicked, setClicked] = useState(false)
    const [month, setMonth] = useState()
    // const [day, setDay] = useState()
    // const [year, setYear] = useState()

    const display = (event) => {
       setMonth(event.target.name)
       setClicked(true)
       
    }

    const showWeddingDate = () => {
       return (
        <section>
            <h2>Your Palindrome Wedding Date!!!!!!!!!!</h2>
            {displayDate()}
        </section>
        )
    }

    const generatePalindrome = () => { 
        
        let today = new Date()
        let year = today.getFullYear()
        let yearsList = []
        let possibleYears = []
        let palindromeDates = []
        let i = 0

        while(i < 15) {
            year += 1 
            i++;
            yearsList.push(year)
        }
        if(month[0] == 0) {
            for(let i = 0; i < yearsList.length; i++){
                let yearNumbers = yearsList[i].toString().split("")
                if(yearNumbers.includes(month[1])){
                    possibleYears.push(yearsList[i]);
                }
            } 
            for(let i = 0; i < possibleYears.length; i++){
                let yearNums = possibleYears[i].toString().split("")
                let day = yearNums[2] + "" + yearNums[1]
                if(day <= 31){
                    palindromeDates.push(month[1] + "/" +  day + "/" + possibleYears[i]);
                } 
            }
        }
        return palindromeDates;
    }
    const displayDate = () => {
        return (
        <ul>
            {generatePalindrome().map((date,i) =>  <li key={i}> {date}</li>)}
        </ul>
        )
    }

    return (
        <div>
            <section>
                Months:
                <br></br>
                <input type="submit" onClick={display} name="01" value="January"/>
                <input type="submit" onClick={display} name="02" value="Feburary"/>
                <input type="submit" onClick={display} name="03" value="March"/>
                <input type="submit" onClick={display} name="04" value="April"/>
                <input type="submit" onClick={display} name="05" value="May"/>
                <input type="submit" onClick={display} name="06" value="June"/>
                <input type="submit" onClick={display} name="07" value="July"/>
                <input type="submit" onClick={display} name="08" value="August"/>
                <input type="submit" onClick={display} name="09" value="September"/>
                <input type="submit" onClick={display} name="10" value="October"/>
                <input type="submit" onClick={display} name="11" value="November"/>
                <input type="submit" onClick={display} name="12" value="December"/> 
            </section>
            {clicked && showWeddingDate()}
        </div>
        
    )

}


export default WeddingMonth;