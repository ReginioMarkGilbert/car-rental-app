import Hero from './components/Hero/Hero';
import FeaturedVehicles from './components/FeaturedVehicles/FeaturedVehicles';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

export default function Home() {
   return (
      <>
         <Navbar />
         <main className="min-h-screen bg-gray-50">
            <Hero />
            <section className="py-24 px-4 max-w-7xl mx-auto">
               <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Vehicles</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                     Choose from our selection of premium vehicles, each offering a unique blend of luxury, performance, and style.
                  </p>
               </div>
               <FeaturedVehicles />
            </section>
         </main>
         <Footer />
      </>
   );
}
