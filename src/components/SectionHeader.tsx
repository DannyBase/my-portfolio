 export const SectionHeader = (
    {
        title,
        eyebrow,
        description,
    }: 
    {
    title: string;
    eyebrow: string;
    description: string;
}) =>{
    return (
        <>
        <div className="flex justify-center">
      <p className="uppercase font-semibold tracking-wildest bg-gradient-to-r from-teal-300 to-green-400 text-transparent bg-clip-text">{eyebrow}</p>

      </div>
      <h2 className="font-poppins text-3xl md:text-5xl text-center mt-6">{title}</h2>
      <p className="text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto">{description}</p>
      </>
    
    )
}