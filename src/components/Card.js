export default function Card({book}){

  return(
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">
          {book.description}
        </p>
      </div>
    </div>
  )
}