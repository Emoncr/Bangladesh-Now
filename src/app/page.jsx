import FeatureNews from '@/components/FeatureNews'
import NewsList from '@/components/NewsList'
import PlainLayout from '@/components/PlainLayout'



export default function Home() {

  return (
    <>
      <PlainLayout>
        <FeatureNews />
        <NewsList news={{ params: "latest",  heading: "Latest" }}/>
      </PlainLayout>

    </>
  )
}
