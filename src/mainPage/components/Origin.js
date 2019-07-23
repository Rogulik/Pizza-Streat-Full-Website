import React from 'react'

const Origin = () => {
  return (
        <div className='origin'>
                 <div className='origin__container org-1'>
                 <i className="fas fa-store-alt origin__image"></i>
                    <div className='origin__header--container'>
                        <h3 className='origin__header--title'>Origin: St.Joseph, Cainta Rizal</h3>
                    </div>
                </div>
                <div className='origin__container org-2'>
                    <i className="fas fa-history origin__image"></i>
                    <div className='origin__header--container'>
                        <h3 className='origin__header--title'>Establish in: April 8th , 2015</h3>
                    </div>
                </div>
                <div className='origin__container org-3'>
                <i className="fas fa-code-branch origin__image">
                </i>
                    <div className='origin__header--container'>
                        <h3 className='origin__header--title'> Branches: 9, all around in Manila</h3>
                    </div>
                </div>
        </div>
    )
   
}

export default Origin
