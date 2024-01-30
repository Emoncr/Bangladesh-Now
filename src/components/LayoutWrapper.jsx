import NextTopLoader from "nextjs-toploader";
import SiteFooter from "@/components/SiteFooter";
import TopBanner from '@/components/TopBanner'
import { Toaster } from "react-hot-toast";
import { checkLogin } from "@/utils/checkAuth";


const LayoutWrapper = async ({ children }) => {



    const isLogin = checkLogin()

    return (
        <>
            <NextTopLoader
                color="#F60D2B"
                initialPosition={0.08}
                crawlSpeed={200}
                height={4}
                crawl={true}
                showSpinner={false}
            />
            <TopBanner isLogin={isLogin} />
            {children}
            <Toaster position="top-center" />
            <SiteFooter />
        </>
    )
}

export default LayoutWrapper