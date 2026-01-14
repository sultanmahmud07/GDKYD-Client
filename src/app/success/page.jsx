import Link from 'next/link';
import { GoHome } from 'react-icons/go';
import { IoIosArrowForward } from 'react-icons/io';
import Success from '../../components/Pages/Products/Success';

export const metadata = {
      title: 'Thank You for Your Order – We Appreciate Your Business!',
      description: 'Thank you for your order! We appreciate your trust in us. Your transaction is being processed, and we’re excited to serve you. Stay tuned for updates and feel free to reach out with any questions. Your satisfaction is our priority.',
}

export default function Page() {
      return (
            <div className="page">
                  <div className='py-8 md:py-14'></div>
                  <div className="main_container text-[#1F1C1466] py-5 text-sm font-semibold flex items-center gap-1">
                        <span className="text-xl"><GoHome /></span>
                        <Link href={`/`} className="hover:text-primary">Home</Link>
                        <span><IoIosArrowForward /></span>
                        <span className="text-primary hidden md:block">Success</span>
                  </div>
                  <Success></Success>
            </div>
      );
}
