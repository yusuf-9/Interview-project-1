import Header from "../Components/Header/Header"
import News_Carousel from "../Components/News_Carousel/News_Carousel"
import Services from "../Components/Services/Services"
import Plans from "../Components/Plans/Plans"
import Footer from "../Components/Footer/Footer"

export default function HomePage(){
  return(
      <>
      <Header />
      <News_Carousel />
      <Services />
      <Plans />
      <Footer />
      </> 
  )
}