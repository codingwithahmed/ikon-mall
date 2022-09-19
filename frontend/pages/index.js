import { Footer } from "../Components/Footer"
import { HeaderIndexLogout } from "../Components/Header"
import Menu from "../Components/Menu"


const IndexNewUser = () => {

  return <div className="">
  <HeaderIndexLogout />
  <main>

        <section>
              <Menu/>
        </section>

  </main>

  <Footer />
  </div>
}




export default function Home() {
  return <IndexNewUser />
}
