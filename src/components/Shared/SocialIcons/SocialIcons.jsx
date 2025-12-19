
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="fixed bottom-52 right-0 z-40 hidden md:block">
      <div className="flex flex-col gap-3 border border-primary pl-3 pt-5 pb-5 rounded-l-2xl">
        <a target="blank" href="https://x.com/KYD_Precision" className='flex items-center justify-center bg-primary text-white h-8 w-8 hover:bg-secondary transition text-lg '><FaSquareXTwitter /></a>
        <a target="blank" href="https://www.facebook.com/guangdongkyd"  className='flex items-center justify-center bg-primary text-white h-8 w-8 hover:bg-secondary transition text-lg '><FaFacebookF /></a>
        <a target="blank" href="https://www.linkedin.com/company/guangdong-kyd-medical-mask-machinery/"  className='flex items-center justify-center bg-primary text-white h-8 w-8 hover:bg-secondary transition text-lg '><FaLinkedinIn /></a>
      </div>
    </div>
  )
}

export default SocialIcons