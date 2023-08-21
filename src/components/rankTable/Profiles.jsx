import React from 'react'

export default function profiles({ Leaderboard }) {
  return (
        <div id="profile">
            {Item(Leaderboard)}
        </div>
  )
}

function Item(data){
    return (

        <>
            {
                data.map((value, index) => (
                    <div className="flex" key={index}>
                        <div className="item txtColor2">
                            <img src={value.img} alt="" />
            
                            <div className="info">
                                <h3 className='name txtColor'>{value.name}</h3>    
                                <span>{value.location}</span>
                            </div>                
                        </div>
                        <div className="item txtColor">
                            <span>{value.level}</span>
                        </div>
                    </div>
                    )
                )
            }
        </>

        
    )
}
