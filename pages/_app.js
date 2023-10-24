import '../styles/global.css'
import { Fragment } from 'react'
import TopNavLayout from "../Layouts/TopNavLayout";

export default function App({ Component, pageProps }) {
  return(
    <Fragment>
      <TopNavLayout />
      <Component {...pageProps} />
    </Fragment>
  )
}
