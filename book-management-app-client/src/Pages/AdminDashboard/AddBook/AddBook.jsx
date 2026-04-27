import React from 'react'

const AddBook = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Update Product</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Book Title</label>
          <input type="text" name="Book Title" className="input" placeholder="Book Title" />

          <label className="label">Book Price</label>
          <input type="text" name="Book Price" className="input" placeholder="Book Price" />

          <label className="label">Book Details</label>
          <input type="text" name="Book Details" className="input" placeholder="Book Details" />

          <label className="label">Author</label>
          <input type="text" name="Book Details" className="input" placeholder="Author" />

          <label className="label">Category</label>
          <input type="text" className="input" placeholder="Category" />

          <button className="btn btn-neutral mt-4">Update Book</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default AddBook
