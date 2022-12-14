import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { HeroesRoutes } from '../heroes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
//import { DCPage } from '../heroes/pages/DCPage'
//import { MarvelPage } from '../heroes/pages/MarvelPage'
//import { DCPage, MarvelPage } from "../heroes"
//import { Navbar }from "../ui"

export const AppRouter = () => {
  return (
    <>
        <Routes>
              {/* ruta publica */}
            <Route path='login/*' element= {
              <PublicRoute>
                <Routes>
                  <Route path='/*' element={<LoginPage />} />
                </Routes>
              </PublicRoute>
            } 
            />

            {/* <Route path="login" element= { <LoginPage /> }/>   */}
            
            {/* ruta privada */}
            <Route path='/*' element= {
              <PrivateRoute> 
                  <HeroesRoutes/>
              </PrivateRoute>
            } />
            {/* <Route path="/*" element= { <HeroesRoutes /> }/>   */}
                        
        </Routes>
    </>
  )
}
