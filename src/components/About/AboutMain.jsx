import banner from "/assets/img/banner/about_banner.png";

const AboutMain = () => {
  return (
    <div>
      <img
        src={banner}
        alt=""
        className="w-full h-[40vh] md:h-[80vh] mt-8 md:mt-16"
      />
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 p-4 py-10 md:py-20 ">
        <div>
          <h2 className="text-gray-800 text-2xl md:w-1/2 font-medium mb-4">We Serve Fresh and Delicious Food</h2>
          <p className="text-gray-600">
            {" "}
            Suscipit libero pretium nullam potenti. Interdum, blandit phasellus
            consectetuer dolor ornare dapibus enim ut tincidunt rhoncus tellus
            sollicitudin pede nam maecenas, dolor sem. Neque sollicitudin enim.
            Dapibus lorem feugiat facilisi faucibus et. Rhoncus.
          </p>
        </div>
        <div>
          <h2 className="text-gray-800 text-2xl md:w-1/2 font-medium mb-4">We Serve Fresh and Delicious Food</h2>
          <p className="text-gray-600">
            {" "}
            Suscipit libero pretium nullam potenti. Interdum, blandit phasellus
            consectetuer dolor ornare dapibus enim ut tincidunt rhoncus tellus
            sollicitudin pede nam maecenas, dolor sem. Neque sollicitudin enim.
            Dapibus lorem feugiat facilisi faucibus et. Rhoncus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMain;
