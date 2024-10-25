const Footer = () => {
  return (
      <footer className="py-10 bg-black text-white">
          <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-between space-y-8 md:space-y-0">
                  {/* Branding and Social Links */}
                  <div className="w-full md:w-1/4">
                      <h2 className="text-lg font-bold text-cyan-500">BINYTE</h2>
                      <p className="mt-2 text-sm text-gray-400">Binyte is a profound website, operated by professionals in every field mentioned on the website.</p>
                      <div className="flex mt-4 space-x-4">
                          <a href="#" className="text-gray-400 hover:text-cyan-500" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                          <a href="#" className="text-gray-400 hover:text-cyan-500" aria-label="Twitter"><i className="fab fa-x-twitter"></i></a>
                          <a href="#" className="text-gray-400 hover:text-cyan-500" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
                      </div>
                  </div>
                  {/* Company Links */}
                  <div className="w-full md:w-1/4">
                      <h3 className="text-sm font-bold text-white">COMPANY</h3>
                      <ul className="mt-2 space-y-2 text-sm text-gray-400">
                          <li><a href="#" className="hover:text-cyan-500">About Us</a></li>
                          <li><a href="#" className="hover:text-cyan-500">Services</a></li>
                          <li><a href="#" className="hover:text-cyan-500">Work</a></li>
                          <li><a href="#" className="hover:text-cyan-500">Information</a></li>
                      </ul>
                  </div>
                  {/* Information Links */}
                  <div className="w-full md:w-1/4">
                      <h3 className="text-sm font-bold text-white">INFORMATION</h3>
                      <ul className="mt-2 space-y-2 text-sm text-gray-400">
                          <li><a href="#" className="hover:text-cyan-500">Blog</a></li>
                          <li><a href="#" className="hover:text-cyan-500">Contact Us</a></li>
                          <li><a href="#" className="hover:text-cyan-500">Career</a></li>
                          <li><a href="#" className="hover:text-cyan-500">Testimonials</a></li>
                      </ul>
                  </div>
                  {/* Contact Information */}
                  <div className="w-full md:w-1/4">
                      <h3 className="text-sm font-bold text-white">ADDRESS</h3>
                      <ul className="mt-2 space-y-2 text-sm text-gray-400">
                          <li><a href="mailto:binyte123@gmail.com" className="hover:text-cyan-500">binyte123@gmail.com</a></li>
                          <li><a href="tel:+917493069095" className="hover:text-cyan-500">+91 7493069095</a></li>
                          <li><span className="hover:text-cyan-500">Prayagraj, Naini</span></li>
                          <li><span className="hover:text-cyan-500">Uttar Pradesh, India</span></li>
                      </ul>
                  </div>
              </div>
              {/* Separator */}
              <div className="mt-10 border-t border-gray-700"></div>
              {/* Copyright */}
              <div className="text-center mt-6 text-sm text-gray-400">
                  <p>&copy; {new Date().getFullYear()} Binyte. All rights reserved.</p>
              </div>
          </div>
      </footer>
  );
};

export default Footer;
