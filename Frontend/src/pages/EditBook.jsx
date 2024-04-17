import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'
import {useParams,useNavigate} from 'react-router-dom'

const EditBook = () => {
    const [loading,setLoading] = useState(false);
    const [title,setTitle] = useState('')
    const [author,setAuthor] = useState('')
    const [publishYear,setPublishYear] = useState('')
    const {id} = useParams();
    const navigate = useNavigate();
    
    useEffect(()=>{
      setLoading(true);
      axios.get(`http://localhost:5555/books/${id}`)
      .then((res)=>{
        setTitle(res.data.title)
        setAuthor(res.data.author)
        setPublishYear(res.data.publishYear)
        setLoading(false)
      })
      .catch((err)=>{
        setLoading(false)
        alert(err.message)
      })
    },[])

    const handleEditBook =()=>{
        const data = {
            title,
            author,
            publishYear
        }
      setLoading(true);
      axios.put(`http://localhost:5555/books/${id}`,data)
      .then(()=>{
        setLoading(false);
        navigate('/');
      })
      .catch((err)=>{
        setLoading(false);
        alert(err.message);
      })

    }

    return (
        <div className=" p-4">
      <BackButton />
      <h1 className="text-3xl text-center my-4">Edit Book</h1>

      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] px-4 mx-auto">
        <div className="my-4">
          <label htmlFor="" className="text-xl mr-4 text-gray-500">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full rounded-md "
            required
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full rounded-md "
            required
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full rounded-md "
            required
          />
        </div>
        <div className="flex  items-start justify-between">
        <button className="p-2 m-8 bg-green-300 rounded-md w-32 text-black font-semibold " onClick={handleEditBook}>Save</button>
        {/* <Link to='/' className="p-2 bg-sky-300 m-8 rounded-md w-32 text-black font-semibold" >
        Show Book List
      </Link> */}
        </div>
      </div>
    </div>
    )
}

export default EditBook
