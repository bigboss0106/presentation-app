
import DarkHeader from './dark-header'
import LightHeader from './light-header'
import Footer from './footer'

export default function Layouts(props) {

   // Access the child component
   const child = props.children;

   // Access the theme prop
   const theme = props.theme; 

  return (
    <>
      {theme==='dark' ?  <DarkHeader/> : <LightHeader/>}
      {child}
      {theme==='dark' ?  <Footer/> : null}
    </>
  )
}
