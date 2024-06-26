import React from 'react'
import Header from '../components/Header'
import CardList from '../components/CardList'
import { useGetAlbomsQuery, useGetUsersQuery } from '../app/services/PostApi'
const AlbomHeader = {
  title: 'Alboms',
  isAdd: true,
  isSearch: true,
  isSelectUser: true,
  isSwitch:true,

}
const Alboms = () => {

  const { data: alboms } = useGetAlbomsQuery()
  const { data: users } = useGetUsersQuery()
  return (
    <div>
      <Header Header={AlbomHeader} />
      <CardList data={alboms} users={users}/>
    </div>
  )
}

export default Alboms