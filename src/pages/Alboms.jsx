import React from 'react'
import Header from '../components/Header'
const AlbomHeader = {
  title: 'Alboms',
  isAdd: true,
  isSearch: true,
  isSelectUser: true,
  isSwitch:true,

}
const Alboms = () => {
  return (
    <div>
      <Header Header={AlbomHeader} />
    </div>
  )
}

export default Alboms