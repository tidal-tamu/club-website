import { useState } from "react";

interface Track {
    id: string;
    num: string;
    title: string;
    tagline: string;
    description: string;
    skills: string[];
    sampleWorkshop: string;
    accent: string;
}

const tracks: Track[] = [
    {
        id: "llm",
        num: "01",
        title: "Generative AI & LLM Systems",
        tagline: "Transformers, RAG architectures, and autonomous reasoning agents",
        description:
            "From building retrieval-augmented generation (RAG) pipelines from scratch to fine-tuning open-source weights with LoRA and QLoRA, we explore how modern language models think, reason, and act.",
        skills: ["PyTorch", "Hugging Face", "LangChain", "vLLM", "Vector DBs", "DeepSeek"],
        sampleWorkshop: "Building a Multi-Agent Debate System with Local Ollama Models",
        accent: "#00569e",
    },
    {
        id: "cv",
        num: "02",
        title: "Computer Vision & Multimodal AI",
        tagline: "Diffusion models, real-time perception, and 3D Gaussian splatting",
        description:
            "Dive into spatial intelligence. Master convolutional backbones, vision transformers (ViTs), YOLO real-time object tracking, and latent diffusion architectures for generative visual art.",
        skills: ["OpenCV", "YOLOv8", "Stable Diffusion", "NeRFs", "MediaPipe", "Segment Anything"],
        sampleWorkshop: "Fine-Tuning Stable Diffusion LoRAs for Custom Aggie Art Generation",
        accent: "#336699",
    },
    {
        id: "rl",
        num: "03",
        title: "Reinforcement Learning & Robotics",
        tagline: "Policy gradients, deep Q-networks, and simulation-to-real control",
        description:
            "Teach agents how to navigate dynamic game worlds and complex physical simulations. Learn Markov decision processes, Proximal Policy Optimization (PPO), and physics engines.",
        skills: ["Gymnasium", "MuJoCo", "Ray RLlib", "PyTorch RL", "Unity ML-Agents"],
        sampleWorkshop: "Training an Autonomous Quadcopter Drone in Simulated Physics",
        accent: "#706993",
    },
    {
        id: "sys",
        num: "04",
        title: "Production ML & GPU Systems",
        tagline: "CUDA kernels, low-latency inference, and scalable model serving",
        description:
            "Understand the hardware underneath the math. We cover quantization (AWQ/GGUF), high-throughput inference engines, Docker containerization, and deploying ML models to AWS & NVIDIA GPUs.",
        skills: ["NVIDIA Triton", "CUDA / C++", "Docker", "AWS SageMaker", "ONNX Runtime", "FastAPI"],
        sampleWorkshop: "Writing Custom CUDA Kernels for Low-Precision Matrix Multiply",
        accent: "#0f3355",
    },
];

export default function LearningTracks() {
    const [activeTrack, setActiveTrack] = useState(tracks[0].id);

    return (
        <section className="wrap tracks-section" id="tracks">
            <div className="section-head rv">
                <span className="section-kicker">CURRICULUM &amp; WORKSHOPS</span>
                <h2 className="section-title">What You&apos;ll Build &amp; Master</h2>
                <p className="section-desc">
                    No gatekeeping, no prerequisites. Our workshops are designed to take any curious
                    student from zero experience to shipping state-of-the-art AI applications.
                </p>
            </div>

            <div className="tracks-grid">
                {tracks.map((track) => {
                    const isActive = activeTrack === track.id;
                    return (
                        <div
                            className={`track-card rv ${isActive ? "is-active" : ""}`}
                            key={track.id}
                            onClick={() => setActiveTrack(track.id)}
                        >
                            <div className="track-card-top">
                                <span className="track-num">{track.num}</span>
                                <span className="track-pill">TRACK {track.num}</span>
                            </div>

                            <h3 className="track-title">{track.title}</h3>
                            <p className="track-tagline">{track.tagline}</p>
                            <p className="track-desc">{track.description}</p>

                            <div className="track-tech">
                                <span className="tech-label">CORE TECH STACK</span>
                                <div className="tech-tags">
                                    {track.skills.map((s, idx) => (
                                        <span className="tech-tag" key={idx}>
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="track-workshop">
                                <span className="workshop-pill">&#128736; HANDS-ON LAB</span>
                                <div className="workshop-name">{track.sampleWorkshop}</div>
                            </div>

                            <div className="track-hover-indicator" />
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
