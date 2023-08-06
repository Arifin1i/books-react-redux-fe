/* eslint-disable @typescript-eslint/no-unused-vars */
import { useParams } from "react-router-dom";
// import { useSingleBookQuery } from "../redux/api/apiSlice";
import { useSingleBookQuery } from "../redux/features/book/bookApi";
import BookReview from "./BookReview";

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
export default function BookDetails() {
  const { id } = useParams();
  const { data, isLoading, error } = useSingleBookQuery(id);
  return (
    <div>
      <div className="bg-gray-100 min-h-screen py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <img
                src="https://m.media-amazon.com/images/I/913zwg7PzyL._AC_SX522_.jpg"
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-2/3 px-4">
              <h1 className="text-3xl font-bold mb-4">{data?.title}</h1>
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
          <hr  />
          <BookReview  id={id!} />
        </div>
      </div>

      <div>
       
      </div>
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
