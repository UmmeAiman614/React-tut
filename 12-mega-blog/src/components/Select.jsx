import React, { useId } from 'react'

function Select(
    {
        label,
        className,
        options = [],
        ...props
    }, ref) {
    const id = useId();

    return (
        <div className='w-full'>
            {label &&
                <label htmlFor={id} className='inline-block mb-2 text-sm font'></label>}
            <select
                {...props}
                ref={ref}
                id={id}
                className={`bg-white text-black w-full px-3 py-2 border border-grey-200 rounded-lg outline-none focus:bg-gray-100 duration-200  ${className}`}
            >
                {
                    options?.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

export default React.forwardRef(Select)