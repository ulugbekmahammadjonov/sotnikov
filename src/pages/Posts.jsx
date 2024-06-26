import React from 'react'
import Header from '../components/Header'
import CardItem from '../components/CardItem'
import CardList from '../components/CardList'

import { useGetPostsQuery } from '../app/services/PostApi'
const PostHeader = {
  title: 'Posts',
  isAdd: true,
  isSearch: true,
  isSelectUser: true,
  isSwitch:true,
}
const Posts = () => {
  const { data: posts, isLoading, error } = useGetPostsQuery()
  return (
    <div className=''>
      <Header Header={PostHeader} />

      {posts && <CardList data={posts} />}
    </div>
  )
}

export default Posts