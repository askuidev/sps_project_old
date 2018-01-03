import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { PrimaryLayout } from './layouts'

export default function Router(props: any) {
	return (
	  <BrowserRouter>
	    <PrimaryLayout />
	  </BrowserRouter>
	);
}
