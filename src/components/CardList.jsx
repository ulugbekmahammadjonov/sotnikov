import React from 'react'
import CardItem from './CardItem'
import { useGetPostsQuery } from '../app/services/PostApi'
const CardList = ({data}) => {

   
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-10'>
    {data && data.map((item) => <CardItem key={item.id} item={item} />)}
    </div>
  )
}

export default CardList