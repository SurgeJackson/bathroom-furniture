import CollectionFigure from './CollectionFigure'
import data from './../../data/collections.json'

const CollectionFigures = data.map((obj) => {
  return (
     <CollectionFigure
       key={obj.name}
       caption={obj.name}
       description={obj.shortDescription}
       filename={obj.image}
       link={obj.link}
     />
  )
})

const Collections = () => {
  return (
    <section className="md:px-20 bg-[#3a3a3e]">
      <h2 className="text-2xl text-[#c8a16e] uppercase px-2 pt-5 text-center md:text-4xl md:p-10 font-extralight">Обзор коллекций мебели для ванной комнаты</h2>
      <div className="grid md:grid-cols-2">
        {CollectionFigures}
      </div>
    </section>
  )
}

export default Collections