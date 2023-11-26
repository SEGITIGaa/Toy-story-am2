const Footer = () => {
  return (
    <div className="column items-center gap-4">
      <img
        src="./svg/collabLogo.svg"
        alt="colaborations-logo"
        className="w-3/5"
      />
      <h1 className="font-montserrat font-bold text-white leading-tight w-full text-center text-3xl">
        Terima Kasih!
      </h1>

      <div className="column w-full items-center">
        <div className="flex items-center justify-center gap-2">
          <p className="text-muted">Copyright</p>
          <img
            src="./svg/copyright.svg"
            alt="copyright"
            className="w-5 opacity-60"
          />
          <p className="text-muted">2023</p>
        </div>
        <p className="text-muted">
          All rights reserved. Created by Commit Studio
        </p>
      </div>
    </div>
  );
};
export default Footer;