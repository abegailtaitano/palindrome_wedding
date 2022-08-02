import { useState } from "react";

const WeddingMonth = ()=>{
    const [clicked, setClicked] = useState(false)
    const [month, setMonth] = useState()

    const display = (event) => {
       setMonth(event.target.name)
       setClicked(true)
    }

    const showWeddingDate = () => {
       return (
        <section>
            <h2>PALINDROME WEDDING DATES</h2>
            {displayDate()}
        </section>
        )
    }
    const splitYearNumber = (year) => year.toString().split("")

    const generatePalindrome = () => { 
        
        let today = new Date()
        let year = today.getFullYear()
        let yearsList = []
        let possibleYears = []
        let palindromeDates = []
        let i = 0

        while(i < 150) {
            year += 1 
            i++;
            yearsList.push(year)
        }
        if(month[0] == 0) {
            for(let i = 0; i < yearsList.length; i++){
               let yearNumbers = splitYearNumber(yearsList[i])
                if(yearNumbers[3].includes(month[1])){
                    possibleYears.push(yearsList[i]);
                }
            }  
            for(let i = 0; i < possibleYears.length; i++){
                let yearNums = splitYearNumber(possibleYears[i])
                let day = yearNums[2] + "" + yearNums[1]
                if(month[1] == 2 && day <= 28){
                    palindromeDates.push(month[1] + "/" +  day + "/" + possibleYears[i]);
                }else if(month[1] != 2 && day <= 31){
                    palindromeDates.push(month[1] + "/" +  day + "/" + possibleYears[i]);
                } 
            }
        }
        else if(month[0] == 1) {
            for(let i = 0; i < yearsList.length; i++){
                let winterSeason = splitYearNumber(yearsList[i])
                if(winterSeason[3] == month[0] && winterSeason[2] == month[1]){
                    possibleYears.push(yearsList[i]);
                }
            } 
            for(let i = 0; i < possibleYears.length; i++){

                let winterYears = splitYearNumber(possibleYears[i])
                let matchesMonth = winterYears[2] + "" + winterYears[3]
                let j = 0
                while( j < 31){
                    if(j == 11 || j == 22){
                        palindromeDates.push(month + "/" + j + "/" + matchesMonth);
                    }
                    j++
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
                Choose a month to find your Palindrome date:
                <br></br>
                <input type="submit" onClick={display} name="01" value="January" class="btn" />
                <input type="submit" onClick={display} name="02" value="Feburary" class="btn"/>
                <input type="submit" onClick={display} name="03" value="March" class="btn"/>
                <input type="submit" onClick={display} name="04" value="April" class="btn"/>
                <input type="submit" onClick={display} name="05" value="May" class="btn"/>
                <input type="submit" onClick={display} name="06" value="June" class="btn"/>
                <input type="submit" onClick={display} name="07" value="July" class="btn"/>
                <input type="submit" onClick={display} name="08" value="August" class="btn"/>
                <input type="submit" onClick={display} name="09" value="September" class="btn"/>
                <input type="submit" onClick={display} name="10" value="October" class="btn"/>
                <input type="submit" onClick={display} name="11" value="November" class="btn"/>
                <input type="submit" onClick={display} name="12" value="December" class="btn"/> 
            </section>
            {clicked && showWeddingDate()}
        </div>
    )
}

export default WeddingMonth;