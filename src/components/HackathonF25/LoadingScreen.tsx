import { motion } from "framer-motion";

interface LoadingScreenProps {
    onLoadComplete: () => void;
    progress?: number;
}

const LoadingScreen = ({ onLoadComplete, progress = 0 }: LoadingScreenProps) => {

    return (
        <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            {/* Animated background particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-yellow-400 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            opacity: [0.2, 1, 0.2],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 2 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            {/* Main content */}
            <div className="relative z-10 text-center px-6">
                {/* Logo or Title */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-12"
                >
                    <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 mb-4">
                        TIDAL
                    </h1>
                    <p className="text-xl md:text-2xl text-yellow-200/80 font-medium">
                        HACK25
                    </p>
                </motion.div>

                {/* Loading bar */}
                <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "100%", opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="relative w-full max-w-md mx-auto"
                >
                    <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-yellow-500/20">
                        <motion.div
                            className="h-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-full relative"
                            style={{ width: `${progress}%` }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                        </motion.div>
                    </div>
                    
                    {/* Percentage */}
                    <motion.p
                        className="text-yellow-300 text-sm font-medium mt-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        {Math.round(progress)}%
                    </motion.p>
                </motion.div>

                {/* Loading text */}
                <motion.p
                    className="text-gray-400 text-sm mt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    Loading experience...
                </motion.p>
            </div>

            {/* Corner decorations */}
            <motion.div
                className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-yellow-500/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.div
                className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-yellow-500/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            />
        </motion.div>
    );
};

export default LoadingScreen;
