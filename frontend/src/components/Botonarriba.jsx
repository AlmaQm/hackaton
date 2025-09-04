export default function ScrollToTop() {
   return (
      <button
         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
         className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg"
      >
         ⬆️
      </button>
   );
}
