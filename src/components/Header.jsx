// Header.js
import React, { useContext } from "react";
import { Input, Select, Switch } from "antd";
import { Context } from "../context";
import ModalForm from "./UI/Modal";

const { Search } = Input;

const Header = ({ Header }) => {
  const { state, dispatch } = useContext(Context);

  const onSearch = (event) => {
    const value = event.target.value;
    const filtered = state.data.filter((item) => item.title.includes(value));
    dispatch({ type: "SET_FILTERED_DATA", payload: filtered });
  };

  return (
    <div className="container mt-3 flex items-center space-x-8">
      <h1 className="text-3xl font-bold w-24">{Header.title}</h1>
      <ModalForm btnText="Add new post" />

      {Header.isSearch && (
        <Search
          onChange={onSearch}
          placeholder="input search text"
          style={{ width: 200 }}
        />
      )}

      <div className="flex items-center space-x-2">
        {Header.isSelectUser && state.users && (
          <Select
            mode="multiple"
            allowClear
            style={{ width: "210px" }}
            placeholder="Select users"
            options={state.users.map((user) => ({
              label: user.name,
              value: user.id,
            }))}
          />
        )}
        {Header.isSwitch && (
          <Switch checkedChildren="Selected" unCheckedChildren="All" />
        )}
      </div>
    </div>
  );
};

export default Header;
