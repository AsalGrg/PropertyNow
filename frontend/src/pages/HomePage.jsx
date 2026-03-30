import PageLayout from '../layout/PageLayout'
import HeroSection from '../sections/home/HeroSection'
import PropertiesSection from '../sections/home/PropertiesSection'

const HomePage = () => {
    

    return (
        <PageLayout>
            <main>
                <HeroSection />
                <PropertiesSection />
            </main>
        </PageLayout>
    )
}

export default HomePage