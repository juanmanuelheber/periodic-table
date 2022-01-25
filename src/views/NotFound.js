import React from 'react'
import { BtnHome } from '../components/common/BtnHome'
import { MainContainer } from '../components/common/MainContainer'
import { PageTitle } from '../components/common/PageTitle'

export const NotFound = () => {
    return (
        <>
            <PageTitle title={'Ups'} />
            <MainContainer>
                <div className='col-12'>
                    <h2 className='text-center'>Something went wrong, please try again</h2>
                </div>
            </MainContainer>
            <BtnHome />
        </>
    )
}
