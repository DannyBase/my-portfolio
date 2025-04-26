import StarIcon from '@/assets/icons/star.svg'
import { Fragment } from 'react';

const words = [
  "Usable",
  "Maintainable",
  "Accessible",
  "Responsive",
  "Scalable",
  "Interactive",
  "Optimized",
  "Reusable",
  "Fast",
  "Intuitive",
  "Seamless",
  "Clean",
  "Minimal",
  "Polished",
  "Composable",
  "Dynamic",
  "Mobile-first",
  "Modular",
  "User-Centric"
];

export const TapeSection = () => {
  return <div className='py-16 lg:py-24 overflow-x-clip'>
    <div className='bg-gradient-to-r from-teal-300 to-green-400  -rotate-3 -mx-1'>
      <div className='flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
    <div className='flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]'
    style={{
      transform: 'translateX(-750px)'
    }}>
      {[...new Array(2)].fill(0).map((_, idx) => (
        <Fragment key={idx}>
          {words.map(word => (
            <div key={word} className='inline-flex gap-4 items-center'>
              <span className='text-teal-900 uppercase font-extrabold text-sm'>{word}</span>
              <StarIcon className='size-6 text-teal-900 -rotate-12'/>
             </div>
        ))}
        </Fragment>
      ))}
  </div>
  </div>
  </div>
  </div>
};
