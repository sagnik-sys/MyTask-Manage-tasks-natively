import React from "react";

function Footer() {
  return (
    <footer className="bg-green-400 text-white py-6 mt-auto">
      <div className="container mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="text-center sm:text-left">
          <span className="font-bold text-lg tracking-wide">MyTask.Com</span>
          <p className="text-sm text-green-100 mt-0.5">Manage your todos at one place</p>
        </div>

        <div className="text-sm text-green-100 text-center">
          © {new Date().getFullYear()} Sagnik Bhattacharyya. All rights reserved.
        </div>

        <div className="flex gap-4 text-sm">
          <a href="#" className="hover:text-green-200 transition-colors duration-200">Privacy</a>
          <a href="#" className="hover:text-green-200 transition-colors duration-200">Terms</a>
          <a href="mailto:sagnik.bhattacharyya3@outlook.com" className="hover:text-green-200 transition-colors duration-200">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;