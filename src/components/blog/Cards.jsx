import { Link } from "react-router-dom";

const cardStyles = `preserve-3d relative h-full w-full duration-500`;

const frontStyles = {
  card: `backface-hidden absolute h-full w-full space-y-4     bg-gray-50 px-6 py-12 shadow-xl`,
  date: `inline-block rounded-2xl border border-gray-300 px-2 py-1 text-xs font-medium text-gray-500`,
};

const backStyles = {
  card: `backface-hidden absolute h-full w-full space-y-4 overflow-hidden bg-cover px-6 py-12 shadow-xl`,
  date: `inline-block rounded-2xl border border-white px-2 py-1 text-xs font-medium text-white`,
};

const linkStyles = `inline-block bg-red px-4 py-2 text-xs font-bold uppercase text-white`;

function Cards() {
  return (
    <div className="grid gap-10 xl:grid-cols-2 3xl:grid-cols-3">
      {/* 01 */}
      <div className="perspective group h-72">
        <div className={`${cardStyles} group-hover:rotate-y-180`}>
          {/* Front */}
          <div className={frontStyles.card}>
            <p className={frontStyles.date}>22.03.22</p>
            <h4 className="font-bold">Yoga For Everyone in 2022</h4>
            <p className="text-sm font-medium text-gray-300">
              Authoritatively disseminate multimedia based total linkage through
              market-driven methodolContinually transform
            </p>
            <Link to="/" className={linkStyles}>
              Read more &rarr;
            </Link>
          </div>
          {/* Back */}
          <div
            className={`${backStyles.card} rotate-y-180 bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('./images/blog/img1.webp')]`}
          >
            <p className={backStyles.date}>22.03.22</p>
            <h4 className="font-bold text-white">Yoga For Everyone in 2022</h4>
            <p className="text-sm font-medium text-white">
              Authoritatively disseminate multimedia based total linkage through
              market-driven methodolContinually transform
            </p>
            <Link to="/" className={linkStyles}>
              Read more &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* 02 */}
      <div className="perspective group h-72">
        <div className={`${cardStyles} group-hover:rotate-x-180`}>
          {/* Front */}
          <div className={frontStyles.card}>
            <p className={frontStyles.date}>22.03.22</p>
            <h4 className="font-bold">Back Into CrossFit After Vacation</h4>
            <p className="text-sm font-medium text-gray-300">
              Authoritatively disseminate multimedia based total linkage through
              market-driven methodolContinually transform
            </p>
            <Link to="/" className={linkStyles}>
              Read more &rarr;
            </Link>
          </div>
          {/* Back */}
          <div
            className={`${backStyles.card} rotate-x-180 bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('./images/blog/img2.webp')]`}
          >
            <p className={backStyles.date}>22.03.22</p>
            <h4 className="font-bold text-white">
              Back Into CrossFit After Vacation
            </h4>
            <p className="text-sm font-medium text-white">
              Authoritatively disseminate multimedia based total linkage through
              market-driven methodolContinually transform
            </p>
            <Link to="/" className={linkStyles}>
              Read more &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* 03 */}
      <div className="perspective group h-72 xl:col-span-2 xl:w-1/2 xl:justify-self-center 3xl:col-span-1 3xl:w-full">
        <div className={`${cardStyles} group-hover:rotate-y-180`}>
          {/* Front */}
          <div className={frontStyles.card}>
            <p className={frontStyles.date}>22.03.22</p>
            <h4 className="font-bold">Meet Fitness Ambassador Grace</h4>
            <p className="text-sm font-medium text-gray-300">
              Authoritatively disseminate multimedia based total linkage through
              market-driven methodolContinually transform
            </p>
            <Link to="/" className={linkStyles}>
              Read more &rarr;
            </Link>
          </div>
          {/* Back */}
          <div
            className={`${backStyles.card} rotate-y-180 bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('./images/blog/img3.webp')]`}
          >
            <p className={backStyles.date}>22.03.22</p>
            <h4 className="font-bold text-white">
              Meet Fitness Ambassador Grace
            </h4>
            <p className="text-sm font-medium text-white">
              Authoritatively disseminate multimedia based total linkage through
              market-driven methodolContinually transform
            </p>
            <Link to="/" className={linkStyles}>
              Read more &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
