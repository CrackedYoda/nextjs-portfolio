export default function SendMessage() {
    return (
       <div className="mt-24 md:mt-32 mb-24 md:mb-32 text-center space-y-8 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Ready to start your <span className="text-purple-500">project?</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
          Let's collaborate to create something amazing together. Reach out today to discuss your ideas.
        </p>
        <button
          onClick={() => {
            document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-transparent border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-300 font-medium py-3 px-8 rounded-full text-lg shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] active:scale-95"
        >
          Send me a message
        </button>
      </div>
    )
}