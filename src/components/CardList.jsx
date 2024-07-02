import React, { useContext } from "react";
import CardItem from "./CardItem";
import { Context } from "../context";

const CardList = ({ data }) => {
  const { state } = useContext(Context);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 mx-auto">
      {data &&
        data.map((item) => (
          <CardItem key={item.id} item={item} users={state.users} />
        ))}
    </div>
  );
};

export default CardList;
