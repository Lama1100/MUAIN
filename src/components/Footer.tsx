export function Footer() {
    return (
      <footer className="bg-black text-white p-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} My App. All rights reserved.
        </p>
        <div className="mt-2 flex justify-center gap-4">
          <a href="/privacy" className="hover:text-gray-300">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-gray-300">
            Terms of Service
          </a>
        </div>
      </footer>
    );
  }