
'use client'

import { Template, ImageCard } from '@/components'
import { useState } from 'react'

export default function GaleriaPage(){

    const image1 = 'https://cdn6.campograndenews.com.br/uploads/noticias/2023/05/08/6458dbeeb7683.jpg';
    const image2 = 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/322625648.jpg?k=c880dc259724628f33c2272282051f27f0fb175b79a5dd6f0f015727dcd32d8b&o=&hp=1';
    const nome1 = 'Paraiso'
    const nome2 = 'Natureza'


    const [codigoImage, setCodigoImage] = useState<number>(2);
    const [urlImagem, setUrlImagem] = useState<string>(image2);
    const [nomeImage, setNomeImage] = useState<string>(nome2)

    
    function mudarImage(){
        if(codigoImage == 1){
            setCodigoImage(2)
            setUrlImagem(image2)
            setNomeImage(nome2)

        }else{
            setCodigoImage(1)
            setUrlImagem(image1)
            setNomeImage(nome1)
        }

    }

    return (
        <Template>
            <button className='bg-gray-500' onClick={mudarImage}>Clique para mudar</button>
            <section className='grid grid-cols-4 gap-8' >
                <ImageCard nome={nomeImage} tamanho="10mb" dataUpload='01/01/2024' src={ urlImagem }/>
                <ImageCard nome={nomeImage} tamanho="10mb" dataUpload='01/01/2024' src={ urlImagem }/>
                <ImageCard nome={nomeImage} tamanho="10mb" dataUpload='01/01/2024' src={ urlImagem }/>
            </section>
        </Template>
    )
}