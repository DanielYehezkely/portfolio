
import { FaGithubSquare } from 'react-icons/fa';


const Intro: React.FC = () => {

  return (
    <div className="bg-emerald-100 py-24">
      <div className="mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">I'm Daniel</h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Frontend Developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            A pationate developer trying to make a portfolio ...
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="d">
              <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300'/>
            </a>
            <a href="d">
              <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300'/>
            </a>
            <a href="d">
              <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300'/>
            </a>
          </div>
        </article>
      </div>
    </div>
  );

};

export default Intro;
