'use client';

import { Footer } from 'flowbite-react';
import { BsDribble, BsFacebook, BsGithub, BsInstagram, BsTwitter,BsLinkedin } from 'react-icons/bs';

export default function FooterDef() {
  return (
    <Footer container>
      <div className="w-full">

        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            by="Ronak Gupta"
            href="#"
            year={2022}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="https://www.linkedin.com/in/ronak-gupta-7428a1224"
              icon={BsLinkedin}
            />
            <Footer.Icon
              href="https://instagram.com/ronak_gupta__"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="https://twitter.com/ronakguptark07"
              icon={BsTwitter}
            />
            <Footer.Icon
              href="https://github.com/ronakgupta11"
              icon={BsGithub}
            />
            
          </div>
        </div>
      </div>
    </Footer>
  )
}


