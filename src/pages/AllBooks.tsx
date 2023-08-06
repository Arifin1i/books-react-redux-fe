/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Link } from "react-router-dom";

export default function AllBooks({ book }) {    
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const {_id, title, author, genre, published } = book;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body justify-start">
          <h2 className="card-title justify-start">{title}!</h2>
          <p className="text-start">by {author}</p>

          <h1 className="text-start">genre : {genre}</h1>
          <h1 className="text-start">published : {published} </h1>
          <div className="card-actions justify-end pt-5 pb-0">
            <button className="btn btn-primary">
              <Link to={ `/books/${_id}` }>
                Details
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
