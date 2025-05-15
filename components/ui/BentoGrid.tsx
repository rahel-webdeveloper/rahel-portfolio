import { cn } from "@/lib/utils";
import { GlobeDemo } from "./GlobeDemo";
import { WavyBackground } from "./WavyBackground";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-4 lg:gap-8 mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  id: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "group/bento relative overflow-hidden shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-white/[0.1] transition duration-200 hover:shadow-xl dark:shadow-none",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6} && 'flex justify-center h-full'`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover, object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={cn(
                imgClassName,
                "object-cover, object-center w-full h-full"
              )}
            />
          )}
        </div>

        {id === 6 && (
          <WavyBackground>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
          </WavyBackground>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans text-sm md:text-xs lg:text-base z-10 font-extralight text-[#c1c2d3] dark:text-neutral-300">
            {description}
          </div>

          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>

          {id === 2 && <GlobeDemo />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 lg:gap-4">
                {["React.js", "Next.js", "Typescript"].map((item, i) => (
                  <span
                    key={i}
                    className="py-2 lg:py-3 px-3 lg:px-5 text-xs opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
              </div>

              <div className="flex flex-col gap-3 lg:gap-4">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                {["Express", "Node.js", "MongoDB"].map((item, i) => (
                  <span
                    key={i}
                    className="py-2 lg:py-3 px-3 lg:px-5 text-xs opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
