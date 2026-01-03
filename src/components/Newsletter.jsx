import React from 'react';
import { Send, Mail } from 'lucide-react';

const Newsletter = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="relative overflow-hidden bg-gray-900 rounded-[2rem] p-8 md:p-16 shadow-2xl border border-white/10">
                    
                    {/* Background Decorative Circles */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                        
                        {/* Text Content */}
                        <div className="lg:w-1/2 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
                                <Mail className="w-4 h-4" />
                                <span>Stay in the loop</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                                Join Our Global <br />
                                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                                    Cleanup Mission
                                </span>
                            </h2>
                            <p className="text-gray-400 text-lg max-w-md mx-auto lg:mx-0">
                                Subscribe to our newsletter and never miss an update about local cleanup drives and environment news.
                            </p>
                        </div>

                        {/* Input Form */}
                        <div className="lg:w-1/2 w-full max-w-md">
                            <form 
                                className="relative group" 
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    alert("Thanks for subscribing!");
                                }}
                            >
                                <div className="flex flex-col sm:flex-row items-center gap-3 p-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl sm:rounded-full focus-within:border-green-500/50 transition-all">
                                    <input 
                                        type="email" 
                                        placeholder="Enter your email address" 
                                        className="w-full bg-transparent border-none focus:ring-0 text-white px-6 py-3 placeholder:text-gray-500"
                                        required
                                    />
                                    <button 
                                        type="submit"
                                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold px-8 py-3 rounded-xl sm:rounded-full shadow-lg shadow-green-900/20 transition-all active:scale-95"
                                    >
                                        Subscribe <Send className="w-4 h-4" />
                                    </button>
                                </div>
                                <p className="text-xs text-gray-500 mt-4 text-center sm:text-left sm:ml-6">
                                    We care about your data. Unsubscribe at any time.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;