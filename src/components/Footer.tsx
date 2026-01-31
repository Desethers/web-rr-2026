const Footer = () => (
  <footer className="footer mt-1 md:mt-8">
    <div className="footer-content mx-auto px-4 md:px-[25px] py-6 flex flex-row justify-between items-center gap-2">
      <div className="legal text-left">
        <p className="text-xs md:text-base">© 2024 Raphaël Rossi - All Rights Reserved</p>
      </div>
      <div className="social-media text-right">
        <a
          href="https://www.instagram.com/raphaaelrossi/"
          target="_blank"
          rel="noreferrer"
          className="hover:underline text-xs md:text-base"
        >
          Instagram
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
