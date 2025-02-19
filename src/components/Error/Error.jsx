import React, { useState } from 'react'
import classes from './Error.module.scss'


export default function Error() {
  return (
    <div className={`${classes.Error} alert alert-danger max-w-lg mb-6 my-52 text-center mx-auto`}>Error</div>
  )
}
