import imgg from "../../assets/banner-main.png"

const Selected = ({play,remuve}) => {

    const handelremuve=()=>{
        remuve(play)

    }
    return (
        <div className="flex justify-between p-3 max-w-[1200px] m-auto border-2 border-gray-200">
            <div className="flex">
                <img className="w-[50px] h-[50px]" src={play.img} alt="" />
            <div className="pl-2">
                <h1>{play.name}</h1>
                <h3>{play.battingStyle}</h3>
            </div>
            </div>
            <button onClick={handelremuve} className="pr-4 text-center btn">X</button>
        </div>
    );
};

export default Selected;