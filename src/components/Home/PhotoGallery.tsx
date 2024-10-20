export default function PhotoGallery() {
    return (
        <div className="w-full min-h-[600px] mb-5 overflow-x-clip">
            <h1 className="text-navy text-4xl lg:text-6xl font-bold text-center text-nowrap mt-10 mb-4">
                    PHOTO GALLERY
            </h1>
            <div className="grid grid-rows lg:grid-cols-3 mx-10 lg:mx-32 px-2 py-2 md:px-10 md:py-20 lg:px-20 lg:py-30 transition-all gap-4 lg:gap-12">
                <img 
                    src="/images/fall24workshop.jpg"
                    className="lg:w-[400px] rounded-3xl"
                />
                <img 
                    src="/images/officer-meeting.jpg"
                    className="lg:w-[400px] rounded-3xl"
                />
                <img 
                    src="/images/fall23-officers.JPG"
                    className="lg:w-[400px] rounded-3xl"
                />
                <img 
                    src="/images/ml-comp.jpg"
                    className="lg:w-[400px] rounded-3xl"
                />
                <img 
                    src="/images/fall23hack.jpg"
                    className="lg:w-[400px] rounded-3xl"
                />
                <img 
                    src="/images/tw-collab.jpg"
                    className="lg:w-[400px] rounded-3xl"
                />
                <img 
                    src="/images/food23.jpg"
                    className="lg:w-[400px] rounded-3xl"
                />
                <img 
                    src="/images/spring23hack.jpg"
                    className="lg:w-[400px] rounded-3xl"
                />
                <img 
                    src="/images/meeting-1.jpg"
                    className="lg:w-[400px] rounded-3xl"
                />
            </div>
        </div>
    )
};