import React from 'react'

const Mealcard = ({detail}) => {
    console.log(detail);
  return (
    <div className='meals'>
        {!detail ? "Data not found" : detail.map((curItem)=>{
            return(
                <>
               <div className='cardContainer'>
                    <div className='card'>
                        <img src={curItem.strMealThumb}/>
                        <h3>{curItem.strMeal}</h3>
                        {/* <p>{curItem.strTags}</p> */}
                    <button className='recipe'>recipe</button>
                    </div>

               </div>
               
                </>
            )
        })
        }
       
    </div>
  )
}

export default Mealcard;
