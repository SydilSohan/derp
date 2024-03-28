
import AnimatedTextCharacter from '@/components/global/AnimatedP';
import WavyText from '@/components/global/WavyText';
import { Card } from '@/components/ui/card';
import { DotIcon } from 'lucide-react';
import { Metadata } from 'next'
import Image from 'next/image';
export const metadata: Metadata = {
  title: 'Turn Berry Homepage',
  description: "Turnberry Acai is your go-to for premium superfood bowls and smoothies, perfect for a healthful meal replacement. Packed with vibrant antioxidants and essential nutrients, our acai blends are the ultimate 'Better Berry' choice for a nutritious lifestyle. Savor the difference with every spoonful.",
}
export default function Home({
  params,
}: {
  params: { lang: string; country: string, locale: string };
}) {



  return (
    <main className='flex justify-center prose flex-col gap-20 p-2'>
      <section className='flex flex-col gap-8 lg:mt-20 justify-center items-center border-b-8 py-12 border-b-pink-500'>

     <h1 className='text-center text-pink-500 text-5xl'><AnimatedTextCharacter text='Rian Gosling' /></h1>
     <div className='h-80 w-80 rounded-full flex justify-center' style={{
boxShadow : "inset 0 0 50px #fff,  inset 20px 0 80px #f0f,  inset -20px 0 80px #0ff,  inset 20px 0 300px #f0f,  inset -20px 0 300px #0ff, 0 0 50px #fff,     10px 0 80px #f0f, 10px 0 80px #0ff"
      
     }}>
<Image src='/OIP (4).jpeg' height={600} width={200} alt='' objectFit='cover' className='rounded-full mix-blend-multiply' />
     </div>
      </section>
      
      <section className='flex flex-col items-center gap-8 border-b-8 border-b-teal-500 pb-20'>
        <h2 className='text-center m-0 text-teal-500 text-4xl border-b-4 border-b-teal-400 w-max'> <AnimatedTextCharacter text='About' /></h2>
        
        <div className='flex flex-col-reverse lg:flex-row items-center justify-between gap-4'>
  <Card className='flex-1 p-4 bg-black border-teal-400 shadow-teal-500 shadow-xl'>
    <p className='text-teal-500'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusantium sequi voluptate quasi, consectetur praesentium veritatis eaque quae asperiores esse ut error, earum, eius molestias? Inventore explicabo fugiat sit rerum?
    </p>
  </Card>
  <Image src='/Wojak.png' height={200} width={200} alt='' objectFit='cover' className='rounded-full m-0 flex-1' />
</div>
      
      </section>

      <section className='flex flex-col items-center border-b-8 border-b-pink-500 gap-8'>
        <h2 className='text-center m-0 text-pink-500 border-b-4 text-4xl border-b-pink-500 w-max'> <AnimatedTextCharacter text='Roadmap' /></h2>
      <div className='flex flex-col-reverse flex-1 mb-12 lg:flex-row-reverse items-center justify-between gap-8 self-stretch'>
        <Card className='shadow-pink-500 shadow-xl bg-transparent flex-1'>

           <ul className='text-white gap-0'>
            <li className='flex gap-2 items-center p-0 m-0'><DotIcon className='text-4xl text-pink-500'></DotIcon> <p>Phase-1: DREV</p></li>
            <li className='flex gap-2 items-center p-0 m-0'><DotIcon className='text-4xl text-pink-500'></DotIcon> <p>Phase-1: DREV</p></li>
            <li className='flex gap-2 items-center p-0 m-0'><DotIcon className='text-4xl text-pink-500'></DotIcon> <p>Phase-1: DREV</p></li>
            <li className='flex gap-2 items-center p-0 m-0'><DotIcon className='text-4xl text-pink-500'></DotIcon> <p>Phase-1: DREV</p></li>

           </ul>
        </Card>
      
<Image src='/Wojak.png' height={200} width={200} alt='' objectFit='cover' className='rounded-full  m-0 flex-1' />
      

      </div>
      
      </section>
      <section className='flex flex-col items-center'>
  <h2 className='text-center m-0 text-teal-500 border-b-2 border-b-teal-500 w-max'> <AnimatedTextCharacter text='Meet the Team' /></h2>
  <ul className='grid grid-cols-2 sm:grid-cols-4 justify-center !text-teal-500'>
    <li className='m-2'>
      <figure>
        <img src="OIP (4).jpeg" alt="Member 1" className='h-24 w-24 rounded-full object-cover'/>
        <h3 className='text-center mt-2 text-teal-500 italic'>Member 1 - Role</h3>
      </figure>
      
    </li>
    <li className='m-2'>
      <figure>
        <img src="OIP (4).jpeg" alt="Member 2" className='h-24 w-24 rounded-full object-cover'/>
        <h3 className='text-center mt-2 text-teal-500 italic'>Member 2 - Role</h3>
      </figure>
    </li>
    <li className='m-2'>
      <figure>
        <img src="OIP (4).jpeg" alt="Member 2" className='h-24 w-24 rounded-full object-cover'/>
        <h3 className='text-center mt-2 text-teal-500 italic'>Member 2 - Role</h3>
      </figure>
    </li>
    <li className='m-2'>
      <figure>
        <img src="OIP (4).jpeg" alt="Member 2" className='h-24 w-24 rounded-full object-cover'/>
        <h3 className='text-center mt-2 text-teal-500 italic'>Member 2 - Role</h3>
      </figure>
    </li>
    <li className='m-2'>
      <figure>
        <img src="OIP (4).jpeg" alt="Member 2" className='h-24 w-24 rounded-full object-cover'/>
        <h3 className='text-center mt-2 text-teal-500 italic'>Member 2 - Role</h3>
      </figure>
    </li>
    <li className='m-2'>
      <figure>
        <img src="OIP (4).jpeg" alt="Member 2" className='h-24 w-24 rounded-full object-cover'/>
        <h3 className='text-center mt-2 text-teal-500 italic'>Member 2 - Role</h3>
      </figure>
    </li>
    <li className='m-2'>
      <figure>
        <img src="OIP (4).jpeg" alt="Member 2" className='h-24 w-24 rounded-full object-cover'/>
        <h3 className='text-center mt-2 text-teal-500 italic'>Member 2 - Role</h3>
      </figure>
    </li>
    {/* Add more team members as needed */}
  </ul>
</section>
    </main>
  )
}
