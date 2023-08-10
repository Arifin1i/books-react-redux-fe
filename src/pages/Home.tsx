import { Link } from "react-router-dom";
import Displaybooks from "./DisplayBook";
import { useGetLatestBooksQuery } from "../redux/features/book/bookApi";

export default function Home() {
  const { data, isLoading, error } = useGetLatestBooksQuery(undefined);
  //   console.log(data);
    // const newData =data.reverse()
    // console.log(newData);

  return (
    <div>
      <h1>Welcome to my book collection {data?.length}</h1>
      <div className=" gap-4 my-0 mx-0">
        <div className="grid grid-cols-3 gap-4 my-6 mx-6">
          {data && data?.map((book: IBook) => (
            <Displaybooks key={book._id} book={book}></Displaybooks>
          ))}
          <div className="flex justify-items-center content-center">
            <Link to={`/books`} className="btn rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
