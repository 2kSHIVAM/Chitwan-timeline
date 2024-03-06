export default function Home() {
  return (
    <main className={'grid grid-rows-appHome gap-2 px-10 py-2'}>
      <div className={'grid'}>
        <div className={'grid gap-2 place-content-center text-5xl lg:text-7xl font-bold tracking-tight'}>
          <div className={'grid place-self-center'}>
            <code
              className={'mt-2 w-fit text-xl lg:text-3xl font-normal rounded-lg bg-gray-200 text-gray-800 px-3 py-1 dark:bg-gray-800'}>
              Web Developer
            </code>
          </div>
          <div className={'grid place-self-center'}>I'm Chitwan</div>
          <div
            className={'grid place-self-center w-3/4 text-gray-600 text-center h-fit text-xl tracking-normal lg:text-2xl font-normal'}>
            I turn coffee into code. Passionate about creating beautiful and functional web experiences. Let's build
            something amazing together.
          </div>
        </div>
      </div>
    </main>
  )
}

{/*<div className={'grid w-fit h-fit place-self-center grid-flow-col gap-2'}>*/}
{/*  <input placeholder={'Enter your email'}*/}
{/*         className={'grid border border-gray-300 w-80 outline-none pl-2 rounded-md bg-gray-50 placeholder:text-gray-500'} />*/}
{/*  <button className={'grid px-4 py-2 bg-black font-semibold rounded-md text-white'}>Subscribe</button>*/}
{/*</div>*/}