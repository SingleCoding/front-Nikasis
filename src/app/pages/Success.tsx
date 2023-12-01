import Background from "../components/Background";
import Navigation from "../layouts/Navigation";
import { TiTick } from 'react-icons/ti';

const success = () => {
  return ( 
    <>
      <Background image="img/auth.png" />
      <Navigation />
      <main className="flex items-center justify-center h-screen">
        <div className="bg-white">
          <div><TiTick /></div>
        </div>
      </main>
    </>
   );
}
 
export default success;