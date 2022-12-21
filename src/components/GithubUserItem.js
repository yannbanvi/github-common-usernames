import React from 'react'
import { Link } from 'react-router-dom'

function GithubUserItem({user, goToGithubLink}) {
  return (
   <>
    <div
              
              className="d-flex align-items-center justify-content-between dotted-border mb-3"
            >
              <div className="d-flex align-items-center">
                <img
                  src={user?.avatar_url}
                  className="avatar me-3"
                  alt={`${user?.login}`}
                />
                <h6>{user?.login}</h6>
              </div>
              <div>
                <a

                target={"_blank"}
                  className="btn btn-secondary"
                  href={goToGithubLink(user?.login)} rel="noreferrer"
                >
                  Go to repos
                </a>
              </div>
            </div>
   </>
  )
}

export default GithubUserItem