import React from "react";
import {
  EditOutlined,
  DeleteOutlined,
  CommentOutlined,
  StarOutlined,
  StarFilled,
} from "@ant-design/icons";
import { Avatar, Card, Checkbox, Tooltip } from "antd";
const { Meta } = Card;
const CardItem = ({ item, users }) => {
  // const user = users.find((u) => u.id === item.userId);
  // const { name, username, email } = user;
  const random = Math.floor(Math.random() * users.length) + 1;
  return (
    <div className="flex justify-center">
      <Card
        style={{
          width: 350,
        }}
        actions={[
          
          item.body && (<Tooltip title="Comments" color="purple">
              <CommentOutlined key="comment" />
            </Tooltip>),
            
            <Tooltip title="Edit" color="blue">
              <EditOutlined key="edit" />
            </Tooltip>,
            
            <Tooltip title="Delete" color="red">
              <DeleteOutlined key="delete" />
            </Tooltip>,
            
            <Tooltip title="Star" color="orange">
              <StarOutlined key="star" />
            </Tooltip>,
            
            <Tooltip title="Mark" color="blue">
              <Checkbox
                defaultChecked={false}
                onChange={() => {
                  console.log("checked");
                }}
              />
            </Tooltip>
            
          
        ].filter(Boolean)}
      >
        <Meta
          style={{ padding: "2px" }}
          avatar={
            <Avatar
              style={{ backgroundColor: "#87d068", verticalAlign: "middle" }}
              src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${item.id}`}
            />
          }
          title={
            <div>
              <h2>{item.title}</h2>
              <h1 style={{ color: "#87CEEB" }} className="text-xs">
                {users && users[random - 1].name}
              </h1>
            </div>
          }
          description={item.body}
        />
      </Card>
    </div>
  );
};

export default CardItem;
