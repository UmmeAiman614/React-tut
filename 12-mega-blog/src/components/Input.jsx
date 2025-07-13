import React, {useId} from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = 'text',
    className = '',
    ...props
}, ref) 
{
    const id = useId();
    return (
        <div className='w-full'>
            {
                label && (
                    <label htmlFor={id} className='inline-block mb-2 text-sm font-medium text-gray-700'>
                        {label}
                    </label>
                )
            }
            <input
             type = {type}
             className={`bg-white text-black w-full px-3 py-2 border border-grey-200 rounded-lg outline-none focus:bg-gray-100 focus:ring-2 focus:ring-blue-500 ${className}`}
             ref={ref}
             {...props}
                id={id}
              />
        </div>
    )
})

export default Input