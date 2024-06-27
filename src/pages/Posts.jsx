import React from 'react'
import Header from '../components/Header'

import CardList from '../components/CardList'

import { useGetPostsQuery, useGetUsersQuery, } from '../app/services/PostApi'
const PostHeader = {
  title: 'Posts',
  isAdd: true,
  isSearch: true,
  isSelectUser: true,
  isSwitch:true,
}
const Posts = () => {
  const { data: posts } = useGetPostsQuery()
  const { data: users } = useGetUsersQuery()
 
  return (
    <div className='container'>
      <Header Header={PostHeader} />

      {posts && <CardList data={posts} users={users}  />}
    </div>
  )
}

export default Posts