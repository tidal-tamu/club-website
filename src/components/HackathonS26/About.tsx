const About = () => {
  return (
    <section
      className="relative w-full overflow-hidden border-4 border-red-500"
      style={{
        backgroundColor: "#6fa7cf",
        minHeight: "100vh",
      }}
    >
      {/* Background Path Image - Hidden on mobile, visible on tablet and up */}
      <div className="hidden md:block relative w-full pointer-events-none">
        <img
          src="/s26/Untitled_Artwork 54 1.png"
          alt="Snowy Path"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default About;
