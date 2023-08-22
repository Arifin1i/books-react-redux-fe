import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSingleBookQuery, useUpdateBookMutation } from "../redux/features/book/bookApi";

const BookEditForm = () => {
  const { id } = useParams();
  console.log(id);
  const { data, isLoading, isError } = useSingleBookQuery(id);
  console.log(data);

  const dispatch = useDispatch();
  // const { data: bookToUpdate } = useSingleBookQuery(id); // Replace with your RTK Query's getBook query hook

  // console.log(data);
  const [title, setTitle] = useState(bookToUpdate.title);
  const [author, setAuthor] = useState(bookToUpdate.author);
  const [genre, setGenre] = useState(bookToUpdate.genre);
  const [published, setPublished] = useState(bookToUpdate.published);

  const [updateBook, { isLoading:Loading }] = useUpdateBookMutation();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const updatedBook = {
      id: id,
      title : setTitle,
      author : setAuthor,
      genre: setGenre,
      published: setPublished,
    };




    try {
      const response = await dispatch(updateBook(updatedBook)).unwrap();
      toast.success("Book updated successfully");
      // You can also redirect the user or perform other actions after a successful update
    } catch (error) {
      toast.error("Error updating book");
    }
  };

  return (
    <div>
      <h2>Edit Book</h2>
      <form 
      onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <label>Genre</label>
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <div>
          <label>Published Year</label>
          <input
            type="number"
            value={published}
            onChange={(e) => setPublished(e.target.value)}
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Updating..." : "Update Book"}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default BookEditForm;
