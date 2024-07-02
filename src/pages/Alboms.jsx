// Alboms.js
import React, { useEffect, useContext } from "react";
import Header from "../components/Header";
import CardList from "../components/CardList";
import { useGetAlbomsQuery, useGetUsersQuery } from "../app/services/PostApi";
import { Context } from "../context";

const AlbomHeader = {
  title: "Alboms",
  isAdd: true,
  isSearch: true,
  isSelectUser: true,
  isSwitch: true,
};

const Alboms = () => {
  const { state, dispatch } = useContext(Context);
  const { data: alboms } = useGetAlbomsQuery();
  const { data: users } = useGetUsersQuery();

  useEffect(() => {
    if (alboms) {
      dispatch({ type: "SET_DATA", payload: alboms });
    }
    if (users) {
      dispatch({ type: "SET_USERS", payload: users });
    }
  }, [alboms, users, dispatch]);

  return (
    <div className="container">
      <Header Header={AlbomHeader} />
      <CardList
        data={state.filteredData.length > 0 ? state.filteredData : state.data}
      />
    </div>
  );
};

export default Alboms;
