import React from 'react'
import { NotFound } from '../views/NotFound'
import { PageTitle } from '../components/common/PageTitle'
import { MainContainer } from '../components/common/MainContainer'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { SINGLE_ELEMENT } from '../utils/const'
import { Loader } from '../components/common/Loader'
import { BtnHome } from '../components/common/BtnHome'
import { ElementCard } from '../components/Element/ElementCard'

export const SingleElement = () => {
    const params = useParams()

    const { data, loading, error } = useFetch(`${SINGLE_ELEMENT}${params.elementId}`)
    const elemento = data[0]

    if (loading) { return <Loader /> }    

    if (error) { return <NotFound /> }    

    return (
        <div>
            {elemento && 
                <>
                    <PageTitle title={elemento.name} />
                    <MainContainer>
                        <ElementCard {...elemento} />
                    </MainContainer>
                    <BtnHome />
                </>
            }
        </div>
    )
}
