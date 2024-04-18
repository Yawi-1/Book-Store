import React from 'react'
import SingleBookCard from './SingleBookCard'
const BooksCard = ({books}) => {
    return (
        <div className='mx-auto flex flex-wrap justify-items-start gap-4 max-md:flex-col'> 
        {
            books.map((item)=>(
              <SingleBookCard key={item._id} book={item}/>
            ))
        }
         
         </div>
      
    )
}

export default BooksCard
