import React, { useState, useEffect } from "react";
import { Form, Button, Modal, Input, Select, message, Tooltip } from "antd";
import {
  useAddPostMutation,
  useEditPostMutation,
  useGetUsersQuery,
} from "../../app/services/PostApi";
import { useLocation } from "react-router-dom";
const { TextArea } = Input;

const ModalForm = ({ btnText, isEdit, postData }) => {
  const { data: users } = useGetUsersQuery();
  const [addPost] = useAddPostMutation();
  const [editPost] = useEditPostMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const { pathname } = useLocation();
  const url = pathname;

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModal = () => {
    setIsModalOpen(true);
    if (isEdit && postData) {
      form.setFieldsValue({
        title: postData.title,
        body: postData.body,
        user: postData.userId,
      });
    }
  };

  const handleSave = async (values) => {
    const { title, body, user } = values;
    try {
      
        await editPost({ id: postData.id, title, body, user, url });
        message.success("Post successfully edited!");
        setIsModalOpen(false);
    } catch (error) {
      message.error("Failed to save post!");
    }
  };

  return (
    <div>
      <Tooltip title={isEdit ? "Edit" : "Add"} color="blue">
      <Button  onClick={showModal}>
        {btnText}
      </Button>
      </Tooltip>
      <Modal
        title={isEdit ? "Edit Post" : "Add Post"}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          form={form}
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
         {url === "/posts" && <Form.Item
            label="Body"
            name="body"
            rules={[{ required: true, message: "Please input the body!" }]}
          >
            <TextArea rows={4} />
          </Form.Item>}
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
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalForm;
