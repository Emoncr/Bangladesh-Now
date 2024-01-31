import FeatureNews from '@/components/FeatureNews'
import NewsList from '@/components/NewsList'
import PlainLayout from '@/components/PlainLayout'



export default function Home() {

  return (
    <>
      <PlainLayout>
        <FeatureNews />
        <NewsList news={{ endpoint: "latest", params:"/allnews",   heading: "Latest" }}/>
      </PlainLayout>

    </>
  )
}
