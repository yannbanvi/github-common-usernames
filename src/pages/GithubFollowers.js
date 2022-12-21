import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import "./GithubFollowers.css";
import isEqual from "lodash/isEqual";
import intersectionWith from "lodash/intersectionWith";
import GithubUserList from "../components/GithubUserList";
import SearchForm from "../components/SearchForm";

function GithubFollowers() {
  const [usernames, setUserNames] = useState({});
  const [commonUsers, setCommonUsers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response_first = await fetch(
      `https://api.github.com/users/${usernames.username_one}/followers?per_page=500`
    );
    const response_second = await fetch(
      `https://api.github.com/users/${usernames.username_two}/followers?per_page=500`
    );

    const result_one = await response_first.json();
    const result_two = await response_second.json();

    const usersFound = findCommonUsers(result_one, result_two);
    setCommonUsers(usersFound);
  };

  const findCommonUsers = (arr1, arr2) => {
    return intersectionWith(arr1, arr2, isEqual);
  };

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserNames((usrnames) => ({ ...usrnames, [name]: value }));
  };

  const goToGithubLink = (username) => {
    return "https://github.com/" + username;
  };
  return (
    <>
      <PageHeader title="Github Followers" />

      <div className="d-flex">
        <div style={{ width: "350px" }}>
          <SearchForm
            handleOnChange={handleOnChange}
            handleSubmit={handleSubmit}
            usernames={usernames}
          />
        </div>

        <div className="right-pane w-100">
          <GithubUserList
            commonUsers={commonUsers}
            goToGithubLink={goToGithubLink}
          />
        </div>
      </div>
    </>
  );
}

export default GithubFollowers;
