import DownloadBtn from "@/components/ui/downloadBtn";
import Photo from "@/components/ui/photo";
import Socials from "@/components/ui/socials";
import Stats from "@/components/ui/stats";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pb-24 xl:pt-8">
          <div className="order-2 text-center xl:order-none xl:text-left">
            <span>Full Stack Web Developer</span>
            <h1 className="header1">
              Hello I'm <br /> <span className="text-accent">Rakesh Magar</span>
            </h1>
            <p className="mb-9 max-w-[500px] text-white/80">
              Aspiring Full Stack Developer with hands-on experience building a
              live LMS frontend using React JS. Proficient in MERN stack
              technologies, honed through both practical industry experience and
              rigorous online training at AlmaBetter.
            </p>
            <div className="flex flex-col items-center gap-8 xl:flex-row">
              <DownloadBtn />
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles=" h-9 border border-accent flex rounded-full justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 w-9"
                />
              </div>
            </div>
          </div>
          <Photo />
        </div>
      </div>
      <Stats />
    </section>
  );
}
