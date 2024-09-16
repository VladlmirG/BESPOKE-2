import Image from "next/image";
import Link from "next/link";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gradient-to-r from-pink-100 to-white-500 text-bluey text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">

        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <Image src="/logo.png" alt="Bespoke Logo" width={250} height={250} />
          </Link>
          <p>22145 Katy Fwy c, Katy, TX 77450, USA</p>

          <Link href="mailto:Johanna@bespokequince.com">
            <span className="font-semibold hover:text-hovr">Johanna@bespokequince.com</span>
          </Link>
          <Link href="tel:+18324416021">
            <span className="font-semibold hover:text-hovr">+1 (832) 441 6021</span>
          </Link>

          <div className="flex gap-6">
            <a href="https://www.facebook.com/bespokequince" target="_blank" rel="noopener noreferrer">
              <FacebookIcon style={{ width: 16, height: 16 }} />
            </a>
            <a href="https://www.instagram.com/bespokequince/?hl=en" target="_blank" rel="noopener noreferrer">
              <InstagramIcon style={{ width: 16, height: 16 }} />
            </a>
            <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon style={{ width: 16, height: 16 }} />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              <img src='/tiktok.svg' alt="TikTok" style={{ width: 16, height: 16 }} />
            </a>
          </div>
        </div>

        {/* Rest of Footer */}
      </div>

      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="flex flex-col justify-between gap-2">
          <span>© 2024 BESPOKE XV & FORMAL</span>
          <span className="font-extralight text-xs text-gray">
            Site developed by
            <Link href="https://vladimirgotay.com/" target="_blank" rel="noopener noreferrer" className="hover:text-black"> Vladimir G</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;


