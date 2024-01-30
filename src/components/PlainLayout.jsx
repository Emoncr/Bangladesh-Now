
import SiteFooter from "@/components/SiteFooter";
import TopBanner from '@/components/TopBanner'
import { Toaster } from "react-hot-toast";
import { checkLogin } from "@/utils/checkAuth";


const PlainLayout = ({ children }) => {
    const isLogin = checkLogin();
    return (
        <>
            <TopBanner isLogin={isLogin} />
                {children}
            <Toaster position="top-center" />
            <SiteFooter />
        </>
    )
}

export default PlainLayout