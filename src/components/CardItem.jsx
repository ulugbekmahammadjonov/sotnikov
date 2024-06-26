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
const CardItem = () => {
  return (
    <div className="flex justify-center">
      <Card
        style={{
          width: 400,
        }}
        actions={[
          <Tooltip title="Comments" color="purple">
            <CommentOutlined key="comment" />,
          </Tooltip>,
          <Tooltip title="Edit" color="blue">
            <EditOutlined key="edit" />,
          </Tooltip>,
          <Tooltip title="Delete" color="red">
            <DeleteOutlined key="delete" />,
          </Tooltip>,
          <Tooltip title="Star" color="orange">
          <StarOutlined key="star" />,
          </Tooltip>,
          <Tooltip title="Mark" color="blue">
          <Checkbox
            defaultChecked={false}
            onChange={() => {
              console.log("checked");
            }}
          />
          </Tooltip>,
        ]}
      >
        <Meta
          style={{ padding: "2px" }}
          avatar={
            <Avatar
              style={{ backgroundColor: "#87d068", verticalAlign: "middle" }}
              src="https://api.dicebear.com/7.x/miniavs/svg?seed=2"
            />
          }
          title={
            <div>
              <h2>Card title</h2>
              <h1 style={{ color: "#87CEEB" }} className="text-xs">
                @Card title
              </h1>
            </div>
          }
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae tempore corporis architecto veritatis magni excepturi."
        />
      </Card>
    </div>
  );
};

export default CardItem;
