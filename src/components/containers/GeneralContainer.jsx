import React from 'react'

const GeneralContainer = ({
                       title,
                       children,
                       className,
                       containerWidth = "w-7/12",
                       containerHeight = "h-96"
                   }) => {
    return (
        <div className={`${containerWidth} ${containerHeight} bg-gray-200 rounded-md shadow-md flex flex-col ${className}`}>
            {title && (
                <div className="border-b border-gray-300">
                    <h2 className="text-lg font-bold text-center py-4">{title}</h2>
                </div>
            )}
            <div className="flex-1 p-4 overflow-auto">
                {children}
            </div>
        </div>
    )
}

export default GeneralContainer