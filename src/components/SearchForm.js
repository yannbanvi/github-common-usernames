import React from 'react'

function SearchForm({handleOnChange, handleSubmit, usernames}) {
  return (
    <>
        <form onSubmit={handleSubmit}>
            <label>Username #1</label>
            <input
              type="text"
              name="username_one"
              value={usernames.username_one || ""}
              onChange={handleOnChange}
              className="form-control mb-3"
            />

            <label>Username #2</label>
            <input
              type="text"
              name="username_two"
              value={usernames.username_two || ""}
              onChange={handleOnChange}
              className="form-control mb-3"
            />
            <button
              disabled={!(usernames.username_one && usernames.username_two)}
              className="btn btn-primary w-100"
              type="submit"
            >
              Search
            </button>
          </form>
    </>
  )
}

export default SearchForm