export default function FullPageLoader() {
    return (
        <div className="flex items-center justify-center h-screen w-screen bg-background fixed inset-0 z-50">
            <div className="relative">
                {/* Outer rotating ring */}
                <div className="w-20 h-20 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
                
                {/* Inner pulsing circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full animate-pulse"></div>
                </div>
                
                {/* Center trophy icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 text-primary animate-bounce">
                        <svg 
                            viewBox="0 0 24 24" 
                            fill="currentColor" 
                            className="w-full h-full"
                        >
                            <path d="M6 2h12v2h-2v7c0 2.76-2.24 5-5 5s-5-2.24-5-5V4H4V2zm2 2v7c0 1.65 1.35 3 3 3s3-1.35 3-3V4H8zm4 13v2h4v2H8v-2h4v-2c-2.21 0-4-1.79-4-4h2c0 1.1.9 2 2 2s2-.9 2-2h2c0 2.21-1.79 4-4 4z"/>
                        </svg>
                    </div>
                </div>
                
                {/* Loading text */}
                <div className="absolute top-24 left-1/2 transform -translate-x-1/2">
                    <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
