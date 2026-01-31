import { motion } from "framer-motion";

interface LoadingScreenProps {
    progress?: number;
}

const LoadingScreen = ({ progress = 0 }: LoadingScreenProps) => {
    return (
        <motion.div
            className="fixed w-full h-screen inset-0 z-[9999] flex items-center justify-center overflow-hidden"
            style={{
                background:
                    "linear-gradient(180deg, #0a1612 0%, #0d1f1a 50%, #081410 100%)",
            }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            {/* Animated background particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(18)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            background:
                                i % 2 === 0
                                    ? "rgba(47, 115, 94, 0.6)"
                                    : "rgba(255, 172, 41, 0.5)",
                        }}
                        animate={{
                            opacity: [0.3, 0.8, 0.3],
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
                {/* Penguin GIF */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-12 flex justify-center"
                >
                    <img
                        src="/f25/loading_penguin.gif"
                        alt="Loading..."
                        className="max-w-48 max-h-48 md:max-w-64 md:max-h-64 w-auto h-auto object-contain"
                        style={{
                            filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.5))",
                        }}
                    />
                </motion.div>

                {/* Logo or Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    className="mb-12"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
                        TIDAL
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 font-medium">
                        HACK25
                    </p>
                </motion.div>

                {/* Loading bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="relative w-full max-w-sm mx-auto"
                >
                    <div className="h-1.5 bg-gray-900/50 rounded-full overflow-hidden backdrop-blur-sm border border-gray-800/50">
                        <motion.div
                            className="h-full rounded-full relative"
                            style={{
                                width: `${progress}%`,
                                background:
                                    "linear-gradient(90deg, #1a4d3e 0%, #2f735e 50%, #3d8b6f 100%)",
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Subtle glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        </motion.div>
                    </div>

                    {/* Percentage */}
                    <motion.p
                        className="text-gray-500 text-xs font-medium mt-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        {Math.round(progress)}%
                    </motion.p>
                </motion.div>
            </div>

            {/* Corner decorations */}
            <motion.div
                className="absolute top-0 left-0 w-24 h-24 md:w-32 md:h-32 border-l-2 border-t-2 border-[#2f735e]/40"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            />
            <motion.div
                className="absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32 border-r-2 border-b-2 border-[#2f735e]/40"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            />
        </motion.div>
    );
};

export default LoadingScreen;
