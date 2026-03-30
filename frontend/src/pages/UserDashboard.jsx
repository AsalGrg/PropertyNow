import DashboardHeroSection from '../sections/dashboard/DashboardHeroSection'
import FavourtiePropertiesSection from '../sections/dashboard/FavourtiePropertiesSection'
import PageLayout from '../layout/PageLayout'
const UserDashboard = () => {

  return (

    <PageLayout>
      <main>
        <DashboardHeroSection />
        <FavourtiePropertiesSection />
      </main>
    </PageLayout>
  )
}

export default UserDashboard