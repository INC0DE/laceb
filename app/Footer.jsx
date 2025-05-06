import Image from "next/image";

const Footer = () => {
  return (
    <div className="lg:h-56 w-full flex flex-col gap-10 bg-blue px-5 pt-5">
      <div className="flex flex-col gap-5 items-center lg:flex-row lg:justify-around">
        <div className="self-center">
          <Image
            src="/LACEBwhite.png"
            alt="herolaceb"
            width={250}
            height={100}
            priority
          />
        </div>

        <div className="flex flex-col text-white gap-3 text-center lg:text-left">
          <div className="">
            <h1 className="font-semibold">Contacto.</h1>
            <p>Tel. 5539669986</p>
            <p>servicio@laceb-lab.com</p>
          </div>
          <div>
            <h1 className="font-semibold">Ubicación</h1>
            <p>
              Calle Torre Latinoamericana, Nezahualcóyotl, Estado de México.
            </p>
          </div>
        </div>

        <div className="flex flex-col text-white gap-3">
          <div>
            <h1 className="font-semibold">Enlaces de interes.</h1>
            <a href="">
              <p className="underline"> Aviso de Privacidad</p>
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-row text-white font-semibold text-sm justify-center gap-10">
        <h1>LACEB S.A DE C.V © 2025.</h1>
        <h1>All rights reserved.</h1>
      </div>
    </div>
  );
};

export default Footer;
