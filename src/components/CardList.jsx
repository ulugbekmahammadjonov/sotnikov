import React from 'react'
import CardItem from './CardItem'
import { useGetPostsQuery } from '../app/services/PostApi'
const CardList = ({data, users, }) => {

   
  return (
    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 mx-auto'>
    {data && data.map((item) => <CardItem key={item.id} item={item} users={users}/>)}
    </div>
  )
}

export default CardList