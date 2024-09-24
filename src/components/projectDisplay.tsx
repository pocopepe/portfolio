import '../index.css'; 

function ProjectDisplay() {
    return (
        <>
            <a href='https://thinkupideathon.tech/' target='_blank'> <div className="font-mono font-black text-5xl text-amber-700">Latest Project</div></a>
            <br />
            <div className="rounded-3xl h-full">
                <iframe
                    src="https://thinkupideathon.tech/"
                    className="w-full h-full border-0 rounded-lg"
                    style={{ overflow: 'auto' }} 
                ></iframe>
            </div>
        </>
    );
}

export default ProjectDisplay;
