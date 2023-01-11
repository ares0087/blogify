import Nav from "./Nav";

function Header(props:HeaderComponent) {

  return (
    <header className="w-full flex flex-col py-5 bg-[rgba(35,46,82,1)]">

      <Nav />

      <div className="container flex flex-col mx-auto my-32 p-10">
        
        <p className="text-sm sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base font-semibold text-white uppercase inline mt-8">
          {props.tag?.replace("-"," ")}
        </p>

        <p className="font-bold text-left text-white inline mt-4 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[52px] xl:text-[52px] 2xl:text-[52px]">
          Insights about my personal and work life, and the in-betweens
        </p>

      </div>
    </header>
  );
}

Header.defaultProps = {
  tag:"👋 Hello"
};

interface HeaderComponent {
  tag?: string;
}

export default Header;
