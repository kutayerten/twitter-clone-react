
import Premium from "~/layouts/main/rightbar/premium";
import Search from "~/layouts/main/rightbar/search";
import Topics from "~/layouts/main/rightbar/topics/";
import WhoToFollow from "./who-follow";
import Footer from "./footer";

export default function RightBar() {
  return (
    <aside className="w-[350px] mr-2.5">
        <Search/>
        <Premium/>
        <Topics/>
        <WhoToFollow/>
        <Footer/>
    </aside>
  )
}
