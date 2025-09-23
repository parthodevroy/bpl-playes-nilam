import logoImg from "../../assets/logo.png"

const Navber = ({availablebalance}) => {
    return (
        <div className="max-w-[1200px] m-auto ">
             <div class="navbar bg-base-100 shadow-sm">
  <div class="flex-1">
   <img className="w-[50px] h-[50px]" src={logoImg} alt="" />
  </div>
  <div class="flex-none">

    <button>${availablebalance}<span className="pl-2">coin</span></button>
    
   </div>
</div>
        </div>
    );
};

export default Navber;