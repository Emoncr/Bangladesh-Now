import FeatureNews from '@/components/FeatureNews';
import NewsList from '@/components/NewsList';
import PlainLayout from '@/components/PlainLayout'

async function getData(id) {
    let newsDetails = (await (await fetch(`${process.env.BASE_URL}/api/news_list/category?catID=${id}`)).json())["data"];

    return newsDetails
}
const NewsCategory = async ({ params }) => {
    const data = await getData(params.id);

    return (
        <>
            <PlainLayout>
                <FeatureNews />
                <NewsList news={{ params: "category", value: `catID=${params?.id}`, heading: params?.name }} />
            </PlainLayout>
        </>
    )
}

export default NewsCategory