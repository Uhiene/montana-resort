import {motion} from 'framer-motion'
const OffersCard = ({imageSrc, title, listItems, buttonText, onButtonClick}) => {
  return (
    <div className='w-full md:w-80'>
        <div className='overflow-hidden'>
            <motion.div whileHover={{scale: 1.05}}>
                <img src={imageSrc} alt={title} className='w-full h-54 object-cover' />
            </motion.div>
            <div className='space-y-5'>
                <h3 className='text-xl text-gray-800 mt-6'>{title}</h3>
                <ul className='list-disc list-inside text-gray-600'>
                    {listItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <button onClick={onButtonClick} className='bg-white border border-sky-500 text-sky-500 w-full px-4 py-2 hover:text-white hover:bg-sky-500 hover:transition duration-200 text-sm'>{buttonText}</button>
            </div>
        </div>
    </div>
  )
}

export default OffersCard