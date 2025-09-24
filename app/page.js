import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";

export default function Home( ) {
  return(
  <div className="min-w-screen bg-white">
		<Header />
		<Hero />
		<Footer />
  </div>
  )
}