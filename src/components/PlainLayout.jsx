
import SiteFooter from "@/components/SiteFooter";
import TopBanner from '@/components/TopBanner'
import { Toaster } from "react-hot-toast";



const PlainLayout = (props) => {

    return (
        <>
            <TopBanner/>
            {props.children}
            <Toaster position="top-center" />
            <SiteFooter />
        </>
    )
}

export default PlainLayout