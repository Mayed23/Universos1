import { NavigationContainer } from '@react-navigation/native'
import {TabsNavigator } from './Navigator'
import { AuthStack } from './AuthStack'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setUser, setUserLocation, setUserPhoto} from '../Features/auth/authSlice'
import { fetchSession } from '../db/index.js'
import {
    useGetProfileImageQuery,
    useGetUserLocationQuery
} from '../Services/ShopServices'


export const MainNavigator = () => {
   const { localId } = useSelector(state => state.auth.value.user)
   const { data: profileImage } = useGetProfileImageQuery(localId)
   const { data: userLocation } = useGetUserLocationQuery(localId)

  console.log(localId)

  const dispatch = useDispatch()

  useEffect(() => {
    const getSession = async () => {
      const session = await fetchSession()
      if (session) dispatch(setUser(session))
    }
     getSession()
  }, [])

  useEffect(() => {
    if (profileImage) {
      dispatch(setUserPhoto(profileImage.image))
    }
  }, [profileImage])

  useEffect(() => {
    if (userLocation) {
      dispatch(setUserLocation(userLocation))
    }
  }, [userLocation])

  return (
    <NavigationContainer>
      {localId ? <TabsNavigator/> : <AuthStack />}
    </NavigationContainer>
  )
}