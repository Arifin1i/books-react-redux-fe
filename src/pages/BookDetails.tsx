/* eslint-disable @typescript-eslint/no-unused-vars */
import { useParams } from "react-router-dom";
// import { useSingleBookQuery } from "../redux/api/apiSlice";
import {
  useDeleteSingleBookMutation,
  useSingleBookQuery,
} from "../redux/features/book/bookApi";
import BookReview from "./BookReview";

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
export default function BookDetails() {
  const { id } = useParams();
  const { data, isLoading, error } = useSingleBookQuery(id);
 
  // const [handleDelete, {isSuccess}] = useDeleteSingleBookMutation(data?.id);
  const [handleDelete, response] = useDeleteSingleBookMutation(data?._id);
  
  return (
    <div>
      <div className="bg-gray-100 min-h-screen py-8">
        {/* {data?.id} */}
        <div className="">
          <button
            // onClick={()=> handleDelete(book.id)}
            className="btn btn-outline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </button>
          <button
            onClick={() => handleDelete(data?._id)}
            className="btn btn-outline bl-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <img
                src="https://m.media-amazon.com/images/I/913zwg7PzyL._AC_SX522_.jpg"
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-2/3 px-4">
              <h1 className="text-3xl font-bold mb-4">
                {data?.id}
                {data?.title}
              </h1>
              <div className="mb-4">
                <span className="font-bold">Author:</span> {data?.author}
              </div>
              <div className="mb-4">
                <span className="font-bold">Genre:</span> {data?.genre}
              </div>

              <div className="mb-4">
                <span className="font-bold">Publication Date:</span>{" "}
                {data?.published}
              </div>
            </div>
          </div>
          <hr />
          <BookReview id={id!} />
        </div>
      </div>

      <div></div>
    </div>
  );
}

// function useSingleBooksQuery(undefined: undefined): {
//   data: any;
//   isLoading: any;
//   error: any;
// } {
//   throw new Error("Function not implemented.");
// }
