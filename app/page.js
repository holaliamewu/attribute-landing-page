import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";

export default function Home( ) {
  return(
  <div className="min-h-[100dvh] bg-white">
		<Header />
		<Hero />
		<Footer />
  </div>
  )
}