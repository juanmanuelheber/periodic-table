import React from 'react'
import { Routes, Route } from "react-router-dom";
import { SingleElement } from '../views/SingleElement';
import { Home } from '../views/Home';
import { NotFound } from '../views/NotFound';

export const Rutas = () => {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="element/:elementId" element={<SingleElement />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
