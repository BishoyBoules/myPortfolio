'use client'

import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function About () {
  const { ref } = useSectionInView('About')

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        After graduating with a bachelor degree in{' '}
        <span className='font-medium'>Engineering Mechatronics</span>, I decided
        to pursue my passion for programming. I enrolled in coding courses and
        learned <span className='font-medium'>front-end web development</span>.{' '}
        <span className='italic'>My favorite part of programming</span> is the
        problem-solving aspect. I <span className='underline'>love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{' '}
        <span className='font-medium'>
          React, JavaScript, TypeScript, Next.js, Tailwind and Bootstrap
        </span>
        . I am also familiar with{' '}
        <span className='font-medium'>React-Native</span>. I am always looking
        to learn new technologies. I am currently looking for a{' '}
        <span className='font-medium'>full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className='italic'>When I'm not coding</span>, I enjoy reading,
        writing some short stories and novels and watching theater plays. I also
        enjoy <span className='font-medium'>learning new things</span>. I am
        looking forward to learning how to
        <span className='font-medium'> play music on Oud</span>.
      </p>
    </motion.section>
  )
}
