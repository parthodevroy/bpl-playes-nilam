import Selected from "../Selected";


const Selectedp = ({selectedplayers,remuve}) => {
    return (
        <div className="max-w-[1200px] m-auto">
            {
                selectedplayers.map((play)=><Selected remuve={remuve} play={play}></Selected>)
            }
        </div>
    );
};

export default Selectedp;