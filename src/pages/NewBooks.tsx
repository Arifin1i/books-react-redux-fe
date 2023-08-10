import { ChangeEvent, FormEvent, useState } from "react";
import { useCreateBookMutation } from "../redux/features/book/bookApi";

export default function NewBooks() {
  const [inputValue, setInputValue] = useState({
    title: "",
    author: "",
    genre: "",
    published: "",
  });

  const [createBook, data] = useCreateBookMutation();

  console.log(data);

  const handleNewBook = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await createBook(inputValue);
    setInputValue('');
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue({ ...inputValue, [event.target.name]: event.target.value });
  };

  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Add a Book</h1>
        <form onSubmit={handleNewBook}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={handleChange}
              value={inputValue.title}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md"
            ></input>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              onChange={handleChange}
              value={inputValue.author}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md"
            ></input>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Genre
            </label>
            <input
              type="text"
              id="genre"
              name="genre"
              onChange={handleChange}
              value={inputValue.genre}
              className="
               input-bordered w-full max-w-xs
                mt-1 focus:ring-indigo-500 focus:border-indigo-500 h-10 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            ></input>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Published Year
            </label>
            <input
              type="text"
              id="published"
              name="published"
              onChange={handleChange}
              value={inputValue.published}
              className="mt-1 h-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            ></input>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-200"
            >
              Add Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
