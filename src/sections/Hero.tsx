import { Button } from "@/components/Button";
import starsBg from "../assets/stars.png";

export const Hero = () => {
  return (
    <section
      className="h-[492px] md:h-[680px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{
        backgroundImage: `url(${starsBg.src})`,
      }}
    >
      {/* background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(93,93,93,.5)_15%,rgb(28,28,28,.5)_78%,transparent)]"></div>

      {/* planet */}
      <div
        className="absolute h-64 w-64 md:h-96  md:w-96  bg-[#3d3d3d]  rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
      bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(136,136,136)_37.7%,rgb(28,28,28))] 
      shadow-[-20px_-20px_50px_rgb(176,176,176,.5),-20px_-20px_80px_rgb(176,176,176,.1),0_0_50px_rgb(93,93,93)]
      "
      ></div>

      {/* First ring */}
      <div className="absolute h-[344px] w-[344px] md:h-[550px] md:w-[550px] border border-white opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <div className="absolute h-2 w-2 top-1/2 left-0 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 "></div>
        <div className="absolute h-2 w-2 top-0 left-1/2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 "></div>
        <div className="absolute h-5 w-5 top-1/2 left-full border border-white rounded-full -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
          <div className="h-2 w-2 bg-white rounded-full"></div>
        </div>
      </div>

      {/* second ring */}
      <div className="absolute h-[444px] w-[444px] md:h-[750px] md:w-[750px] border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed rounded-full"></div>

      {/* third ring */}
      <div className="absolute h-[544px] w-[544px]  md:h-[950px] md:w-[950px] rounded-full border opacity-20  border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute h-2 w-2 top-1/2 left-0 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 "></div>
        <div className="absolute h-2 w-2 top-1/2 left-full bg-white rounded-full -translate-x-1/2 -translate-y-1/2 "></div>
      </div>
      <div className="container relative mt-16">
        <h1 className="text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter bg-white  bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(61,61,61,.5))] text-transparent bg-clip-text text-center">
          AI SEO
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto text-white/70 mt-5 text-center">
          Elevate your site’s visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>
        <div className="flex justify-center mt-5 md:mt-8">
          <Button size="md" text="Start for free" />
        </div>
      </div>
    </section>
  );
};
