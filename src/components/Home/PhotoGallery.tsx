export default function PhotoGallery() {
    const images = [
        "/images/fall24workshop.jpg",
        "/images/officer-meeting.jpg",
        "/images/fall23-officers.JPG",
        "/images/ml-comp.jpg",
        "/images/fall23hack.jpg",
        "/images/tw-collab.jpg",
        "/images/food23.jpg",
        "/images/spring23hack.jpg",
        "/images/meeting-1.jpg",
    ];

    return (
        <div className="min-h-[600px] lg:max-w-[1600px] mb-5 overflow-x-clip place-self-center">
            <h1 className="text-navy text-[42px] sm:text-5xl lg:text-6xl font-bold text-center mt-10 mb-4">
                PHOTO GALLERY
            </h1>
            <div className="grid grid-rows sm:grid-cols-2 xl:grid-cols-3 justify-items-center mx-10 xl:mx-20 px-2 py-2 md:px-10 md:py-20 lg:px-20 lg:py-30 transition-all gap-4 lg:gap-12">
                {images.map((src, index) => (
                    <img 
                        key={index}
                        src={src}
                        className="lg:w-[500px] rounded-3xl"
                        alt={`Gallery image ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}