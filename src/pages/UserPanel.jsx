import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import { MyOrders } from "../components/MyOrders";
import { BookATablePage } from "../components/BookATable";

export function UserPanel(){
    return(
        <>
        <Header />
        <MyOrders />
        <Menu />
        <BookATablePage/>
        <Footer />
        </>
    );
}