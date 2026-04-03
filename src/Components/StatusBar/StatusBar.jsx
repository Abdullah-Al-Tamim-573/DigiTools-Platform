const StatusBar = () => {
  return (
    <>
      <section className="p-6 w-full md:max-w-[80%] mx-auto">
        <div className="container mx-auto grid justify-center grid-cols-3 gap-3 text-center lg:grid-cols-3">
          <div className="flex flex-col gap-1 border-r-2 pr-2 border-white  justify-start m-2 lg:m-6">
            <p className="text-xl font-bold leading-none md:text-4xl lg:text-6xl !text-white">50K+</p>
            <p className="text-[12px] sm:text-base font-medium !text-white">Active Users</p>
          </div>
          <div className="flex flex-col gap-1 justify-start border-r-2 pr-2 border-white m-2 lg:m-6">
            <p className="text-xl font-bold leading-none md:text-4xl lg:text-6xl !text-white">200+</p>
            <p className="text-[12px] sm:text-base font-medium !text-white">Premium Tools</p>
          </div>
          <div className="flex flex-col gap-1 justify-start m-2 lg:m-6">
            <p className="text-xl font-bold leading-none md:text-4xl lg:text-6xl !text-white">4.9</p>
            <p className="text-[12px] sm:text-base font-medium !text-white">Rating</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default StatusBar;
