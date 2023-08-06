/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
import AllBooks from "./AllBooks";
import { useGetBooksQuery } from "../redux/features/book/bookApi";
// import { useGetBooksQuery } from "../redux/api/apiSlice";
import { IBook } from "../types/globalTypes";

export default function Books() {
  const { data, isLoading, error } = useGetBooksQuery(undefined);
  console.log(data)


 


  return (
    <div>
      <h1>
        All Books which have been finished and the number is {data?.length}
      </h1>
      <h2></h2>
      <div className="grid grid-cols-3 container center gap-4 my-6 mx-6">
        {data?.map((book:IBook) => (
          <AllBooks
             key={book._id}
            book={book}
          ></AllBooks>
          
        ))}
      </div>
    </div>
  )
    
 
}
