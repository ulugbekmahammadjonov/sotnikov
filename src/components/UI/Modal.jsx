import React, { useState } from "react";
import { Form, Button, Modal, Input, Select, message } from "antd";
import {
  useAddPostMutation,
  useGetUsersQuery,
  useGetPostsQuery,
} from "../../app/services/PostApi";
import { useLocation } from "react-router-dom";
const { TextArea } = Input;

const ModalForm = ({ btnText }) => {
  //   const { data: posts, refetch } = useGetPostsQuery();
  const { data: users } = useGetUsersQuery();
  const [addPost, { isLoading, isSuccess, isError }] = useAddPostMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUserName, setSelectedUserName] = useState("");

  const { pathname } = useLocation();
  const url = pathname;

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleSave = async (values) => {
    const { title, body, user } = values;
    console.log("Submitting post with values:", { title, body, user, url });
    try {
      const response = await addPost({ title, body, user, url });
      // refetch();
      console.log("Post added successfully:", response);
      message.success("Post successfully added!");
      setIsModalOpen(false);
    } catch (error) {
      console.error("Failed to add post:", error);
      message.error("Failed to add post!");
    }
  };

  const handleUserChange = (value, option) => {
    setSelectedUserName(option.label);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        {btnText}
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="basic"
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
          onFinish={handleSave}
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please input the title!" }]}
          >
            <Input />
          </Form.Item>
          {url === "/posts" && (
            <Form.Item
              label="Body"
              name="body"
              rules={[{ required: true, message: "Please input the body!" }]}
            >
              <TextArea rows={4} />
            </Form.Item>
          )}
          <Form.Item
            label="User"
            name="user"
            rules={[{ required: true, message: "Please select a user!" }]}
          >
            <Select
              style={{
                width: "100%",
              }}
              placeholder="Select users"
              options={users?.map((user) => ({
                label: user.name,
                value: user.id,
              }))}
              onChange={handleUserChange}
            />
          </Form.Item>
          <Form.Item>
            <Button
              onClick={handleCancel}
              style={{
                marginRight: "8px",
              }}
            >
              Cancel
            </Button>
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalForm;
