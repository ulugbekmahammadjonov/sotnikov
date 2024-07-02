// Posts.js
import React, { useEffect, useContext } from "react";
import Header from "../components/Header";
import CardList from "../components/CardList";
import { useGetPostsQuery, useGetUsersQuery } from "../app/services/PostApi";
import { Context } from "../context";

const PostHeader = {
  title: "Posts",
  isAdd: true,
  isSearch: true,
  isSelectUser: true,
  isSwitch: true,
};

const Posts = () => {
  const { state, dispatch } = useContext(Context);
  const { data: posts } = useGetPostsQuery();
  const { data: users } = useGetUsersQuery();

  useEffect(() => {
    if (posts) {
      dispatch({ type: "SET_DATA", payload: posts });
    }
    if (users) {
      dispatch({ type: "SET_USERS", payload: users });
    }
  }, [posts, users, dispatch]);

  return (
    <div className="container">
      <Header Header={PostHeader} />
      <CardList
        data={state.filteredData.length > 0 ? state.filteredData : state.data}
      />
    </div>
  );
};

export default Posts;
