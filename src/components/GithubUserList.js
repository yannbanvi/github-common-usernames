import React from 'react'
import EmptyList from './EmptyList'
import GithubUserItem from './GithubUserItem'

function GithubUserList({commonUsers, goToGithubLink}) {
  return (
    <>
        {commonUsers.length > 0 ? commonUsers.map((user) => (
            <GithubUserItem key={user.id} user={user} goToGithubLink={goToGithubLink} />
            )) : <EmptyList title="No users found. Please make sure you entered the correct usernames."/>}
    </>
  )
}

export default GithubUserList