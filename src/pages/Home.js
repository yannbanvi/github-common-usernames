import React from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

function Home() {
  return (
    <>
        <PageHeader title="Home"/>

        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Welcome!</h1>
            <p className="col-md-8 fs-4">
              This web app accepts two GitHub usernames and displays a list of their common followers (ie, the people who follow both users).
            </p>
            <Link className="btn btn-primary btn-lg" to="/github-followers">Search for commom github followers</Link>
          </div>
        </div>
    </>
  )
}

export default Home