import React from 'react'
import { MainContainer } from '../components/common/MainContainer'
import { PageTitle } from '../components/common/PageTitle'
import { Table } from '../components/Table/Table'

export const Home = () => {   
    return (
        <>
            <PageTitle title='Tabla Periódica' />
            <MainContainer>
                <Table />
            </MainContainer>
        </>
    )
}
