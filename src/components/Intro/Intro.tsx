import SelfIntro from "./SelfIntro/SelfIntro";

const Intro: React.FC = () => {

  return (
    <div className="bg-blue-100 py-24 dark:bg-slate-900">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <SelfIntro/>
        <article className='hidden md:block'>
          <img
            src="/images/coding.png"
            alt="my-img"
            className="h-80 lg:h-96 "
          />
        </article>
      </div>
    </div>
  );

};

export default Intro;
