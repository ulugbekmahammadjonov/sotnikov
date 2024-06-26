import React from 'react'
import { PlusOutlined } from '@ant-design/icons';
import { Input, Button, Select, Switch } from 'antd';

const { Search } = Input;
const options =[
        {
          value: 'apple',
          label: 'Apple',
        },
        {
          value: 'pear',
          label: 'Pear',
        },
        {
          value: 'orange',
          label: 'Orange',
        },
      ]
const Header = ({ Header }) => {
   const onSearch = (value, _e, info) => console.log(info?.source, value);
   const handleChange = (value) => {
  console.log(`selected ${value}`);
};
  return (
    <div className='container mt-3 flex items-center space-x-8'>

      <h1 className='text-3xl font-bold w-24'>{Header.title}</h1>
       <Button type="primary"><PlusOutlined /> Add</Button>
      {Header.isSearch && <Search
      placeholder="input search text"
      onSearch={onSearch}
      style={{
        width: 200,
      }}
    />}
    
    <div className='flex items-center space-x-2'>
      {Header.isSelectUser && <Select
      mode="multiple"
      allowClear
      style={{
        width: '210px',
      }}
      placeholder="Select users"
      
      onChange={handleChange}
      options={options}
    />}
    {Header.isSwitch && <Switch checkedChildren="Selected" unCheckedChildren="All"  />}
    </div>
    </div>
  )
}

export default Header