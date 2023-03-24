import Header from "../Components/Header/Header"
import News_Carousel from "../Components/News_Carousel/News_Carousel"
import Services from "../Components/Services/Services"
import Plans from "../Components/Plans/Plans"
import Footer from "../Components/Footer/Footer"
import { db } from "@/lib/db"

export default function HomePage(props){
  return(
      <>
      <Header />
      <News_Carousel />
      <Services />
      <Plans data={props.data} />
      <Footer />
      </> 
  )
}

export async function getServerSideProps(){
  await db.connect()
  let queryString = "SELECT * from Schemes"
  const response = await db.query(queryString)
  return {
      props: {
          data: JSON.stringify(response)
      }
  }
}