import React from 'react'
import Header from '../components/Header'
import CardItem from '../components/CardItem'

const PostHeader = {
  title: 'Posts',
  isAdd: true,
  isSearch: true,
  isSelectUser: true,
  isSwitch:true,

}
const Posts = () => {
  return (
    <div className=''>
      <Header Header={PostHeader} />
      <CardItem />
    </div>
  )
}

export default Posts