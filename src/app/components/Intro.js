const Intro = props => {
  return (
    <section className="bg-[#3a3a3e]">
      <div className="text-xl md:text-2xl text-[#c8a16e] uppercase p-5 text-center font-extralight tracking-widest">Композция мебели для ванной комнаты {props.title}</div>
      <div className="text-lg md:text-xl px-10 text-left font-extralight md:max-w-[75%] w-[90%] leading-relaxed md:leading-relaxed space-y-5 pb-10">
        {props.description}
      </div>
    </section>
  )
}

export default Intro