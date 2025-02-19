import React, { useState } from 'react'
import classes from './NotFound.module.scss'


export default function NotFound() {
  return (
    <div className={`${classes.NotFound} alert alert-danger max-w-lg mb-6 my-52 text-center mx-auto`}>Not Found</div>
  )
}
