import About from '@/components/fiverrContent/aboutMe/About';
import BeforeAndAfter from '@/components/fiverrContent/beforeAndAfterGallery/BeforeAndAfter';
import ClientReview from '@/components/fiverrContent/clientReview/ClientReview';
import FBanner from '@/components/fiverrContent/FBanner/FBanner';
import Includes from '@/components/fiverrContent/whatIncludes/Includes';



const FiverrPage = () => {


    return (
        <main>
            <FBanner />
            <BeforeAndAfter />
            <ClientReview />
            <Includes />
            <About />
        </main>
    );
};

export default FiverrPage;