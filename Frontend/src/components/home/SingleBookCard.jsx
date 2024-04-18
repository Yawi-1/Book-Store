import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import {PiBookOpenTextLight} from 'react-icons/pi'
import {BiUserCircle} from 'react-icons/bi'
const SingleBookCard = ({book}) => {
    return (
      
        <div className='relative border border-gray-500 rounded-md p-4 mb-4 md:w-1/3 lg:w-1/4'>
        <h3 className='text-sm text-gray-500'>Id: {book._id}</h3>
        <span className='absolute top-0 right-0 px-3 py-1 bg-red-300 rounded-md'>{book.publishYear}</span>
        <div className='flex items-center gap-4 justify-center md:justify-start'>
            <PiBookOpenTextLight className='text-4xl text-red-500' />
            <h1 className='text-xl font-semibold'>{book.title}</h1>
        </div>
        <div className='flex items-center gap-4 justify-center md:justify-start'>
            <BiUserCircle className='text-4xl text-gray-500' />
            <h1 className='text-xl font-semibold'>{book.author}</h1>
        </div>
                <div className='flex gap-x-4 justify-center'>
                <Link to={`books/details/${book._id}`}>
                      <BsInfoCircle className="text-3xl text-green-800" />
                    </Link>
                    <Link to={`books/edit/${book._id}`}>
                      <AiOutlineEdit className="text-3xl text-yellow-600" />
                    </Link>
                    <Link to={`books/delete/${book._id}`}>
                      <MdOutlineDelete className="text-3xl text-red-600" />
                    </Link>
                </div>
            </div>
    )
}

export default SingleBookCard
