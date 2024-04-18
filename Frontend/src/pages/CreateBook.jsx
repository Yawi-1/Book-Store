import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { useSnackbar } from "notistack";
const CreateBook = () => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar();
  const handleSaveBook = () => {
    if(!title || !author || ! publishYear){
      enqueueSnackbar('Enter the required fields !',{variant:'info'})
      return;
    }
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
    .post("http://localhost:5555/books", data)
    .then(() => {
      setLoading(false);
      enqueueSnackbar('Book successfully created !',{variant:'success'})
        navigate("/"); // Redirect to home page after saving the book
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });

      setTitle('');
      setAuthor('');
      setPublishYear(''); 
  };

  return (
    <div className=" p-4">
      <BackButton />
      <h1 className="text-3xl text-center my-4">Create A New Book</h1>

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
        <button className="p-2 m-8 bg-green-300 rounded-md w-32 text-black font-semibold " onClick={handleSaveBook}>Save</button>
        <Link to='/' className="p-2 bg-sky-300 m-8 rounded-md w-32 text-black font-semibold" >
        Show Book List
      </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateBook;
