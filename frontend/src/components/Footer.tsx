export default function Footer() {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Left Side: Company Name and Copyright */}
        <div className="text-center md:text-left">
          <h3 className="text-white font-semibold">DenLink</h3>
          <p className="text-gray-400">© 2024 DenLink. All Rights Reserved.</p>
        </div>

        {/* Right Side: Links */}
        <div className="flex space-x-6 text-gray-400 text-sm">
          <a href="#" className="hover:text-white transition duration-200">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition duration-200">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white transition duration-200">
            FAQs
          </a>
          <a href="#" className="hover:text-white transition duration-200">
            Support
          </a>
          <a href="#" className="hover:text-white transition duration-200">
            Feedback
          </a>
        </div>
      </div>
    </footer>
  );
}
