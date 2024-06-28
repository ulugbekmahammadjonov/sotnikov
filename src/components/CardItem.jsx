import React, { useState } from "react";
import {
  EditOutlined,
  DeleteOutlined,
  CommentOutlined,
  StarOutlined,
  StarFilled,
} from "@ant-design/icons";
import { Avatar, Button, Card, Checkbox, Tooltip } from "antd";
import { useGetCommentsQuery, useGetPostsQuery } from "../app/services/PostApi";
import EditModal from "./UI/EditModal";
const { Meta } = Card;
const CardItem = ({ item, users }) => {
  const { data: comments } = useGetCommentsQuery();
  const { data: posts } = useGetPostsQuery();
  const random = Math.floor(Math.random() * users?.length) + 1;
  const [isComment, setIsComment] = useState(false);
  const handleComment = () => {
    setIsComment(!isComment);
  };
  return (
    <div className="flex  flex-col">
      <Card
        style={{
          width: 350,
        }}
        actions={[
          item.body && (
            <Button>
              <Tooltip title="Comments" color="purple">
                <CommentOutlined
                  onClick={handleComment}
                  style={{ fontSize: "20px" }}
                  key="comment"
                />
              </Tooltip>
            </Button>
          ),

          <EditModal
            isEdit={true}
            btnText={<EditOutlined key="edit" style={{ fontSize: "20px" }} />}
            postData={item}
          />,
          <Button>
            <Tooltip title="Delete" color="red">
              <DeleteOutlined key="delete" style={{ fontSize: "20px" }} />
            </Tooltip>
          </Button>,
          <Button>
            <Tooltip title="Star" color="orange">
              <StarOutlined
                key="star"
                style={{ fontSize: "20px", margin: "0" }}
              />
            </Tooltip>
            ,
          </Button>,
          <Button style={{ textAlign: "center" }}>
            <Tooltip title="Check" color="blue">
              <Checkbox defaultChecked={false} />
            </Tooltip>
            ,
          </Button>,
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
          description={
            <div className={`${item.body ? "h-32" : ""}`}>{item.body}</div>
          }
        />
      </Card>
      {isComment && (
        <Card className=" truncate" style={{ width: 350 }}>
          {comments &&
            comments.slice(0, 5).map((comment) => (
              <Meta
                key={comment.id}
                style={{ padding: "2px" }}
                avatar={
                  <Avatar
                    style={{
                      backgroundColor: "#87d068",
                      verticalAlign: "middle",
                    }}
                    src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${comment.id}`}
                  />
                }
                title={
                  <div>
                    <h2>{comment.name}</h2>
                    <h1 style={{ color: "#87CEEB" }} className="text-xs">
                      {comment.email}
                    </h1>
                  </div>
                }
                description={item.body}
              />
            ))}
        </Card>
      )}
    </div>
  );
};

export default CardItem;
